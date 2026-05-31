"use client";

import { motion } from "framer-motion";
import {
  ArrowRight, Shield, Award, Users, TrendingUp, Scale,
  Gavel, Building2, FileText, ShieldCheck, ChevronRight,
  Globe, Briefcase, Landmark
} from "lucide-react";
import Link from "next/link";
import { PageLayout } from "@/components/site/PageLayout";

// Professional Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
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
      {/* HERO SECTION - Refined with better typography and depth */}
      <section className="relative isolate min-h-[95vh] flex items-center overflow-hidden bg-surface-dark text-surface-dark-foreground">
        <div className="absolute inset-0 -z-10">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
            alt="Supreme Court Architecture"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/95 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(191,155,48,0.05),transparent_70%)]" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
              <Shield className="h-3.5 w-3.5" /> Legacy of Excellence Since 1964
            </div>
            <h1 className="mt-8 font-display text-7xl leading-[1.05] md:text-9xl font-bold">
              Justice, <br />
              <span className="text-gold italic font-medium">Defined.</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-surface-dark-foreground/70 border-l-2 border-gold/30 pl-6">
              Agarwal Law Associates merges decades of courtroom mastery with innovative legal strategies to navigate the complexities of modern jurisprudence.
            </p>
            <div className="mt-12 flex flex-wrap gap-6">
              <Link
                href="/query"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gold px-10 py-5 text-sm font-bold text-primary shadow-2xl transition-all hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">Request Consultation</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-10 py-5 text-sm font-semibold transition-all hover:bg-white/5 hover:border-white/40"
              >
                Explore Our Legacy
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] w-full max-w-md ml-auto">
              <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-gold/30 to-transparent blur-3xl opacity-50" />
              <img
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop"
                alt="Legal Scales"
                className="relative h-full w-full object-cover rounded-[2.5rem] shadow-2xl ring-1 ring-white/10"
              />

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-12 rounded-3xl border border-white/10 bg-surface-dark/90 p-8 backdrop-blur-2xl shadow-2xl"
              >
                <div className="text-5xl font-display text-gold font-bold">98%</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-gold/60 mt-1 font-bold">Litigation Success</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUSTED BY SECTION - NEW */}
      <section className="py-12 bg-secondary/30 border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
           <div className="flex flex-wrap items-center justify-between gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-sm font-bold uppercase tracking-widest text-primary/60">Featured In:</span>
              <div className="flex gap-12 items-center">
                <div className="font-display text-xl font-bold">Bar & Bench</div>
                <div className="font-display text-xl font-bold">LiveLaw</div>
                <div className="font-display text-xl font-bold">The Hindu</div>
                <div className="font-display text-xl font-bold">Legal500</div>
              </div>
           </div>
        </div>
      </section>

      {/* PARTNERS SECTION - Ultra Modern Cards */}
      <section className="py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div className="max-w-2xl">
              <div className="text-[11px] uppercase tracking-[0.4em] text-accent font-extrabold mb-4">Leadership</div>
              <h2 className="font-display text-6xl text-primary md:text-7xl leading-tight">Elite Legal Minds</h2>
            </div>
            <Link href="/team" className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-primary/60 hover:text-gold transition-colors">
              View All Partners <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="grid gap-10 md:grid-cols-3">
            {[
              { img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop", name: "E.C. Agarwal", role: "Founding Partner", bio: "Over 50 years of Supreme Court practice." },
              { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop", name: "Mahesh Agarwal", role: "Managing Partner", bio: "Expert in complex commercial litigation." },
              { img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop", name: "Rishi Agarwal", role: "Partner — Litigation", bio: "Leading strategist for white-collar defense." },
            ].map((lawyer) => (
              <motion.div key={lawyer.name} variants={fadeInUp} className="group relative overflow-hidden rounded-[2.5rem] aspect-[4/5] bg-surface-dark shadow-2xl">
                <img src={lawyer.img} alt={lawyer.name} className="h-full w-full object-cover grayscale-[0.8] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                   <div className="flex items-center gap-2 mb-3">
                       <ShieldCheck className="h-4 w-4 text-gold" />
                       <span className="text-[10px] uppercase tracking-widest text-gold font-bold">{lawyer.role}</span>
                    </div>
                  <h3 className="font-display text-3xl text-white mb-2">{lawyer.name}</h3>
                  <p className="text-white/50 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{lawyer.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* STATS BAR - Refined with better contrast */}
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
              { icon: Briefcase, value: "10k+", label: "Matters Handled" },
              { icon: Landmark, value: "25+", label: "State Jurisdictions" },
              { icon: Globe, value: "150+", label: "Global Clients" },
              { icon: Award, value: "98%", label: "Client Retention" },
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

      {/* PRACTICE AREAS - Refined Glassmorphism */}
      <section className="relative py-40 overflow-hidden bg-secondary/20">
        <div className="absolute inset-0 topo-pattern opacity-5" />
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="text-center max-w-3xl mx-auto mb-24">
            <div className="text-[11px] uppercase tracking-[0.4em] text-accent font-extrabold mb-4">Core Competencies</div>
            <h2 className="font-display text-6xl text-primary md:text-7xl">Practice Areas</h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              We provide comprehensive legal counsel across diverse sectors, ensuring
              precision and strategic advantage for our clients.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              { icon: Building2, t: "Corporate & Commercial", d: "Navigating high-stakes transactions, regulatory compliance, and international trade law." },
              { icon: Shield, t: "Tech & Cyber Law", d: "Industry-leading expertise in data privacy, digital assets, and information technology litigation." },
              { icon: Gavel, t: "White Collar Defense", d: "Defending institutional and individual interests against complex economic offence investigations." },
              { icon: Scale, t: "Dispute Resolution", d: "Formulating robust arbitration and mediation strategies to resolve conflicts efficiently." },
              { icon: FileText, t: "Banking & Insolvency", d: "Comprehensive guidance on restructuring, insolvency proceedings, and financial recovery." },
              { icon: Landmark, t: "Constitutional Matters", d: "High-impact representation before Constitutional Courts on landmark legal issues." },
            ].map((p) => (
              <motion.div
                key={p.t}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group relative rounded-[2.5rem] border border-border/50 bg-white/80 p-12 backdrop-blur-sm transition-all hover:bg-white hover:border-gold/30 hover:shadow-elegant"
              >
                <div className="mb-10 grid h-16 w-16 place-items-center rounded-2xl bg-primary text-white group-hover:bg-gold group-hover:text-primary transition-all duration-500 shadow-lg">
                  <p.icon className="h-8 w-8" />
                </div>
                <h3 className="font-display text-3xl text-primary group-hover:text-gold transition-colors">{p.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground/80">{p.d}</p>
                <div className="mt-10 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gold border-b border-gold/0 group-hover:border-gold/100 w-fit transition-all pb-1">
                  Explore Expertise <ArrowRight className="h-3 w-3" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION - Full width Impact */}
      <section className="bg-surface-dark py-40 text-surface-dark-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-primary/20 blur-[120px] rounded-full" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-6xl md:text-8xl leading-tight">Secure your <span className="text-gold italic font-medium">legal future</span> with precision.</h2>
            <p className="mt-10 mx-auto max-w-2xl text-xl text-surface-dark-foreground/60 leading-relaxed">
              Our partners are available for confidential consultations. Let us provide the strategic
              mastery your case requires.
            </p>
            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link href="/contact" className="group flex items-center gap-4 rounded-full bg-gold px-14 py-6 text-sm font-bold text-primary hover:scale-105 active:scale-95 transition-all shadow-[0_20px_50px_rgba(191,155,48,0.3)]">
                Connect With Us <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <div className="flex items-center gap-4">
                 <div className="h-12 w-12 rounded-full border border-white/10 grid place-items-center">
                    <Globe className="h-5 w-5 text-gold" />
                 </div>
                 <div className="text-left">
                    <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Available In</div>
                    <div className="text-sm font-bold">8 Major Cities Across India</div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
