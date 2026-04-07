// data.js - GamTrust Structured Data & Configuration

const GamTrustData = {
  // Company Information
  company: {
    name: "GamTrust",
    tagline: "Your eyes on the ground — protection & transparency for diaspora investments",
    founded: 2024,
    email: "protect@gamtrust.gm",
    phone: "+220 123 4567",
    address: "Fajara, The Gambia",
    social: {
      twitter: "@GamTrust",
      linkedin: "gamtrust-ltd",
      facebook: "GamTrustGambia"
    }
  },

  // Services Offered
  services: [
    {
      id: 1,
      title: "Construction Monitoring",
      icon: "🏗️",
      description: "Site visits, material verification, foundation-to-completion tracking & cost validation to prevent inflation and poor quality.",
      features: ["Weekly site inspections", "Material quality checks", "Cost validation", "Progress photography"]
    },
    {
      id: 2,
      title: "Business Monitoring",
      icon: "📊",
      description: "Operational supervision, financial checks, staff & inventory verification for diaspora-funded businesses.",
      features: ["Financial activity review", "Staff verification", "Inventory audits", "Performance reports"]
    },
    {
      id: 3,
      title: "Legal & Document Verification",
      icon: "⚖️",
      description: "Confirm business registrations, land ownership, contracts & agreements before any investment is made.",
      features: ["Land title verification", "Business registration checks", "Contract review", "Legal compliance"]
    },
    {
      id: 4,
      title: "Supplier & Contractor Sourcing",
      icon: "🔍",
      description: "Vetted builders, suppliers, and technicians to reduce fraud risk and ensure quality service delivery.",
      features: ["Background checks", "Previous work verification", "Price negotiation", "Quality guarantees"]
    },
    {
      id: 5,
      title: "Real-Time Reporting",
      icon: "📹",
      description: "Video updates, drone footage, photo evidence & scheduled calls to keep you informed every step of the way.",
      features: ["Weekly video updates", "Drone aerial footage", "Live video calls", "Written progress reports"]
    },
    {
      id: 6,
      title: "Representation Service",
      icon: "🤝",
      description: "Act as your official local agent, attend meetings, negotiate contracts, and supervise agreements on your behalf.",
      features: ["Meeting attendance", "Contract negotiation", "On-site supervision", "Legal representation"]
    }
  ],

  // Pricing Plans
  pricingPlans: [
    {
      name: "Essential",
      price: "$49",
      period: "month",
      features: [
        "Monthly site visits",
        "Photo reports",
        "Document verification",
        "Email support"
      ],
      isPopular: false,
      buttonText: "Select Plan"
    },
    {
      name: "Premium",
      price: "$129",
      period: "month",
      features: [
        "Weekly updates + drone footage",
        "Live video calls",
        "Contractor oversight",
        "Cost validation",
        "Priority support"
      ],
      isPopular: true,
      buttonText: "Get Started"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "project",
      features: [
        "Full representation",
        "Legal & land checks",
        "Real-time dashboard",
        "24/7 priority support",
        "Dedicated account manager"
      ],
      isPopular: false,
      buttonText: "Contact Us"
    }
  ],

  // How It Works Steps
  steps: [
    {
      number: 1,
      title: "Register",
      description: "Sign up & choose your monitoring package or project-based oversight plan.",
      icon: "📝"
    },
    {
      number: 2,
      title: "Sign Agreement",
      description: "Sign service contract & authorize GamTrust as your local representative.",
      icon: "🤝"
    },
    {
      number: 3,
      title: "Monitor & Report",
      description: "Receive weekly video, photo, drone updates & cost validation reports.",
      icon: "📡"
    },
    {
      number: 4,
      title: "Project Completion",
      description: "Final verification & project sign-off with complete transparency.",
      icon: "✅"
    }
  ],

  // Revenue Streams
  revenueStreams: [
    {
      icon: "📋",
      title: "Subscription Plans",
      description: "Monthly and quarterly monitoring packages"
    },
    {
      icon: "🏗️",
      title: "Project-Based Fees",
      description: "Fixed fee for construction or business oversight"
    },
    {
      icon: "⚖️",
      title: "Verification Fees",
      description: "Charges for document and legal verification"
    },
    {
      icon: "🤝",
      title: "Sourcing Commission",
      description: "Small margin when connecting clients to trusted suppliers"
    }
  ],

  // Target Market
  targetMarket: {
    primary: "Gambian diaspora (Europe, US, Middle East, Africa)",
    secondary: "Local investors needing third-party oversight, NGOs and development partners"
  },

  // Statistics / Key Metrics
  stats: [
    { value: "100+", label: "Projects Monitored" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Digital Reporting" },
    { value: "15+", label: "Trusted Contractors" }
  ],

  // Sample Project Data for Dashboard
  sampleProject: {
    id: "PRJ-001",
    name: "Bakau Residential Construction",
    status: "Ongoing",
    progress: 72,
    lastUpdate: "March 2026",
    description: "Foundation approved, reinforcement bars verified. No cost inflation detected.",
    updates: [
      { type: "photo", title: "Slab inspection", link: "#" },
      { type: "video", title: "Site walkthrough", link: "#" },
      { type: "drone", title: "Aerial footage", link: "#" }
    ],
    alerts: [
      "No anomalies detected. All material deliveries matched invoices.",
      "Last check: 2 hours ago"
    ],
    documents: [
      "Land title verified",
      "Construction permit on file",
      "Material invoices validated"
    ]
  },

  // Footer Links
  footerLinks: {
    quickLinks: [
      { name: "Home", url: "index.html" },
      { name: "Services", url: "services.html" },
      { name: "Client Hub", url: "client-hub.html" },
      { name: "About Us", url: "#" }
    ],
    legal: [
      { name: "Privacy Policy", url: "#" },
      { name: "Terms of Service", url: "#" },
      { name: "Data Protection", url: "#" }
    ]
  }
};

// Export for use in HTML files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = GamTrustData;
}