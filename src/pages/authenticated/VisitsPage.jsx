import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { 
  Calendar, MapPin, Clock, User, CheckCircle, 
  XCircle, AlertCircle, Search, Filter, PlusCircle,
  ChevronRight, Eye, Download, MessageCircle,
  Video, Camera, FileText, HardHat, ClipboardList,
  Truck, Phone, Mail, Star, Calendar as CalendarIcon
} from 'lucide-react'

// Mock visits data
const visitsData = [
  {
    id: 1,
    projectName: 'Bakau Residential Complex',
    projectId: 1,
    type: 'site_inspection',
    status: 'completed',
    date: 'March 15, 2026',
    time: '10:00 AM - 12:30 PM',
    representative: 'Modou S.',
    representativePhone: '+220 123 4567',
    findings: 'Foundation work progressing well. All materials meet quality standards. No safety violations observed.',
    recommendations: 'Continue with wall construction as scheduled. Schedule next inspection for March 25.',
    mediaCount: 12,
    reportGenerated: true,
    checklist: [
      { item: 'Foundation inspection', status: 'passed', notes: 'All good' },
      { item: 'Material quality check', status: 'passed', notes: 'Steel grade verified' },
      { item: 'Safety compliance', status: 'passed', notes: 'Workers have proper equipment' },
      { item: 'Progress vs schedule', status: 'warning', notes: '2 days behind schedule' },
    ]
  },
  {
    id: 2,
    projectName: 'Serrekunda Commercial Center',
    projectId: 2,
    type: 'material_verification',
    status: 'completed',
    date: 'March 12, 2026',
    time: '2:00 PM - 4:00 PM',
    representative: 'Fatou N.',
    representativePhone: '+220 234 5678',
    findings: 'Steel reinforcement and cement delivered. Quality checks passed. Quantities match invoice.',
    recommendations: 'Store materials properly. Use cement within 2 weeks.',
    mediaCount: 8,
    reportGenerated: true,
    checklist: [
      { item: 'Steel reinforcement', status: 'passed', notes: 'Grade 40, quantity correct' },
      { item: 'Cement bags', status: 'passed', notes: '500 bags, fresh stock' },
      { item: 'Sand and gravel', status: 'passed', notes: 'Quality acceptable' },
    ]
  },
  {
    id: 3,
    projectName: 'Fajara Villa Renovation',
    projectId: 3,
    type: 'site_inspection',
    status: 'completed',
    date: 'March 10, 2026',
    time: '9:00 AM - 11:30 AM',
    representative: 'Lamin J.',
    representativePhone: '+220 345 6789',
    findings: 'Renovation work at 85% completion. Painting and finishing in progress.',
    recommendations: 'Complete painting by March 20. Final inspection scheduled for March 25.',
    mediaCount: 15,
    reportGenerated: true,
    checklist: [
      { item: 'Wall painting', status: 'in_progress', notes: '70% complete' },
      { item: 'Flooring', status: 'completed', notes: 'All rooms done' },
      { item: 'Plumbing', status: 'passed', notes: 'No leaks detected' },
      { item: 'Electrical', status: 'passed', notes: 'Wiring checked' },
    ]
  },
  {
    id: 4,
    projectName: 'Bakau Residential Complex',
    projectId: 1,
    type: 'cost_verification',
    status: 'completed',
    date: 'March 8, 2026',
    time: '11:00 AM - 1:00 PM',
    representative: 'Modou S.',
    representativePhone: '+220 123 4567',
    findings: 'All invoices verified. No discrepancies found. Payments match work completed.',
    recommendations: 'Process payment for completed phase as scheduled.',
    mediaCount: 5,
    reportGenerated: true,
    checklist: [
      { item: 'Invoice verification', status: 'passed', notes: 'All matching' },
      { item: 'Material costs', status: 'passed', notes: 'Market rate' },
      { item: 'Labor costs', status: 'passed', notes: 'Agreed rates' },
    ]
  },
  {
    id: 5,
    projectName: 'Kololi Beach Resort',
    projectId: 4,
    type: 'site_inspection',
    status: 'scheduled',
    date: 'March 25, 2026',
    time: '10:00 AM - 1:00 PM',
    representative: 'Aisha C.',
    representativePhone: '+220 456 7890',
    findings: null,
    recommendations: null,
    mediaCount: 0,
    reportGenerated: false,
    checklist: []
  },
]

const visitTypes = [
  { value: 'all', label: 'All Types', icon: Calendar },
  { value: 'site_inspection', label: 'Site Inspection', icon: HardHat },
  { value: 'material_verification', label: 'Material Verification', icon: Truck },
  { value: 'cost_verification', label: 'Cost Verification', icon: FileText },
]

const statusConfig = {
  completed: { label: 'Completed', icon: CheckCircle, color: 'var(--success)', bg: 'rgba(16,185,129,0.1)' },
  scheduled: { label: 'Scheduled', icon: Calendar, color: 'var(--accent)', bg: 'rgba(212,175,55,0.1)' },
  cancelled: { label: 'Cancelled', icon: XCircle, color: 'var(--danger)', bg: 'rgba(239,68,68,0.1)' },
}

const getChecklistStatusIcon = (status) => {
  switch(status) {
    case 'passed': return <CheckCircle className="w-4 h-4" style={{ color: 'var(--success)' }} />
    case 'warning': return <AlertCircle className="w-4 h-4" style={{ color: 'var(--warning)' }} />
    case 'failed': return <XCircle className="w-4 h-4" style={{ color: 'var(--danger)' }} />
    case 'in_progress': return <Clock className="w-4 h-4" style={{ color: 'var(--accent)' }} />
    default: return <AlertCircle className="w-4 h-4" style={{ color: 'rgba(58,74,107,0.4)' }} />
  }
}

export const VisitsPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [selectedVisit, setSelectedVisit] = useState(null)
  const [viewMode, setViewMode] = useState('grid')

  const filteredVisits = visitsData.filter(visit => {
    const matchesSearch = visit.projectName.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === 'all' || visit.type === selectedType
    const matchesStatus = selectedStatus === 'all' || visit.status === selectedStatus
    return matchesSearch && matchesType && matchesStatus
  })

  const handleScheduleVisit = () => {
    alert('Schedule a new visit feature will be available soon.')
  }

  const handleRequestCall = (rep) => {
    alert(`Requesting a call with ${rep}...`)
  }

  const handleDownloadReport = (visit) => {
    alert(`Downloading report for ${visit.projectName}...`)
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

  return (
    <div className="p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold mb-1" style={{ color: 'var(--foreground)' }}>
            Site Visits
          </h1>
          <p style={{ color: 'rgba(58,74,107,0.7)' }}>
            Track all site inspections and verifications
          </p>
        </div>
        <button
          onClick={handleScheduleVisit}
          className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105"
          style={{
            background: 'var(--accent)',
            color: 'var(--background-inverse)',
          }}
        >
          <PlusCircle className="w-4 h-4" />
          Schedule Visit
        </button>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Total Visits', value: visitsData.length, icon: Calendar },
          { label: 'Completed', value: visitsData.filter(v => v.status === 'completed').length, icon: CheckCircle },
          { label: 'Scheduled', value: visitsData.filter(v => v.status === 'scheduled').length, icon: Clock },
          { label: 'Reports Generated', value: visitsData.filter(v => v.reportGenerated).length, icon: FileText },
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
              placeholder="Search by project..."
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

          {/* Type Filter */}
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-2 rounded-lg border focus:outline-none cursor-pointer"
            style={{
              background: 'var(--background)',
              borderColor: 'var(--border)',
              color: 'var(--foreground)',
            }}
          >
            {visitTypes.map(type => (
              <option key={type.value} value={type.value}>{type.label}</option>
            ))}
          </select>

          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2 rounded-lg border focus:outline-none cursor-pointer"
            style={{
              background: 'var(--background)',
              borderColor: 'var(--border)',
              color: 'var(--foreground)',
            }}
          >
            <option value="all">All Status</option>
            <option value="completed">Completed</option>
            <option value="scheduled">Scheduled</option>
          </select>

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
      </div>

      {/* Visits Grid/List */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={viewMode === 'grid' 
          ? "grid grid-cols-1 lg:grid-cols-2 gap-5"
          : "space-y-4"
        }
      >
        <AnimatePresence>
          {filteredVisits.map((visit) => {
            const status = statusConfig[visit.status]
            const StatusIcon = status.icon
            const typeConfig = visitTypes.find(t => t.value === visit.type)
            const TypeIcon = typeConfig?.icon || Calendar
            const isUpcoming = visit.status === 'scheduled'
            
            return (
              <motion.div
                key={visit.id}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="rounded-xl overflow-hidden transition-all duration-200 cursor-pointer"
                style={{
                  background: 'var(--background-secondary)',
                  border: '1px solid var(--border)',
                }}
                onClick={() => setSelectedVisit(visit)}
              >
                {viewMode === 'grid' ? (
                  // Grid View
                  <div className="p-5">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ background: 'rgba(212,175,55,0.1)' }}
                        >
                          <TypeIcon className="w-6 h-6" style={{ color: 'var(--accent)' }} />
                        </div>
                        <div>
                          <h3 className="font-semibold" style={{ color: 'var(--foreground)' }}>
                            {visit.projectName}
                          </h3>
                          <p className="text-xs" style={{ color: 'rgba(58,74,107,0.5)' }}>
                            {typeConfig?.label}
                          </p>
                        </div>
                      </div>
                      <div
                        className="flex items-center gap-1 px-2 py-1 rounded-full text-xs"
                        style={{ background: status.bg, color: status.color }}
                      >
                        <StatusIcon className="w-3 h-3" />
                        <span>{status.label}</span>
                      </div>
                    </div>

                    {/* Date & Time */}
                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center gap-2" style={{ color: 'rgba(58,74,107,0.6)' }}>
                        <Calendar className="w-4 h-4" />
                        <span>{visit.date}</span>
                      </div>
                      <div className="flex items-center gap-2" style={{ color: 'rgba(58,74,107,0.6)' }}>
                        <Clock className="w-4 h-4" />
                        <span>{visit.time}</span>
                      </div>
                      <div className="flex items-center gap-2" style={{ color: 'rgba(58,74,107,0.6)' }}>
                        <User className="w-4 h-4" />
                        <span>{visit.representative}</span>
                      </div>
                    </div>

                    {/* Findings Preview */}
                    {visit.findings && (
                      <p className="text-sm mb-4 line-clamp-2" style={{ color: 'rgba(58,74,107,0.7)' }}>
                        {visit.findings}
                      </p>
                    )}

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: 'var(--border)' }}>
                      <div className="flex items-center gap-3">
                        {visit.mediaCount > 0 && (
                          <span className="text-xs flex items-center gap-1" style={{ color: 'rgba(58,74,107,0.5)' }}>
                            <Camera className="w-3 h-3" />
                            {visit.mediaCount} photos
                          </span>
                        )}
                        {visit.reportGenerated && (
                          <span className="text-xs flex items-center gap-1" style={{ color: 'rgba(58,74,107,0.5)' }}>
                            <FileText className="w-3 h-3" />
                            Report ready
                          </span>
                        )}
                      </div>
                      <button
                        onClick={(e) => { e.stopPropagation(); setSelectedVisit(visit); }}
                        className="flex items-center gap-1 text-sm transition-colors hover:gap-2"
                        style={{ color: 'var(--accent)' }}
                      >
                        Details <ChevronRight className="w-3 h-3" />
                      </button>
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
                        <TypeIcon className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                      </div>
                      <div>
                        <h3 className="font-medium" style={{ color: 'var(--foreground)' }}>
                          {visit.projectName}
                        </h3>
                        <div className="flex items-center gap-3 text-xs" style={{ color: 'rgba(58,74,107,0.5)' }}>
                          <span>{visit.date}</span>
                          <span>•</span>
                          <span>{visit.representative}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div
                        className="flex items-center gap-1 px-2 py-1 rounded-full text-xs"
                        style={{ background: status.bg, color: status.color }}
                      >
                        <StatusIcon className="w-3 h-3" />
                        <span>{status.label}</span>
                      </div>
                      <button
                        onClick={(e) => { e.stopPropagation(); setSelectedVisit(visit); }}
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
      {filteredVisits.length === 0 && (
        <div className="text-center py-12">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{ background: 'rgba(212,175,55,0.1)' }}
          >
            <Calendar className="w-10 h-10" style={{ color: 'rgba(212,175,55,0.4)' }} />
          </div>
          <h3 className="text-lg font-medium mb-2" style={{ color: 'var(--foreground)' }}>
            No visits found
          </h3>
          <p className="text-sm mb-4" style={{ color: 'rgba(58,74,107,0.6)' }}>
            Try adjusting your search or filter criteria
          </p>
          <button
            onClick={handleScheduleVisit}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium"
            style={{ background: 'var(--accent)', color: 'var(--background-inverse)' }}
          >
            <PlusCircle className="w-4 h-4" />
            Schedule First Visit
          </button>
        </div>
      )}

      {/* Visit Detail Modal */}
      <AnimatePresence>
        {selectedVisit && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto"
            onClick={() => setSelectedVisit(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-2xl w-full rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
              style={{ background: 'var(--background)' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div
                className="p-6 sticky top-0"
                style={{
                  background: 'var(--background)',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-bold mb-1" style={{ color: 'var(--foreground)' }}>
                      {selectedVisit.projectName}
                    </h2>
                    <p className="text-sm" style={{ color: 'rgba(58,74,107,0.6)' }}>
                      {visitTypes.find(t => t.value === selectedVisit.type)?.label}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedVisit(null)}
                    className="p-2 rounded-lg hover:bg-background-secondary transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Visit Details */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs mb-1" style={{ color: 'rgba(58,74,107,0.5)' }}>Date</p>
                    <p className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>
                      {selectedVisit.date}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs mb-1" style={{ color: 'rgba(58,74,107,0.5)' }}>Time</p>
                    <p className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>
                      {selectedVisit.time}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs mb-1" style={{ color: 'rgba(58,74,107,0.5)' }}>Representative</p>
                    <p className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>
                      {selectedVisit.representative}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs mb-1" style={{ color: 'rgba(58,74,107,0.5)' }}>Status</p>
                    <div
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs"
                      style={{ background: statusConfig[selectedVisit.status]?.bg, color: statusConfig[selectedVisit.status]?.color }}
                    >
                      {statusConfig[selectedVisit.status]?.label}
                    </div>
                  </div>
                </div>

                {/* Findings */}
                {selectedVisit.findings && (
                  <div>
                    <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>Findings</h3>
                    <p className="text-sm" style={{ color: 'rgba(58,74,107,0.7)' }}>
                      {selectedVisit.findings}
                    </p>
                  </div>
                )}

                {/* Recommendations */}
                {selectedVisit.recommendations && (
                  <div>
                    <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>Recommendations</h3>
                    <p className="text-sm" style={{ color: 'rgba(58,74,107,0.7)' }}>
                      {selectedVisit.recommendations}
                    </p>
                  </div>
                )}

                {/* Checklist */}
                {selectedVisit.checklist && selectedVisit.checklist.length > 0 && (
                  <div>
                    <h3 className="font-semibold mb-3" style={{ color: 'var(--foreground)' }}>Inspection Checklist</h3>
                    <div className="space-y-2">
                      {selectedVisit.checklist.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-3 rounded-lg"
                          style={{ background: 'rgba(212,175,55,0.05)' }}
                        >
                          {getChecklistStatusIcon(item.status)}
                          <div className="flex-1">
                            <p className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>
                              {item.item}
                            </p>
                            <p className="text-xs" style={{ color: 'rgba(58,74,107,0.5)' }}>
                              {item.notes}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Media & Actions */}
                <div className="flex flex-wrap gap-3 pt-4">
                  {selectedVisit.mediaCount > 0 && (
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105"
                      style={{ background: 'rgba(212,175,55,0.1)', color: 'var(--accent)' }}
                    >
                      <Camera className="w-4 h-4" />
                      View {selectedVisit.mediaCount} Photos
                    </button>
                  )}
                  {selectedVisit.reportGenerated && (
                    <button
                      onClick={() => handleDownloadReport(selectedVisit)}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105"
                      style={{ background: 'rgba(212,175,55,0.1)', color: 'var(--accent)' }}
                    >
                      <Download className="w-4 h-4" />
                      Download Report
                    </button>
                  )}
                  <button
                    onClick={() => handleRequestCall(selectedVisit.representative)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105"
                    style={{ background: 'rgba(212,175,55,0.1)', color: 'var(--accent)' }}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Contact Rep
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default VisitsPage