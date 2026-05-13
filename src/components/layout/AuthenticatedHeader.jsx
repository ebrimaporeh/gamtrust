import { Link, useLocation } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { 
  Bell, 
  Search, 
  User, 
  Settings, 
  LogOut, 
  ChevronDown,
  Sun,
  Moon,
  Menu,
  X
} from 'lucide-react'
import { useAuthStore } from '@/stores/authStore'
import { useThemeStore } from '@/stores/themeStore'
import { useUIStore } from '@/stores/uiStore'

export const AuthenticatedHeader = () => {
  const [showNotifications, setShowNotifications] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
  const location = useLocation()
  const { user, logout } = useAuthStore()
  const { theme, toggleTheme } = useThemeStore()
  const { sidebarOpen, toggleSidebar } = useUIStore()

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

  // Get page title based on current route
  const getPageTitle = () => {
    const path = location.pathname
    if (path === '/dashboard') return 'Dashboard'
    if (path === '/projects') return 'My Projects'
    if (path.startsWith('/projects/')) return 'Project Details'
    if (path === '/reports') return 'Reports'
    if (path.startsWith('/reports/')) return 'Report Details'
    if (path === '/visits') return 'Site Visits'
    if (path === '/messages') return 'Messages'
    if (path === '/settings') return 'Settings'
    if (path === '/profile') return 'My Profile'
    return 'Dashboard'
  }

  const notifications = [
    { id: 1, title: 'New project update', time: '5 min ago', read: false, type: 'project' },
    { id: 2, title: 'Site visit scheduled', time: '1 hour ago', read: false, type: 'visit' },
    { id: 3, title: 'Report ready for review', time: '3 hours ago', read: true, type: 'report' },
    { id: 4, title: 'Verification completed', time: '1 day ago', read: true, type: 'verification' },
  ]

  const unreadCount = notifications.filter(n => !n.read).length

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Search:', searchQuery)
    // Implement search functionality
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-md' 
          : 'bg-background'
      } border-b border-light`}
    >
      <div className="px-4 lg:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Left Section - Mobile Menu Toggle + Page Title */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-2 rounded-lg hover:bg-background-tertiary transition-colors"
              aria-label="Toggle sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Page Title */}
            <h1 className="text-lg font-semibold text-foreground">
              {getPageTitle()}
            </h1>
          </div>

          {/* Center - Desktop Search Bar */}
          <form onSubmit={handleSearch} className="hidden lg:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground-muted" />
              <input
                type="text"
                placeholder="Search projects, reports..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-96 rounded-lg border border-light bg-background focus:outline-none focus:border-accent transition-colors"
              />
            </div>
          </form>

          {/* Right Section - Actions */}
          <div className="flex items-center space-x-2">
            {/* Mobile Search Toggle */}
            <button
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-background-tertiary transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-background-tertiary transition-colors"
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
                className="p-2 rounded-lg hover:bg-background-tertiary transition-colors relative"
              >
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-danger rounded-full"></span>
                )}
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-background border border-light rounded-lg shadow-lg z-50">
                  <div className="p-3 border-b border-light">
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
                  <div className="p-3 border-t border-light text-center">
                    <Link to="/notifications" className="text-sm text-accent hover:underline">
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
                className="flex items-center space-x-2 p-1 rounded-lg hover:bg-background-tertiary transition-colors"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-gold to-gold-light rounded-full flex items-center justify-center">
                  <span className="text-navy-deep font-semibold text-sm">
                    {user?.profile?.full_name?.charAt(0) || user?.username?.charAt(0) || 'U'}
                  </span>
                </div>
                <div className="hidden lg:block text-left">
                  <p className="text-sm font-medium text-foreground">
                    {user?.profile?.full_name || user?.username || 'User'}
                  </p>
                  <p className="text-xs text-foreground-muted capitalize">{user?.role || 'investor'}</p>
                </div>
                <ChevronDown className="w-4 h-4 text-foreground-muted hidden lg:block" />
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-background border border-light rounded-lg shadow-lg z-50">
                  <div className="p-3 border-b border-light">
                    <p className="text-sm font-medium text-foreground">
                      {user?.profile?.full_name || user?.username || 'User'}
                    </p>
                    <p className="text-xs text-foreground-muted">{user?.email}</p>
                  </div>
                  <div className="py-1">
                    <Link
                      to="/profile"
                      className="flex items-center px-4 py-2 text-sm text-foreground-secondary hover:bg-background-tertiary hover:text-accent transition-colors"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <User className="w-4 h-4 mr-3" />
                      Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="flex items-center px-4 py-2 text-sm text-foreground-secondary hover:bg-background-tertiary hover:text-accent transition-colors"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <Settings className="w-4 h-4 mr-3" />
                      Settings
                    </Link>
                    <hr className="my-1 border-light" />
                    <button
                      onClick={() => {
                        logout()
                        setShowUserMenu(false)
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
          <div className="lg:hidden py-3 border-t border-light animate-slide-down">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground-muted" />
                <input
                  type="text"
                  placeholder="Search projects, reports..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-light bg-background focus:outline-none focus:border-accent transition-colors"
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

export default AuthenticatedHeader