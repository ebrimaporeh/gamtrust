// Static data matching your backend/data.js
import {
  HardHat,
  ChartLine,
  Gavel,
  Search,
  Video,
  Handshake,
  FileText,
  Building2,
  Scale,
  Users,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Camera,
  MapPin,
  Calendar,
  Clock,
  DollarSign,
  Phone,
  Mail,
  Home,
  Briefcase,
  UserCircle,
  FileCheck,
  Lock,
  Database
} from "lucide-react";
import { FaFacebook, FaLinkedin, FaTwitter} from "react-icons/fa";

export const companyInfo = {
  name: "GamTrust",
  tagline: "Your eyes on the ground — protection & transparency for diaspora investments",
  email: "protect@gamtrust.gm",
  phone: "+220 123 4567",
  address: "Fajara, The Gambia",
  social: {
    twitter: "@GamTrust",
    linkedin: "gamtrust-ltd",
    facebook: "GamTrustGambia"
  }
}

export const services = [
  {
    id: 1,
    title: "Construction Monitoring",
    icon: HardHat,
    iconClass: "HardHat",
    description: "Site visits, material verification, foundation-to-completion tracking & cost validation to prevent inflation and poor quality.",
    features: ["Weekly site inspections", "Material quality checks", "Cost validation", "Progress photography"]
  },
  {
    id: 2,
    title: "Business Monitoring",
    icon: ChartLine,
    iconClass: "ChartLine",
    description: "Operational supervision, financial checks, staff & inventory verification for diaspora-funded businesses.",
    features: ["Financial activity review", "Staff verification", "Inventory audits", "Performance reports"]
  },
  {
    id: 3,
    title: "Legal & Document Verification",
    icon: Gavel,
    iconClass: "Gavel",
    description: "Confirm business registrations, land ownership, contracts & agreements before any investment is made.",
    features: ["Land title verification", "Business registration checks", "Contract review", "Legal compliance"]
  },
  {
    id: 4,
    title: "Supplier & Contractor Sourcing",
    icon: Search,
    iconClass: "Search",
    description: "Vetted builders, suppliers, and technicians to reduce fraud risk and ensure quality service delivery.",
    features: ["Background checks", "Previous work verification", "Price negotiation", "Quality guarantees"]
  },
  {
    id: 5,
    title: "Real-Time Reporting",
    icon: Video,
    iconClass: "Video",
    description: "Video updates, drone footage, photo evidence & scheduled calls to keep you informed every step of the way.",
    features: ["Weekly video updates", "Drone aerial footage", "Live video calls", "Written progress reports"]
  },
  {
    id: 6,
    title: "Representation Service",
    icon: Handshake,
    iconClass: "Handshake",
    description: "Act as your official local agent, attend meetings, negotiate contracts, and supervise agreements on your behalf.",
    features: ["Meeting attendance", "Contract negotiation", "On-site supervision", "Legal representation"]
  }
]

export const pricingPlans = [
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
]

export const steps = [
  {
    number: 1,
    title: "Register",
    description: "Sign up & choose your monitoring package or project-based oversight plan.",
    icon: FileText
  },
  {
    number: 2,
    title: "Sign Agreement",
    description: "Sign service contract & authorize GamTrust as your local representative.",
    icon: Handshake
  },
  {
    number: 3,
    title: "Monitor & Report",
    description: "Receive weekly video, photo, drone updates & cost validation reports.",
    icon: TrendingUp
  },
  {
    number: 4,
    title: "Project Completion",
    description: "Final verification & project sign-off with complete transparency.",
    icon: CheckCircle2
  }
]

export const revenueStreams = [
  { icon: FileText, title: "Subscription Plans", description: "Monthly and quarterly monitoring packages" },
  { icon: Building2, title: "Project-Based Fees", description: "Fixed fee for construction or business oversight" },
  { icon: Scale, title: "Verification Fees", description: "Charges for document and legal verification" },
  { icon: Handshake, title: "Sourcing Commission", description: "Small margin when connecting clients to trusted suppliers" }
]

export const stats = [
  { value: "100+", label: "Projects Monitored" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Digital Reporting" },
  { value: "15+", label: "Trusted Contractors" }
]

export const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "Client Hub", href: "/client-hub", icon: UserCircle },
]

export const footerLinks = {
  quickLinks: [
    { name: "Home", url: "/", icon: Home },
    { name: "Services", url: "/services", icon: Briefcase },
    { name: "Client Hub", url: "/client-hub", icon: UserCircle },
  ],
  legal: [
    { name: "Privacy Policy", url: "#", icon: Lock },
    { name: "Terms of Service", url: "#", icon: FileCheck },
    { name: "Data Protection", url: "#", icon: Database }
  ]
}

// Helper function to get icon by name (if needed for dynamic rendering)
export const getIconByName = (iconName) => {
  const icons = {
    HardHat,
    ChartLine,
    Gavel,
    Search,
    Video,
    Handshake,
    FileText,
    Building2,
    Scale,
    Users,
    CheckCircle2,
    TrendingUp,
    ShieldCheck,
    Camera,
    MapPin,
    Calendar,
    Clock,
    DollarSign,
    Phone,
    Mail,
    FaTwitter,
    FaLinkedin,
    FaFacebook,
    Home,
    Briefcase,
    UserCircle,
    FileCheck,
    Lock,
    Database
  };
  return icons[iconName] || HardHat;
};