import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, Phone, MapPin, Clock, Send, MessageCircle, 
  User, Building, Globe, CheckCircle, AlertCircle,
  Sparkles, ArrowRight, Shield
} from 'lucide-react'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa'
import { Link } from '@tanstack/react-router'

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    serviceInterest: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const serviceOptions = [
    'Construction Monitoring',
    'Business Monitoring',
    'Legal & Document Verification',
    'Supplier & Contractor Sourcing',
    'Real-Time Reporting',
    'Representation Service',
    'Other'
  ]

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value) return 'Name is required'
        if (value.length < 2) return 'Name must be at least 2 characters'
        return ''
      case 'email':
        if (!value) return 'Email is required'
        if (!/\S+@\S+\.\S+/.test(value)) return 'Please enter a valid email address'
        return ''
      case 'phone':
        if (!value) return 'Phone number is required'
        return ''
      case 'message':
        if (!value) return 'Message is required'
        if (value.length < 10) return 'Message must be at least 10 characters'
        return ''
      default:
        return ''
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    if (touched[name]) {
      const error = validateField(name, value)
      setErrors(prev => ({ ...prev, [name]: error }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    const error = validateField(name, value)
    setErrors(prev => ({ ...prev, [name]: error }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const allTouched = { name: true, email: true, phone: true, message: true }
    setTouched(allTouched)
    
    const newErrors = {}
    Object.keys(formData).forEach(key => {
      if (['name', 'email', 'phone', 'message'].includes(key)) {
        const error = validateField(key, formData[key])
        if (error) newErrors[key] = error
      }
    })
    
    setErrors(newErrors)
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true)
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
            serviceInterest: ''
          })
          setTouched({})
          setErrors({})
        }, 3000)
      }, 1500)
    }
  }

  const contactInfo = [
    { icon: Phone, title: "Phone", details: "+220 123 4567", sub: "Mon-Fri 9AM-6PM", href: "tel:+2201234567" },
    { icon: Mail, title: "Email", details: "protect@gamtrust.gm", sub: "24/7 response within 24h", href: "mailto:protect@gamtrust.gm" },
    { icon: MapPin, title: "Office", details: "Fajara, The Gambia", sub: "By appointment only", href: "#" },
    { icon: Clock, title: "Hours", details: "Monday - Friday", sub: "9:00 AM - 6:00 PM", href: "#" }
  ]

  const socialLinks = [
    { icon: FaFacebook, name: "Facebook", url: "https://facebook.com/gamtrust", color: "#1877F2" },
    { icon: FaTwitter, name: "Twitter", url: "https://twitter.com/gamtrust", color: "#1DA1F2" },
    { icon: FaLinkedin, name: "LinkedIn", url: "https://linkedin.com/company/gamtrust", color: "#0077B5" },
    { icon: FaInstagram, name: "Instagram", url: "https://instagram.com/gamtrust", color: "#E4405F" },
    { icon: FaYoutube, name: "YouTube", url: "https://youtube.com/gamtrust", color: "#FF0000" }
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
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Page Header */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-cream border-b border-navy/10">
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
                Get in Touch
              </span>
              <div className="w-6 h-px bg-gold" />
            </div>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light text-navy leading-[1.1] tracking-[-0.02em] mb-4">
              Let's discuss your investment
            </h1>
            <div className="w-12 h-0.5 bg-gradient-to-r from-gold to-transparent mx-auto mb-6" />
            <p className="text-slate text-lg max-w-2xl mx-auto">
              Have questions about protecting your diaspora investment? Our team is here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28">
        <div className="container-brand">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-xl p-8 border border-navy/10 shadow-sm">
                <h2 className="font-display text-2xl text-navy mb-2">Contact Information</h2>
                <p className="text-slate text-sm mb-8">
                  Reach out to us through any of these channels
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, idx) => {
                    const Icon = info.icon
                    return (
                      <a
                        key={idx}
                        href={info.href}
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-12 h-12 rounded-lg bg-gold-faint flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors duration-300">
                          <Icon className="w-5 h-5 text-gold group-hover:text-navy transition-colors duration-300" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-navy mb-1">{info.title}</h3>
                          <p className="text-slate text-sm">{info.details}</p>
                          <p className="text-xs text-slate/60 mt-1">{info.sub}</p>
                        </div>
                      </a>
                    )
                  })}
                </div>

                {/* Divider */}
                <div className="my-8 border-t border-navy/10" />

                {/* Social Links */}
                <div>
                  <h3 className="font-semibold text-navy mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => {
                      const Icon = social.icon
                      return (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-lg bg-gold-faint flex items-center justify-center hover:scale-110 transition-all duration-300"
                          style={{ color: social.color }}
                        >
                          <Icon className="w-5 h-5" />
                        </a>
                      )
                    })}
                  </div>
                </div>

                {/* Trust Badge */}
                <div className="mt-8 p-4 bg-gold-faint rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-gold" />
                    <span className="text-xs font-semibold text-navy">Response Guarantee</span>
                  </div>
                  <p className="text-xs text-slate">
                    We respond to all inquiries within 24 hours during business days.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-white rounded-xl p-8 border border-navy/10 shadow-sm">
                <h2 className="font-display text-2xl text-navy mb-2">Send us a message</h2>
                <p className="text-slate text-sm mb-8">
                  Fill out the form and we'll get back to you shortly
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-emerald-500" />
                    </div>
                    <h3 className="font-display text-xl text-navy mb-2">Message Sent!</h3>
                    <p className="text-slate text-sm">
                      Thank you for reaching out. We'll respond within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium mb-1 text-navy">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate/50" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="John Doe"
                          className={`w-full pl-10 pr-4 py-2.5 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold/20 bg-white text-navy ${
                            errors.name && touched.name 
                              ? 'border-red-400' 
                              : 'border-navy/20 focus:border-gold'
                          }`}
                        />
                      </div>
                      {errors.name && touched.name && (
                        <p className="text-xs mt-1 flex items-center gap-1 text-red-500">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium mb-1 text-navy">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate/50" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="you@example.com"
                          className={`w-full pl-10 pr-4 py-2.5 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold/20 bg-white text-navy ${
                            errors.email && touched.email 
                              ? 'border-red-400' 
                              : 'border-navy/20 focus:border-gold'
                          }`}
                        />
                      </div>
                      {errors.email && touched.email && (
                        <p className="text-xs mt-1 flex items-center gap-1 text-red-500">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium mb-1 text-navy">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate/50" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="+220 123 4567"
                          className={`w-full pl-10 pr-4 py-2.5 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold/20 bg-white text-navy ${
                            errors.phone && touched.phone 
                              ? 'border-red-400' 
                              : 'border-navy/20 focus:border-gold'
                          }`}
                        />
                      </div>
                      {errors.phone && touched.phone && (
                        <p className="text-xs mt-1 flex items-center gap-1 text-red-500">
                          <AlertCircle className="w-3 h-3" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-medium mb-1 text-navy">
                        Subject
                      </label>
                      <div className="relative">
                        <MessageCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate/50" />
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="How can we help you?"
                          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-navy/20 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 bg-white text-navy transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Service Interest */}
                    <div>
                      <label className="block text-sm font-medium mb-1 text-navy">
                        Service of Interest
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate/50" />
                        <select
                          name="serviceInterest"
                          value={formData.serviceInterest}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-navy/20 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 bg-white text-navy appearance-none cursor-pointer transition-all duration-200"
                        >
                          <option value="">Select a service</option>
                          {serviceOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium mb-1 text-navy">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        rows={5}
                        placeholder="Tell us about your investment needs..."
                        className={`w-full px-4 py-2.5 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold/20 bg-white text-navy resize-none ${
                          errors.message && touched.message 
                            ? 'border-red-400' 
                            : 'border-navy/20 focus:border-gold'
                        }`}
                      />
                      {errors.message && touched.message && (
                        <p className="text-xs mt-1 flex items-center gap-1 text-red-500">
                          <AlertCircle className="w-3 h-3" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 bg-gold text-navy hover:bg-gold-light disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-navy/30 border-t-navy rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    {/* WhatsApp Alternative */}
                    <div className="text-center pt-4">
                      <p className="text-xs text-slate mb-2">Or reach us directly on WhatsApp</p>
                      <a
                        href="https://wa.me/2202738367"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        +220 273 8367
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-white border-t border-navy/10">
        <div className="container-brand">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="font-display text-2xl text-navy mb-2">Visit Our Office</h2>
            <p className="text-slate text-sm">We're located in Fajara, The Gambia</p>
          </motion.div>
          
          <div className="rounded-xl overflow-hidden border border-navy/10 shadow-sm h-80 bg-gold-faint">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126875.78240199454!2d-16.70031997499999!3d13.45618845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec2dfe1772d5aa7%3A0xcf4ed2ace3a61eb8!2sFajara%2C%20The%20Gambia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="GamTrust Office Location"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-cream">
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
                Common Questions
              </span>
              <div className="w-6 h-px bg-gold" />
            </div>
            <h2 className="font-display text-[clamp(1.8rem,3vw,2.5rem)] font-light text-navy leading-[1.1] tracking-[-0.02em] mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-gold to-transparent mx-auto" />
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "How quickly do you respond to inquiries?",
                a: "We respond to all inquiries within 24 hours during business days (Monday-Friday, 9AM-6PM GMT)."
              },
              {
                q: "Do you offer free consultations?",
                a: "Yes, we offer a free initial consultation to understand your investment needs and recommend the right protection plan."
              },
              {
                q: "Can I schedule a site visit before committing?",
                a: "Absolutely. We can arrange a sample site visit or document verification to demonstrate our service quality."
              },
              {
                q: "What areas do you cover in The Gambia?",
                a: "We cover all major areas including Banjul, Kanifing, Serrekunda, Brikama, Bakau, Fajara, Kololi, Kotu, and surrounding regions."
              },
              {
                q: "Is my information secure?",
                a: "Yes, we use industry-standard encryption and security protocols to protect all client data and communications."
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-lg p-5 border border-navy/10 shadow-sm"
              >
                <h3 className="font-semibold text-navy mb-2">{faq.q}</h3>
                <p className="text-sm text-slate leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  )
}

export default ContactPage