import { Link, useLocation } from '@tanstack/react-router'
import { Home, Briefcase, LayoutDashboard, User, LogOut } from 'lucide-react'
import { useAuthStore } from '@/stores/authStore'

export const BottomNav = () => {
  const location = useLocation()
  const { isAuthenticated, logout } = useAuthStore()

  const isActive = (path) => {
    if (path === '/') return location.pathname === path
    return location.pathname.startsWith(path)
  }

  // Public nav items (visible to all)
  const publicNavItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/services', icon: Briefcase, label: 'Services' },
  ]

  // Authenticated nav items
  const authNavItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/profile', icon: User, label: 'Profile' },
  ]

  const navItems = isAuthenticated 
    ? [...publicNavItems, ...authNavItems]
    : publicNavItems

  if (!isAuthenticated) {
    return (
      <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-background border-t border-light z-40">
        <div className="flex justify-around items-center py-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.path)
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center py-2 px-4 rounded-lg transition-colors ${
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
        </div>
      </nav>
    )
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-background border-t border-light z-40">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const active = isActive(item.path)
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
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
        
        {/* Logout Button */}
        <button
          onClick={logout}
          className="flex flex-col items-center py-2 px-3 rounded-lg text-foreground-muted hover:text-danger transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-xs mt-1">Logout</span>
        </button>
      </div>
    </nav>
  )
}

export default BottomNav