import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { 
  Building2, MapPin, Calendar, ChevronRight, 
  Search, Filter, PlusCircle, MoreVertical,
  CheckCircle, Clock, AlertCircle, Eye
} from 'lucide-react'

// Mock projects data
const projectsData = [
  { 
    id: 1, 
    name: 'Bakau Residential Complex', 
    location: 'Bakau', 
    status: 'active', 
    progress: 72, 
    startDate: 'Jan 15, 2026',
    expectedEnd: 'Aug 15, 2026',
    budget: '$150,000',
    invested: '$108,000',
    lastUpdate: '2 days ago',
    representative: 'Modou S.',
    image: null
  },
  { 
    id: 2, 
    name: 'Serrekunda Commercial Center', 
    location: 'Serrekunda', 
    status: 'active', 
    progress: 45, 
    startDate: 'Feb 1, 2026',
    expectedEnd: 'Oct 1, 2026',
    budget: '$250,000',
    invested: '$112,500',
    lastUpdate: '5 days ago',
    representative: 'Fatou N.',
    image: null
  },
  { 
    id: 3, 
    name: 'Fajara Villa Renovation', 
    location: 'Fajara', 
    status: 'completed', 
    progress: 100, 
    startDate: 'Oct 10, 2025',
    expectedEnd: 'Mar 10, 2026',
    budget: '$85,000',
    invested: '$85,000',
    lastUpdate: '2 weeks ago',
    representative: 'Lamin J.',
    image: null
  },
  { 
    id: 4, 
    name: 'Kololi Beach Resort', 
    location: 'Kololi', 
    status: 'pending', 
    progress: 0, 
    startDate: 'Apr 1, 2026',
    expectedEnd: 'Dec 1, 2026',
    budget: '$500,000',
    invested: '$0',
    lastUpdate: 'Not started',
    representative: 'Pending',
    image: null
  },
]

const statusConfig = {
  active: { label: 'Active', color: 'var(--accent)', bg: 'rgba(212,175,55,0.1)' },
  completed: { label: 'Completed', color: 'var(--success)', bg: 'rgba(16,185,129,0.1)' },
  pending: { label: 'Pending', color: 'var(--warning)', bg: 'rgba(245,158,11,0.1)' },
}

export const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'

  const filteredProjects = projectsData.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold mb-1" style={{ color: 'var(--foreground)' }}>
            My Projects
          </h1>
          <p style={{ color: 'rgba(58,74,107,0.7)' }}>
            Manage and monitor all your investment projects
          </p>
        </div>
        <Link
          to="/projects/create"
          className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105"
          style={{
            background: 'var(--accent)',
            color: 'var(--background-inverse)',
          }}
        >
          <PlusCircle className="w-4 h-4" />
          New Project
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        {/* Search */}
        <div className="flex-1 min-w-[200px] relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{ color: 'rgba(58,74,107,0.5)' }} />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none transition-all"
            style={{
              background: 'var(--background-secondary)',
              borderColor: 'var(--border)',
              color: 'var(--foreground)',
            }}
          />
        </div>

        {/* Status Filter */}
        <div className="flex gap-2">
          {['all', 'active', 'completed', 'pending'].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all capitalize"
              style={{
                background: statusFilter === status ? 'var(--accent)' : 'rgba(212,175,55,0.08)',
                color: statusFilter === status ? 'var(--background-inverse)' : 'rgba(58,74,107,0.8)',
              }}
            >
              {status === 'all' ? 'All' : status}
            </button>
          ))}
        </div>

        {/* View Toggle */}
        <div className="flex gap-1 p-1 rounded-lg" style={{ background: 'rgba(212,175,55,0.08)' }}>
          <button
            onClick={() => setViewMode('grid')}
            className="p-2 rounded transition-all"
            style={{ background: viewMode === 'grid' ? 'var(--accent)' : 'transparent' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
          <button
            onClick={() => setViewMode('list')}
            className="p-2 rounded transition-all"
            style={{ background: viewMode === 'list' ? 'var(--accent)' : 'transparent' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Projects Grid/List */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={viewMode === 'grid' 
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          : "space-y-4"
        }
      >
        <AnimatePresence>
          {filteredProjects.map((project) => {
            const status = statusConfig[project.status]
            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="rounded-xl overflow-hidden transition-all duration-200"
                style={{
                  background: 'var(--background-secondary)',
                  border: '1px solid var(--border)',
                }}
              >
                {viewMode === 'grid' ? (
                  // Grid View
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ background: 'rgba(212,175,55,0.1)' }}
                      >
                        <Building2 className="w-6 h-6" style={{ color: 'var(--accent)' }} />
                      </div>
                      <span
                        className="text-xs px-2 py-1 rounded-full"
                        style={{ background: status.bg, color: status.color }}
                      >
                        {status.label}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                      {project.name}
                    </h3>
                    
                    <div className="flex items-center gap-3 text-xs mb-3" style={{ color: 'rgba(58,74,107,0.6)' }}>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {project.startDate}
                      </span>
                    </div>

                    <div className="mb-3">
                      <div className="flex justify-between text-xs mb-1">
                        <span style={{ color: 'rgba(58,74,107,0.6)' }}>Progress</span>
                        <span style={{ color: 'var(--accent)' }}>{project.progress}%</span>
                      </div>
                      <div
                        className="h-1.5 rounded-full overflow-hidden"
                        style={{ background: 'rgba(212,175,55,0.1)' }}
                      >
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{ width: `${project.progress}%`, background: 'var(--accent)' }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: 'var(--border)' }}>
                      <div>
                        <p className="text-xs" style={{ color: 'rgba(58,74,107,0.5)' }}>Invested</p>
                        <p className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>
                          {project.invested}
                        </p>
                      </div>
                      <Link
                        to={`/projects/${project.id}`}
                        className="flex items-center gap-1 text-sm transition-colors hover:gap-2"
                        style={{ color: 'var(--accent)' }}
                      >
                        Details <ChevronRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                ) : (
                  // List View
                  <div className="p-4 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1 min-w-[200px]">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ background: 'rgba(212,175,55,0.1)' }}
                      >
                        <Building2 className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                      </div>
                      <div>
                        <h3 className="font-medium" style={{ color: 'var(--foreground)' }}>
                          {project.name}
                        </h3>
                        <div className="flex items-center gap-3 text-xs" style={{ color: 'rgba(58,74,107,0.6)' }}>
                          <span>{project.location}</span>
                          <span>•</span>
                          <span>{project.startDate}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="hidden sm:block w-32">
                        <div className="flex justify-between text-xs mb-1">
                          <span style={{ color: 'rgba(58,74,107,0.6)' }}>Progress</span>
                          <span style={{ color: 'var(--accent)' }}>{project.progress}%</span>
                        </div>
                        <div
                          className="h-1 rounded-full overflow-hidden"
                          style={{ background: 'rgba(212,175,55,0.1)' }}
                        >
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{ width: `${project.progress}%`, background: 'var(--accent)' }}
                          />
                        </div>
                      </div>
                      
                      <span
                        className="text-xs px-2 py-1 rounded-full"
                        style={{ background: status.bg, color: status.color }}
                      >
                        {status.label}
                      </span>
                      
                      <Link
                        to={`/projects/${project.id}`}
                        className="p-2 rounded-lg transition-colors hover:bg-background"
                        style={{ color: 'rgba(58,74,107,0.6)' }}
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                )}
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{ background: 'rgba(212,175,55,0.1)' }}
          >
            <Building2 className="w-10 h-10" style={{ color: 'rgba(212,175,55,0.4)' }} />
          </div>
          <h3 className="text-lg font-medium mb-2" style={{ color: 'var(--foreground)' }}>
            No projects found
          </h3>
          <p className="text-sm mb-4" style={{ color: 'rgba(58,74,107,0.6)' }}>
            Try adjusting your search or filter criteria
          </p>
          <Link
            to="/projects/create"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium"
            style={{ background: 'var(--accent)', color: 'var(--background-inverse)' }}
          >
            <PlusCircle className="w-4 h-4" />
            Start a New Project
          </Link>
        </div>
      )}
    </div>
  )
}

export default ProjectsPage