import { Link, useLocation } from '@tanstack/react-router'
import { 
  LayoutDashboard, 
  Users, 
  FolderKanban, 
  FileText, 
  ShieldCheck, 
  Settings, 
  ChevronLeft,
  ChevronRight,
  LogOut,
  Menu
} from 'lucide-react'
import { useState } from 'react'
import { useAuthStore } from '@/stores/authStore'

export const AdminSidebar = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const { logout } = useAuthStore()

  const menuItems = [
    { 
      path: '/admin', 
      icon: LayoutDashboard, 
      label: 'Dashboard',
      exact: true
    },
    { 
      path: '/admin/users', 
      icon: Users, 
      label: 'Users',
      exact: false
    },
    { 
      path: '/admin/projects', 
      icon: FolderKanban, 
      label: 'Projects',
      exact: false
    },
    { 
      path: '/admin/reports', 
      icon: FileText, 
      label: 'Reports',
      exact: false
    },
    { 
      path: '/admin/verifications', 
      icon: ShieldCheck, 
      label: 'Verifications',
      exact: false
    },
    { 
      path: '/admin/settings', 
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

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-background p-2 rounded-lg shadow-md border border-light"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Overlay for mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full bg-background-secondary border-r border-light transition-all duration-300 z-40
          ${collapsed ? 'w-20' : 'w-64'}
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Logo Area */}
        <div className={`h-16 flex items-center ${collapsed ? 'justify-center' : 'justify-between px-6'} border-b border-light`}>
          {!collapsed && (
            <Link to="/admin" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-gold to-gold-light rounded-lg flex items-center justify-center">
                <span className="text-navy-deep font-bold text-sm">GT</span>
              </div>
              <span className="font-bold text-foreground">
                Admin<span className="text-gold">Panel</span>
              </span>
            </Link>
          )}
          {collapsed && (
            <div className="w-8 h-8 bg-gradient-to-r from-gold to-gold-light rounded-lg flex items-center justify-center">
              <span className="text-navy-deep font-bold text-xs">GT</span>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden lg:flex p-1 rounded-lg hover:bg-background-tertiary transition-colors"
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 py-6">
          <ul className="space-y-1 px-3">
            {menuItems.map((item) => {
              const Icon = item.icon
              const active = isActive(item.path, item.exact)
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center px-3 py-2 rounded-lg transition-colors group ${
                      active
                        ? 'bg-accent/10 text-accent'
                        : 'text-foreground-secondary hover:bg-background-tertiary hover:text-accent'
                    } ${collapsed ? 'justify-center' : 'space-x-3'}`}
                    title={collapsed ? item.label : ''}
                  >
                    <Icon className={`w-5 h-5 ${active ? 'text-accent' : ''}`} />
                    {!collapsed && <span className="text-sm">{item.label}</span>}
                    {collapsed && (
                      <div className="absolute left-full ml-2 px-2 py-1 bg-background-inverse text-foreground-inverse text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                        {item.label}
                      </div>
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Footer Area */}
        <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-light">
          <button
            onClick={logout}
            className={`flex items-center w-full px-3 py-2 rounded-lg transition-colors text-danger hover:bg-danger/10 ${
              collapsed ? 'justify-center' : 'space-x-3'
            }`}
            title={collapsed ? 'Logout' : ''}
          >
            <LogOut className="w-5 h-5" />
            {!collapsed && <span className="text-sm">Logout</span>}
            {collapsed && (
              <div className="absolute left-full ml-2 px-2 py-1 bg-background-inverse text-foreground-inverse text-xs rounded opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                Logout
              </div>
            )}
          </button>
        </div>
      </aside>

      {/* Content Spacer */}
      <div className={`${collapsed ? 'lg:ml-20' : 'lg:ml-64'} transition-all duration-300`} />
    </>
  )
}

export default AdminSidebar