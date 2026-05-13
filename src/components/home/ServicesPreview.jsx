import { Link } from '@tanstack/react-router'
import { HardHat, ChartPie, Gavel, Truck, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export const ServicesPreview = () => {
  const services = [
    {
      title: 'Construction Monitoring',
      icon: HardHat,
      description: 'Site visits, material verification, foundation-to-completion tracking and cost validation to prevent inflation and poor quality.',
    },
    {
      title: 'Business Monitoring',
      icon: ChartPie,
      description: 'Operational supervision, financial checks, staff and inventory verification for diaspora-funded businesses.',
    },
    {
      title: 'Legal Verification',
      icon: Gavel,
      description: 'Confirm business registrations, land ownership, contracts and agreements before any investment is made.',
    },
    {
      title: 'Supplier Sourcing',
      icon: Truck,
      description: 'Vetted builders, suppliers, and technicians to reduce fraud risk and ensure quality service delivery.',
    },
  ]

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section id="services" className="bg-cream py-12">
      <div className="container-brand">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-px bg-gold" />
            <span className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-gold">
              What We Do
            </span>
            <div className="w-6 h-px bg-gold" />
          </div>
          <h2 className="font-display text-[clamp(2.2rem,4vw,3.6rem)] font-light text-navy leading-[1.1] tracking-[-0.02em] mb-4">
            Comprehensive protection at every stage
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold to-transparent mx-auto mb-6" />
          <p className="text-slate max-w-md mx-auto">
            Six interconnected services designed to give you complete visibility and control over your investments in The Gambia.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-navy/10 border border-navy/10 rounded-lg overflow-hidden"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="group bg-white p-8 transition-all duration-300 relative overflow-hidden cursor-default"
              >
                {/* Gold top border on hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                
                {/* Icon container */}
                <div className="mb-5">
                  <Icon className="w-10 h-10 text-gold" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-medium text-navy mb-3  transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate text-sm leading-relaxed group-hover:text-slate-light transition-colors">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border border-gold text-gold font-medium transition-all duration-300 hover:bg-gold/10 hover:gap-3 group"
          >
            View All Services
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPreview