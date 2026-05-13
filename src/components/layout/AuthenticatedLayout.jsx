import { Outlet } from '@tanstack/react-router'
import { AuthenticatedHeader } from './AuthenticatedHeader'
import { AuthenticatedSidebar } from './AuthenticatedSidebar'
import { AuthenticatedMobileNav } from './AuthenticatedMobileNav'
// import AuthGuard from '../features/auth/components/AuthGuard'


export const AuthenticatedLayout = () => {
  return (
    // <AuthGuard>
      <div className="min-h-screen bg-background">
        <AuthenticatedHeader />
        <div className="flex">
          <AuthenticatedSidebar />
          <main className="flex-1 lg:ml-64">
            <div className="p-4 lg:p-6 mt-16">
              <div className="animate-fade-in">
                <Outlet />
              </div>
            </div>
          </main>
        </div>
        <AuthenticatedMobileNav />
      </div>
    // </AuthGuard>
  )
}

export default AuthenticatedLayout