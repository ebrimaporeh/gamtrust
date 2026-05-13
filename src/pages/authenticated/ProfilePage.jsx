import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { 
  User, Mail, Phone, MapPin, Calendar, Briefcase,
  Edit2, Save, X, Camera, Shield, CheckCircle,
  Clock, FileText, Star, Users, Building2,
  CreditCard, Settings, LogOut, ChevronRight,
  Globe, AlertCircle
} from 'lucide-react'
import { FaFacebook, FaTwitter, FaLinkedin,  } from 'react-icons/fa'

// Mock user data
const userData = {
  id: 1,
  username: 'john_doe',
  email: 'john.doe@example.com',
  phone: '+220 123 4567',
  role: 'investor',
  isVerified: true,
  createdAt: 'January 15, 2025',
  lastLogin: 'March 20, 2026',
  profile: {
    fullName: 'John Doe',
    avatar: null,
    bio: 'Diaspora investor based in the UK. Passionate about contributing to The Gambia\'s development through real estate and business investments.',
    dateOfBirth: '1985-06-15',
    nationality: 'Gambian',
    location: 'London, United Kingdom',
    occupation: 'Business Analyst',
    company: 'Tech Solutions Ltd',
    website: 'https://johndoe.com',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
      facebook: 'https://facebook.com/johndoe'
    }
  },
  stats: {
    totalProjects: 3,
    activeProjects: 2,
    completedProjects: 1,
    totalInvested: 245000,
    reportsGenerated: 24,
    siteVisits: 12,
    rating: 4.8,
    reviews: 24
  },
  recentActivities: [
    { id: 1, action: 'New report generated for Bakau Project', date: 'March 15, 2026', type: 'report' },
    { id: 2, action: 'Site visit completed at Serrekunda Center', date: 'March 12, 2026', type: 'visit' },
    { id: 3, action: 'Payment of $25,000 processed', date: 'March 10, 2026', type: 'payment' },
    { id: 4, action: 'Project update: Bakau Complex at 72%', date: 'March 8, 2026', type: 'update' },
  ],
  notifications: [
    { id: 1, title: 'Report Ready', message: 'Weekly progress report for Bakau Project is ready', date: 'March 15, 2026', read: false },
    { id: 2, title: 'Site Visit Scheduled', message: 'Site visit scheduled for Serrekunda Project on March 25', date: 'March 14, 2026', read: false },
    { id: 3, title: 'Payment Confirmed', message: 'Your payment of $25,000 has been confirmed', date: 'March 10, 2026', read: true },
  ]
}

export const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const [formData, setFormData] = useState({
    fullName: userData.profile.fullName,
    email: userData.email,
    phone: userData.phone,
    bio: userData.profile.bio,
    location: userData.profile.location,
    occupation: userData.profile.occupation,
    company: userData.profile.company,
    website: userData.profile.website,
    linkedin: userData.profile.socialLinks.linkedin,
    twitter: userData.profile.socialLinks.twitter,
    facebook: userData.profile.socialLinks.facebook,
  })
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    // Simulate save
    setIsEditing(false)
    alert('Profile updated successfully!')
  }

  const handleCancel = () => {
    setIsEditing(false)
    // Reset form data
    setFormData({
      fullName: userData.profile.fullName,
      email: userData.email,
      phone: userData.phone,
      bio: userData.profile.bio,
      location: userData.profile.location,
      occupation: userData.profile.occupation,
      company: userData.profile.company,
      website: userData.profile.website,
      linkedin: userData.profile.socialLinks.linkedin,
      twitter: userData.profile.socialLinks.twitter,
      facebook: userData.profile.socialLinks.facebook,
    })
  }

  const handleChangePassword = () => {
    alert('Change password functionality will be available soon.')
  }

  const handleDeleteAccount = () => {
    setShowDeleteConfirm(false)
    alert('Account deletion request submitted. Our team will contact you.')
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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
    <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold mb-1" style={{ color: 'var(--foreground)' }}>
            My Profile
          </h1>
          <p style={{ color: 'rgba(58,74,107,0.7)' }}>
            Manage your account settings and preferences
          </p>
        </div>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105"
            style={{
              background: 'var(--accent)',
              color: 'var(--background-inverse)',
            }}
          >
            <Edit2 className="w-4 h-4" />
            Edit Profile
          </button>
        ) : (
          <div className="flex gap-3">
            <button
              onClick={handleCancel}
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200"
              style={{
                border: '1px solid var(--border)',
                color: 'rgba(58,74,107,0.8)',
              }}
            >
              <X className="w-4 h-4" />
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105"
              style={{
                background: 'var(--accent)',
                color: 'var(--background-inverse)',
              }}
            >
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Profile Card */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl overflow-hidden sticky top-24"
            style={{
              background: 'var(--background-secondary)',
              border: '1px solid var(--border)',
            }}
          >
            {/* Cover Image Area */}
            <div
              className="h-24 relative"
              style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.2), rgba(212,175,55,0.05))' }}
            />
            
            {/* Avatar */}
            <div className="px-6 pb-6">
              <div className="relative -mt-12 mb-4">
                <div
                  className="w-24 h-24 rounded-2xl flex items-center justify-center mx-auto border-4"
                  style={{
                    background: 'rgba(212,175,55,0.15)',
                    borderColor: 'var(--background)',
                  }}
                >
                  {userData.profile.avatar ? (
                    <img src={userData.profile.avatar} alt="Avatar" className="w-full h-full rounded-2xl object-cover" />
                  ) : (
                    <User className="w-12 h-12" style={{ color: 'var(--accent)' }} />
                  )}
                </div>
                {isEditing && (
                  <button
                    className="absolute bottom-0 right-1/3 p-1.5 rounded-full"
                    style={{ background: 'var(--accent)', color: 'var(--background-inverse)' }}
                  >
                    <Camera className="w-3 h-3" />
                  </button>
                )}
              </div>

              {/* User Info */}
              <div className="text-center mb-4">
                {isEditing ? (
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="text-center w-full mb-1 px-3 py-1 rounded-lg border focus:outline-none"
                    style={{
                      background: 'var(--background)',
                      borderColor: 'var(--border)',
                      color: 'var(--foreground)',
                    }}
                  />
                ) : (
                  <h2 className="text-xl font-bold mb-1" style={{ color: 'var(--foreground)' }}>
                    {userData.profile.fullName}
                  </h2>
                )}
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background: 'rgba(212,175,55,0.1)',
                      color: 'var(--accent)',
                    }}
                  >
                    {userData.role === 'investor' ? 'Diaspora Investor' : userData.role}
                  </span>
                  {userData.isVerified && (
                    <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--success)' }}>
                      <CheckCircle className="w-3 h-3" />
                      Verified
                    </span>
                  )}
                </div>
                <p className="text-sm" style={{ color: 'rgba(58,74,107,0.6)' }}>
                  Member since {userData.createdAt}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t mb-4" style={{ borderColor: 'var(--border)' }}>
                <div className="text-center">
                  <p className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>
                    {userData.stats.totalProjects}
                  </p>
                  <p className="text-xs" style={{ color: 'rgba(58,74,107,0.5)' }}>Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>
                    ${(userData.stats.totalInvested / 1000).toFixed(0)}k
                  </p>
                  <p className="text-xs" style={{ color: 'rgba(58,74,107,0.5)' }}>Invested</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold flex items-center justify-center gap-1" style={{ color: 'var(--foreground)' }}>
                    {userData.stats.rating}
                    <Star className="w-3 h-3 fill-current" style={{ color: 'var(--accent)' }} />
                  </p>
                  <p className="text-xs" style={{ color: 'rgba(58,74,107,0.5)' }}>Rating</p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-2">
                <Link
                  to="/settings"
                  className="flex items-center justify-between p-3 rounded-lg transition-colors hover:bg-background"
                  style={{ color: 'rgba(58,74,107,0.8)' }}
                >
                  <span className="flex items-center gap-3">
                    <Settings className="w-4 h-4" />
                    Account Settings
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={handleChangePassword}
                  className="w-full flex items-center justify-between p-3 rounded-lg transition-colors hover:bg-background"
                  style={{ color: 'rgba(58,74,107,0.8)' }}
                >
                  <span className="flex items-center gap-3">
                    {/* <Lock className="w-4 h-4" /> */}
                    Change Password
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setShowDeleteConfirm(true)}
                  className="w-full flex items-center justify-between p-3 rounded-lg transition-colors hover:bg-danger/10"
                  style={{ color: 'var(--danger)' }}
                >
                  <span className="flex items-center gap-3">
                    <LogOut className="w-4 h-4" />
                    Delete Account
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Tabs Content */}
        <div className="lg:col-span-2">
          {/* Tabs */}
          <div className="flex gap-2 border-b mb-6 overflow-x-auto pb-px" style={{ borderColor: 'var(--border)' }}>
            {['overview', 'activities', 'notifications'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-4 py-2 text-sm font-medium capitalize transition-all relative whitespace-nowrap"
                style={{
                  color: activeTab === tab ? 'var(--accent)' : 'rgba(58,74,107,0.6)',
                }}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ background: 'var(--accent)' }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                {/* Personal Information */}
                <div
                  className="rounded-xl p-5"
                  style={{
                    background: 'var(--background-secondary)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <h3 className="font-semibold mb-4" style={{ color: 'var(--foreground)' }}>
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs mb-1" style={{ color: 'rgba(58,74,107,0.5)' }}>Full Name</p>
                      {isEditing ? (
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full px-3 py-1.5 rounded-lg border focus:outline-none"
                          style={{
                            background: 'var(--background)',
                            borderColor: 'var(--border)',
                            color: 'var(--foreground)',
                          }}
                        />
                      ) : (
                        <p style={{ color: 'var(--foreground)' }}>{userData.profile.fullName}</p>
                      )}
                    </div>
                    <div>
                      <p className="text-xs mb-1" style={{ color: 'rgba(58,74,107,0.5)' }}>Email Address</p>
                      {isEditing ? (
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-1.5 rounded-lg border focus:outline-none"
                          style={{
                            background: 'var(--background)',
                            borderColor: 'var(--border)',
                            color: 'var(--foreground)',
                          }}
                        />
                      ) : (
                        <p style={{ color: 'var(--foreground)' }}>{userData.email}</p>
                      )}
                    </div>
                    <div>
                      <p className="text-xs mb-1" style={{ color: 'rgba(58,74,107,0.5)' }}>Phone Number</p>
                      {isEditing ? (
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-3 py-1.5 rounded-lg border focus:outline-none"
                          style={{
                            background: 'var(--background)',
                            borderColor: 'var(--border)',
                            color: 'var(--foreground)',
                          }}
                        />
                      ) : (
                        <p style={{ color: 'var(--foreground)' }}>{userData.phone}</p>
                      )}
                    </div>
                    <div>
                      <p className="text-xs mb-1" style={{ color: 'rgba(58,74,107,0.5)' }}>Location</p>
                      {isEditing ? (
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          className="w-full px-3 py-1.5 rounded-lg border focus:outline-none"
                          style={{
                            background: 'var(--background)',
                            borderColor: 'var(--border)',
                            color: 'var(--foreground)',
                          }}
                        />
                      ) : (
                        <p style={{ color: 'var(--foreground)' }}>{userData.profile.location}</p>
                      )}
                    </div>
                    <div>
                      <p className="text-xs mb-1" style={{ color: 'rgba(58,74,107,0.5)' }}>Occupation</p>
                      {isEditing ? (
                        <input
                          type="text"
                          name="occupation"
                          value={formData.occupation}
                          onChange={handleInputChange}
                          className="w-full px-3 py-1.5 rounded-lg border focus:outline-none"
                          style={{
                            background: 'var(--background)',
                            borderColor: 'var(--border)',
                            color: 'var(--foreground)',
                          }}
                        />
                      ) : (
                        <p style={{ color: 'var(--foreground)' }}>{userData.profile.occupation}</p>
                      )}
                    </div>
                    <div>
                      <p className="text-xs mb-1" style={{ color: 'rgba(58,74,107,0.5)' }}>Company</p>
                      {isEditing ? (
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-3 py-1.5 rounded-lg border focus:outline-none"
                          style={{
                            background: 'var(--background)',
                            borderColor: 'var(--border)',
                            color: 'var(--foreground)',
                          }}
                        />
                      ) : (
                        <p style={{ color: 'var(--foreground)' }}>{userData.profile.company}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div
                  className="rounded-xl p-5"
                  style={{
                    background: 'var(--background-secondary)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <h3 className="font-semibold mb-3" style={{ color: 'var(--foreground)' }}>
                    Bio
                  </h3>
                  {isEditing ? (
                    <textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-3 py-2 rounded-lg border focus:outline-none resize-none"
                      style={{
                        background: 'var(--background)',
                        borderColor: 'var(--border)',
                        color: 'var(--foreground)',
                      }}
                    />
                  ) : (
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(58,74,107,0.7)' }}>
                      {userData.profile.bio}
                    </p>
                  )}
                </div>

                {/* Social Links */}
                <div
                  className="rounded-xl p-5"
                  style={{
                    background: 'var(--background-secondary)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <h3 className="font-semibold mb-4" style={{ color: 'var(--foreground)' }}>
                    Social Links
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Globe className="w-4 h-4" style={{ color: 'rgba(58,74,107,0.5)' }} />
                      {isEditing ? (
                        <input
                          type="url"
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          placeholder="Website URL"
                          className="flex-1 px-3 py-1.5 rounded-lg border focus:outline-none"
                          style={{
                            background: 'var(--background)',
                            borderColor: 'var(--border)',
                            color: 'var(--foreground)',
                          }}
                        />
                      ) : (
                        <a href={userData.profile.website} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-accent transition-colors" style={{ color: 'var(--accent)' }}>
                          {userData.profile.website || 'Not provided'}
                        </a>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <FaLinkedin className="w-4 h-4" style={{ color: '#0077B5' }} />
                      {isEditing ? (
                        <input
                          type="url"
                          name="linkedin"
                          value={formData.linkedin}
                          onChange={handleInputChange}
                          placeholder="LinkedIn URL"
                          className="flex-1 px-3 py-1.5 rounded-lg border focus:outline-none"
                          style={{
                            background: 'var(--background)',
                            borderColor: 'var(--border)',
                            color: 'var(--foreground)',
                          }}
                        />
                      ) : (
                        <a href={userData.profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-accent transition-colors" style={{ color: 'var(--accent)' }}>
                          {userData.profile.socialLinks.linkedin || 'Not provided'}
                        </a>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <FaTwitter className="w-4 h-4" style={{ color: '#1DA1F2' }} />
                      {isEditing ? (
                        <input
                          type="url"
                          name="twitter"
                          value={formData.twitter}
                          onChange={handleInputChange}
                          placeholder="Twitter URL"
                          className="flex-1 px-3 py-1.5 rounded-lg border focus:outline-none"
                          style={{
                            background: 'var(--background)',
                            borderColor: 'var(--border)',
                            color: 'var(--foreground)',
                          }}
                        />
                      ) : (
                        <a href={userData.profile.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-accent transition-colors" style={{ color: 'var(--accent)' }}>
                          {userData.profile.socialLinks.twitter || 'Not provided'}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'activities' && (
              <motion.div
                key="activities"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-4"
              >
                {userData.recentActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-start gap-4 p-4 rounded-xl transition-all hover:translate-x-1"
                    style={{
                      background: 'var(--background-secondary)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(212,175,55,0.1)' }}
                    >
                      {activity.type === 'report' && <FileText className="w-5 h-5" style={{ color: 'var(--accent)' }} />}
                      {activity.type === 'visit' && <Users className="w-5 h-5" style={{ color: 'var(--accent)' }} />}
                      {activity.type === 'payment' && <CreditCard className="w-5 h-5" style={{ color: 'var(--accent)' }} />}
                      {activity.type === 'update' && <Clock className="w-5 h-5" style={{ color: 'var(--accent)' }} />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>
                        {activity.action}
                      </p>
                      <p className="text-xs mt-1" style={{ color: 'rgba(58,74,107,0.5)' }}>
                        {activity.date}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'notifications' && (
              <motion.div
                key="notifications"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-4"
              >
                {userData.notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 rounded-xl transition-all ${!notification.read ? 'border-l-4' : ''}`}
                    style={{
                      background: 'var(--background-secondary)',
                      borderColor: 'var(--accent)',
                      border: !notification.read ? '1px solid var(--border)' : '1px solid var(--border)',
                      borderLeftWidth: !notification.read ? '4px' : '1px',
                    }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium" style={{ color: 'var(--foreground)' }}>
                        {notification.title}
                      </h4>
                      {!notification.read && (
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ background: 'var(--accent)' }}
                        />
                      )}
                    </div>
                    <p className="text-sm mb-2" style={{ color: 'rgba(58,74,107,0.7)' }}>
                      {notification.message}
                    </p>
                    <p className="text-xs" style={{ color: 'rgba(58,74,107,0.5)' }}>
                      {notification.date}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Delete Account Confirmation Modal */}
      <AnimatePresence>
        {showDeleteConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowDeleteConfirm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-md w-full rounded-2xl overflow-hidden"
              style={{ background: 'var(--background)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'rgba(239,68,68,0.1)' }}
                >
                  <AlertCircle className="w-8 h-8" style={{ color: 'var(--danger)' }} />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
                  Delete Account
                </h3>
                <p className="text-sm mb-6" style={{ color: 'rgba(58,74,107,0.7)' }}>
                  Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently removed.
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowDeleteConfirm(false)}
                    className="flex-1 px-4 py-2 rounded-lg font-medium transition-all"
                    style={{
                      border: '1px solid var(--border)',
                      color: 'rgba(58,74,107,0.8)',
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDeleteAccount}
                    className="flex-1 px-4 py-2 rounded-lg font-medium transition-all"
                    style={{
                      background: 'var(--danger)',
                      color: 'white',
                    }}
                  >
                    Delete Account
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProfilePage