import { createRoute } from '@tanstack/react-router'
import { rootRoute } from '@/routes/root'
import { ROUTES } from '@/routes/routes'

// Import layout components
import AuthenticatedLayout from '@/components/layout/AuthenticatedLayout'

// Import page components from pages/authenticated
import DashboardPage from '@/pages/authenticated/DashboardPage'
import ProjectsPage from '@/pages/authenticated/ProjectsPage'
import ProjectDetailPage from '@/pages/authenticated/ProjectDetailPage'
import ProjectCreatePage from '@/pages/authenticated/ProjectCreatePage'
import ReportsPage from '@/pages/authenticated/ReportsPage'
import ReportDetailPage from '@/pages/authenticated/ReportDetailPage'
import VisitsPage from '@/pages/authenticated/VisitsPage'
import VisitDetailPage from '@/pages/authenticated/VisitDetailPage'
import MessagesPage from '@/pages/authenticated/MessagesPage'
import SettingsPage from '@/pages/authenticated/SettingsPage'
import ProfilePage from '@/pages/authenticated/ProfilePage'


// Create authenticated layout route
export const authenticatedLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'authenticated-layout',
  component: AuthenticatedLayout,
})

// Dashboard route
export const dashboardRoute = createRoute({
  getParentRoute: () => authenticatedLayoutRoute,
  path: ROUTES.AUTHENTICATED.DASHBOARD,
  component: DashboardPage,
})

// Projects routes
export const projectsRoute = createRoute({
  getParentRoute: () => authenticatedLayoutRoute,
  path: ROUTES.AUTHENTICATED.PROJECTS,
  component: ProjectsPage,
})

export const projectDetailRoute = createRoute({
  getParentRoute: () => authenticatedLayoutRoute,
  path: ROUTES.AUTHENTICATED.PROJECT_DETAIL,
  component: ProjectDetailPage,
})

export const projectCreateRoute = createRoute({
  getParentRoute: () => authenticatedLayoutRoute,
  path: ROUTES.AUTHENTICATED.PROJECT_CREATE,
  component: ProjectCreatePage,
})

// Reports routes
export const reportsRoute = createRoute({
  getParentRoute: () => authenticatedLayoutRoute,
  path: ROUTES.AUTHENTICATED.REPORTS,
  component: ReportsPage,
})

export const reportDetailRoute = createRoute({
  getParentRoute: () => authenticatedLayoutRoute,
  path: ROUTES.AUTHENTICATED.REPORT_DETAIL,
  component: ReportDetailPage,
})

// Visits routes
export const visitsRoute = createRoute({
  getParentRoute: () => authenticatedLayoutRoute,
  path: ROUTES.AUTHENTICATED.VISITS,
  component: VisitsPage,
})

export const visitDetailRoute = createRoute({
  getParentRoute: () => authenticatedLayoutRoute,
  path: ROUTES.AUTHENTICATED.VISIT_DETAIL,
  component: VisitDetailPage,
})

// Messages route
export const messagesRoute = createRoute({
  getParentRoute: () => authenticatedLayoutRoute,
  path: ROUTES.AUTHENTICATED.MESSAGES,
  component: MessagesPage,
})

// Settings route
export const settingsRoute = createRoute({
  getParentRoute: () => authenticatedLayoutRoute,
  path: ROUTES.AUTHENTICATED.SETTINGS,
  component: SettingsPage,
})

// Profile route
export const profileRoute = createRoute({
  getParentRoute: () => authenticatedLayoutRoute,
  path: ROUTES.AUTHENTICATED.PROFILE,
  component: ProfilePage,
})

// Export all authenticated child routes
export const authenticatedChildRoutes = [
  dashboardRoute,
  projectsRoute,
  projectDetailRoute,
  projectCreateRoute,
  reportsRoute,
  reportDetailRoute,
  visitsRoute,
  visitDetailRoute,
  messagesRoute,
  settingsRoute,
  profileRoute,
]