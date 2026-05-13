import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Building2, Bell, FileText, Phone, Video, Calendar, 
  CheckCircle, Shield, Camera, Truck, ClipboardList,
  Handshake, Eye, RefreshCw, ChevronRight, Image, 
  FileCheck, Clock, Sparkles, MapPin, DollarSign,
  TrendingUp, Users, Award, Download, Share2
} from 'lucide-react'
import { Link } from '@tanstack/react-router'

// Sample project data matching the first client from ClientsPage
const projectData = {
  id: "PRJ-001",
  name: "Bakau Luxury Apartments",
  clientName: "Alpha Jallow",
  location: "Bakau, The Gambia",
  status: "Active",
  progress: 78,
  investment: "$450,000",
  startDate: "January 2025",
  expectedCompletion: "December 2025",
  lastUpdate: "March 2026",
  description: "Foundation approved, reinforcement bars verified. No cost inflation detected. All materials have been validated against current market rates.",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop",
  updates: [
    { type: "photo", title: "Foundation Inspection", date: "March 15, 2026", icon: Image, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop" },
    { type: "video", title: "Weekly Site Walkthrough", date: "March 12, 2026", icon: Video, url: "#" },
    { type: "drone", title: "Aerial Progress Footage", date: "March 10, 2026", icon: Camera, url: "#" },
    { type: "photo", title: "Material Delivery", date: "March 8, 2026", icon: Image, image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop" }
  ],
  alerts: [
    { message: "All material deliveries verified and matched invoices", type: "success" },
    { message: "No cost inflation detected this month", type: "success" },
    { message: "Next inspection scheduled for March 22, 2026", type: "info" }
  ],
  documents: [
    { name: "Land Title Deed", status: "verified", date: "January 5, 2025" },
    { name: "Construction Permit", status: "verified", date: "January 10, 2025" },
    { name: "Material Invoices", status: "verified", date: "Monthly" },
    { name: "Contractor Agreement", status: "verified", date: "January 15, 2025" },
    { name: "Progress Report - February", status: "available", date: "March 1, 2026" }
  ],
  team: [
    { role: "Project Manager", name: "Lamin Sanneh", contact: "+220 123 4567" },
    { role: "Site Supervisor", name: "Babou Ceesay", contact: "+220 123 4568" },
    { role: "Your Account Manager", name: "Fatou Jammeh", contact: "+220 123 4569" }
  ],
  costs: [
    { item: "Foundation Work", budget: "$85,000", actual: "$82,500", variance: "-$2,500" },
    { item: "Structural Materials", budget: "$120,000", actual: "$118,000", variance: "-$2,000" },
    { item: "Labor", budget: "$95,000", actual: "$94,200", variance: "-$800" },
    { item: "Finishing Materials", budget: "$150,000", actual: "$148,000", variance: "-$2,000" }
  ],
  milestones: [
    { name: "Foundation Complete", status: "completed", date: "February 15, 2025", progress: 100 },
    { name: "Structural Framework", status: "in-progress", date: "Expected April 2025", progress: 78 },
    { name: "Roofing", status: "pending", date: "Expected June 2025", progress: 0 },
    { name: "Interior Finishing", status: "pending", date: "Expected August 2025", progress: 0 }
  ]
}

const activities = [
  { date: "March 15, 2026", action: "Weekly progress report sent", icon: FileText, details: "78% complete, on schedule" },
  { date: "March 12, 2026", action: "Material delivery verified", icon: Truck, details: "Cement and steel verified against invoice" },
  { date: "March 10, 2026", action: "Site inspection completed", icon: ClipboardList, details: "Foundation passed quality check" },
  { date: "March 8, 2026", action: "Contractor meeting attended", icon: Handshake, details: "Discussed upcoming milestones" },
  { date: "March 5, 2026", action: "Cost validation completed", icon: DollarSign, details: "No cost inflation detected" }
]

export const SampleDashboardPage = () => {
  const [inspectionRequested, setInspectionRequested] = useState(false)
  const [inspectionStatus, setInspectionStatus] = useState('')
  const [selectedMedia, setSelectedMedia] = useState(null)
  const [activeTab, setActiveTab] = useState('overview')

  const handleRequestInspection = () => {
    setInspectionRequested(true)
    setInspectionStatus('requested')
    
    setTimeout(() => {
      setInspectionStatus('completed')
    }, 2000)
  }

  const handleMediaClick = (update) => {
    setSelectedMedia(update)
  }

  const handleScheduleCall = () => {
    alert("📞 Scheduling a live video call with your local GamTrust representative. You'll receive a calendar link via email within 2 hours.")
  }

  const handleViewDocuments = () => {
    alert("All legal documents verified and stored securely. Contact your account manager for detailed copies.")
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Building2 },
    { id: 'updates', label: 'Updates', icon: Clock },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'costs', label: 'Costs', icon: DollarSign }
  ]

  return (
    <div className="min-h-screen bg-cream">
      {/* Page Header */}
      <section className="relative pt-24 pb-8 bg-cream border-b border-navy/10">
        <div className="container-brand">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              <div>
                <div className="inline-flex items-center gap-2 mb-3">
                  <div className="w-6 h-px bg-gold" />
                  <span className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-gold">
                    Client Dashboard
                  </span>
                  <div className="w-6 h-px bg-gold" />
                </div>
                <h1 className="font-display text-3xl lg:text-4xl font-light text-navy mb-2">
                  {projectData.name}
                </h1>
                <div className="flex items-center gap-4 text-sm text-slate">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {projectData.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {projectData.clientName}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-sm font-mono bg-gold-faint text-gold border border-gold/20">
                  {projectData.status} · {projectData.progress}% complete
                </span>
               
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container-brand py-8 lg:py-12">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 border border-navy/10 shadow-sm">
            <div className="flex items-center gap-2 text-gold mb-2">
              <DollarSign className="w-4 h-4" />
            </div>
            <div className="text-2xl font-bold text-navy">{projectData.investment}</div>
            <div className="text-xs text-slate">Total Investment</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-navy/10 shadow-sm">
            <div className="flex items-center gap-2 text-gold mb-2">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div className="text-2xl font-bold text-navy">{projectData.progress}%</div>
            <div className="text-xs text-slate">Project Progress</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-navy/10 shadow-sm">
            <div className="flex items-center gap-2 text-gold mb-2">
              <Calendar className="w-4 h-4" />
            </div>
            <div className="text-sm font-semibold text-navy">{projectData.expectedCompletion}</div>
            <div className="text-xs text-slate">Expected Completion</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-navy/10 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-500 mb-2">
              <Shield className="w-4 h-4" />
            </div>
            <div className="text-sm font-semibold text-navy">Fully Protected</div>
            <div className="text-xs text-slate">GamTrust Verified</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 border-b border-navy/10">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'text-gold border-b-2 border-gold'
                    : 'text-slate hover:text-navy'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Tab Content */}
        <div className="space-y-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Project Image */}
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src={projectData.image} 
                    alt={projectData.name}
                    className="w-full h-64 object-cover"
                  />
                </div>

                {/* Project Description */}
                <div className="bg-white rounded-xl p-6 border border-navy/10 shadow-sm">
                  <h3 className="font-display text-lg text-navy mb-3">Project Overview</h3>
                  <p className="text-slate leading-relaxed">{projectData.description}</p>
                </div>

                {/* Progress Bar */}
                <div className="bg-white rounded-xl p-6 border border-navy/10 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-display text-lg text-navy">Project Progress</h3>
                    <span className="text-2xl font-bold text-gold">{projectData.progress}%</span>
                  </div>
                  <div className="h-3 bg-gold-faint rounded-full overflow-hidden mb-6">
                    <div 
                      className="h-full bg-gold rounded-full transition-all duration-500"
                      style={{ width: `${projectData.progress}%` }}
                    />
                  </div>
                  
                  {/* Milestones */}
                  <div className="space-y-4">
                    {projectData.milestones.map((milestone, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-navy font-medium">{milestone.name}</span>
                          <span className={`text-xs ${
                            milestone.status === 'completed' ? 'text-emerald-500' : 'text-slate'
                          }`}>
                            {milestone.status === 'completed' ? 'Completed' : milestone.status === 'in-progress' ? 'In Progress' : 'Pending'}
                          </span>
                        </div>
                        <div className="h-2 bg-gold-faint rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gold rounded-full transition-all duration-500"
                            style={{ width: `${milestone.progress}%` }}
                          />
                        </div>
                        <div className="text-xs text-slate mt-1">{milestone.date}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Sidebar */}
              <div className="space-y-6">
                {/* Request Inspection */}
                <div className="bg-white rounded-xl p-6 border border-navy/10 shadow-sm">
                  <h3 className="font-display text-lg text-navy mb-4">Need an Update?</h3>
                  <button
                    onClick={handleRequestInspection}
                    disabled={inspectionRequested}
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-medium transition-all duration-200 ${
                      inspectionRequested 
                        ? 'bg-emerald-50 text-emerald-600 cursor-not-allowed'
                        : 'bg-gold text-navy hover:bg-gold-light'
                    }`}
                  >
                    <RefreshCw className={`w-4 h-4 ${inspectionRequested ? 'animate-spin' : ''}`} />
                    {inspectionRequested ? 'Inspection Requested' : 'Request Fresh Inspection'}
                  </button>
                  
                  <AnimatePresence>
                    {inspectionStatus === 'requested' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-4 p-3 rounded-lg bg-gold-faint border-l-2 border-gold"
                      >
                        <p className="text-xs text-slate">
                          New inspection requested! Our ground agent will provide updates within 24 hours.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Schedule Call */}
                <div className="bg-white rounded-xl p-6 border border-navy/10 shadow-sm">
                  <h3 className="font-display text-lg text-navy mb-4">Talk to Your Agent</h3>
                  <button
                    onClick={handleScheduleCall}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-medium border border-gold text-gold hover:bg-gold/10 transition-all duration-200"
                  >
                    <Video className="w-4 h-4" />
                    Request Video Call
                  </button>
                </div>

                {/* Quick Stats */}
                <div className="bg-white rounded-xl p-6 border border-navy/10 shadow-sm">
                  <h3 className="font-display text-lg text-navy mb-4">Quick Stats</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate">Start Date</span>
                      <span className="text-navy font-medium">{projectData.startDate}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate">Expected Completion</span>
                      <span className="text-navy font-medium">{projectData.expectedCompletion}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate">Last Update</span>
                      <span className="text-navy font-medium">{projectData.lastUpdate}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Updates Tab */}
          {activeTab === 'updates' && (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <h3 className="font-display text-xl text-navy mb-4">Media Gallery</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {projectData.updates.map((update, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -4 }}
                      className="bg-white rounded-xl overflow-hidden border border-navy/10 shadow-sm cursor-pointer"
                      onClick={() => handleMediaClick(update)}
                    >
                      <div className="relative h-48 bg-gold-faint">
                        {update.image ? (
                          <img src={update.image} alt={update.title} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <update.icon className="w-12 h-12 text-gold" />
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <update.icon className="w-4 h-4 text-gold" />
                          <span className="text-sm font-medium text-navy">{update.title}</span>
                        </div>
                        <div className="text-xs text-slate">{update.date}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="font-display text-xl text-navy mb-4">Activity Log</h3>
                <div className="bg-white rounded-xl p-6 border border-navy/10 shadow-sm">
                  <div className="space-y-4">
                    {activities.map((activity, idx) => {
                      const Icon = activity.icon
                      return (
                        <div key={idx} className="flex gap-3 pb-4 border-b last:border-b-0 border-navy/10">
                          <div className="w-8 h-8 rounded-lg bg-gold-faint flex items-center justify-center shrink-0">
                            <Icon className="w-4 h-4 text-gold" />
                          </div>
                          <div>
                            <div className="text-xs text-slate mb-1">{activity.date}</div>
                            <div className="text-sm font-medium text-navy">{activity.action}</div>
                            <div className="text-xs text-slate mt-1">{activity.details}</div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Documents Tab */}
          {activeTab === 'documents' && (
            <div className="bg-white rounded-xl p-6 border border-navy/10 shadow-sm">
              <h3 className="font-display text-xl text-navy mb-4">Legal Documents</h3>
              <div className="space-y-3">
                {projectData.documents.map((doc, idx) => (
                  <div key={idx} className="flex items-center justify-between py-3 border-b last:border-b-0 border-navy/10">
                    <div className="flex items-center gap-3">
                      <FileCheck className="w-4 h-4 text-gold" />
                      <div>
                        <div className="text-sm font-medium text-navy">{doc.name}</div>
                        <div className="text-xs text-slate">Updated: {doc.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-1 rounded ${
                        doc.status === 'verified' ? 'bg-emerald-50 text-emerald-600' : 'bg-gold-faint text-gold'
                      }`}>
                        {doc.status === 'verified' ? 'Verified' : 'Available'}
                      </span>
                      <button className="p-1 hover:text-gold transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Team Tab */}
          {activeTab === 'team' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectData.team.map((member, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-navy/10 shadow-sm text-center">
                  <div className="w-16 h-16 rounded-full bg-gold-faint flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-gold" />
                  </div>
                  <h4 className="font-semibold text-navy mb-1">{member.name}</h4>
                  <p className="text-xs text-gold mb-3">{member.role}</p>
                  <a href={`tel:${member.contact}`} className="text-sm text-slate hover:text-gold transition-colors">
                    {member.contact}
                  </a>
                </div>
              ))}
            </div>
          )}

          {/* Costs Tab */}
          {activeTab === 'costs' && (
            <div className="bg-white rounded-xl p-6 border border-navy/10 shadow-sm">
              <h3 className="font-display text-xl text-navy mb-4">Cost Validation Report</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-navy/10">
                    <tr className="text-left text-sm text-slate">
                      <th className="pb-3">Item</th>
                      <th className="pb-3">Budget</th>
                      <th className="pb-3">Actual</th>
                      <th className="pb-3">Variance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projectData.costs.map((cost, idx) => (
                      <tr key={idx} className="border-b last:border-b-0 border-navy/10">
                        <td className="py-3 text-navy font-medium">{cost.item}</td>
                        <td className="py-3 text-slate">{cost.budget}</td>
                        <td className="py-3 text-slate">{cost.actual}</td>
                        <td className={`py-3 font-medium ${cost.variance.startsWith('-') ? 'text-emerald-500' : 'text-red-500'}`}>
                          {cost.variance}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="border-t border-navy/10">
                    <tr>
                      <td className="pt-3 font-semibold text-navy">Total</td>
                      <td className="pt-3 font-semibold text-navy">$450,000</td>
                      <td className="pt-3 font-semibold text-navy">$442,700</td>
                      <td className="pt-3 font-semibold text-emerald-500">-$7,300</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="mt-4 p-3 bg-gold-faint rounded-lg">
                <p className="text-xs text-slate text-center">
                  All costs have been validated against current market rates. Total savings detected: $7,300
                </p>
              </div>
            </div>
          )}
        </div>

       
      </div>

      {/* Media Preview Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-navy/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-3xl w-full bg-white rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.image ? (
                <img src={selectedMedia.image} alt={selectedMedia.title} className="w-full" />
              ) : (
                <div className="aspect-video bg-gold-faint flex items-center justify-center">
                  <selectedMedia.icon className="w-16 h-16 text-gold" />
                </div>
              )}
              <div className="p-6">
                <h3 className="font-display text-xl text-navy mb-2">{selectedMedia.title}</h3>
                <p className="text-slate text-sm mb-4">{selectedMedia.date}</p>
                <button
                  onClick={() => setSelectedMedia(null)}
                  className="px-6 py-2 rounded-lg bg-gold text-navy font-medium hover:bg-gold-light transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SampleDashboardPage