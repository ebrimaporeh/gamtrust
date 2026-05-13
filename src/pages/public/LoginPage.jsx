import { useState } from 'react'
import { Link, useNavigate } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { 
  Mail, Phone, Lock, Eye, EyeOff, ArrowRight, 
  Shield, CheckCircle, AlertCircle, Fingerprint,
  Building2, Users, Sparkles, LogIn
} from 'lucide-react'

export const LoginPage = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [loginMethod, setLoginMethod] = useState('email')
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
    rememberMe: false
  })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const validateField = (name, value) => {
    switch (name) {
      case 'identifier':
        if (!value) return 'Email or phone number is required'
        if (loginMethod === 'email') {
          if (!/\S+@\S+\.\S+/.test(value)) return 'Please enter a valid email address'
        } else {
          if (!/^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,5}[-\s\.]?[0-9]{1,5}$/.test(value)) {
            return 'Please enter a valid phone number'
          }
        }
        return ''
      case 'password':
        if (!value) return 'Password is required'
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
    
    const allTouched = { identifier: true, password: true }
    setTouched(allTouched)
    
    const newErrors = {}
    const identifierError = validateField('identifier', formData.identifier)
    const passwordError = validateField('password', formData.password)
    if (identifierError) newErrors.identifier = identifierError
    if (passwordError) newErrors.password = passwordError
    
    setErrors(newErrors)
    
    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
        navigate({ to: '/dashboard' })
      }, 1500)
    }
  }

  const handleSocialLogin = (provider) => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      navigate({ to: '/dashboard' })
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
                    <LogIn className="w-10 h-10 text-gold" />
                  </div>
                  <h2 className="font-display text-2xl font-medium text-white mb-2">
                    Welcome Back
                  </h2>
                  <p className="text-sm text-slate-light">
                    Sign in to access your dashboard
                  </p>
                </div>

                <div className="flex-1 space-y-6">
                  {[
                    { icon: Shield, title: 'Real-Time Monitoring', desc: 'Track your projects live' },
                    { icon: Users, title: 'Local Representation', desc: '24/7 on-ground support' },
                    { icon: Sparkles, title: 'Transparent Reports', desc: 'Photo & video evidence' },
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
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full border-2 border-navy bg-gold/30"
                        />
                      ))}
                    </div>
                    <span className="text-xs text-slate-light">
                      Join 500+ investors
                    </span>
                  </div>
                  <p className="text-xs text-center text-slate-light">
                    New to GamTrust?{' '}
                    <Link to="/register" className="text-gold hover:text-gold-light transition-colors">
                      Create an account
                    </Link>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Login Form */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="bg-white rounded-xl p-6 lg:p-8 border border-navy/10 shadow-sm"
            >
              <div className="text-center mb-6 lg:hidden">
                <h1 className="font-display text-2xl font-medium text-navy">
                  Welcome Back
                </h1>
                <p className="text-sm mt-1 text-slate">
                  Sign in to your account
                </p>
              </div>

              {/* Login Method Toggle */}
              <motion.div variants={itemVariants} className="flex gap-2 p-1 rounded-lg mb-6 bg-gold-faint">
                <button
                  type="button"
                  onClick={() => setLoginMethod('email')}
                  className={`flex-1 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    loginMethod === 'email' ? 'bg-gold text-navy' : 'text-slate'
                  }`}
                >
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email
                </button>
                <button
                  type="button"
                  onClick={() => setLoginMethod('phone')}
                  className={`flex-1 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    loginMethod === 'phone' ? 'bg-gold text-navy' : 'text-slate'
                  }`}
                >
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone
                </button>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email/Phone Field */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium mb-1 text-navy">
                    {loginMethod === 'email' ? 'Email Address' : 'Phone Number'} *
                  </label>
                  <div className="relative">
                    {loginMethod === 'email' ? (
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate/50" />
                    ) : (
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate/50" />
                    )}
                    <input
                      type={loginMethod === 'email' ? 'email' : 'tel'}
                      name="identifier"
                      value={formData.identifier}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder={loginMethod === 'email' ? 'you@example.com' : '+220 123 4567'}
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

                {/* Password Field */}
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
                      placeholder="Enter your password"
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
                </motion.div>

                {/* Remember Me & Forgot Password */}
                <motion.div variants={itemVariants} className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      className="w-4 h-4 rounded accent-gold"
                    />
                    <span className="text-sm text-slate">
                      Remember me
                    </span>
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-gold hover:text-gold-light transition-colors"
                  >
                    Forgot password?
                  </Link>
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
                      Signing in...
                    </>
                  ) : (
                    <>
                      Sign In
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </motion.button>

                {/* Divider */}
                <motion.div variants={itemVariants} className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-navy/10" />
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="px-2 bg-white text-slate/60">
                      Or continue with
                    </span>
                  </div>
                </motion.div>

                {/* Social Login Buttons */}
                <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => handleSocialLogin('google')}
                    disabled={isLoading}
                    className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-navy/20 text-slate hover:bg-gold-faint transition-all duration-200"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Google
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSocialLogin('linkedin')}
                    disabled={isLoading}
                    className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-navy/20 text-slate hover:bg-gold-faint transition-all duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z"/>
                    </svg>
                    LinkedIn
                  </button>
                </motion.div>

                {/* Mobile Register Link */}
                <div className="text-center pt-4 lg:hidden">
                  <p className="text-sm text-slate">
                    Don't have an account?{' '}
                    <Link to="/register" className="font-medium text-gold hover:text-gold-light transition-colors">
                      Sign up
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

export default LoginPage