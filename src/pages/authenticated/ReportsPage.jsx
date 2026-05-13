import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { 
  FileText, Download, Eye, Calendar, Search, 
  Filter, ChevronRight, FileCheck, Clock,
  TrendingUp, HardHat, FileSignature, Video,
  AlertCircle, PlusCircle, Printer, Share2
} from 'lucide-react'

// Mock reports data
const reportsData = [
  { 
    id: 1, 
    title: 'Construction Progress Report - March 2026', 
    project: 'Bakau Residential Complex',
    projectId: 1,
    type: 'progress',
    date: 'March 15, 2026',
    generatedBy: 'Modou S.',
    size: '2.4 MB',
    pages: 12,
    status: 'completed',
    hasMedia: true,
    description: 'Weekly progress report including site photos, material verification, and cost analysis.'
  },
  { 
    id: 2, 
    title: 'Material Verification Summary', 
    project: 'Serrekunda Commercial Center',
    projectId: 2,
    type: 'verification',
    date: 'March 12, 2026',
    generatedBy: 'Fatou N.',
    size: '1.8 MB',
    pages: 8,
    status: 'completed',
    hasMedia: true,
    description: 'Verification report for delivered construction materials including quality checks.'
  },
  { 
    id: 3, 
    title: 'Cost Analysis & Validation', 
    project: 'Bakau Residential Complex',
    projectId: 1,
    type: 'financial',
    date: 'March 10, 2026',
    generatedBy: 'Modou S.',
    size: '3.1 MB',
    pages: 15,
    status: 'completed',
    hasMedia: false,
    description: 'Detailed cost breakdown and validation of all project expenses.'
  },
  { 
    id: 4, 
    title: 'Site Inspection Report - Foundation', 
    project: 'Fajara Villa Renovation',
    projectId: 3,
    type: 'inspection',
    date: 'March 5, 2026',
    generatedBy: 'Lamin J.',
    size: '4.2 MB',
    pages: 20,
    status: 'completed',
    hasMedia: true,
    description: 'Comprehensive foundation inspection report with drone footage and soil analysis.'
  },
  { 
    id: 5, 
    title: 'Quarterly Investment Summary', 
    project: 'All Projects',
    projectId: null,
    type: 'summary',
    date: 'March 1, 2026',
    generatedBy: 'System',
    size: '5.6 MB',
    pages: 25,
    status: 'completed',
    hasMedia: false,
    description: 'Consolidated report of all active investments and performance metrics.'
  },
  { 
    id: 6, 
    title: 'Legal Document Verification Report', 
    project: 'Kololi Beach Resort',
    projectId: 4,
    type: 'legal',
    date: 'Feb 28, 2026',
    generatedBy: 'Aisha C.',
    size: '1.2 MB',
    pages: 6,
    status: 'completed',
    hasMedia: false,
    description: 'Verification report for land title, permits, and legal contracts.'
  },
]

const reportTypes = [
  { value: 'all', label: 'All Reports', icon: FileText },
  { value: 'progress', label: 'Progress', icon: TrendingUp },
  { value: 'verification', label: 'Verification', icon: FileCheck },
  { value: 'inspection', label: 'Inspection', icon: HardHat },
  { value: 'financial', label: 'Financial', icon: FileSignature },
  { value: 'legal', label: 'Legal', icon: AlertCircle },
  { value: 'summary', label: 'Summary', icon: Clock },
]

const projects = [
  { id: 'all', name: 'All Projects' },
  { id: 1, name: 'Bakau Residential Complex' },
  { id: 2, name: 'Serrekunda Commercial Center' },
  { id: 3, name: 'Fajara Villa Renovation' },
  { id: 4, name: 'Kololi Beach Resort' },
]

export const ReportsPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('all')
  const [selectedProject, setSelectedProject] = useState('all')
  const [dateRange, setDateRange] = useState({ start: '', end: '' })
  const [viewMode, setViewMode] = useState('grid')
  const [selectedReport, setSelectedReport] = useState(null)

  const filteredReports = reportsData.filter(report => {
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          report.project.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === 'all' || report.type === selectedType
    const matchesProject = selectedProject === 'all' || (report.projectId && report.projectId.toString() === selectedProject)
    
    let matchesDate = true
    if (dateRange.start && dateRange.end) {
      const reportDate = new Date(report.date)
      const startDate = new Date(dateRange.start)
      const endDate = new Date(dateRange.end)
      matchesDate = reportDate >= startDate && reportDate <= endDate
    }
    
    return matchesSearch && matchesType && matchesProject && matchesDate
  })

  const handleDownload = (report) => {
    alert(`Downloading ${report.title}...`)
  }

  const handleView = (report) => {
    setSelectedReport(report)
  }

  const handleGenerateReport = () => {
    alert('Report generation will be available soon.')
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  }

  const getTypeIcon = (type) => {
    const icons = {
      progress: TrendingUp,
      verification: FileCheck,
      inspection: HardHat,
      financial: FileSignature,
      legal: AlertCircle,
      summary: Clock,
    }
    return icons[type] || FileText
  }

  const getTypeColor = (type) => {
    const colors = {
      progress: 'var(--accent)',
      verification: 'var(--info)',
      inspection: 'var(--success)',
      financial: 'var(--warning)',
      legal: 'var(--danger)',
      summary: 'var(--info)',
    }
    return colors[type] || 'var(--accent)'
  }

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold mb-1" style={{ color: 'var(--foreground)' }}>
            Reports
          </h1>
          <p style={{ color: 'rgba(58,74,107,0.7)' }}>
            Access and manage all your project reports
          </p>
        </div>
        <button
          onClick={handleGenerateReport}
          className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105"
          style={{
            background: 'var(--accent)',
            color: 'var(--background-inverse)',
          }}
        >
          <PlusCircle className="w-4 h-4" />
          Generate Report
        </button>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Total Reports', value: reportsData.length, icon: FileText },
          { label: 'This Month', value: 4, icon: Calendar },
          { label: 'With Media', value: reportsData.filter(r => r.hasMedia).length, icon: Video },
          { label: 'Pages Total', value: reportsData.reduce((sum, r) => sum + r.pages, 0), icon: FileCheck },
        ].map((stat) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.label}
              className="rounded-xl p-4"
              style={{
                background: 'var(--background-secondary)',
                border: '1px solid var(--border)',
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(212,175,55,0.1)' }}
                >
                  <Icon className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                </div>
                <span className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>
                  {stat.value}
                </span>
              </div>
              <p className="text-sm" style={{ color: 'rgba(58,74,107,0.6)' }}>
                {stat.label}
              </p>
            </div>
          )
        })}
      </div>

      {/* Filters */}
      <div className="rounded-xl p-5 mb-6" style={{
        background: 'var(--background-secondary)',
        border: '1px solid var(--border)',
      }}>
        <div className="flex flex-wrap gap-4">
          {/* Search */}
          <div className="flex-1 min-w-[200px] relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{ color: 'rgba(58,74,107,0.5)' }} />
            <input
              type="text"
              placeholder="Search reports..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none transition-all"
              style={{
                background: 'var(--background)',
                borderColor: 'var(--border)',
                color: 'var(--foreground)',
              }}
            />
          </div>

          {/* Project Filter */}
          <select
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            className="px-4 py-2 rounded-lg border focus:outline-none cursor-pointer"
            style={{
              background: 'var(--background)',
              borderColor: 'var(--border)',
              color: 'var(--foreground)',
            }}
          >
            {projects.map(project => (
              <option key={project.id} value={project.id}>{project.name}</option>
            ))}
          </select>

          {/* Date Range */}
          <input
            type="date"
            placeholder="Start Date"
            value={dateRange.start}
            onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
            className="px-4 py-2 rounded-lg border focus:outline-none"
            style={{
              background: 'var(--background)',
              borderColor: 'var(--border)',
              color: 'var(--foreground)',
            }}
          />
          <input
            type="date"
            placeholder="End Date"
            value={dateRange.end}
            onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
            className="px-4 py-2 rounded-lg border focus:outline-none"
            style={{
              background: 'var(--background)',
              borderColor: 'var(--border)',
              color: 'var(--foreground)',
            }}
          />

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

        {/* Report Type Chips */}
        <div className="flex flex-wrap gap-2 mt-4">
          {reportTypes.map((type) => {
            const Icon = type.icon
            const isActive = selectedType === type.value
            return (
              <button
                key={type.value}
                onClick={() => setSelectedType(type.value)}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm transition-all"
                style={{
                  background: isActive ? 'var(--accent)' : 'rgba(212,175,55,0.08)',
                  color: isActive ? 'var(--background-inverse)' : 'rgba(58,74,107,0.8)',
                }}
              >
                <Icon className="w-3 h-3" />
                {type.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Reports Grid/List */}
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
          {filteredReports.map((report) => {
            const TypeIcon = getTypeIcon(report.type)
            const typeColor = getTypeColor(report.type)
            
            return (
              <motion.div
                key={report.id}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="rounded-xl overflow-hidden transition-all duration-200 cursor-pointer"
                style={{
                  background: 'var(--background-secondary)',
                  border: '1px solid var(--border)',
                }}
                onClick={() => handleView(report)}
              >
                {viewMode === 'grid' ? (
                  // Grid View
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ background: 'rgba(212,175,55,0.1)' }}
                      >
                        <TypeIcon className="w-6 h-6" style={{ color: typeColor }} />
                      </div>
                      {report.hasMedia && (
                        <span
                          className="text-xs px-2 py-1 rounded-full"
                          style={{ background: 'rgba(212,175,55,0.1)', color: 'var(--accent)' }}
                        >
                          <Video className="w-3 h-3 inline mr-1" />
                          Media
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-base font-semibold mb-1 line-clamp-2" style={{ color: 'var(--foreground)' }}>
                      {report.title}
                    </h3>
                    
                    <p className="text-sm mb-3 line-clamp-2" style={{ color: 'rgba(58,74,107,0.6)' }}>
                      {report.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs mb-3" style={{ color: 'rgba(58,74,107,0.5)' }}>
                      <span>{report.project}</span>
                      <span>•</span>
                      <span>{report.date}</span>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: 'var(--border)' }}>
                      <div className="flex items-center gap-2">
                        <span className="text-xs" style={{ color: 'rgba(58,74,107,0.5)' }}>
                          {report.pages} pages • {report.size}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={(e) => { e.stopPropagation(); handleDownload(report); }}
                          className="p-1.5 rounded-lg transition-colors hover:bg-background"
                          style={{ color: 'rgba(58,74,107,0.5)' }}
                        >
                          <Download className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); handleView(report); }}
                          className="p-1.5 rounded-lg transition-colors hover:bg-background"
                          style={{ color: 'rgba(58,74,107,0.5)' }}
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
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
                        <TypeIcon className="w-5 h-5" style={{ color: typeColor }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-sm" style={{ color: 'var(--foreground)' }}>
                          {report.title}
                        </h3>
                        <div className="flex items-center gap-3 text-xs" style={{ color: 'rgba(58,74,107,0.5)' }}>
                          <span>{report.project}</span>
                          <span>•</span>
                          <span>{report.date}</span>
                          <span>•</span>
                          <span>{report.pages} pages</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <span
                        className="text-xs px-2 py-1 rounded-full"
                        style={{ background: 'rgba(212,175,55,0.1)', color: typeColor }}
                      >
                        {reportTypes.find(t => t.value === report.type)?.label}
                      </span>
                      <button
                        onClick={(e) => { e.stopPropagation(); handleDownload(report); }}
                        className="p-2 rounded-lg transition-colors hover:bg-background"
                        style={{ color: 'rgba(58,74,107,0.5)' }}
                      >
                        <Download className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); handleView(report); }}
                        className="p-2 rounded-lg transition-colors hover:bg-background"
                        style={{ color: 'rgba(58,74,107,0.5)' }}
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredReports.length === 0 && (
        <div className="text-center py-12">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{ background: 'rgba(212,175,55,0.1)' }}
          >
            <FileText className="w-10 h-10" style={{ color: 'rgba(212,175,55,0.4)' }} />
          </div>
          <h3 className="text-lg font-medium mb-2" style={{ color: 'var(--foreground)' }}>
            No reports found
          </h3>
          <p className="text-sm mb-4" style={{ color: 'rgba(58,74,107,0.6)' }}>
            Try adjusting your search or filter criteria
          </p>
          <button
            onClick={handleGenerateReport}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium"
            style={{ background: 'var(--accent)', color: 'var(--background-inverse)' }}
          >
            <PlusCircle className="w-4 h-4" />
            Generate First Report
          </button>
        </div>
      )}

      {/* Report Detail Modal */}
      <AnimatePresence>
        {selectedReport && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedReport(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-2xl w-full rounded-2xl overflow-hidden"
              style={{ background: 'var(--background)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="p-6"
                style={{ borderBottom: '1px solid var(--border)' }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
                      {selectedReport.title}
                    </h2>
                    <div className="flex items-center gap-3 text-sm" style={{ color: 'rgba(58,74,107,0.6)' }}>
                      <span>{selectedReport.project}</span>
                      <span>•</span>
                      <span>{selectedReport.date}</span>
                      <span>•</span>
                      <span>Generated by {selectedReport.generatedBy}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedReport(null)}
                    className="p-2 rounded-lg hover:bg-background-secondary transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>Description</h3>
                  <p className="text-sm" style={{ color: 'rgba(58,74,107,0.7)' }}>
                    {selectedReport.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>Details</h3>
                    <ul className="space-y-1 text-sm" style={{ color: 'rgba(58,74,107,0.6)' }}>
                      <li>Pages: {selectedReport.pages}</li>
                      <li>Size: {selectedReport.size}</li>
                      <li>Type: {reportTypes.find(t => t.value === selectedReport.type)?.label}</li>
                      <li>Status: {selectedReport.status}</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>Actions</h3>
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleDownload(selectedReport)}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium"
                        style={{ background: 'var(--accent)', color: 'var(--background-inverse)' }}
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                      <button
                        className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium border"
                        style={{ borderColor: 'var(--border)', color: 'rgba(58,74,107,0.8)' }}
                      >
                        <Printer className="w-4 h-4" />
                        Print
                      </button>
                    </div>
                  </div>
                </div>
                
                {selectedReport.hasMedia && (
                  <div>
                    <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>Attached Media</h3>
                    <div className="flex gap-2">
                      <span className="text-xs px-2 py-1 rounded-full" style={{ background: 'rgba(212,175,55,0.1)', color: 'var(--accent)' }}>
                        📸 Site Photos (12)
                      </span>
                      <span className="text-xs px-2 py-1 rounded-full" style={{ background: 'rgba(212,175,55,0.1)', color: 'var(--accent)' }}>
                        🎥 Drone Footage (2)
                      </span>
                    </div>
                  </div>
                )}
              </div>
              
              <div
                className="p-4 flex justify-end gap-3"
                style={{ borderTop: '1px solid var(--border)' }}
              >
                <button
                  onClick={() => setSelectedReport(null)}
                  className="px-4 py-2 rounded-lg font-medium"
                  style={{ color: 'rgba(58,74,107,0.8)' }}
                >
                  Close
                </button>
                <button
                  onClick={() => handleShare(selectedReport)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium"
                  style={{ border: '1px solid var(--border)', color: 'rgba(58,74,107,0.8)' }}
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ReportsPage