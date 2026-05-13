import { Link, useLocation } from '@tanstack/react-router'
import { 
  LayoutDashboard, 
  FolderKanban, 
  FileText, 
  CalendarCheck, 
  MessageSquare, 
  Settings, 
  User,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Home
} from 'lucide-react'
import { useState, useEffect } from 'react'
import { useAuthStore } from '@/stores/authStore'
import { useUIStore } from '@/stores/uiStore'

export const AuthenticatedSidebar = () => {
  const [collapsed, setCollapsed] = useState(false)
  const location = useLocation()
  const { logout } = useAuthStore()
  const { sidebarOpen, toggleSidebar } = useUIStore()

  // Handle window resize for responsive sidebar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCollapsed(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const menuItems = [
    { 
      path: '/dashboard', 
      icon: LayoutDashboard, 
      label: 'Dashboard',
      exact: true
    },
    { 
      path: '/projects', 
      icon: FolderKanban, 
      label: 'Projects',
      exact: false
    },
    { 
      path: '/reports', 
      icon: FileText, 
      label: 'Reports',
      exact: false
    },
    { 
      path: '/visits', 
      icon: CalendarCheck, 
      label: 'Site Visits',
      exact: false
    },
    { 
      path: '/messages', 
      icon: MessageSquare, 
      label: 'Messages',
      exact: false
    },
    { 
      path: '/profile', 
      icon: User, 
      label: 'Profile',
      exact: false
    },
    { 
      path: '/settings', 
      icon: Settings, 
      label: 'Settings',
      exact: false
    },
  ]

  const isActive = (path, exact = false) => {
    if (exact) {
      return location.pathname === path
    }
    return location.pathname.startsWith(path)
  }

  const sidebarClasses = `
    fixed left-0 top-16 h-[calc(100vh-4rem)] bg-background-secondary border-r border-light 
    transition-all duration-300 z-30
    ${collapsed ? 'w-20' : 'w-64'}
    ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
  `

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={sidebarClasses}>
        {/* Sidebar Header with Collapse Button */}
        <div className={`h-14 flex items-center ${collapsed ? 'justify-center' : 'justify-end px-4'} border-b border-light`}>
          {!collapsed && (
            <span className="text-xs text-foreground-muted">Main Menu</span>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden lg:flex p-1.5 rounded-lg hover:bg-background-tertiary transition-colors"
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 py-4 overflow-y-auto">
          <ul className="space-y-1 px-3">
            {menuItems.map((item) => {
              const Icon = item.icon
              const active = isActive(item.path, item.exact)
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center px-3 py-2.5 rounded-lg transition-colors group ${
                      active
                        ? 'bg-accent/10 text-accent'
                        : 'text-foreground-secondary hover:bg-background-tertiary hover:text-accent'
                    } ${collapsed ? 'justify-center' : 'space-x-3'}`}
                    title={collapsed ? item.label : ''}
                  >
                    <Icon className={`w-5 h-5 ${active ? 'text-accent' : ''}`} />
                    {!collapsed && <span className="text-sm">{item.label}</span>}
                    {collapsed && (
                      <div className="fixed left-20 ml-2 px-2 py-1 bg-background-inverse text-foreground-inverse text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">
                        {item.label}
                      </div>
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Footer Area - Logout */}
        <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-light">
          <button
            onClick={logout}
            className={`flex items-center w-full px-3 py-2.5 rounded-lg transition-colors text-danger hover:bg-danger/10 ${
              collapsed ? 'justify-center' : 'space-x-3'
            }`}
            title={collapsed ? 'Logout' : ''}
          >
            <LogOut className="w-5 h-5" />
            {!collapsed && <span className="text-sm">Logout</span>}
            {collapsed && (
              <div className="fixed left-20 ml-2 px-2 py-1 bg-background-inverse text-foreground-inverse text-xs rounded opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">
                Logout
              </div>
            )}
          </button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  )
}

export default AuthenticatedSidebar