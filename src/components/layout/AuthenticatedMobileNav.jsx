import { Link, useLocation } from '@tanstack/react-router'
import { 
  LayoutDashboard, 
  FolderKanban, 
  FileText, 
  CalendarCheck, 
  MessageSquare, 
  User, 
  Home,
  Settings,
  LogOut
} from 'lucide-react'
import { useAuthStore } from '@/stores/authStore'

export const AuthenticatedMobileNav = () => {
  const location = useLocation()
  const { logout } = useAuthStore()

  const isActive = (path) => {
    if (path === '/dashboard') return location.pathname === path || location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  const navItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Home' },
    { path: '/projects', icon: FolderKanban, label: 'Projects' },
    { path: '/reports', icon: FileText, label: 'Reports' },
    { path: '/visits', icon: CalendarCheck, label: 'Visits' },
    { path: '/messages', icon: MessageSquare, label: 'Messages' },
    { path: '/profile', icon: User, label: 'Profile' },
  ]

  return (
    <>
      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 lg:hidden bg-background border-t border-light z-40 safe-bottom">
        <div className="flex justify-around items-center py-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.path)
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center py-1 px-3 rounded-lg transition-colors ${
                  active
                    ? 'text-accent'
                    : 'text-foreground-muted hover:text-accent'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            )
          })}
          
          {/* Settings Button */}
          <Link
            to="/settings"
            className={`flex flex-col items-center py-1 px-3 rounded-lg transition-colors ${
              isActive('/settings')
                ? 'text-accent'
                : 'text-foreground-muted hover:text-accent'
            }`}
          >
            <Settings className="w-5 h-5" />
            <span className="text-xs mt-1">Settings</span>
          </Link>
        </div>
      </nav>

      {/* Spacer for bottom navigation to prevent content from being hidden */}
      <div className="h-16 lg:hidden" />
    </>
  )
}

export default AuthenticatedMobileNav