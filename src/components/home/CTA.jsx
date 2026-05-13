import { Link } from '@tanstack/react-router'
import { ArrowRight, Phone, CheckCircle, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export const CTA = () => {
  const trustPoints = [
    'No hidden fees',
    '100% transparent',
    '24/7 support',
    'Verified contractors',
  ]

  return (
    <section id="cta" className="relative overflow-hidden py-24 lg:py-32 bg-cream border-t border-navy/10">
      {/* Gold stripe across top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* Background texture grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.08) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Soft ambient glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gold/20 blur-[80px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gold/10 blur-[80px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <div className="container-brand relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* LEFT - Large counter / statement */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-gold" />
              <p className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-gold">
                Join Our Community
              </p>
              <div className="w-6 h-px bg-gold" />
            </div>

            {/* Big editorial number */}
            <div className="font-display text-[clamp(5rem,12vw,10rem)] font-bold leading-none mb-4 text-transparent [text-stroke:2px_rgba(201,168,76,0.4)] [-webkit-text-stroke:2px_rgba(201,168,76,0.4)] select-none">
              500+
            </div>

            {/* Heading */}
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,3rem)] font-light text-navy leading-tight tracking-[-0.02em] mb-4">
              Diaspora investors already
              trust{' '}
              <span className="text-gold">GamTrust</span>
            </h2>

            <p className="text-slate text-lg leading-relaxed max-w-[38ch] mx-auto lg:mx-0">
              Full transparency, zero surprises. Your investment, watched over like it's our own.
            </p>
          </motion.div>

          {/* RIGHT - CTA card */}
          <motion.div
            className="flex-1 w-full lg:max-w-sm"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          >
            <div className="bg-white border border-gold/20 rounded-xl p-8 shadow-lg">
              <h3 className="font-display text-[1.35rem] font-medium text-navy mb-2">
                Ready to get started?
              </h3>
              <p className="text-sm text-slate leading-relaxed mb-8">
                Choose a monitoring package or a project-based plan — we'll handle the rest.
              </p>

              {/* Trust checklist */}
              <ul className="mb-8 space-y-3">
                {trustPoints.map((point, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-3 text-sm font-medium text-slate"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                  >
                    <CheckCircle className="w-4 h-4 shrink-0 text-gold" />
                    {point}
                  </motion.li>
                ))}
              </ul>

              {/* Primary CTA */}
              <motion.div
                className="mb-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to="/contact"
                  className="group flex items-center justify-center gap-2 w-full py-3.5 font-semibold text-base rounded-sm bg-gold text-navy shadow-[0_4px_20px_rgba(201,168,76,0.35)] hover:bg-gold-light hover:shadow-[0_8px_28px_rgba(201,168,76,0.45)] transition-all duration-300"
                >
                  Get Started Today
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </motion.div>

              {/* Secondary CTA */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className="group flex items-center justify-center gap-2 w-full py-3.5 font-semibold text-base rounded-sm bg-transparent text-navy border-2 border-gold/30 hover:border-gold hover:bg-gold/5 transition-all duration-300"
                >
                  <Phone className="w-4 h-4 transition-transform duration-200 group-hover:scale-110 text-gold" />
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  )
}

export default CTA