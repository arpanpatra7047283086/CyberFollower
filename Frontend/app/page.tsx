"use client";

import { motion } from "framer-motion";
import {
  ArrowRight, Shield, Award, Users, TrendingUp, Scale,
  Gavel, Building2, FileText, ShieldCheck, ChevronRight,
  Globe, Briefcase, Landmark, Umbrella, Droplets, Home, Handshake
} from "lucide-react";
import Link from "next/link";
import { PageLayout } from "@/components/site/PageLayout";

// Professional Animation Variants - Optimized for performance
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  },
  viewport: { once: true }
};

export default function Index() {
  return (
    <PageLayout>
      {/* HERO SECTION */}
      <section className="relative isolate min-h-[95vh] flex items-center overflow-hidden bg-surface-dark text-surface-dark-foreground">
        <div className="absolute inset-0 -z-10">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
            alt="Supreme Court Architecture"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/95 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(191,155,48,0.05),transparent_70%)]" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
              <Shield className="h-3.5 w-3.5" /> RSG ASSOCIATES — LAWYERS OF CHOICE
            </div>
            <h1 className="mt-8 font-display text-7xl leading-[1.05] md:text-9xl font-bold">
              Justice, <br />
              <span className="text-gold italic font-medium">Delivered.</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-surface-dark-foreground/70 border-l-2 border-gold/30 pl-6">
              RSG Associates is a full-service law firm based in New Delhi, providing comprehensive legal solutions with a commitment to integrity and excellence.
            </p>
            <div className="mt-12 flex flex-wrap gap-6">
              <Link
                href="/query"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gold px-10 py-5 text-sm font-bold text-primary shadow-2xl transition-all hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">Book a Consultation</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-10 py-5 text-sm font-semibold transition-all hover:bg-white/5 hover:border-white/40"
              >
                Our Profile
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] w-full max-w-md ml-auto">
              <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-gold/30 to-transparent blur-3xl opacity-50" />
              <img
                src="/AdvRaviSGupta2.png"
                alt="Adv. Ravi S. Gupta"
                className="relative h-full w-full object-cover rounded-[2.5rem] shadow-2xl ring-1 ring-white/10"
              />

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-12 rounded-3xl border border-white/10 bg-surface-dark/90 p-8 backdrop-blur-2xl shadow-2xl"
              >
                <div className="text-5xl font-display text-gold font-bold">95%</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-gold/60 mt-1 font-bold">Litigation Success</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* JURISDICTIONS SECTION */}
      <section className="py-12 bg-secondary/30 border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
           <div className="flex flex-wrap items-center justify-between gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-sm font-bold uppercase tracking-widest text-primary/60">Featured In & Recognized By:</span>
              <div className="flex gap-12 items-center">
                <div className="font-display text-xl font-bold">Supreme Court of India</div>
                <div className="font-display text-xl font-bold">Delhi High Court</div>
                <div className="font-display text-xl font-bold">NCLT</div>
                <div className="font-display text-xl font-bold">Bar Council of India</div>
              </div>
           </div>
        </div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section className="py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div className="max-w-2xl">
              <div className="text-[11px] uppercase tracking-[0.4em] text-accent font-extrabold mb-4">Leadership</div>
              <h2 className="font-display text-6xl text-primary md:text-7xl leading-tight">Founding Counsel</h2>
            </div>
            <Link href="/team" className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-primary/60 hover:text-gold transition-colors">
              Our Professional Team <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 justify-center">
             <div className="lg:col-start-2">
                <motion.div variants={fadeInUp} className="group relative overflow-hidden rounded-[2.5rem] aspect-[4/5] bg-surface-dark shadow-2xl">
                    <img src="/AdvRaviSGupta2.png" alt="Ravi S Gupta" className="h-full w-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 mb-3">
                        <ShieldCheck className="h-4 w-4 text-gold" />
                        <span className="text-[10px] uppercase tracking-widest text-gold font-bold">Advocate-on-Record</span>
                        </div>
                    <h3 className="font-display text-3xl text-white mb-2">Ravi S. Gupta</h3>
                    <p className="text-white/50 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Practicing in Supreme Court and High Courts for over two decades.</p>
                    </div>
                </motion.div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="relative z-20 -mt-12">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid gap-1 px-1 py-1 sm:grid-cols-2 lg:grid-cols-4 rounded-[3rem] bg-white shadow-2xl overflow-hidden border border-border/50"
          >
            {[
              { icon: Briefcase, value: "15+", label: "Years of Experience" },
              { icon: Landmark, value: "5000+", label: "Matters Handled" },
              { icon: Globe, value: "100%", label: "Client Commitment" },
              { icon: Award, value: "AOR", label: "Supreme Court" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="flex flex-col items-center justify-center py-10 hover:bg-secondary/50 transition-colors"
              >
                <div className="mb-4 p-3 rounded-2xl bg-gold/10 text-gold">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="font-display text-5xl text-primary font-bold">{stat.value}</div>
                <div className="mt-1 text-[9px] uppercase tracking-[0.3em] text-muted-foreground font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* OUR PRACTICES SECTION */}
      <section className="py-32 bg-[#F5F5F5]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-24">
            <div className="relative inline-block">
              <h2 className="text-4xl font-light tracking-[0.25em] text-[#333] uppercase pb-8">
                Our Practices
              </h2>
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-300" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#333]" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white shadow-sm border border-gray-100">
            {[
              {
                title: "Litigation & Dispute Resolution",
                desc: "Expert representation in Supreme Court, High Courts, and Tribunals for civil, criminal, and commercial matters.",
                icon: Gavel,
                highlighted: true
              },
              {
                title: "Corporate & Commercial",
                desc: "Comprehensive advisory on business transactions, compliance, and corporate litigation.",
                icon: Briefcase
              },
              {
                title: "Real Estate & Property",
                desc: "Handling property disputes, title verifications, and real estate documentation.",
                icon: Home
              },
              {
                title: "Matrimonial & Family Law",
                desc: "Compassionate legal support for divorce, custody, and family inheritance disputes.",
                icon: Handshake
              },
              {
                title: "Intellectual Property",
                desc: "Protection and litigation of trademarks, copyrights, and patents.",
                icon: Shield
              },
              {
                title: "Civil & Criminal Law",
                desc: "Dedicated advocacy across all levels of the judiciary for complex legal challenges.",
                icon: Landmark
              }
            ].map((practice, idx) => (
              <div
                key={idx}
                className={`group relative p-12 flex gap-8 transition-all duration-500 border-b border-gray-100 lg:border-r ${
                  practice.highlighted ? "bg-[#5D636D] text-white border-none shadow-2xl z-20" : "bg-white text-[#333] hover:bg-gray-50"
                } ${(idx + 1) % 3 === 0 ? "lg:border-r-0" : ""} ${idx >= 3 ? "lg:border-b-0" : ""}`}
              >
                <div className="relative flex flex-col items-center flex-shrink-0">
                   <div className={`absolute top-0 bottom-0 w-[1px] ${practice.highlighted ? "bg-white/30" : "bg-gray-200"}`} />
                   <div className={`relative z-10 w-14 h-14 rounded-full border flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${
                     practice.highlighted
                      ? "bg-white border-white"
                      : "bg-white border-gray-200 shadow-sm"
                   }`}>
                      <practice.icon className={`h-6 w-6 ${practice.highlighted ? "text-[#5D636D]" : "text-gray-500"}`} />
                   </div>
                </div>

                <div className="flex-1">
                  <h3 className={`text-2xl font-bold italic mb-4 tracking-tight ${practice.highlighted ? "text-white" : "text-[#333]"}`}>
                    {practice.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-8 font-medium ${practice.highlighted ? "text-white/80" : "text-gray-500"}`}>
                    {practice.desc}
                  </p>
                  <Link
                    href="/practice-areas"
                    className={`inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] transition-all group-hover:gap-3 ${
                      practice.highlighted ? "text-white" : "text-gray-400 hover:text-[#5D636D]"
                    }`}
                  >
                    Read More <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-surface-dark py-40 text-surface-dark-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-primary/20 blur-[120px] rounded-full" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-6xl md:text-8xl leading-tight">Secure your <span className="text-gold italic font-medium">legal rights</span> with expert counsel.</h2>
            <p className="mt-10 mx-auto max-w-2xl text-xl text-surface-dark-foreground/60 leading-relaxed">
              Contact RSG Associates today for strategic legal advice and dedicated representation in New Delhi and across India.
            </p>
            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link href="/contact" className="group flex items-center gap-4 rounded-full bg-gold px-14 py-6 text-sm font-bold text-primary hover:scale-105 active:scale-95 transition-all shadow-[0_20px_50px_rgba(191,155,48,0.3)]">
                Get In Touch <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <div className="flex items-center gap-4">
                 <div className="h-12 w-12 rounded-full border border-white/10 grid place-items-center">
                    <Globe className="h-5 w-5 text-gold" />
                 </div>
                 <div className="text-left">
                    <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Location</div>
                    <div className="text-sm font-bold">New Delhi, India</div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
