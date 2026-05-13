import { UserPlus, FileSignature, LineChart, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Register',
      description: 'Sign up & choose your monitoring package or project-based oversight plan.',
      icon: UserPlus,
    },
    {
      number: '02',
      title: 'Sign Agreement',
      description: 'Sign service contract & authorize GamTrust as your local representative.',
      icon: FileSignature,
    },
    {
      number: '03',
      title: 'Monitor & Report',
      description: 'Receive weekly video, photo, drone updates & cost validation reports.',
      icon: LineChart,
    },
    {
      number: '04',
      title: 'Project Completion',
      description: 'Final verification & project sign-off with complete transparency.',
      icon: CheckCircle,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="how" className="bg-cream py-24">
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
              The Process
            </span>
            <div className="w-6 h-px bg-gold" />
          </div>
          <h2 className="font-display text-[clamp(2.2rem,4vw,3.6rem)] font-light text-navy leading-[1.1] tracking-[-0.02em] mb-4">
            From sign-up to project completion
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold to-transparent mx-auto mb-6" />
          <p className="text-slate max-w-md mx-auto">
            A simple, transparent four-step process that puts you in control from day one.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
        >
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="text-center group"
              >
                {/* Step bubble */}
                <div className="relative w-20 h-20 rounded-full bg-white border border-gold/20 shadow-sm flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-gold/10 group-hover:border-gold group-hover:shadow-md">
                  <Icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-5.5 h-5.5 bg-gold rounded-full flex items-center justify-center shadow-sm">
                    <span className="font-mono text-[0.6rem] font-semibold text-navy">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-navy font-sans text-base font-medium mb-3">
                  {step.title}
                </h4>

                {/* Description */}
                <p className="text-slate text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Decorative bottom line */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        </div>
      </div>
    </section>
  )
}

export default HowItWorks