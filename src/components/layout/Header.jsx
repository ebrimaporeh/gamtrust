import { Link, useLocation } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { Menu, X, User, LogOut, Settings, ChevronDown, ArrowRight } from 'lucide-react'
import { useAuthStore } from '@/stores/authStore'
import gamtrustLogo from '/gamtrust-logo-nog-bg.png'

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { isAuthenticated, user, logout } = useAuthStore()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/services', label: 'Services' },
    { path: '/sample-dashboard', label: 'Client Dashboard' },
    { path: '/projects', label: 'Projects' },
    { path: '/pricing', label: 'Pricing' },
    ...(isAuthenticated ? [{ path: '/dashboard', label: 'Dashboard' }] : []),
  ]

  const isActive = (path) => {
    if (path === '/') return location.pathname === path
    return location.pathname.startsWith(path)
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-100 transition-all duration-350 ${
        scrolled 
          ? 'bg-cream/95 backdrop-blur-md py-3 border-b border-gold/20 shadow-sm' 
          : 'bg-cream py-5 border-b border-gold/20'
      }`}
    >
      <div className="container-brand">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={gamtrustLogo} 
              alt="GamTrust Logo" 
              className="h-15 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden sm:block">
            
              <p className="text-[0.65rem] font-mono tracking-wide text-navy/80">
                Investment Protection
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link transition-colors duration-300 ${
                  isActive(link.path) 
                    ? 'text-gold after:bg-gold'
                    : 'text-navy hover:text-navy/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-2 transition-colors group text-navy hover:text-gold"
                >
                  <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                    <span className="text-navy font-semibold text-sm">
                      {user?.profile?.full_name?.charAt(0) || user?.username?.charAt(0) || 'U'}
                    </span>
                  </div>
                  <ChevronDown className="w-3 h-3 transition-colors text-navy group-hover:text-gold" />
                </button>
                
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gold/20 rounded-lg shadow-lg py-1 z-50">
                    <Link
                      to="/profile"
                      className="flex items-center px-4 py-2 text-sm text-navy hover:text-gold hover:bg-gold-faint transition-colors"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="flex items-center px-4 py-2 text-sm text-navy hover:text-gold hover:bg-gold-faint transition-colors"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </Link>
                    <hr className="my-1 border-gold/20" />
                    <button
                      onClick={() => {
                        logout()
                        setIsUserMenuOpen(false)
                      }}
                      className="flex items-center w-full px-4 py-2 text-sm text-red-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-sm font-semibold transition-all duration-300 bg-gold text-navy hover:bg-gold-light"
                >
                  Get Started
                  <ArrowRight size={14} />
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-sm border border-gold/20 bg-gold-faint text-navy transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gold/20 animate-fade-down">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2.5 rounded transition-colors ${
                    isActive(link.path)
                      ? 'bg-gold-faint text-gold'
                      : 'text-navy hover:bg-gold-faint'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              <hr className="my-2 border-gold/20" />
              
              {isAuthenticated ? (
                <>
                  <Link
                    to="/profile"
                    className="px-4 py-2.5 rounded transition-colors text-navy hover:bg-gold-faint"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    to="/settings"
                    className="px-4 py-2.5 rounded transition-colors text-navy hover:bg-gold-faint"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Settings
                  </Link>
                  <button
                    onClick={() => {
                      logout()
                      setIsMobileMenuOpen(false)
                    }}
                    className="px-4 py-2.5 text-red-400 text-left rounded transition-colors hover:bg-red-50"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="px-4 py-2.5 rounded transition-colors text-navy hover:bg-gold-faint"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="px-4 py-2.5 bg-gold text-navy rounded font-semibold text-center hover:bg-gold-light transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header