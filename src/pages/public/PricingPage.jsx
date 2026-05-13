import { Link } from "@tanstack/react-router";
import {
  Check,
  Star,
  Sparkles,
  ArrowRight,
  Shield,
  Clock,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const pricingData = {
    monthly: {
      plans: [
        {
          id: "essential",
          name: "Essential",
          price: 49,
          period: "month",
          description: "Perfect for small projects and basic oversight needs.",
          features: [
            "Monthly site visits",
            "Photo reports with verification",
            "Document verification",
            "Email support within 24 hours",
            "Basic progress tracking",
            "Monthly summary reports",
          ],
          notIncluded: ["Drone footage", "Live video calls", "Cost validation"],
          isPopular: false,
          buttonText: "Select Plan",
          buttonLink: "/get-started/essential",
        },
        {
          id: "premium",
          name: "Premium",
          price: 129,
          period: "month",
          description: "Comprehensive protection for active investments.",
          features: [
            "Weekly updates + drone footage",
            "Live video calls with field officer",
            "Contractor oversight and verification",
            "Cost validation against market rates",
            "Priority support within 4 hours",
            "Detailed progress analytics",
            "Weather and risk alerts",
          ],
          notIncluded: [],
          isPopular: true,
          buttonText: "Get Started",
          buttonLink: "/get-started/premium",
        },
        {
          id: "enterprise",
          name: "Enterprise",
          price: "Custom",
          period: "project",
          description:
            "Full-service representation for large-scale investments.",
          features: [
            "Full legal representation",
            "Land title & document verification",
            "Real-time dashboard access",
            "24/7 priority support",
            "Dedicated account manager",
            "Monthly stakeholder meetings",
            "Custom reporting requirements",
            "Emergency response protocol",
          ],
          notIncluded: [],
          isPopular: false,
          buttonText: "Contact Sales",
          buttonLink: "/contact",
        },
      ],
    },
    yearly: {
      plans: [
        {
          id: "essential",
          name: "Essential",
          price: 499,
          period: "year",
          description: "Perfect for small projects and basic oversight needs.",
          features: [
            "Monthly site visits",
            "Photo reports with verification",
            "Document verification",
            "Email support within 24 hours",
            "Basic progress tracking",
            "Monthly summary reports",
          ],
          notIncluded: ["Drone footage", "Live video calls", "Cost validation"],
          isPopular: false,
          buttonText: "Select Plan",
          buttonLink: "/get-started/essential",
          savings: "Save $89",
        },
        {
          id: "premium",
          name: "Premium",
          price: 1299,
          period: "year",
          description: "Comprehensive protection for active investments.",
          features: [
            "Weekly updates + drone footage",
            "Live video calls with field officer",
            "Contractor oversight and verification",
            "Cost validation against market rates",
            "Priority support within 4 hours",
            "Detailed progress analytics",
            "Weather and risk alerts",
          ],
          notIncluded: [],
          isPopular: true,
          buttonText: "Get Started",
          buttonLink: "/get-started/premium",
          savings: "Save $249",
        },
        {
          id: "enterprise",
          name: "Enterprise",
          price: "Custom",
          period: "project",
          description:
            "Full-service representation for large-scale investments.",
          features: [
            "Full legal representation",
            "Land title & document verification",
            "Real-time dashboard access",
            "24/7 priority support",
            "Dedicated account manager",
            "Monthly stakeholder meetings",
            "Custom reporting requirements",
            "Emergency response protocol",
          ],
          notIncluded: [],
          isPopular: false,
          buttonText: "Contact Sales",
          buttonLink: "/contact",
        },
      ],
    },
  };

  const currentPlans =
    billingCycle === "monthly"
      ? pricingData.monthly.plans
      : pricingData.yearly.plans;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="bg-cream py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/3 -right-1/4 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[100px]" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[100px]" />
        </div>

        <div className="container-brand relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <div className="w-6 h-px bg-gold" />
              <span className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-gold">
                Transparent Pricing
              </span>
              <div className="w-6 h-px bg-gold" />
            </div>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light text-navy leading-[1.1] tracking-[-0.02em] mb-4">
              Choose the plan that's right for you
            </h1>
            <div className="w-12 h-0.5 bg-gradient-to-r from-gold to-transparent mx-auto mb-6" />
            <p className="text-slate text-lg max-w-2xl mx-auto">
              No hidden fees, no surprises. Pay only for the oversight you need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Toggle */}
      <div className="sticky top-20 z-30 bg-cream border-b border-navy/10 py-4">
        <div className="container-brand">
          <div className="flex justify-center">
            <div className="inline-flex bg-white rounded-lg p-1 border border-navy/10 shadow-sm">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                  billingCycle === "monthly"
                    ? "bg-gold text-navy shadow-sm"
                    : "text-slate hover:text-navy"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                  billingCycle === "yearly"
                    ? "bg-gold text-navy shadow-sm"
                    : "text-slate hover:text-navy"
                }`}
              >
                Yearly
                <span className="ml-2 text-xs bg-gold-faint text-gold px-1.5 py-0.5 rounded">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <section className="py-20 lg:py-24">
        <div className="container-brand">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentPlans.map((plan) => (
              <motion.div
                key={plan.id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className={`relative rounded-xl transition-all duration-300 ${
                  plan.isPopular
                    ? "bg-navy shadow-xl scale-[1.02] lg:scale-105"
                    : "bg-white border border-navy/10 shadow-sm hover:shadow-md"
                }`}
              >
                {/* Popular badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 rounded-full bg-gold text-navy whitespace-nowrap">
                    <Star className="w-3 h-3 fill-current" />
                    <span className="text-xs font-bold uppercase tracking-wide">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  {/* Plan name */}
                  <div className="text-center mb-4">
                    <span className="font-mono text-[0.7rem] tracking-[0.14em] uppercase text-gold">
                      {plan.name}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-4">
                    <span
                      className={`font-display text-5xl lg:text-6xl font-semibold ${
                        plan.isPopular ? "text-white" : "text-navy"
                      }`}
                    >
                      {typeof plan.price === "number"
                        ? `$${plan.price}`
                        : plan.price}
                    </span>
                    {typeof plan.price === "number" && (
                      <span
                        className={`text-sm ml-1 ${
                          plan.isPopular ? "text-slate-light" : "text-slate"
                        }`}
                      >
                        /{plan.period}
                      </span>
                    )}
                  </div>

                  {/* Savings badge for yearly */}
                  {billingCycle === "yearly" && plan.savings && (
                    <div className="text-center mb-4">
                      <span className="inline-block text-xs font-medium bg-gold-faint text-gold px-2 py-1 rounded">
                        {plan.savings}
                      </span>
                    </div>
                  )}

                  {/* Description */}
                  <p
                    className={`text-sm text-center leading-relaxed mb-6 ${
                      plan.isPopular ? "text-slate-light" : "text-slate"
                    }`}
                  >
                    {plan.description}
                  </p>

                  {/* Divider */}
                  <div
                    className={`h-px my-6 ${
                      plan.isPopular ? "bg-white/10" : "bg-navy/10"
                    }`}
                  />

                  {/* Features list */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm"
                      >
                        <Check className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
                        <span
                          className={
                            plan.isPopular ? "text-white/75" : "text-slate"
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm opacity-50"
                      >
                        <div className="w-4 h-4 mt-0.5 shrink-0 border border-gold/30 rounded-full" />
                        <span
                          className={
                            plan.isPopular ? "text-white/40" : "text-slate/60"
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    to={plan.buttonLink}
                    className={`block text-center py-3 px-4 rounded-sm font-semibold transition-all duration-300 ${
                      plan.isPopular
                        ? "bg-gold text-navy hover:bg-gold-light hover:shadow-gold"
                        : "border-2 border-gold text-gold hover:bg-gold/10"
                    }`}
                  >
                    {plan.buttonText}
                    {plan.id === "enterprise" && (
                      <ArrowRight className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    )}
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-center mt-16"
          >
            <div className="inline-flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gold-faint border border-gold/20">
                <Shield className="w-4 h-4 text-gold" />
                <span className="text-sm font-medium text-slate">
                  14-day money-back guarantee
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gold-faint border border-gold/20">
                <Clock className="w-4 h-4 text-gold" />
                <span className="text-sm font-medium text-slate">
                  Cancel anytime
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gold-faint border border-gold/20">
                <Users className="w-4 h-4 text-gold" />
                <span className="text-sm font-medium text-slate">
                  Dedicated support
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white border-t border-navy/10">
        <div className="container-brand">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <div className="w-6 h-px bg-gold" />
              <span className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-gold">
                Common Questions
              </span>
              <div className="w-6 h-px bg-gold" />
            </div>
            <h2 className="font-display text-[clamp(2rem,3vw,3rem)] font-light text-navy leading-[1.1] tracking-[-0.02em] mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-gold to-transparent mx-auto" />
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "What's included in the monitoring service?",
                a: "All plans include site visits, photo documentation, and progress reports. Premium plans add drone footage, live video calls, and cost validation. Enterprise includes full legal representation and a dedicated account manager.",
              },
              {
                q: "How do you verify costs and prevent inflation?",
                a: "We maintain a database of current market rates for materials and labor in The Gambia. Our field officers verify every invoice against these rates and flag any discrepancies for your review.",
              },
              {
                q: "Can I upgrade or downgrade my plan?",
                a: "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades apply to your next billing cycle.",
              },
              {
                q: "How often will I receive updates?",
                a: "Essential plans receive monthly updates. Premium plans receive weekly updates including drone footage. You can also request additional check-ins at any time.",
              },
              {
                q: "Is there a contract or commitment?",
                a: "No long-term contracts. All monthly plans can be canceled anytime with 30 days notice. Annual plans are prepaid but fully refundable within the first 14 days.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-cream rounded-lg p-6 border border-navy/10"
              >
                <h3 className="font-display text-lg font-medium text-navy mb-2">
                  {faq.q}
                </h3>
                <p className="text-slate text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-cream relative overflow-hidden border-t border-navy/10">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/2 w-[800px] h-[800px] rounded-full bg-gold/5 blur-[100px] -translate-x-1/2" />
        </div>

        <div className="container-brand relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <Sparkles className="w-8 h-8 text-gold mx-auto mb-4" />
            <h2 className="font-display text-[clamp(1.8rem,3vw,2.5rem)] font-light text-navy leading-[1.2] mb-4">
              Ready to protect your investment?
            </h2>
            <p className="text-slate mb-8">
              Join hundreds of diaspora investors who trust GamTrust with their
              investments back home.
            </p>
            <Link
              to="/get-started"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-sm bg-gold text-navy font-semibold hover:bg-gold-light transition-all duration-300 group"
            >
              Get Started Today
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="text-xs text-slate/60 mt-4">
              No credit card required • Free consultation
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
