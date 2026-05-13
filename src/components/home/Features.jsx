import { Eye, Shield, Handshake, LineChart, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export const Features = () => {
  const features = [
    {
      title: 'Real-Time Monitoring',
      icon: Eye,
      description: 'Live updates, drone footage, and video reports keep you informed every step of the way.',
    },
    {
      title: 'Fraud Prevention',
      icon: Shield,
      description: 'Rigorous verification and cost validation prevent mismanagement and inflation.',
    },
    {
      title: 'Local Representation',
      icon: Handshake,
      description: 'Your trusted boots on the ground, attending meetings and supervising agreements.',
    },
    {
      title: 'Transparent Reporting',
      icon: LineChart,
      description: 'Detailed reports with photo evidence, cost breakdowns, and progress tracking.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
    <section className="py-24 lg:py-28 bg-cream">
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
              Why Trust Us
            </span>
            <div className="w-6 h-px bg-gold" />
          </div>
          <h2 className="font-display text-[clamp(2.2rem,4vw,3.6rem)] font-light text-navy leading-[1.1] tracking-[-0.02em] mb-4">
            Why Choose GamTrust?
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold to-transparent mx-auto mb-6" />
          <p className="text-slate max-w-md mx-auto">
            Trusted by diaspora investors across the globe
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="group bg-white rounded-xl p-6 text-center transition-all duration-300 border border-navy/10 shadow-sm hover:shadow-md"
              >
                {/* Icon container */}
                <div className="w-16 h-16 rounded-full bg-gold-faint flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-105">
                  <Icon className="w-8 h-8 text-gold" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-medium text-navy mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Trust indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-faint border border-gold/20">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-slate">
              Join 100+ satisfied diaspora investors
            </span>
            <Sparkles className="w-4 h-4 text-gold" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features