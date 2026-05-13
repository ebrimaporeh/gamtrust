import { Outlet } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { MessageCircle } from 'lucide-react'
import Header from './Header'
import Footer from './Footer'

export default function PublicLayout() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleWhatsAppClick = () => {
    const phoneNumber = '+2202738367'
    const message = encodeURIComponent('Hello! I would like to learn more about GamTrust services.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />

      {/* Floating WhatsApp Button - Left side */}
      <div 
        className={`fixed bottom-6 left-6 z-50 transition-all duration-300 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        <button
          onClick={handleWhatsAppClick}
          className="flex items-center cursor-pointer justify-center w-12 h-12 bg-green-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 text-white" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  )
}