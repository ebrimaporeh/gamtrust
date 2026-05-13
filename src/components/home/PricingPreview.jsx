import { Link } from '@tanstack/react-router'
import { Check, Star, Sparkles, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export const PricingPreview = () => {
  const plans = [
    {
      name: 'Essential',
      price: '$49',
      period: 'month',
      features: [
        'Monthly site visits',
        'Photo reports',
        'Document verification',
        'Email support',
      ],
      isPopular: false,
      buttonText: 'Select Plan',
      buttonLink: '/get-started',
    },
    {
      name: 'Premium',
      price: '$129',
      period: 'month',
      features: [
        'Weekly updates + drone footage',
        'Live video calls',
        'Contractor oversight',
        'Cost validation',
        'Priority support',
      ],
      isPopular: true,
      buttonText: 'Get Started',
      buttonLink: '/get-started',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'project',
      features: [
        'Full representation',
        'Legal & land checks',
        'Real-time dashboard',
        '24/7 priority support',
        'Dedicated account manager',
      ],
      isPopular: false,
      buttonText: 'Contact Us',
      buttonLink: '/contact',
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section id="pricing" className="bg-cream py-24 lg:py-28">
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
              Investment Protection Plans
            </span>
            <div className="w-6 h-px bg-gold" />
          </div>
          <h2 className="font-display text-[clamp(2.2rem,4vw,3.6rem)] font-light text-navy leading-[1.1] tracking-[-0.02em] mb-4">
            Transparent pricing, no hidden fees
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold to-transparent mx-auto mb-6" />
          <p className="text-slate max-w-md mx-auto">
            Choose the level of oversight that matches the scale of your investment.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className={`relative rounded-xl p-8 transition-all duration-300 ${
                plan.isPopular 
                  ? 'bg-navy shadow-lg scale-[1.02] lg:scale-105' 
                  : 'bg-white border border-navy/10 shadow-sm hover:shadow-md'
              }`}
            >
              {/* Popular badge */}
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 rounded-full bg-gold text-navy">
                  <Star className="w-3 h-3 fill-current" />
                  <span className="text-xs font-bold uppercase tracking-wide">Most Popular</span>
                </div>
              )}

              {/* Plan name */}
              <div className="text-center mb-4">
                <span className="font-mono text-[0.7rem] tracking-[0.14em] uppercase text-gold">
                  {plan.name}
                </span>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <span className={`font-display text-4xl lg:text-5xl font-semibold ${
                  plan.isPopular ? 'text-white' : 'text-navy'
                }`}>
                  {plan.price}
                </span>
                <span className={`text-sm ml-1 ${
                  plan.isPopular ? 'text-slate-light' : 'text-slate'
                }`}>
                  /{plan.period}
                </span>
              </div>

              {/* Divider */}
              <div className={`h-px my-6 ${
                plan.isPopular ? 'bg-white/10' : 'bg-navy/10'
              }`} />

              {/* Features list */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm"
                  >
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 text-gold`} />
                    <span className={plan.isPopular ? 'text-white/75' : 'text-slate'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                to={plan.buttonLink}
                className={`block text-center py-3 px-4 rounded-sm font-semibold transition-all duration-300 ${
                  plan.isPopular
                    ? 'btn-plan-popular'
                    : 'btn-plan-default'
                }`}
              >
                {plan.buttonText}
                {plan.name === 'Enterprise' && (
                  <ArrowRight className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                )}
              </Link>

              {/* Enterprise note */}
              {plan.name === 'Enterprise' && (
                <p className="text-center text-xs text-slate mt-4">
                  Custom pricing based on your needs
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Trust badge at bottom */}
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
              All plans include 14-day money-back guarantee
            </span>
            <Sparkles className="w-4 h-4 text-gold" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingPreview