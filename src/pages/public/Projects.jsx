import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MapPin, Calendar, TrendingUp, CheckCircle, 
  Shield, Sparkles, ExternalLink, ChevronRight,
  Star, Building2, Users, Award, Clock, DollarSign
} from 'lucide-react'
import { Link } from '@tanstack/react-router'

// Client/Project data with professional site images
const projectsData = [
  {
    id: 1,
    companyName: "Bakau Luxury Apartments",
    clientName: "Alpha Jallow",
    location: "Bakau, The Gambia",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
    category: "Residential",
    investment: "$450,000",
    progress: 78,
    completionDate: "December 2025",
    testimonial: "GamTrust gave me complete peace of mind. I can finally invest back home without worrying about fraud.",
    testimonialAuthor: "Alpha Jallow, London UK",
    stats: [
      { label: "Site Visits", value: "24" },
      { label: "Reports", value: "18" },
      { label: "Money Saved", value: "$12K" }
    ],
    features: ["Foundation Complete", "Structural Work 78%", "On Budget", "Quality Verified"]
  },
  {
    id: 2,
    companyName: "Serrekunda Retail Center",
    clientName: "Mariama Sillah",
    location: "Serrekunda, The Gambia",
    image: "https://images.unsplash.com/photo-1600607687644-aac4c9a9c0b8?w=800&h=500&fit=crop",
    logo: "https://images.unsplash.com/photo-1577412647305-991150c7d163?w=100&h=100&fit=crop",
    category: "Commercial",
    investment: "$780,000",
    progress: 45,
    completionDate: "August 2026",
    testimonial: "The weekly drone footage and cost validation saved me over $15,000 in inflated contractor bids.",
    testimonialAuthor: "Mariama Sillah, New York USA",
    stats: [
      { label: "Site Visits", value: "18" },
      { label: "Reports", value: "12" },
      { label: "Money Saved", value: "$15K" }
    ],
    features: ["Foundation Complete", "Structural Work 45%", "Cost Validated", "Monthly Reports"]
  },
  {
    id: 3,
    companyName: "Fajara Medical Clinic",
    clientName: "Dr. Amadou Kanteh",
    location: "Fajara, The Gambia",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6e8e0a?w=800&h=500&fit=crop",
    logo: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=100&h=100&fit=crop",
    category: "Healthcare",
    investment: "$920,000",
    progress: 92,
    completionDate: "June 2025",
    testimonial: "As a doctor, I needed precision and transparency. GamTrust delivered beyond expectations.",
    testimonialAuthor: "Dr. Amadou Kanteh, Berlin Germany",
    stats: [
      { label: "Site Visits", value: "32" },
      { label: "Reports", value: "28" },
      { label: "Money Saved", value: "$22K" }
    ],
    features: ["Almost Complete", "Equipment Installed", "Staff Training", "Opening Soon"]
  },
  {
    id: 4,
    companyName: "Kololi Beach Resort",
    clientName: "Fatou Njie",
    location: "Kololi, The Gambia",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85a?w=800&h=500&fit=crop",
    logo: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=100&h=100&fit=crop",
    category: "Hospitality",
    investment: "$1,200,000",
    progress: 34,
    completionDate: "March 2026",
    testimonial: "Managing a resort development from abroad seemed impossible until I found GamTrust.",
    testimonialAuthor: "Fatou Njie, Atlanta USA",
    stats: [
      { label: "Site Visits", value: "15" },
      { label: "Reports", value: "10" },
      { label: "Money Saved", value: "$28K" }
    ],
    features: ["Land Clearing", "Foundation Started", "Design Approved", "Weekly Updates"]
  },
  {
    id: 5,
    companyName: "Bijilo Tech Hub",
    clientName: "Momodou Cham",
    location: "Bijilo, The Gambia",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
    category: "Commercial",
    investment: "$650,000",
    progress: 67,
    completionDate: "October 2025",
    testimonial: "The real-time dashboard and video updates made me feel like I was there in person.",
    testimonialAuthor: "Momodou Cham, Toronto Canada",
    stats: [
      { label: "Site Visits", value: "22" },
      { label: "Reports", value: "19" },
      { label: "Money Saved", value: "$18K" }
    ],
    features: ["Structural Work 67%", "Electrical Started", "On Schedule", "Video Reports"]
  },
  {
    id: 6,
    companyName: "Brusubi Housing Estate",
    clientName: "Sally Ceesay",
    location: "Brusubi, The Gambia",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop",
    logo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop",
    category: "Residential",
    investment: "$540,000",
    progress: 100,
    completionDate: "Completed",
    testimonial: "My house was completed on time and under budget. Couldn't be happier!",
    testimonialAuthor: "Sally Ceesay, Sydney Australia",
    stats: [
      { label: "Site Visits", value: "40" },
      { label: "Reports", value: "35" },
      { label: "Money Saved", value: "$25K" }
    ],
    features: ["Completed", "Furnished", "Ready for Occupancy", "Certificate Issued"]
  }
]

const categories = ['all', 'Residential', 'Commercial', 'Healthcare', 'Hospitality']

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [filter, setFilter] = useState('all')

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter)

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-cream border-b border-navy/10">
        <div className="container-brand">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-gold" />
              <span className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-gold">
                Success Stories
              </span>
              <div className="w-6 h-px bg-gold" />
            </div>
            <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light text-navy leading-[1.1] tracking-[-0.02em] mb-4">
              Projects protected by GamTrust
            </h1>
            <div className="w-12 h-0.5 bg-gradient-to-r from-gold to-transparent mx-auto mb-6" />
            <p className="text-slate text-lg max-w-2xl mx-auto">
              See how diaspora investors are successfully building their dreams back home with our protection
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-white border-b border-navy/10">
        <div className="container-brand">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-navy">500+</div>
              <div className="text-xs text-slate">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-navy">$85M+</div>
              <div className="text-xs text-slate">Investments Protected</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-navy">98%</div>
              <div className="text-xs text-slate">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-navy">100+</div>
              <div className="text-xs text-slate">Projects Monitored</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8">
        <div className="container-brand">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? 'bg-gold text-navy shadow-sm'
                    : 'bg-white text-slate border border-navy/20 hover:border-gold'
                }`}
              >
                {cat === 'all' ? 'All Projects' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 pb-24">
        <div className="container-brand">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="group bg-white rounded-xl overflow-hidden border border-navy/10 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.companyName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-gold text-navy">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Progress Badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-white font-medium">Progress</span>
                      <span className="text-xs text-gold font-semibold">{project.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gold rounded-full transition-all duration-500"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>

                  {project.progress === 100 && (
                    <div className="absolute top-4 right-4 bg-emerald-500 text-white px-2 py-1 rounded text-xs font-semibold flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Completed
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-navy mb-1">
                        {project.companyName}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-slate">
                        <MapPin className="w-3 h-3" />
                        {project.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <Star className="w-3 h-3 text-gold fill-current" />
                      <Star className="w-3 h-3 text-gold fill-current" />
                      <Star className="w-3 h-3 text-gold fill-current" />
                      <Star className="w-3 h-3 text-gold fill-current" />
                      <Star className="w-3 h-3 text-gold fill-current" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm mb-3">
                    <span className="text-slate">Investment</span>
                    <span className="text-navy font-semibold">{project.investment}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.slice(0, 2).map((feature, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-full bg-gold-faint text-slate">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-slate italic line-clamp-2 mb-4">
                    "{project.testimonial}"
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-navy/10">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full overflow-hidden bg-gold-faint">
                        <img 
                          src={project.logo} 
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-navy">{project.clientName}</div>
                        <div className="text-xs text-slate">Client</div>
                      </div>
                    </div>
                    <button className="text-gold hover:text-gold-light transition-colors">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 inset top-10 bg-navy/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={() => setSelectedProject(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Hero Image */}
            <div className="relative h-80">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.companyName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/30 transition-colors text-xl"
              >
                ×
              </button>
              <div className="absolute bottom-6 left-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-gold text-navy mb-2 inline-block">
                  {selectedProject.category}
                </span>
                <h2 className="font-display text-3xl text-white mb-1">{selectedProject.companyName}</h2>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <MapPin className="w-4 h-4" />
                  {selectedProject.location}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Left Column - Details */}
                <div className="md:col-span-2">
                  <div className="mb-6">
                    <h3 className="font-display text-xl text-navy mb-3">Project Overview</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gold-faint rounded-lg p-3">
                        <div className="text-xs text-slate mb-1">Investment Amount</div>
                        <div className="text-lg font-semibold text-navy">{selectedProject.investment}</div>
                      </div>
                      <div className="bg-gold-faint rounded-lg p-3">
                        <div className="text-xs text-slate mb-1">Expected Completion</div>
                        <div className="text-lg font-semibold text-navy">{selectedProject.completionDate}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-display text-xl text-navy mb-3">Key Features</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedProject.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-slate">
                          <CheckCircle className="w-4 h-4 text-gold" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-display text-xl text-navy mb-3">Project Statistics</h3>
                    <div className="grid grid-cols-3 gap-4">
                      {selectedProject.stats.map((stat, i) => (
                        <div key={i} className="text-center p-3 bg-cream rounded-lg">
                          <div className="text-xl font-bold text-navy">{stat.value}</div>
                          <div className="text-xs text-slate">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column - Testimonial */}
                <div className="bg-gold-faint rounded-xl p-5">
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="w-4 h-4 text-gold fill-current" />
                    <Star className="w-4 h-4 text-gold fill-current" />
                    <Star className="w-4 h-4 text-gold fill-current" />
                    <Star className="w-4 h-4 text-gold fill-current" />
                    <Star className="w-4 h-4 text-gold fill-current" />
                  </div>
                  <p className="text-slate italic leading-relaxed mb-4">
                    "{selectedProject.testimonial}"
                  </p>
                  <div className="flex items-center gap-3 pt-3 border-t border-gold/20">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gold-faint">
                      <img 
                        src={selectedProject.logo} 
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-navy">{selectedProject.testimonialAuthor}</div>
                      <div className="text-xs text-slate">Verified Client</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Section */}
              <div className="mt-8 pt-6 border-t border-navy/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-navy">Overall Progress</span>
                  <span className="text-sm font-semibold text-gold">{selectedProject.progress}%</span>
                </div>
                <div className="h-2 bg-gold-faint rounded-full overflow-hidden mb-6">
                  <div 
                    className="h-full bg-gold rounded-full transition-all duration-500"
                    style={{ width: `${selectedProject.progress}%` }}
                  />
                </div>

                <div className="flex gap-3">
                  <Link
                    to="/get-started"
                    className="flex-1 text-center py-3 rounded-lg bg-gold text-navy font-semibold hover:bg-gold-light transition-colors"
                  >
                    Start Your Project
                  </Link>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 rounded-lg border border-navy/20 text-slate hover:border-gold hover:text-gold transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

     
    </div>
  )
}

export default Projects