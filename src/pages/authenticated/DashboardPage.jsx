import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Building2, TrendingUp, FileText, Calendar, 
  CheckCircle, AlertCircle, ArrowRight, DollarSign,
  Users, Clock, Eye, Download, PlusCircle
} from 'lucide-react'
import { Link } from '@tanstack/react-router'

// Mock data
const stats = [
  { label: 'Active Projects', value: '3', change: '+1', icon: Building2, color: 'accent' },
  { label: 'Total Investment', value: '$245,000', change: '+12%', icon: DollarSign, color: 'accent' },
  { label: 'Completion Rate', value: '94%', change: '+5%', icon: TrendingUp, color: 'accent' },
  { label: 'Reports Generated', value: '24', change: '+8', icon: FileText, color: 'accent' },
]

const recentProjects = [
  { id: 1, name: 'Bakau Residential Complex', status: 'In Progress', progress: 72, lastUpdate: '2 days ago', location: 'Bakau' },
  { id: 2, name: 'Serrekunda Commercial Center', status: 'In Progress', progress: 45, lastUpdate: '5 days ago', location: 'Serrekunda' },
  { id: 3, name: 'Fajara Villa Renovation', status: 'Completed', progress: 100, lastUpdate: '2 weeks ago', location: 'Fajara' },
]

const recentReports = [
  { id: 1, title: 'Construction Progress Report - March 2026', date: 'March 15, 2026', type: 'Progress Report' },
  { id: 2, title: 'Material Verification Summary', date: 'March 12, 2026', type: 'Verification Report' },
  { id: 3, title: 'Cost Analysis & Validation', date: 'March 10, 2026', type: 'Financial Report' },
]

const upcomingVisits = [
  { id: 1, project: 'Bakau Residential Complex', date: 'March 25, 2026', time: '10:00 AM', type: 'Site Inspection' },
  { id: 2, project: 'Serrekunda Commercial Center', date: 'March 28, 2026', time: '2:00 PM', type: 'Material Verification' },
]

export const DashboardPage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <div className="p-6 lg:p-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-2xl lg:text-3xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
          Welcome back, John
        </h1>
        <p style={{ color: 'rgba(58,74,107,0.7)' }}>
          Here's what's happening with your investments today.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
      >
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="rounded-xl p-5"
              style={{
                background: 'var(--background-secondary)',
                border: '1px solid var(--border)',
              }}
            >
              <div className="flex justify-between items-start mb-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(212,175,55,0.1)' }}
                >
                  <Icon className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                </div>
                {stat.change && (
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ background: 'rgba(16,185,129,0.1)', color: 'var(--success)' }}>
                    {stat.change}
                  </span>
                )}
              </div>
              <h3 className="text-2xl font-bold mb-1" style={{ color: 'var(--foreground)' }}>
                {stat.value}
              </h3>
              <p className="text-sm" style={{ color: 'rgba(58,74,107,0.6)' }}>
                {stat.label}
              </p>
            </motion.div>
          )
        })}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Projects - Takes 2/3 of space on desktop */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-xl overflow-hidden"
            style={{
              background: 'var(--background-secondary)',
              border: '1px solid var(--border)',
            }}
          >
            <div className="flex justify-between items-center p-5 border-b" style={{ borderColor: 'var(--border)' }}>
              <h2 className="font-semibold text-lg" style={{ color: 'var(--foreground)' }}>
                Recent Projects
              </h2>
              <Link
                to="/projects"
                className="text-sm flex items-center gap-1 transition-colors hover:gap-2"
                style={{ color: 'var(--accent)' }}
              >
                View All <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="divide-y" style={{ borderColor: 'var(--border)' }}>
              {recentProjects.map((project) => (
                <div key={project.id} className="p-5 hover:bg-background/50 transition-colors">
                  <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
                    <div>
                      <h3 className="font-medium mb-1" style={{ color: 'var(--foreground)' }}>
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-3 text-xs" style={{ color: 'rgba(58,74,107,0.6)' }}>
                        <span className="flex items-center gap-1">
                          <Building2 className="w-3 h-3" />
                          {project.location}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {project.lastUpdate}
                        </span>
                      </div>
                    </div>
                    <span
                      className="text-xs px-2 py-1 rounded-full"
                      style={{
                        background: project.status === 'Completed' 
                          ? 'rgba(16,185,129,0.1)' 
                          : 'rgba(212,175,55,0.1)',
                        color: project.status === 'Completed' ? 'var(--success)' : 'var(--accent)',
                      }}
                    >
                      {project.status}
                    </span>
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between text-xs mb-1">
                      <span style={{ color: 'rgba(58,74,107,0.6)' }}>Progress</span>
                      <span style={{ color: 'var(--accent)' }}>{project.progress}%</span>
                    </div>
                    <div
                      className="h-1.5 rounded-full overflow-hidden"
                      style={{ background: 'rgba(212,175,55,0.1)' }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${project.progress}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-full rounded-full"
                        style={{ background: 'var(--accent)' }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column - Reports & Upcoming */}
        <div className="space-y-6">
          {/* Recent Reports */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="rounded-xl overflow-hidden"
            style={{
              background: 'var(--background-secondary)',
              border: '1px solid var(--border)',
            }}
          >
            <div className="flex justify-between items-center p-5 border-b" style={{ borderColor: 'var(--border)' }}>
              <h2 className="font-semibold text-lg" style={{ color: 'var(--foreground)' }}>
                Recent Reports
              </h2>
              <Link
                to="/reports"
                className="text-sm flex items-center gap-1 transition-colors hover:gap-2"
                style={{ color: 'var(--accent)' }}
              >
                View All <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="divide-y" style={{ borderColor: 'var(--border)' }}>
              {recentReports.map((report) => (
                <div key={report.id} className="p-4 hover:bg-background/50 transition-colors">
                  <div className="flex justify-between items-start gap-3">
                    <div className="flex-1">
                      <h3 className="text-sm font-medium mb-1" style={{ color: 'var(--foreground)' }}>
                        {report.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs" style={{ color: 'rgba(58,74,107,0.6)' }}>
                        <span>{report.date}</span>
                        <span>•</span>
                        <span>{report.type}</span>
                      </div>
                    </div>
                    <button
                      className="p-1.5 rounded-lg transition-colors hover:bg-background"
                      style={{ color: 'rgba(58,74,107,0.5)' }}
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Upcoming Visits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-xl overflow-hidden"
            style={{
              background: 'var(--background-secondary)',
              border: '1px solid var(--border)',
            }}
          >
            <div className="flex justify-between items-center p-5 border-b" style={{ borderColor: 'var(--border)' }}>
              <h2 className="font-semibold text-lg" style={{ color: 'var(--foreground)' }}>
                Upcoming Visits
              </h2>
              <Link
                to="/visits"
                className="text-sm flex items-center gap-1 transition-colors hover:gap-2"
                style={{ color: 'var(--accent)' }}
              >
                Schedule <PlusCircle className="w-3 h-3" />
              </Link>
            </div>
            <div className="divide-y" style={{ borderColor: 'var(--border)' }}>
              {upcomingVisits.map((visit) => (
                <div key={visit.id} className="p-4 hover:bg-background/50 transition-colors">
                  <div className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(212,175,55,0.1)' }}
                    >
                      <Calendar className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium mb-1" style={{ color: 'var(--foreground)' }}>
                        {visit.project}
                      </h3>
                      <div className="text-xs" style={{ color: 'rgba(58,74,107,0.6)' }}>
                        <div>{visit.date} at {visit.time}</div>
                        <div>{visit.type}</div>
                      </div>
                    </div>
                    <button
                      className="text-xs px-2 py-1 rounded transition-colors"
                      style={{ color: 'var(--accent)' }}
                    >
                      Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {[
          { label: 'New Project', icon: PlusCircle, action: '/projects/create' },
          { label: 'Request Visit', icon: Calendar, action: '/visits/request' },
          { label: 'View Reports', icon: Eye, action: '/reports' },
          { label: 'Contact Support', icon: Users, action: '/contact' },
        ].map((action) => {
          const Icon = action.icon
          return (
            <Link
              key={action.label}
              to={action.action}
              className="flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-200 hover:scale-105"
              style={{
                background: 'var(--background-secondary)',
                border: '1px solid var(--border)',
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(212,175,55,0.1)' }}
              >
                <Icon className="w-5 h-5" style={{ color: 'var(--accent)' }} />
              </div>
              <span className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>
                {action.label}
              </span>
            </Link>
          )
        })}
      </motion.div>
    </div>
  )
}

export default DashboardPage