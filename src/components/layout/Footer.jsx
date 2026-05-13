import { Link } from '@tanstack/react-router'
import { Mail, Phone, MapPin, Clock, ArrowUp, Heart } from 'lucide-react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import gamtrustLogo from '/gamtrust-logo.png'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: FaFacebookF, href: 'https://facebook.com/gamtrust', label: 'Facebook', color: '#1877F2' },
    { icon: FaTwitter, href: 'https://twitter.com/gamtrust', label: 'Twitter', color: '#1DA1F2' },
    { icon: FaLinkedinIn, href: 'https://linkedin.com/company/gamtrust', label: 'LinkedIn', color: '#0077B5' },
    { icon: FaWhatsapp, href: 'https://wa.me/2201234567', label: 'WhatsApp', color: '#25D366' },
    { icon: FaInstagram, href: 'https://instagram.com/gamtrust', label: 'Instagram', color: '#E4405F' },
  ]

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/clients', label: 'Clients' },
    { path: '/pricing', label: 'Pricing' },
  ]

  const serviceAreas = [
    'Banjul & Kanifing',
    'Serrekunda & Brikama',
    'Bakau & Fajara',
    'Kololi & Kotu',
    'All major areas',
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  }

  return (
    <>
      <footer className="relative bg-ink border-t border-gold/20 mt-auto overflow-hidden py-12 lg:py-16">
        {/* Decorative top gold line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

        {/* Background dot pattern */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(201,168,76,0.2) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="container-brand relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          >
            {/* Brand Section */}
            <motion.div variants={itemVariants}>
              <Link to="/" className="inline-flex items-center gap-3 mb-4 group">
                <img 
                  src={gamtrustLogo} 
                  alt="GamTrust Logo" 
                  className="h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                />
                <div className="hidden sm:block">
                 
                  <p className="text-[0.65rem] font-mono tracking-wide text-slate-light/80">
                    Investment Protection
                  </p>
                </div>
              </Link>

              <p className="text-sm mb-4 leading-relaxed text-slate-light">
                Protecting diaspora investments across The Gambia. Transparency is our promise.
              </p>

              <div className="flex gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="p-2 rounded bg-gold-faint border border-gold/20 text-slate-light hover:text-white transition-all duration-300 hover:scale-110"
                      whileHover={{
                        backgroundColor: social.color,
                        borderColor: social.color,
                      }}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="font-mono text-[0.68rem] tracking-[0.14em] uppercase text-gold mb-4">
                Quick Links
              </h3>
              <ul className="flex flex-col gap-2">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-slate-light hover:text-gold transition-all duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="font-mono text-[0.68rem] tracking-[0.14em] uppercase text-gold mb-4">
                Contact Info
              </h3>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-3 text-sm text-slate-light group">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-slate-light group-hover:text-gold transition-colors" />
                  <span>+220 123 4567</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-light group">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-slate-light group-hover:text-gold transition-colors" />
                  <span>protect@gamtrust.gm</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-light">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-slate-light" />
                  <span>Fajara, The Gambia</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-light">
                  <Clock className="w-4 h-4 mt-0.5 shrink-0 text-slate-light" />
                  <span>Mon–Fri: 9AM – 6PM</span>
                </li>
              </ul>
            </motion.div>

            {/* Service Areas */}
            <motion.div variants={itemVariants}>
              <h3 className="font-mono text-[0.68rem] tracking-[0.14em] uppercase text-gold mb-4">
                Service Areas
              </h3>
              <ul className="flex flex-col gap-2">
                {serviceAreas.map((area) => (
                  <li
                    key={area}
                    className="text-sm text-slate-light transition-all duration-200 hover:translate-x-1 hover:text-gold cursor-default"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="border-t border-white/10 mt-8 pt-6 text-center"
          >
            <p className="text-xs text-slate-light">
              &copy; {currentYear} GamTrust. All rights reserved.
              <span className="mx-2">•</span>
              <a href="#" className="hover:text-gold transition-colors">
                Privacy Policy
              </a>
              <span className="mx-2">•</span>
              <a href="#" className="hover:text-gold transition-colors">
                Terms of Service
              </a>
            </p>
            <p className="text-xs mt-2 flex items-center justify-center gap-1 text-slate-light/70">
              Made with <Heart className="w-3 h-3 text-gold" /> for The Gambia
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0 }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 bg-gold text-navy"
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </>
  )
}

export default Footer