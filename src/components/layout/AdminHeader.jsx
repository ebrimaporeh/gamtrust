import { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { 
  Bell, 
  Search, 
  User, 
  Settings, 
  LogOut, 
  ChevronDown,
  Sun,
  Moon
} from 'lucide-react'
import { useAuthStore } from '@/stores/authStore'
import { useThemeStore } from '@/stores/themeStore'

export const AdminHeader = () => {
  const [showNotifications, setShowNotifications] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
  const { user } = useAuthStore()
  const { theme, toggleTheme } = useThemeStore()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menus on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (showNotifications && !e.target.closest('.notifications-dropdown')) {
        setShowNotifications(false)
      }
      if (showUserMenu && !e.target.closest('.user-menu')) {
        setShowUserMenu(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [showNotifications, showUserMenu])

  const notifications = [
    { id: 1, title: 'New user registered', time: '5 min ago', read: false, type: 'user' },
    { id: 2, title: 'Project verification completed', time: '1 hour ago', read: false, type: 'project' },
    { id: 3, title: 'Report generated', time: '3 hours ago', read: true, type: 'report' },
    { id: 4, title: 'New verification request', time: '1 day ago', read: true, type: 'verification' },
  ]

  const unreadCount = notifications.filter(n => !n.read).length

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Search:', searchQuery)
  }

  return (
    <header
      className={`sticky top-0 z-30 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-md' 
          : 'bg-background'
      } border-b border-border`}
    >
      <div className="px-4 lg:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            {/* Mobile Search Toggle */}
            <button
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-background-tertiary transition-colors"
            >
              <Search className="w-5 h-5 text-foreground-muted" />
            </button>

            {/* Desktop Search Bar */}
            <form onSubmit={handleSearch} className="hidden lg:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground-muted" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-80 rounded-md border border-border bg-background text-foreground focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </form>
          </div>

          {/* Center - Page Title */}
          <div className="hidden lg:block">
            <h1 className="text-lg font-semibold text-foreground">Admin Dashboard</h1>
          </div>

          {/* Right Section - Actions */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-background-tertiary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-accent" />
              ) : (
                <Moon className="w-5 h-5 text-foreground-muted" />
              )}
            </button>

            {/* Notifications */}
            <div className="relative notifications-dropdown">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 rounded-md hover:bg-background-tertiary transition-colors relative"
              >
                <Bell className="w-5 h-5 text-foreground-secondary" />
                {unreadCount > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-danger rounded-full"></span>
                )}
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-background border border-border rounded-lg shadow-lg z-50">
                  <div className="p-3 border-b border-border">
                    <h3 className="font-semibold text-foreground">Notifications</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-3 hover:bg-background-tertiary transition-colors cursor-pointer ${
                          !notification.read ? 'bg-accent/5' : ''
                        }`}
                      >
                        <p className="text-sm text-foreground">{notification.title}</p>
                        <p className="text-xs text-foreground-muted mt-1">{notification.time}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 border-t border-border text-center">
                    <Link to="/admin/notifications" className="text-sm text-accent hover:underline">
                      View all notifications
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* User Menu */}
            <div className="relative user-menu">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-2 p-1 rounded-md hover:bg-background-tertiary transition-colors"
              >
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-background-inverse font-semibold text-sm">
                    {user?.profile?.full_name?.charAt(0) || user?.username?.charAt(0) || 'A'}
                  </span>
                </div>
                <div className="hidden lg:block text-left">
                  <p className="text-sm font-medium text-foreground">
                    {user?.profile?.full_name || user?.username || 'Admin'}
                  </p>
                  <p className="text-xs text-foreground-muted capitalize">{user?.role || 'admin'}</p>
                </div>
                <ChevronDown className="w-4 h-4 text-foreground-muted hidden lg:block" />
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-lg z-50">
                  <div className="p-3 border-b border-border">
                    <p className="text-sm font-medium text-foreground">
                      {user?.profile?.full_name || user?.username || 'Admin User'}
                    </p>
                    <p className="text-xs text-foreground-muted">{user?.email}</p>
                  </div>
                  <div className="py-1">
                    <Link
                      to="/admin/profile"
                      className="flex items-center px-4 py-2 text-sm text-foreground-secondary hover:bg-background-tertiary hover:text-accent transition-colors"
                    >
                      <User className="w-4 h-4 mr-3" />
                      Profile
                    </Link>
                    <Link
                      to="/admin/settings"
                      className="flex items-center px-4 py-2 text-sm text-foreground-secondary hover:bg-background-tertiary hover:text-accent transition-colors"
                    >
                      <Settings className="w-4 h-4 mr-3" />
                      Settings
                    </Link>
                    <hr className="my-1 border-border" />
                    <button
                      onClick={() => {
                        const { logout } = useAuthStore.getState()
                        logout()
                      }}
                      className="flex items-center w-full px-4 py-2 text-sm text-danger hover:bg-danger/10 transition-colors"
                    >
                      <LogOut className="w-4 h-4 mr-3" />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {mobileSearchOpen && (
          <div className="lg:hidden py-3 border-t border-border animate-slide-down">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground-muted" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:border-accent transition-colors"
                  autoFocus
                />
              </div>
            </form>
          </div>
        )}
      </div>
    </header>
  )
}

export default AdminHeader