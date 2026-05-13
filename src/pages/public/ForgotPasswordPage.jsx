import { useState } from 'react'
import { Link, useNavigate } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { 
  Mail, Phone, ArrowRight, Shield, Users, Sparkles,
  AlertCircle, CheckCircle, ArrowLeft, Key, Send
} from 'lucide-react'

export const ForgotPasswordPage = () => {
  const navigate = useNavigate()
  const [resetMethod, setResetMethod] = useState('email') // 'email' or 'phone'
  const [isLoading, setIsLoading] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [formData, setFormData] = useState({
    identifier: ''
  })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const validateField = (name, value) => {
    switch (name) {
      case 'identifier':
        if (!value) return `${resetMethod === 'email' ? 'Email' : 'Phone number'} is required`
        if (resetMethod === 'email') {
          if (!/\S+@\S+\.\S+/.test(value)) return 'Please enter a valid email address'
        } else {
          if (!/^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,5}[-\s\.]?[0-9]{1,5}$/.test(value)) {
            return 'Please enter a valid phone number'
          }
        }
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
    
    setTouched({ identifier: true })
    
    const identifierError = validateField('identifier', formData.identifier)
    if (identifierError) {
      setErrors({ identifier: identifierError })
      return
    }
    
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSent(true)
    }, 1500)
  }

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
    <div className="min-h-screen bg-cream py-12 lg:py-36">
      <div className="container-brand">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left Column - Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden lg:block"
            >
              <div className="rounded-xl bg-navy p-8 shadow-lg h-full flex flex-col">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-4 bg-gold-faint">
                    <Key className="w-10 h-10 text-gold" />
                  </div>
                  <h2 className="font-display text-2xl font-medium text-white mb-2">
                    Forgot Password?
                  </h2>
                  <p className="text-sm text-slate-light">
                    Don't worry, we've got your back
                  </p>
                </div>

                <div className="flex-1 space-y-6">
                  {[
                    { icon: Shield, title: 'Secure Reset', desc: 'Industry-standard encryption for your safety' },
                    { icon: Users, title: 'Quick Recovery', desc: 'Get back to your account in minutes' },
                    { icon: Sparkles, title: '24/7 Support', desc: 'Contact us anytime for assistance' },
                  ].map((feature, idx) => {
                    const Icon = feature.icon
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex gap-4"
                      >
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-gold-faint">
                          <Icon className="w-5 h-5 text-gold" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1 text-white">
                            {feature.title}
                          </h4>
                          <p className="text-sm text-slate-light">
                            {feature.desc}
                          </p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-xs text-center text-slate-light">
                    Remember your password?{' '}
                    <Link to="/login" className="text-gold hover:text-gold-light transition-colors">
                      Back to Login
                    </Link>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Reset Form */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="bg-white rounded-xl p-6 lg:p-8 border border-navy/10 shadow-sm"
            >
              <div className="text-center mb-6 lg:hidden">
                <h1 className="font-display text-2xl font-medium text-navy">
                  Reset Password
                </h1>
                <p className="text-sm mt-1 text-slate">
                  We'll send you reset instructions
                </p>
              </div>

              {!isSent ? (
                <>
                  {/* Reset Method Toggle */}
                  <motion.div variants={itemVariants} className="flex gap-2 p-1 rounded-lg mb-6 bg-gold-faint">
                    <button
                      type="button"
                      onClick={() => {
                        setResetMethod('email')
                        setFormData({ identifier: '' })
                        setErrors({})
                        setTouched({})
                      }}
                      className={`flex-1 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                        resetMethod === 'email' ? 'bg-gold text-navy' : 'text-slate'
                      }`}
                    >
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setResetMethod('phone')
                        setFormData({ identifier: '' })
                        setErrors({})
                        setTouched({})
                      }}
                      className={`flex-1 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                        resetMethod === 'phone' ? 'bg-gold text-navy' : 'text-slate'
                      }`}
                    >
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone
                    </button>
                  </motion.div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email/Phone Field */}
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-medium mb-1 text-navy">
                        {resetMethod === 'email' ? 'Email Address' : 'Phone Number'} *
                      </label>
                      <div className="relative">
                        {resetMethod === 'email' ? (
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate/50" />
                        ) : (
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate/50" />
                        )}
                        <input
                          type={resetMethod === 'email' ? 'email' : 'tel'}
                          name="identifier"
                          value={formData.identifier}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder={resetMethod === 'email' ? 'you@example.com' : '+220 123 4567'}
                          className={`w-full pl-10 pr-4 py-2.5 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold/20 bg-white text-navy ${
                            errors.identifier && touched.identifier 
                              ? 'border-red-400' 
                              : 'border-navy/20 focus:border-gold'
                          }`}
                        />
                      </div>
                      {errors.identifier && touched.identifier && (
                        <p className="text-xs mt-1 flex items-center gap-1 text-red-500">
                          <AlertCircle className="w-3 h-3" />
                          {errors.identifier}
                        </p>
                      )}
                    </motion.div>

                    {/* Info Text */}
                    <motion.div variants={itemVariants} className="bg-gold-faint rounded-lg p-4">
                      <p className="text-xs text-slate text-center">
                        We'll send you a password reset {resetMethod === 'email' ? 'link' : 'code'} to your{' '}
                        {resetMethod === 'email' ? 'email address' : 'phone number'}.
                        Follow the instructions to create a new password.
                      </p>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                      variants={itemVariants}
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 bg-gold text-navy hover:bg-gold-light disabled:opacity-70"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-navy/30 border-t-navy rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Reset Instructions
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>

                    {/* Back to Login Link */}
                    <motion.div variants={itemVariants} className="text-center">
                      <Link
                        to="/login"
                        className="inline-flex items-center gap-1 text-sm text-slate hover:text-gold transition-colors"
                      >
                        <ArrowLeft className="w-3 h-3" />
                        Back to Login
                      </Link>
                    </motion.div>
                  </form>
                </>
              ) : (
                /* Success State */
                <motion.div
                  variants={itemVariants}
                  className="text-center space-y-6"
                >
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto bg-emerald-50">
                    <CheckCircle className="w-10 h-10 text-emerald-500" />
                  </div>
                  
                  <div>
                    <h3 className="font-display text-xl font-medium text-navy mb-2">
                      Check your {resetMethod === 'email' ? 'inbox' : 'phone'}
                    </h3>
                    <p className="text-sm text-slate">
                      We've sent password reset instructions to your{' '}
                      {resetMethod === 'email' ? 'email address' : 'phone number'}.
                    </p>
                  </div>

                  <div className="bg-gold-faint rounded-lg p-4">
                    <p className="text-xs text-slate">
                      {resetMethod === 'email' 
                        ? `If you don't see the email, check your spam folder or try again.`
                        : `The code may take a few minutes to arrive. Make sure you entered the correct number.`}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={() => {
                        setIsSent(false)
                        setFormData({ identifier: '' })
                        setErrors({})
                        setTouched({})
                      }}
                      className="w-full py-2.5 rounded-lg font-medium transition-all duration-200 border border-gold text-gold hover:bg-gold/10"
                    >
                      Try again with different {resetMethod === 'email' ? 'email' : 'number'}
                    </button>
                    
                    <Link
                      to="/login"
                      className="block w-full py-2.5 rounded-lg font-semibold transition-all duration-200 bg-gold text-navy hover:bg-gold-light"
                    >
                      Back to Login
                    </Link>
                  </div>
                </motion.div>
              )}

              {/* Mobile Register Link */}
              <div className="text-center pt-6 lg:hidden">
                <p className="text-xs text-slate">
                  Need help?{' '}
                  <a href="#" className="text-gold hover:text-gold-light transition-colors">
                    Contact Support
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPasswordPage