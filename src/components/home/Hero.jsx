import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  ArrowRight, 
  Camera, 
  Video, 
  CheckCircle2, 
  MapPin,
  TrendingUp,
  AlertTriangle
} from "lucide-react";
import { companyInfo } from "../../utils/constants";

// ─────────────────────────────────────────────────────────────
// Animation Variants
// ─────────────────────────────────────────────────────────────
const fadeUp = (delay = 0, duration = 0.7) => ({
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration, delay, ease: [0.4, 0, 0.2, 1] } }
});

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, delay, ease: "easeOut" } }
});

const staggerContainer = (staggerChildren = 0.12, delayChildren = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } }
});

const slideInRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] } }
});

// ─────────────────────────────────────────────────────────────
// Progress Bar Component
// ─────────────────────────────────────────────────────────────
function ProgressBar({ label, percent, delay = 0 }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs font-medium text-white/65">{label}</span>
        <span className="text-xs font-semibold font-mono text-gold">{percent}%</span>
      </div>
      <div className="h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-gold to-gold-light"
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 1.4, delay, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Live Status Badge
// ─────────────────────────────────────────────────────────────
function LiveBadge() {
  return (
    <div className="flex items-center gap-1.5">
      <div className="relative w-2 h-2">
        <motion.div
          className="absolute inset-0 rounded-full bg-emerald-400"
          animate={{ scale: [1, 1.9], opacity: [0.7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
        />
        <div className="relative w-1.5 h-1.5 rounded-full bg-emerald-400 z-[1]" />
      </div>
      <span className="font-mono text-[0.68rem] tracking-[0.08em] text-emerald-400 uppercase font-medium">
        Live
      </span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Report Card (Hero Visual)
// ─────────────────────────────────────────────────────────────
function ReportCard() {
  const progressData = [
    { label: "Foundation", percent: 100, delay: 0.3 },
    { label: "Structure", percent: 78, delay: 0.4 },
    { label: "Roofing", percent: 45, delay: 0.5 },
    { label: "Interior", percent: 12, delay: 0.6 }
  ];

  const mediaTags = [
    { icon: Camera, label: "24 Photos" },
    { icon: Video, label: "2 Videos" },
    { icon: CheckCircle2, label: "Verified" }
  ];

  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-full max-w-[360px] bg-white/5 backdrop-blur-md border border-gold/15 rounded-xl p-8 shadow-2xl mx-auto lg:mx-0"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h4 className="font-display text-white text-lg mb-1">Construction Report</h4>
          <div className="flex items-center gap-1.5 text-slate-light text-xs">
            <MapPin size={12} className="text-gold/70" />
            Fajara Villa · Week 14
          </div>
        </div>
        <LiveBadge />
      </div>

      {/* Progress Bars */}
      <div className="flex flex-col gap-3.5 mb-6">
        {progressData.map((item, idx) => (
          <ProgressBar key={idx} {...item} />
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-white/10 mb-5" />

      {/* Media Tags */}
      <div className="flex gap-2">
        {mediaTags.map(({ icon: Icon, label }, i) => (
          <div
            key={i}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-1 bg-gold-faint border border-gold/20 rounded"
          >
            <Icon size={11} className="text-gold" />
            <span className="font-mono text-[0.65rem] tracking-wide text-gold whitespace-nowrap">
              {label}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────
// Floating Stat Chip
// ─────────────────────────────────────────────────────────────
function StatChip({ value, label, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, x: -20, y: 20 }}
      animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="absolute -bottom-6 -left-6 bg-navy-light/90 backdrop-blur-sm border border-gold/25 rounded-md p-4 shadow-lg z-20"
    >
      <div className="font-display text-2xl font-semibold text-gold leading-none">$900M</div>
      <div className="text-[0.68rem] text-slate-light mt-1 whitespace-nowrap">Annual Gambian remittances</div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────
// Trust Signals Row
// ─────────────────────────────────────────────────────────────
function TrustSignals() {
  const signals = [
    { icon: ShieldCheck, text: "Independently verified" },
    { icon: TrendingUp, text: "Real-time updates" },
    { icon: CheckCircle2, text: "100+ projects monitored" }
  ];

  return (
    <motion.div
      variants={staggerContainer(0.1, 0)}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-8"
    >
      {signals.map(({ icon: Icon, text }, idx) => (
        <motion.div key={idx} variants={fadeIn(0)} className="flex items-center gap-2">
          <Icon size={13} strokeWidth={1.75} className="text-gold/70 shrink-0" />
          <span className="text-[0.8rem] text-white/50 font-light tracking-wide">{text}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────
// Hero Background (Softer, more elegant)
// ─────────────────────────────────────────────────────────────
function HeroBackground() {
  return (
    <>
      {/* Main Navy Background */}
      <div className="absolute inset-0 bg-navy" />
      
      {/* Soft Radial Gradients - much subtler */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -right-1/4 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[100px]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-navy-light/30 blur-[120px]" />
      </div>
      
      {/* Subtle Grid Pattern - much lighter opacity */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px"
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Single elegant gold accent line */}
      <motion.div
        className="absolute top-[20%] right-[3%] w-px h-[40%] bg-gradient-to-b from-transparent via-gold/15 to-transparent hidden lg:block"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
      />
      
      {/* Small golden orb decoration */}
      <motion.div
        className="absolute bottom-[15%] right-[10%] w-32 h-32 rounded-full bg-gold/5 blur-[60px] hidden lg:block"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      />
    </>
  );
}

// ─────────────────────────────────────────────────────────────
// Alert Bubble (Subtle notification)
// ─────────────────────────────────────────────────────────────
function AlertBubble() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20, y: -20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: 1.8, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="absolute -top-4 -right-4 bg-navy/80 backdrop-blur-md border border-gold/20 rounded-lg p-2.5 flex items-center gap-2.5 shadow-lg z-20"
    >
      <div className="w-7 h-7 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center shrink-0">
        <TrendingUp size={13} className="text-emerald-400" />
      </div>
      <div>
        <div className="text-[0.7rem] font-semibold text-white leading-tight">Budget on track</div>
        <div className="text-[0.6rem] text-slate-light leading-tight mt-0.5">Validated this week</div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────
// Main Hero Component
// ─────────────────────────────────────────────────────────────
export default function Hero() {
  const [videoHovered, setVideoHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="hero" className="relative flex items-center overflow-hidden min-h-screen">
      <HeroBackground />

      <div className="container-brand relative z-10 w-full py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT COLUMN */}
          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-none"
          >
            {/* Badge */}
            <motion.div variants={fadeUp(0, 0.6)} className="mb-6 lg:mb-8">
              <div className="inline-flex items-center gap-3 bg-gold-faint border border-gold/20 py-1.5 px-4 rounded-sm">
                <div className="relative flex items-center justify-center w-2 h-2">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gold"
                    animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                  />
                  <div className="relative w-1.5 h-1.5 rounded-full bg-gold z-[1]" />
                </div>
                <span className="font-mono text-[0.7rem] tracking-[0.12em] text-gold uppercase font-medium">
                  Trusted Local Representation
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeUp(0.08, 0.8)} className="text-hero text-white leading-[1.08]">
              Your eyes on the{" "}
              <em className="text-gold not-italic font-light">ground</em>
              <br />
              in The Gambia
            </motion.h1>

            {/* Gold Divider */}
            <motion.div variants={fadeIn(0.3)} className="w-12 h-px bg-gradient-to-r from-gold to-transparent my-6 lg:my-7" />

            {/* Sub-headline */}
            <motion.p variants={fadeUp(0.2, 0.7)} className="text-white/50 max-w-md leading-relaxed text-sm lg:text-base font-light">
              We protect diaspora investments through real-time monitoring, verified
              reporting, and trusted local representation.{" "}
              <span className="text-white/70">No more fraud. No more uncertainty.</span>
            </motion.p>

            {/* Trust Signals */}
            <motion.div variants={fadeUp(0.28, 0.6)}>
              <TrustSignals />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp(0.36, 0.7)} className="flex flex-wrap gap-4 mt-8 lg:mt-10">
              <motion.a
                href="#cta"
                className="btn-primary group"
                whileHover={{ y: -2, boxShadow: "var(--shadow-gold)" }}
                whileTap={{ scale: 0.98 }}
              >
                <ShieldCheck size={16} />
                Start Protecting Your Investment
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight size={15} />
                </motion.span>
              </motion.a>

              <motion.a
                href="#how"
                className="btn-outline"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setVideoHovered(true)}
                onHoverEnd={() => setVideoHovered(false)}
              >
                <motion.span animate={{ scale: videoHovered ? 1.15 : 1 }}>
                  ▶
                </motion.span>
                See How It Works
              </motion.a>
            </motion.div>

           
          </motion.div>

        {/* RIGHT COLUMN - Visual (Now visible on all screen sizes) */}
<div className="relative flex justify-center items-center order-2 lg:order-none mt-12 lg:mt-0">
  {/* Soft glow behind card */}
  <motion.div
    className="absolute w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gold/10 blur-[80px] pointer-events-none"
    animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  />

  <div className="relative z-10">
    <AlertBubble />
    
    {/* Directly render ReportCard without extra motion.div wrapper */}
    <ReportCard />

    <StatChip value="$900M" label="Annual Gambian remittances" delay={0.9} />
  </div>

  {/* Decorative Side Text - Rotated (Hidden on mobile) */}
  {!isMobile && (
    <motion.div
      className="absolute -right-6 lg:-right-10 top-1/2 -translate-y-1/2 rotate-90 flex items-center gap-3 hidden lg:flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.8 }}
    >
      <div className="w-6 h-px bg-gold/20" />
      <span className="font-mono text-[0.6rem] tracking-[0.2em] text-gold/30 uppercase whitespace-nowrap font-light">
        {companyInfo?.address || "Fajara, The Gambia"}
      </span>
      <div className="w-6 h-px bg-gold/20" />
    </motion.div>
  )}
</div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 lg:h-32 bg-gradient-to-t from-navy/60 to-transparent pointer-events-none z-5" />

      {/* Scroll Cue - Minimal */}
      <motion.div
        className="absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <div className="w-px h-6 lg:h-8 bg-gradient-to-b from-gold/40 to-gold/0" />
          <span className="font-mono text-[0.5rem] lg:text-[0.55rem] tracking-[0.2em] text-gold/30 uppercase">
            Scroll
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}