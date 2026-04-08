// header.js - Dynamic header loader for GamTrust
// This script loads the header and footer components dynamically

class GamTrustHeader {
    constructor() {
        this.isMobile = window.innerWidth <= 768;
        this.menuOpen = false;
        this.init();
    }

    init() {
        this.loadHeader();
        this.loadFooter();
        this.setupEventListeners();
    }

    loadHeader() {
        const headerPlaceholder = document.getElementById('header-placeholder');
        if (!headerPlaceholder) return;

        const currentPage = this.getCurrentPage();
        
        const headerHTML = `
            <header class="site-header">
                <div class="container">
                    <div class="header-main">
                        <!-- Logo -->
                        <a href="index.html" class="logo">
                            <div class="logo-icon">
                                <i class="fas fa-shield-alt"></i>
                            </div>
                            <div class="logo-text">
                                <h1>Gam<span class="text-gold">Trust</span></h1>
                                <span>Investment Protection</span>
                            </div>
                        </a>

                        <!-- Desktop Navigation -->
                        <nav class="desktop-nav">
                            <ul class="nav-menu">
                                <li><a href="index.html" class="${currentPage === 'index' ? 'active' : ''}">Home</a></li>
                                <li><a href="services.html" class="${currentPage === 'services' ? 'active' : ''}">Services</a></li>
                                <li><a href="client-hub.html" class="${currentPage === 'client-hub' ? 'active' : ''}">Client Hub</a></li>
     
                            </ul>
                        </nav>

                        <!-- Desktop CTA Button -->
                        <div class="header-cta">
                            <a href="#get-started" class="btn btn-primary btn-sm">Get Started</a>
                        </div>

                        <!-- Mobile Menu Toggle -->
                        <button class="mobile-menu-toggle" id="mobileMenuToggle" aria-label="Menu">
                            <span class="hamburger"></span>
                        </button>
                    </div>

                    <!-- Mobile Navigation Menu -->
                    <div class="mobile-nav" id="mobileNav">
                        <ul class="mobile-nav-menu">
                            <li><a href="index.html" class="${currentPage === 'index' ? 'active' : ''}"><i class="fas fa-home"></i><span>Home</span></a></li>
                            <li><a href="services.html" class="${currentPage === 'services' ? 'active' : ''}"><i class="fas fa-cogs"></i><span>Services</span></a></li>
                            <li><a href="client-hub.html" class="${currentPage === 'client-hub' ? 'active' : ''}"><i class="fas fa-tachometer-alt"></i><span>Dashboard</span></a></li>
                          
                        </ul>
                        <div class="mobile-nav-footer">
                            <a href="#get-started" class="btn btn-primary btn-block">Get Started</a>
                        </div>
                    </div>
                </div>
            </header>

            <!-- Bottom Navigation Bar (Mobile Only) -->
            <div class="bottom-nav" id="bottomNav">
                <a href="index.html" class="bottom-nav-item ${currentPage === 'index' ? 'active' : ''}">
                    <i class="fas fa-home"></i>
                    <span>Home</span>
                </a>
                <a href="services.html" class="bottom-nav-item ${currentPage === 'services' ? 'active' : ''}">
                    <i class="fas fa-cogs"></i>
                    <span>Services</span>
                </a>
                <a href="client-hub.html" class="bottom-nav-item ${currentPage === 'client-hub' ? 'active' : ''}">
                    <i class="fas fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </a>
                <a href="#about" class="bottom-nav-item">
                    <i class="fas fa-info-circle"></i>
                    <span>About</span>
                </a>
                <a href="#contact" class="bottom-nav-item">
                    <i class="fas fa-envelope"></i>
                    <span>Contact</span>
                </a>
            </div>
        `;

        headerPlaceholder.innerHTML = headerHTML;
        this.addHeaderStyles();
    }

    loadFooter() {
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (!footerPlaceholder) return;

        const footerHTML = `
            <footer class="site-footer">
                <div class="container">
                    <div class="footer-grid">
                        <div class="footer-section">
                            <h4>GamTrust</h4>
                            <p>Protecting diaspora investments across The Gambia. Transparency is our promise.</p>
                            <div class="social-links">
                                <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                                <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                                <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                                <a href="#" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
                            </div>
                        </div>
                        
                        <div class="footer-section">
                            <h4>Quick Links</h4>
                            <ul class="footer-links">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="services.html">Services</a></li>
                                <li><a href="client-hub.html">Client Hub</a></li>
                                <li><a href="#about">About Us</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                        
                        <div class="footer-section">
                            <h4>Contact Info</h4>
                            <ul class="footer-links">
                                <li><i class="fas fa-phone"></i> +220 123 4567</li>
                                <li><i class="fas fa-envelope"></i> protect@gamtrust.gm</li>
                                <li><i class="fas fa-map-marker-alt"></i> Fajara, The Gambia</li>
                                <li><i class="fas fa-clock"></i> Mon-Fri: 9AM-6PM</li>
                            </ul>
                        </div>
                        
                        <div class="footer-section">
                            <h4>Service Areas</h4>
                            <ul class="footer-links">
                                <li>Banjul & Kanifing</li>
                                <li>Serrekunda & Brikama</li>
                                <li>Bakau & Fajara</li>
                                <li>Kololi & Kotu</li>
                                <li>All major areas</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="footer-bottom">
                        <p>&copy; 2026 GamTrust. All rights reserved. | 
                        <a href="#">Privacy Policy</a> | 
                        <a href="#">Terms of Service</a></p>
                    </div>
                </div>
            </footer>
        `;

        footerPlaceholder.innerHTML = footerHTML;
        this.addFooterStyles();
    }

    getCurrentPage() {
        const path = window.location.pathname;
        const page = path.split('/').pop().split('.')[0];
        return page || 'index';
    }

    setupEventListeners() {
        // Mobile menu toggle
        const toggleBtn = document.getElementById('mobileMenuToggle');
        const mobileNav = document.getElementById('mobileNav');
        
        if (toggleBtn && mobileNav) {
            toggleBtn.addEventListener('click', () => {
                this.menuOpen = !this.menuOpen;
                toggleBtn.classList.toggle('active');
                mobileNav.classList.toggle('open');
                document.body.style.overflow = this.menuOpen ? 'hidden' : '';
            });
        }

        // Close mobile menu when clicking on a link
        const mobileLinks = document.querySelectorAll('.mobile-nav-menu a, .mobile-nav-footer a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.menuOpen = false;
                if (toggleBtn) toggleBtn.classList.remove('active');
                if (mobileNav) mobileNav.classList.remove('open');
                document.body.style.overflow = '';
            });
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            const wasMobile = this.isMobile;
            this.isMobile = window.innerWidth <= 768;
            
            if (wasMobile !== this.isMobile && this.menuOpen) {
                this.menuOpen = false;
                if (toggleBtn) toggleBtn.classList.remove('active');
                if (mobileNav) mobileNav.classList.remove('open');
                document.body.style.overflow = '';
            }
        });
    }

    addHeaderStyles() {
        const style = document.createElement('style');
        style.textContent = `
            /* Header Styles */
            .site-header {
                background: rgba(10, 30, 63, 0.98);
                backdrop-filter: blur(20px);
                position: sticky;
                top: 0;
                z-index: 1000;
                border-bottom: 1px solid rgba(212, 175, 55, 0.2);
                box-shadow: var(--shadow-md);
            }

            .header-main {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 16px 0;
                gap: 20px;
            }

            /* Logo */
            .logo {
                display: flex;
                align-items: center;
                gap: 12px;
                text-decoration: none;
                transition: var(--transition-fast);
            }

            .logo:hover {
                transform: translateY(-1px);
            }

            .logo-icon {
                width: 44px;
                height: 44px;
                background: var(--accent-gold);
                border-radius: var(--radius-md);
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--primary-dark);
                font-size: 22px;
            }

            .logo-text h1 {
                font-size: 1.4rem;
                margin-bottom: 0;
                line-height: 1.2;
                color: var(--white);
            }

            .logo-text span {
                font-size: 0.7rem;
                color: var(--accent-gold-light);
                font-weight: 400;
            }

            .text-gold {
                color: var(--accent-gold);
            }

            /* Desktop Navigation */
            .desktop-nav {
                display: flex;
                align-items: center;
            }

            .nav-menu {
                display: flex;
                gap: 32px;
                list-style: none;
                margin: 0;
                padding: 0;
            }

            .nav-menu a {
                color: var(--white);
                text-decoration: none;
                font-size: 0.95rem;
                font-weight: 500;
                transition: var(--transition-fast);
                position: relative;
                padding: 8px 0;
            }

            .nav-menu a::before {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0;
                height: 2px;
                background: var(--accent-gold);
                transition: var(--transition-base);
            }

            .nav-menu a:hover::before,
            .nav-menu a.active::before {
                width: 100%;
            }

            .nav-menu a:hover,
            .nav-menu a.active {
                color: var(--accent-gold);
            }

            /* Header CTA */
            .header-cta {
                display: flex;
                align-items: center;
            }

            .btn-sm {
                padding: 8px 20px;
                font-size: 0.85rem;
            }

            /* Mobile Menu Toggle */
            .mobile-menu-toggle {
                display: none;
                background: none;
                border: none;
                cursor: pointer;
                width: 40px;
                height: 40px;
                position: relative;
                z-index: 1001;
            }

            .hamburger {
                width: 24px;
                height: 2px;
                background: var(--white);
                position: relative;
                display: block;
                transition: var(--transition-fast);
            }

            .hamburger::before,
            .hamburger::after {
                content: '';
                position: absolute;
                width: 24px;
                height: 2px;
                background: var(--white);
                transition: var(--transition-fast);
            }

            .hamburger::before {
                top: -8px;
            }

            .hamburger::after {
                bottom: -8px;
            }

            .mobile-menu-toggle.active .hamburger {
                background: transparent;
            }

            .mobile-menu-toggle.active .hamburger::before {
                transform: rotate(45deg);
                top: 0;
            }

            .mobile-menu-toggle.active .hamburger::after {
                transform: rotate(-45deg);
                bottom: 0;
            }

            /* Mobile Navigation Menu */
            .mobile-nav {
                position: fixed;
                top: 0;
                right: -100%;
                width: 80%;
                max-width: 320px;
                height: 100vh;
                background: var(--primary-dark);
                z-index: 1000;
                padding: 80px 24px 24px;
                transition: right 0.3s ease;
                box-shadow: var(--shadow-lg);
                overflow-y: auto;
            }

            .mobile-nav.open {
                right: 0;
            }

            .mobile-nav-menu {
                list-style: none;
                margin: 0 0 24px 0;
                padding: 0;
            }

            .mobile-nav-menu li {
                margin-bottom: 4px;
            }

            .mobile-nav-menu a {
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 14px 16px;
                color: var(--white);
                text-decoration: none;
                font-size: 1rem;
                font-weight: 500;
                border-radius: var(--radius-md);
                transition: var(--transition-fast);
            }

            .mobile-nav-menu a i {
                width: 24px;
                color: var(--accent-gold);
            }

            .mobile-nav-menu a:hover,
            .mobile-nav-menu a.active {
                background: rgba(212, 175, 55, 0.1);
                color: var(--accent-gold);
            }

            .mobile-nav-footer {
                padding-top: 16px;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
            }

            .btn-block {
                display: block;
                width: 100%;
                text-align: center;
            }

            /* Bottom Navigation Bar (Mobile) */
            .bottom-nav {
                display: none;
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                background: var(--primary-dark);
                backdrop-filter: blur(20px);
                border-top: 1px solid rgba(212, 175, 55, 0.2);
                padding: 8px 16px;
                z-index: 999;
                justify-content: space-around;
                box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);
            }

            .bottom-nav-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 4px;
                padding: 8px 12px;
                color: var(--medium-gray);
                text-decoration: none;
                font-size: 0.7rem;
                transition: var(--transition-fast);
                border-radius: var(--radius-md);
            }

            .bottom-nav-item i {
                font-size: 1.2rem;
            }

            .bottom-nav-item:hover,
            .bottom-nav-item.active {
                color: var(--accent-gold);
                background: rgba(212, 175, 55, 0.1);
            }

            /* Overlay for mobile menu */
            .mobile-nav-overlay {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.5);
                z-index: 999;
            }

            /* Responsive Breakpoints */
            @media (max-width: 768px) {
                .desktop-nav,
                .header-cta {
                    display: none;
                }

                .mobile-menu-toggle {
                    display: block;
                }

                .bottom-nav {
                    display: flex;
                }

                body {
                    padding-bottom: 70px;
                }

                .site-footer {
                    margin-bottom: 0;
                }

                .logo-icon {
                    width: 40px;
                    height: 40px;
                    font-size: 20px;
                }

                .logo-text h1 {
                    font-size: 1.2rem;
                }

                .logo-text span {
                    font-size: 0.65rem;
                }
            }

            @media (min-width: 769px) {
                .mobile-nav {
                    display: none !important;
                }
            }

            @media (max-width: 480px) {
                .mobile-nav {
                    width: 100%;
                    max-width: none;
                }

                .bottom-nav-item {
                    padding: 6px 8px;
                }

                .bottom-nav-item i {
                    font-size: 1rem;
                }

                .bottom-nav-item span {
                    font-size: 0.6rem;
                }
            }
        `;
        document.head.appendChild(style);
    }

    addFooterStyles() {
        const style = document.createElement('style');
        style.textContent = `
            /* Footer Styles */
            .site-footer {
                background: var(--primary-dark);
                color: var(--off-white);
                padding: 48px 0 24px;
                margin-top: 60px;
            }

            .footer-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                gap: 40px;
                margin-bottom: 40px;
            }

            .footer-section h4 {
                color: var(--accent-gold);
                margin-bottom: 20px;
                font-size: 1rem;
                font-weight: 600;
            }

            .footer-section p {
                color: var(--medium-gray);
                font-size: 0.85rem;
                line-height: 1.6;
                margin-bottom: 20px;
            }

            .social-links {
                display: flex;
                gap: 12px;
            }

            .social-links a {
                width: 36px;
                height: 36px;
                background: rgba(255, 255, 255, 0.05);
                border-radius: var(--radius-md);
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--white);
                transition: var(--transition-fast);
                text-decoration: none;
            }

            .social-links a:hover {
                background: var(--accent-gold);
                color: var(--primary-dark);
                transform: translateY(-2px);
            }

            .footer-links {
                list-style: none;
                margin: 0;
                padding: 0;
            }

            .footer-links li {
                margin-bottom: 10px;
                font-size: 0.85rem;
                color: var(--medium-gray);
            }

            .footer-links li i {
                width: 24px;
                color: var(--accent-gold);
            }

            .footer-links a {
                color: var(--medium-gray);
                text-decoration: none;
                transition: var(--transition-fast);
            }

            .footer-links a:hover {
                color: var(--accent-gold);
                padding-left: 4px;
            }

            .footer-bottom {
                text-align: center;
                padding-top: 24px;
                border-top: 1px solid rgba(255, 255, 255, 0.08);
                font-size: 0.8rem;
                color: var(--medium-gray);
            }

            .footer-bottom a {
                color: var(--accent-gold);
                text-decoration: none;
            }

            .footer-bottom a:hover {
                text-decoration: underline;
            }

            @media (max-width: 768px) {
                .site-footer {
                    padding: 40px 0 20px;
                    margin-top: 40px;
                }

                .footer-grid {
                    gap: 32px;
                    margin-bottom: 32px;
                }

                .footer-section {
                    text-align: center;
                }

                .social-links {
                    justify-content: center;
                }

                .footer-links li i {
                    display: inline-block;
                    margin-right: 8px;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize header when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new GamTrustHeader();
});