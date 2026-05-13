import { createRoute } from '@tanstack/react-router'
import { rootRoute } from '@/routes/root'
import { ROUTES } from '@/routes/routes'

// Import layout components

import AdminLayout from '@components/layout/AdminLayout'
// Import page components from pages/admin
import AdminDashboardPage from '@/pages/admin/AdminDashboardPage'
import AdminUsersPage from '@/pages/admin/AdminUsersPage'
import AdminUserDetailPage from '@/pages/admin/AdminUserDetailPage'
import AdminProjectsPage from '@/pages/admin/AdminProjectsPage'
import AdminProjectDetailPage from '@/pages/admin/AdminProjectDetailPage'
import AdminReportsPage from '@/pages/admin/AdminReportsPage'
import AdminVerificationsPage from '@/pages/admin/AdminVerificationsPage'
import AdminSettingsPage from '@/pages/admin/AdminSettingsPage'


// Create admin layout route
export const adminLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'admin',
  component: AdminLayout,
})

// Admin dashboard route
export const adminDashboardRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: ROUTES.ADMIN.DASHBOARD,
  component: AdminDashboardPage,
})

// Admin users routes
export const adminUsersRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: ROUTES.ADMIN.USERS,
  component: AdminUsersPage,
})

export const adminUserDetailRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: ROUTES.ADMIN.USER_DETAIL,
  component: AdminUserDetailPage,
})

// Admin projects routes
export const adminProjectsRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: ROUTES.ADMIN.PROJECTS,
  component: AdminProjectsPage,
})

export const adminProjectDetailRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: ROUTES.ADMIN.PROJECT_DETAIL,
  component: AdminProjectDetailPage,
})

// Admin reports route
export const adminReportsRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: ROUTES.ADMIN.REPORTS,
  component: AdminReportsPage,
})

// Admin verifications route
export const adminVerificationsRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: ROUTES.ADMIN.VERIFICATIONS,
  component: AdminVerificationsPage,
})

// Admin settings route
export const adminSettingsRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: ROUTES.ADMIN.SETTINGS,
  component: AdminSettingsPage,
})

// Export all admin child routes
export const adminChildRoutes = [
  adminDashboardRoute,
  adminUsersRoute,
  adminUserDetailRoute,
  adminProjectsRoute,
  adminProjectDetailRoute,
  adminReportsRoute,
  adminVerificationsRoute,
  adminSettingsRoute,
]