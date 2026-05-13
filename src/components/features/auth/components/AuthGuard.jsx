import { useEffect } from 'react'
import { useNavigate, useLocation } from '@tanstack/react-router'
import { useAuthStore } from '@/stores/authStore'

export const AuthGuard = ({ children, requiredRoles = [] }) => {
  const { isAuthenticated, user, isLoading } = useAuthStore()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    // Wait for auth to initialize
    if (isLoading) return

    // Not authenticated
    if (!isAuthenticated) {
      navigate({
        to: '/login',
        search: { redirect: location.pathname },
      })
      return
    }

    // Check role requirements
    if (requiredRoles.length > 0) {
      const hasRequiredRole = requiredRoles.includes(user?.role)
      if (!hasRequiredRole) {
        navigate({ to: '/dashboard' })
      }
    }
  }, [isAuthenticated, isLoading, user, requiredRoles, navigate, location])

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-foreground-muted">Loading...</p>
        </div>
      </div>
    )
  }

  // Not authenticated or role check failed
  if (!isAuthenticated) {
    return null
  }

  if (requiredRoles.length > 0 && !requiredRoles.includes(user?.role)) {
    return null
  }

  return <>{children}</>
}

export default AuthGuard