// Route path constants for the entire application
export const ROUTES = {
  // Public Routes
  PUBLIC: {
    HOME: "/home",
    SERVICES: "/services",
    PROJECTS: "/projects",
    LOGIN: "/login",
    REGISTER: "/register",
    FORGOT_PASSWORD: "/forgot-password",
    RESET_PASSWORD: "/reset-password",
    VERIFY_EMAIL: "/verify-email",
    PRICING: "/pricing",
    CONTACT: "/contact",
    SAMPLEDASHBOARD: "/sample-dashboard",
  },
  
  // Authenticated Routes (Client Dashboard)
  AUTHENTICATED: {
    DASHBOARD: "/dashboard",
    PROJECTS: "/projects",
    
    PROJECT_DETAIL: "/projects/$projectId",
    PROJECT_CREATE: "/projects/create",
    REPORTS: "/reports",
    REPORT_DETAIL: "/reports/$reportId",
    VISITS: "/visits",
    VISIT_DETAIL: "/visits/$visitId",
    MESSAGES: "/messages",
    SETTINGS: "/settings",
    PROFILE: "/profile",
  },
  
  // Admin Routes
  ADMIN: {
    DASHBOARD: "/admin/dashboard",
    USERS: "/admin/users",
    USER_DETAIL: "/admin/users/$userId",
    PROJECTS: "/admin/projects",
    PROJECT_DETAIL: "/admin/projects/$projectId",
    REPORTS: "/admin/reports",
    VERIFICATIONS: "/admin/verifications",
    SETTINGS: "/admin/settings",
  },
}