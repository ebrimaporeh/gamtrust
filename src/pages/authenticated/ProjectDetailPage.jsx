import { useState } from 'react'
import { useParams, Link } from '@tanstack/react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowLeft, Building2, MapPin, Calendar, DollarSign, 
  Users, Clock, CheckCircle, AlertCircle, FileText,
  Camera, Video, Download, Eye, MessageCircle,
  Phone, Mail, ChevronRight, Play, Image,
  HardHat, Truck, ClipboardList, FileCheck,
  TrendingUp, Shield, Award, Star
} from 'lucide-react'

// Mock project data
const projectData = {
  id: 1,
  name: 'Bakau Residential Complex',
  location: 'Bakau, The Gambia',
  status: 'active',
  progress: 72,
  startDate: 'January 15, 2026',
  expectedEnd: 'August 15, 2026',
  actualEnd: null,
  budget: 150000,
  invested: 108000,
  currency: 'USD',
  description: 'A modern residential complex featuring 12 luxury apartments with ocean views. The project includes parking, swimming pool, and landscaped gardens.',
  representative: {
    name: 'Modou S.',
    role: 'Project Representative',
    phone: '+220 123 4567',
    email: 'modou@gamtrust.gm',
    avatar: null,
    rating: 4.8
  },
  contractor: {
    name: 'Bakau Construction Ltd',
    contact: 'Lamin J.',
    phone: '+220 987 6543'
  },
  documents: [
    { id: 1, name: 'Building Permit', type: 'permit', date: 'Jan 10, 2026', url: '#' },
    { id: 2, name: 'Land Title Deed', type: 'legal', date: 'Jan 5, 2026', url: '#' },
    { id: 3, name: 'Construction Contract', type: 'contract', date: 'Jan 12, 2026', url: '#' },
  ],
  media: [
    { id: 1, type: 'photo', title: 'Foundation Work', url: '#', date: 'Feb 15, 2026', thumbnail: null },
    { id: 2, type: 'photo', title: 'Wall Construction', url: '#', date: 'Mar 1, 2026', thumbnail: null },
    { id: 3, type: 'video', title: 'Site Walkthrough', url: '#', date: 'Mar 10, 2026', thumbnail: null },
    { id: 4, type: 'drone', title: 'Aerial Progress', url: '#', date: 'Mar 15, 2026', thumbnail: null },
  ]
}

const timelineActivities = [
  {
    id: 1,
    date: 'March 15, 2026',
    title: 'Weekly Progress Report',
    description: 'Foundation completed, second floor walls in progress. All materials verified.',
    type: 'report',
    status: 'completed',
    user: 'Modou S.',
    icon: FileText,
    media: ['photo-1', 'video-1']
  },
  {
    id: 2,
    date: 'March 12, 2026',
    title: 'Material Delivery Verified',
    description: 'Steel reinforcement and cement delivered. Quality checks passed.',
    type: 'verification',
    status: 'completed',
    user: 'Modou S.',
    icon: Truck,
    media: ['photo-2']
  },
  {
    id: 3,
    date: 'March 10, 2026',
    title: 'Site Inspection',
    description: 'Regular site inspection conducted. Work quality meets standards.',
    type: 'inspection',
    status: 'completed',
    user: 'Lamin J.',
    icon: ClipboardList,
    media: ['photo-3', 'photo-4']
  },
  {
    id: 4,
    date: 'March 8, 2026',
    title: 'Contractor Meeting',
    description: 'Progress review meeting with contractor. Timeline adjustments discussed.',
    type: 'meeting',
    status: 'completed',
    user: 'Modou S.',
    icon: Users,
    media: []
  },
  {
    id: 5,
    date: 'March 5, 2026',
    title: 'Cost Validation',
    description: 'Monthly cost analysis completed. No irregularities found.',
    type: 'financial',
    status: 'completed',
    user: 'Fatou N.',
    icon: DollarSign,
    media: []
  },
  {
    id: 6,
    date: 'March 1, 2026',
    title: 'Foundation Inspection',
    description: 'Foundation passed all structural inspections.',
    type: 'inspection',
    status: 'completed',
    user: 'Lamin J.',
    icon: HardHat,
    media: ['photo-5', 'drone-1']
  },
]

const getStatusColor = (status) => {
  const colors = {
    active: { bg: 'rgba(212,175,55,0.1)', text: 'var(--accent)' },
    completed: { bg: 'rgba(16,185,129,0.1)', text: 'var(--success)' },
    pending: { bg: 'rgba(245,158,11,0.1)', text: 'var(--warning)' },
  }
  return colors[status] || colors.active
}

export const ProjectDetailPage = () => {
//   const { projectId } = useParams()
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedMedia, setSelectedMedia] = useState(null)
//   const [showContactModal, setShowContactModal] = useState(false)

  const project = projectData
  const statusColor = getStatusColor(project.status)

  const handleContactRep = () => {
    alert(`Contacting ${project.representative.name}...`)
  }

  const handleDownloadDocument = (doc) => {
    alert(`Downloading ${doc.name}...`)
  }

  const handleViewMedia = (media) => {
    setSelectedMedia(media)
  }

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
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  }

  return (
    <div className="p-4 md:p-6 lg:p-8">
      {/* Back Button */}
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 mb-4 text-sm transition-colors hover:gap-3"
        style={{ color: 'var(--accent)' }}
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Projects
      </Link>

      {/* Header */}
      <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <h1 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--foreground)' }}>
              {project.name}
            </h1>
            <span
              className="px-3 py-1 rounded-full text-sm font-medium"
              style={{ background: statusColor.bg, color: statusColor.text }}
            >
              {project.status === 'active' ? 'In Progress' : project.status}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: 'rgba(58,74,107,0.6)' }}>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {project.location}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              Started: {project.startDate}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              Expected: {project.expectedEnd}
            </span>
          </div>
        </div>
        
        <button
          onClick={handleContactRep}
          className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105"
          style={{
            background: 'var(--accent)',
            color: 'var(--background-inverse)',
          }}
        >
          <MessageCircle className="w-4 h-4" />
          Contact Representative
        </button>
      </div>

      {/* Progress Section */}
      <div className="rounded-xl p-5 mb-6" style={{
        background: 'var(--background-secondary)',
        border: '1px solid var(--border)',
      }}>
        <div className="flex flex-wrap justify-between items-center gap-4 mb-3">
          <h2 className="font-semibold" style={{ color: 'var(--foreground)' }}>Overall Progress</h2>
          <span className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>{project.progress}%</span>
        </div>
        <div className="h-2 rounded-full overflow-hidden mb-4" style={{ background: 'rgba(212,175,55,0.1)' }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${project.progress}%` }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-full rounded-full"
            style={{ background: 'var(--accent)' }}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-xs mb-1" style={{ color: 'rgba(58,74,107,0.5)' }}>Budget</p>
            <p className="font-semibold" style={{ color: 'var(--foreground)' }}>
              ${project.budget.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-xs mb-1" style={{ color: 'rgba(58,74,107,0.5)' }}>Invested</p>
            <p className="font-semibold" style={{ color: 'var(--foreground)' }}>
              ${project.invested.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-xs mb-1" style={{ color: 'rgba(58,74,107,0.5)' }}>Remaining</p>
            <p className="font-semibold" style={{ color: 'var(--foreground)' }}>
              ${(project.budget - project.invested).toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-xs mb-1" style={{ color: 'rgba(58,74,107,0.5)' }}>On Track</p>
            <p className="font-semibold flex items-center gap-1" style={{ color: 'var(--success)' }}>
              <CheckCircle className="w-4 h-4" />
              Yes
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b mb-6 overflow-x-auto pb-px" style={{ borderColor: 'var(--border)' }}>
        {['overview', 'timeline', 'documents', 'media'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="px-4 py-2 text-sm font-medium capitalize transition-all relative whitespace-nowrap"
            style={{
              color: activeTab === tab ? 'var(--accent)' : 'rgba(58,74,107,0.6)',
            }}
          >
            {tab}
            {activeTab === tab && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5"
                style={{ background: 'var(--accent)' }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'overview' && (
          <motion.div
            key="overview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            {/* Description */}
            <div className="rounded-xl p-5" style={{
              background: 'var(--background-secondary)',
              border: '1px solid var(--border)',
            }}>
              <h2 className="font-semibold mb-3" style={{ color: 'var(--foreground)' }}>Project Description</h2>
              <p style={{ color: 'rgba(58,74,107,0.7)', lineHeight: 1.6 }}>
                {project.description}
              </p>
            </div>

            {/* Representative & Contractor */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Representative */}
              <div className="rounded-xl p-5" style={{
                background: 'var(--background-secondary)',
                border: '1px solid var(--border)',
              }}>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(212,175,55,0.1)' }}
                  >
                    <Users className="w-6 h-6" style={{ color: 'var(--accent)' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold" style={{ color: 'var(--foreground)' }}>
                      Local Representative
                    </h3>
                    <p className="text-sm" style={{ color: 'rgba(58,74,107,0.6)' }}>
                      Your boots on the ground
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium mb-1" style={{ color: 'var(--foreground)' }}>
                      {project.representative.name}
                    </p>
                    <div className="flex items-center gap-1 text-sm" style={{ color: 'var(--accent)' }}>
                      <Star className="w-3 h-3 fill-current" />
                      <span>{project.representative.rating}</span>
                      <span className="text-xs" style={{ color: 'rgba(58,74,107,0.5)' }}>(24 reviews)</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 text-sm">
                    <a href={`tel:${project.representative.phone}`} className="flex items-center gap-2 hover:text-accent transition-colors" style={{ color: 'rgba(58,74,107,0.6)' }}>
                      <Phone className="w-4 h-4" />
                      {project.representative.phone}
                    </a>
                    <a href={`mailto:${project.representative.email}`} className="flex items-center gap-2 hover:text-accent transition-colors" style={{ color: 'rgba(58,74,107,0.6)' }}>
                      <Mail className="w-4 h-4" />
                      {project.representative.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Contractor */}
              <div className="rounded-xl p-5" style={{
                background: 'var(--background-secondary)',
                border: '1px solid var(--border)',
              }}>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(212,175,55,0.1)' }}
                  >
                    <HardHat className="w-6 h-6" style={{ color: 'var(--accent)' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold" style={{ color: 'var(--foreground)' }}>
                      Contractor
                    </h3>
                    <p className="text-sm" style={{ color: 'rgba(58,74,107,0.6)' }}>
                      Construction partner
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium mb-1" style={{ color: 'var(--foreground)' }}>
                      {project.contractor.name}
                    </p>
                    <p className="text-sm" style={{ color: 'rgba(58,74,107,0.6)' }}>
                      Contact: {project.contractor.contact}
                    </p>
                  </div>
                  <a href={`tel:${project.contractor.phone}`} className="flex items-center gap-2 text-sm hover:text-accent transition-colors" style={{ color: 'rgba(58,74,107,0.6)' }}>
                    <Phone className="w-4 h-4" />
                    {project.contractor.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Total Reports', value: '24', icon: FileText },
                { label: 'Site Visits', value: '12', icon: Eye },
                { label: 'Media Files', value: '34', icon: Camera },
                { label: 'Documents', value: '8', icon: FileCheck },
              ].map((metric) => {
                const Icon = metric.icon
                return (
                  <div
                    key={metric.label}
                    className="rounded-xl p-4 text-center"
                    style={{
                      background: 'var(--background-secondary)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-2"
                      style={{ background: 'rgba(212,175,55,0.1)' }}
                    >
                      <Icon className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                    </div>
                    <p className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>
                      {metric.value}
                    </p>
                    <p className="text-xs" style={{ color: 'rgba(58,74,107,0.5)' }}>
                      {metric.label}
                    </p>
                  </div>
                )
              })}
            </div>
          </motion.div>
        )}

        {activeTab === 'timeline' && (
          <motion.div
            key="timeline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative"
          >
            {/* Vertical Timeline */}
            <div className="relative pl-8 md:pl-12">
              {/* Vertical Line */}
              <div
                className="absolute left-3 md:left-5 top-3 bottom-3 w-0.5"
                style={{ background: 'rgba(212,175,55,0.3)' }}
              />
              
              {timelineActivities.map((activity, index) => {
                const Icon = activity.icon
                return (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="relative mb-8 last:mb-0"
                  >
                    {/* Timeline Dot */}
                    <div
                      className="absolute left-[-2.25rem] md:left-[-3rem] top-0 w-4 h-4 rounded-full border-2"
                      style={{
                        background: 'var(--background)',
                        borderColor: 'var(--accent)',
                      }}
                    />
                    
                    {/* Content */}
                    <div
                      className="rounded-xl p-5"
                      style={{
                        background: 'var(--background-secondary)',
                        border: '1px solid var(--border)',
                      }}
                    >
                      <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center"
                            style={{ background: 'rgba(212,175,55,0.1)' }}
                          >
                            <Icon className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                          </div>
                          <div>
                            <h3 className="font-semibold" style={{ color: 'var(--foreground)' }}>
                              {activity.title}
                            </h3>
                            <p className="text-xs" style={{ color: 'rgba(58,74,107,0.5)' }}>
                              {activity.date} • by {activity.user}
                            </p>
                          </div>
                        </div>
                        <span
                          className="text-xs px-2 py-1 rounded-full"
                          style={{
                            background: 'rgba(16,185,129,0.1)',
                            color: 'var(--success)',
                          }}
                        >
                          Completed
                        </span>
                      </div>
                      
                      <p className="text-sm mb-3" style={{ color: 'rgba(58,74,107,0.7)' }}>
                        {activity.description}
                      </p>
                      
                      {activity.media.length > 0 && (
                        <div className="flex gap-2">
                          {activity.media.slice(0, 3).map((media, idx) => (
                            <button
                              key={idx}
                              className="text-xs px-2 py-1 rounded-full transition-colors hover:bg-background"
                              style={{ background: 'rgba(212,175,55,0.08)', color: 'var(--accent)' }}
                            >
                              📷 View Media
                            </button>
                          ))}
                          {activity.media.length > 3 && (
                            <span className="text-xs" style={{ color: 'rgba(58,74,107,0.5)' }}>
                              +{activity.media.length - 3} more
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}

        {activeTab === 'documents' && (
          <motion.div
            key="documents"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {project.documents.map((doc) => (
              <motion.div
                key={doc.id}
                variants={itemVariants}
                className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl"
                style={{
                  background: 'var(--background-secondary)',
                  border: '1px solid var(--border)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(212,175,55,0.1)' }}
                  >
                    <FileText className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                  </div>
                  <div>
                    <h3 className="font-medium" style={{ color: 'var(--foreground)' }}>
                      {doc.name}
                    </h3>
                    <p className="text-xs" style={{ color: 'rgba(58,74,107,0.5)' }}>
                      {doc.type} • Uploaded {doc.date}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleDownloadDocument(doc)}
                  className="p-2 rounded-lg transition-colors hover:bg-background"
                  style={{ color: 'rgba(58,74,107,0.5)' }}
                >
                  <Download className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === 'media' && (
          <motion.div
            key="media"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {project.media.map((media) => (
              <motion.div
                key={media.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                onClick={() => handleViewMedia(media)}
                className="rounded-xl overflow-hidden cursor-pointer transition-all duration-200"
                style={{
                  background: 'var(--background-secondary)',
                  border: '1px solid var(--border)',
                }}
              >
                <div
                  className="aspect-video flex items-center justify-center"
                  style={{ background: 'rgba(212,175,55,0.05)' }}
                >
                  {media.type === 'video' || media.type === 'drone' ? (
                    <Play className="w-12 h-12" style={{ color: 'rgba(212,175,55,0.5)' }} />
                  ) : (
                    <Image className="w-12 h-12" style={{ color: 'rgba(212,175,55,0.5)' }} />
                  )}
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>
                    {media.title}
                  </p>
                  <p className="text-xs" style={{ color: 'rgba(58,74,107,0.5)' }}>
                    {media.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Media Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full rounded-2xl overflow-hidden"
              style={{ background: 'var(--background)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="aspect-video flex items-center justify-center"
                style={{ background: 'rgba(0,0,0,0.5)' }}
              >
                {selectedMedia.type === 'video' || selectedMedia.type === 'drone' ? (
                  <div className="text-center">
                    <Play className="w-16 h-16 mx-auto mb-4" style={{ color: 'rgba(212,175,55,0.6)' }} />
                    <p className="text-white">Video preview would play here</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <Image className="w-16 h-16 mx-auto mb-4" style={{ color: 'rgba(212,175,55,0.6)' }} />
                    <p className="text-white">Image preview would appear here</p>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                  {selectedMedia.title}
                </h3>
                <p className="text-sm" style={{ color: 'rgba(58,74,107,0.6)' }}>
                  {selectedMedia.date}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProjectDetailPage