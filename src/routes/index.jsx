import { createRouter } from '@tanstack/react-router'
import { rootRoute } from './root'
import { publicLayoutRoute, publicChildRoutes } from './public'
import { authenticatedLayoutRoute, authenticatedChildRoutes } from './authenticated'
import { adminLayoutRoute, adminChildRoutes } from './admin'

// Build the complete route tree
const routeTree = rootRoute.addChildren([
  // Public routes (home, services, login, register, etc.)
  publicLayoutRoute.addChildren(publicChildRoutes),
  
  // Authenticated user routes (dashboard, projects, reports, etc.)
  authenticatedLayoutRoute.addChildren(authenticatedChildRoutes),
  
  // Admin portal routes
  adminLayoutRoute.addChildren(adminChildRoutes),
])

// Create the router instance with default context
export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
  defaultStaleTime: 0,
  context: {
    auth: {
      isAuthenticated: false,
      user: null,
    },
  },
})

