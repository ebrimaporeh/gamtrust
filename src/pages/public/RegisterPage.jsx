import { useState } from 'react'
import { Link, useNavigate } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { 
  User, Mail, Phone, Lock, Eye, EyeOff, CheckCircle, 
  AlertCircle, ArrowRight, Shield, Building2, Briefcase,
  Users, UserCheck, Sparkles
} from 'lucide-react'

export const RegisterPage = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'investor',
    agreeTerms: false
  })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const roles = [
    { value: 'investor', label: 'Investor', icon: Building2, description: 'I want to invest and monitor projects' },
    { value: 'representative', label: 'Representative', icon: Users, description: 'I want to provide local monitoring services' },
    { value: 'verifier', label: 'Verifier', icon: UserCheck, description: 'I want to verify documents and properties' },
  ]

  const validateField = (name, value) => {
    switch (name) {
      case 'fullName':
        if (!value) return 'Full name is required'
        if (value.length < 2) return 'Name must be at least 2 characters'
        return ''
      case 'email':
        if (!value) return 'Email is required'
        if (!/\S+@\S+\.\S+/.test(value)) return 'Please enter a valid email address'
        return ''
      case 'phone':
        if (!value) return 'Phone number is required'
        if (!/^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,5}[-\s\.]?[0-9]{1,5}$/.test(value)) {
          return 'Please enter a valid phone number'
        }
        return ''
      case 'password':
        if (!value) return 'Password is required'
        if (value.length < 8) return 'Password must be at least 8 characters'
        if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
          return 'Password must contain uppercase, lowercase, and number'
        }
        return ''
      case 'confirmPassword':
        if (!value) return 'Please confirm your password'
        if (value !== formData.password) return 'Passwords do not match'
        return ''
      case 'agreeTerms':
        if (!value) return 'You must agree to the terms and conditions'
        return ''
      default:
        return ''
    }
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    const newValue = type === 'checkbox' ? checked : value
    setFormData(prev => ({ ...prev, [name]: newValue }))
    
    if (touched[name]) {
      const error = validateField(name, newValue)
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
    
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true
      return acc
    }, {})
    setTouched(allTouched)
    
    const newErrors = {}
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key])
      if (error) newErrors[key] = error
    })
    
    setErrors(newErrors)
    
    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
        navigate({ to: '/verify-email', search: { email: formData.email } })
      }, 1500)
    }
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
              <div className="sticky top-24">
                <div className="rounded-xl bg-navy p-8 shadow-lg">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-4 bg-gold-faint">
                      <Shield className="w-10 h-10 text-gold" />
                    </div>
                    <h2 className="font-display text-2xl font-medium text-white mb-2">
                      Join GamTrust Today
                    </h2>
                    <p className="text-sm text-slate-light">
                      Start protecting your diaspora investments
                    </p>
                  </div>

                  <div className="space-y-6">
                    {[
                      { icon: Shield, title: 'Investment Protection', desc: 'Real-time monitoring and fraud prevention' },
                      { icon: Users, title: 'Local Representation', desc: 'Trusted boots on the ground in The Gambia' },
                      { icon: Sparkles, title: 'Transparent Reporting', desc: 'Weekly updates with photo and video evidence' },
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
                      Already have an account?{' '}
                      <Link to="/login" className="text-gold hover:text-gold-light transition-colors">
                        Sign in
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Registration Form */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="bg-white rounded-xl p-6 lg:p-8 border border-navy/10 shadow-sm"
            >
              <div className="text-center mb-6 lg:hidden">
                <h1 className="font-display text-2xl font-medium text-navy">
                  Create Account
                </h1>
                <p className="text-sm mt-1 text-slate">
                  Join GamTrust today
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium mb-1 text-navy">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate/50" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="John Doe"
                      className={`w-full pl-10 pr-4 py-2.5 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold/20 bg-white text-navy ${
                        errors.fullName && touched.fullName 
                          ? 'border-red-400' 
                          : 'border-navy/20 focus:border-gold'
                      }`}
                    />
                  </div>
                  {errors.fullName && touched.fullName && (
                    <p className="text-xs mt-1 flex items-center gap-1 text-red-500">
                      <AlertCircle className="w-3 h-3" />
                      {errors.fullName}
                    </p>
                  )}
                </motion.div>

                {/* Email */}
                <motion.div variants={itemVariants}>
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
                </motion.div>

                {/* Phone */}
                <motion.div variants={itemVariants}>
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
                </motion.div>

                {/* Role Selection */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium mb-2 text-navy">
                    I am a *
                  </label>
                  <div className="grid grid-cols-1 gap-3">
                    {roles.map((role) => {
                      const Icon = role.icon
                      const isSelected = formData.role === role.value
                      return (
                        <label
                          key={role.value}
                          className={`flex items-start gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                            isSelected 
                              ? 'border-gold bg-gold-faint' 
                              : 'border-navy/20 bg-white'
                          }`}
                        >
                          <input
                            type="radio"
                            name="role"
                            value={role.value}
                            checked={isSelected}
                            onChange={handleChange}
                            className="mt-1 accent-gold"
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <Icon className="w-4 h-4 text-gold" />
                              <span className="font-medium text-navy">
                                {role.label}
                              </span>
                            </div>
                            <p className="text-xs text-slate">
                              {role.description}
                            </p>
                          </div>
                        </label>
                      )
                    })}
                  </div>
                </motion.div>

                {/* Password */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium mb-1 text-navy">
                    Password *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate/50" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Create a strong password"
                      className={`w-full pl-10 pr-12 py-2.5 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold/20 bg-white text-navy ${
                        errors.password && touched.password 
                          ? 'border-red-400' 
                          : 'border-navy/20 focus:border-gold'
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4 text-slate/50" />
                      ) : (
                        <Eye className="w-4 h-4 text-slate/50" />
                      )}
                    </button>
                  </div>
                  {errors.password && touched.password && (
                    <p className="text-xs mt-1 flex items-center gap-1 text-red-500">
                      <AlertCircle className="w-3 h-3" />
                      {errors.password}
                    </p>
                  )}
                  <p className="text-xs mt-1 text-slate/60">
                    Must be 8+ chars with uppercase, lowercase, and number
                  </p>
                </motion.div>

                {/* Confirm Password */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium mb-1 text-navy">
                    Confirm Password *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate/50" />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Confirm your password"
                      className={`w-full pl-10 pr-12 py-2.5 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold/20 bg-white text-navy ${
                        errors.confirmPassword && touched.confirmPassword 
                          ? 'border-red-400' 
                          : 'border-navy/20 focus:border-gold'
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-4 h-4 text-slate/50" />
                      ) : (
                        <Eye className="w-4 h-4 text-slate/50" />
                      )}
                    </button>
                  </div>
                  {errors.confirmPassword && touched.confirmPassword && (
                    <p className="text-xs mt-1 flex items-center gap-1 text-red-500">
                      <AlertCircle className="w-3 h-3" />
                      {errors.confirmPassword}
                    </p>
                  )}
                </motion.div>

                {/* Terms Agreement */}
                <motion.div variants={itemVariants}>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      className="mt-1 accent-gold"
                    />
                    <span className="text-sm text-slate">
                      I agree to the{' '}
                      <a href="#" className="text-gold hover:text-gold-light transition-colors">
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a href="#" className="text-gold hover:text-gold-light transition-colors">
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                  {errors.agreeTerms && touched.agreeTerms && (
                    <p className="text-xs mt-1 flex items-center gap-1 text-red-500">
                      <AlertCircle className="w-3 h-3" />
                      {errors.agreeTerms}
                    </p>
                  )}
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
                      Creating account...
                    </>
                  ) : (
                    <>
                      Create Account
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </motion.button>

                {/* Mobile Sign In Link */}
                <div className="text-center pt-4 lg:hidden">
                  <p className="text-sm text-slate">
                    Already have an account?{' '}
                    <Link to="/login" className="font-medium text-gold hover:text-gold-light transition-colors">
                      Sign in
                    </Link>
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage