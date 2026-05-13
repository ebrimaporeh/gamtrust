import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { 
  HardHat, ChartLine, Gavel, Search, Video, Handshake, 
  CreditCard, Building2, FileCheck, Users, TrendingUp,
  ArrowRight, CheckCircle, Shield, Sparkles, Star
} from 'lucide-react'

// Structured data for services
const servicesData = [
  {
    id: 1,
    title: "Construction Monitoring",
    icon: HardHat,
    description: "Site visits, material verification, foundation-to-completion tracking & cost validation to prevent inflation and poor quality.",
    features: [
      "Weekly site inspections",
      "Material quality checks",
      "Cost validation",
      "Progress photography"
    ]
  },
  {
    id: 2,
    title: "Business Monitoring",
    icon: ChartLine,
    description: "Operational supervision, financial checks, staff & inventory verification for diaspora-funded businesses.",
    features: [
      "Financial activity review",
      "Staff verification",
      "Inventory audits",
      "Performance reports"
    ]
  },
  {
    id: 3,
    title: "Legal & Document Verification",
    icon: Gavel,
    description: "Confirm business registrations, land ownership, contracts & agreements before any investment is made.",
    features: [
      "Land title verification",
      "Business registration checks",
      "Contract review",
      "Legal compliance"
    ]
  },
  {
    id: 4,
    title: "Supplier & Contractor Sourcing",
    icon: Search,
    description: "Vetted builders, suppliers, and technicians to reduce fraud risk and ensure quality service delivery.",
    features: [
      "Background checks",
      "Previous work verification",
      "Price negotiation",
      "Quality guarantees"
    ]
  },
  {
    id: 5,
    title: "Real-Time Reporting",
    icon: Video,
    description: "Video updates, drone footage, photo evidence & scheduled calls to keep you informed every step of the way.",
    features: [
      "Weekly video updates",
      "Drone aerial footage",
      "Live video calls",
      "Written progress reports"
    ]
  },
  {
    id: 6,
    title: "Representation Service",
    icon: Handshake,
    description: "Act as your official local agent, attend meetings, negotiate contracts, and supervise agreements on your behalf.",
    features: [
      "Meeting attendance",
      "Contract negotiation",
      "On-site supervision",
      "Legal representation"
    ]
  }
]

// Revenue streams data
const revenueStreams = [
  { icon: CreditCard, title: "Subscription Plans", description: "Monthly and quarterly monitoring packages" },
  { icon: Building2, title: "Project-Based Fees", description: "Fixed fee for construction or business oversight" },
  { icon: FileCheck, title: "Verification Fees", description: "Charges for document and legal verification" },
  { icon: Users, title: "Sourcing Commission", description: "Small margin when connecting clients to trusted suppliers" }
]

// Stats data
const stats = [
  { value: "100+", label: "Projects Monitored", icon: TrendingUp },
  { value: "98%", label: "Client Satisfaction", icon: Shield },
  { value: "24/7", label: "Digital Reporting", icon: Sparkles }
]

export const ServicesPage = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <main className="min-h-screen bg-cream">
      {/* Page Header */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-cream border-b border-navy/10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gold/5 blur-[100px]" />
        </div>
        
        <div className="container-brand relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-gold" />
              <span className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-gold">
                Our Offerings
              </span>
              <div className="w-6 h-px bg-gold" />
            </div>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light text-navy leading-[1.1] tracking-[-0.02em] mb-4">
              Comprehensive monitoring & protection
            </h1>
            <div className="w-12 h-0.5 bg-gradient-to-r from-gold to-transparent mx-auto mb-6" />
            <p className="text-slate text-lg max-w-2xl mx-auto">
              From construction oversight to legal verification — we ensure every dalasi is accounted for.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28">
        <div className="container-brand">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {servicesData.map((service) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="group bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-lg border border-navy/10"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gold-faint flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-105">
                    <Icon className="w-7 h-7 text-gold" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-semibold text-navy mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
                        <span className="text-slate">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Request Link */}
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 group-hover:gap-3 text-gold hover:text-gold-light"
                  >
                    Request this service
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-y border-navy/10">
        <div className="container-brand">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center p-6 rounded-xl bg-cream border border-navy/10"
                >
                  <div className="w-12 h-12 rounded-full bg-gold-faint flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <div className="font-display text-3xl font-semibold text-navy mb-1">
                    {stat.value}
                  </div>
                  <div className="text-slate text-sm">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Revenue Model Section */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="container-brand">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <div className="w-6 h-px bg-gold" />
              <span className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-gold">
                Transparent Pricing
              </span>
              <div className="w-6 h-px bg-gold" />
            </div>
            <h2 className="font-display text-[clamp(2rem,3vw,3rem)] font-light text-navy leading-[1.1] tracking-[-0.02em] mb-4">
              Revenue Model at a Glance
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-gold to-transparent mx-auto mb-6" />
            <p className="text-slate text-lg">
              Transparent pricing for complete peace of mind
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {revenueStreams.map((stream, index) => {
              const Icon = stream.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="text-center p-6 rounded-xl transition-all duration-300 bg-white border border-navy/10 shadow-sm"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gold-faint flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                  <h4 className="font-display text-lg font-semibold text-navy mb-2">
                    {stream.title}
                  </h4>
                  <p className="text-sm text-slate">
                    {stream.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

     
    </main>
  )
}

export default ServicesPage