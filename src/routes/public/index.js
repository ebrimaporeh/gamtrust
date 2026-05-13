import { createRoute } from '@tanstack/react-router'
import { rootRoute } from '@/routes/root'
import { ROUTES } from '@/routes/routes'

// Import layout components
import PublicLayout from '@/components/layout/PublicLayout'

// Import page components from pages/public
import HomePage from '@/pages/public/HomePage'
import ServicesPage from '@/pages/public/ServicesPage'
import LoginPage from '@/pages/public/LoginPage'
import RegisterPage from '@/pages/public/RegisterPage'
import ForgotPasswordPage from '@/pages/public/ForgotPasswordPage'
import ResetPasswordPage from '@/pages/public/ResetPasswordPage'
import VerifyEmailPage from '@/pages/public/VerifyEmailPage'
import PricingPage from '@/pages/public/PricingPage'
import Projects from '../../pages/public/Projects'
import SampleDashboardPage from '../../pages/public/SampleDashboardPage'
import ContactPage from '../../pages/public/ContactPage'

// Create public layout route
export const publicLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  // path: '/',
  id: 'public-layout',
  component: PublicLayout,
})

// Public page routes
export const homeRoute = createRoute({
  getParentRoute: () => publicLayoutRoute,
  path: '/',
  component: HomePage,
})

export const servicesRoute = createRoute({
  getParentRoute: () => publicLayoutRoute,
  path: ROUTES.PUBLIC.SERVICES,
  component: ServicesPage,
})

export const pricingRoute = createRoute({
  getParentRoute: () => publicLayoutRoute,
  path: ROUTES.PUBLIC.PRICING,
  component: PricingPage,
})

export const sampleDashboardRoute = createRoute({
  getParentRoute: () => publicLayoutRoute,
  path: ROUTES.PUBLIC.SAMPLEDASHBOARD,
  component: SampleDashboardPage,
})

export const clientHubRoute = createRoute({
  getParentRoute: () => publicLayoutRoute,
  path: ROUTES.PUBLIC.PROJECTS,
  component: Projects,
})

// Auth routes (also under public layout)
export const loginRoute = createRoute({
  getParentRoute: () => publicLayoutRoute,
  path: ROUTES.PUBLIC.LOGIN,
  component: LoginPage,
})

export const registerRoute = createRoute({
  getParentRoute: () => publicLayoutRoute,
  path: ROUTES.PUBLIC.REGISTER,
  component: RegisterPage,
})

export const contactRoute = createRoute({
  getParentRoute: () => publicLayoutRoute,
  path: ROUTES.PUBLIC.CONTACT,
  component: ContactPage,
})

export const forgotPasswordRoute = createRoute({
  getParentRoute: () => publicLayoutRoute,
  path: ROUTES.PUBLIC.FORGOT_PASSWORD,
  component: ForgotPasswordPage,
})

export const resetPasswordRoute = createRoute({
  getParentRoute: () => publicLayoutRoute,
  path: ROUTES.PUBLIC.RESET_PASSWORD,
  component: ResetPasswordPage,
})

export const verifyEmailRoute = createRoute({
  getParentRoute: () => publicLayoutRoute,
  path: ROUTES.PUBLIC.VERIFY_EMAIL,
  component: VerifyEmailPage,
})

// Export all public child routes
export const publicChildRoutes = [
  homeRoute,
  servicesRoute,
  clientHubRoute,
  loginRoute,
  registerRoute,
  forgotPasswordRoute,
  pricingRoute,
  resetPasswordRoute,
  verifyEmailRoute,
  sampleDashboardRoute,
  contactRoute
]