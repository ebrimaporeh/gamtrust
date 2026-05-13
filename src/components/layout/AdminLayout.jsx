import { Outlet } from '@tanstack/react-router'
import AdminSidebar from './AdminSidebar'
import AdminHeader from './AdminHeader'
// import AuthGuard from '../features/auth/components/AuthGuard'


export const AdminLayout = () => {
  return (
    // <AuthGuard requiredRoles={['admin']}>
      <div className="min-h-screen bg-background">
        <AdminSidebar />
        <div className="lg:ml-64">
          <AdminHeader />
          <main className="p-4 lg:p-6">
            <div className="animate-fade-in">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    // </AuthGuard>
  )
}

export default AdminLayout