"use client";

import { motion } from "framer-motion";
import { Building2, Shield, Gavel, Scale, FileText, Award, Briefcase, Landmark, Users, Globe, BookOpen, Lock, ArrowRight, Home, Handshake } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  },
  viewport: { once: true }
};

const areas = [
  {
    icon: Gavel,
    t: "Supreme Court Litigation",
    d: "Expert representation in the Supreme Court of India, including Special Leave Petitions (SLPs), Writ Petitions, and Transfer Petitions by an Advocate-on-Record."
  },
  {
    icon: Building2,
    t: "Corporate & Commercial Law",
    d: "Comprehensive advisory on business transactions, joint ventures, regulatory compliance, and commercial dispute resolution."
  },
  {
    icon: Scale,
    t: "Civil & Criminal Litigation",
    d: "Strong advocacy across High Courts and District Courts for complex civil suits, property disputes, and criminal defense matters."
  },
  {
    icon: Handshake,
    t: "Insolvency & Bankruptcy (NCLT)",
    d: "Specialized representation before NCLT and NCLAT for corporate insolvency resolution processes and debt recovery."
  },
  {
    icon: Award,
    t: "Matrimonial & Family Law",
    d: "Sensitive and strategic legal support for divorce, maintenance, child custody, and family settlement disputes."
  },
  {
    icon: Shield,
    t: "Intellectual Property Rights",
    d: "Protecting business assets through trademark registration, copyright protection, and IP infringement litigation."
  },
  {
    icon: Home,
    t: "Real Estate & Property Law",
    d: "Legal assistance in property title verification, builder-buyer disputes, and RERA related litigation."
  },
  {
    icon: FileText,
    t: "Arbitration & Conciliation",
    d: "Representing clients in domestic and international arbitration proceedings for swift and effective dispute resolution."
  },
  {
    icon: Landmark,
    t: "Constitutional Matters",
    d: "Handling high-stakes constitutional challenges and writ petitions involving the enforcement of fundamental rights."
  }
];

export default function PracticeAreas() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Our Expertise"
        title="Practice Areas."
        subtitle="RSG Associates provides a wide range of legal services with a focus on delivering result-oriented solutions across various jurisdictions."
      />

      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 topo-pattern opacity-5" />
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {areas.map((a, i) => (
              <motion.div
                key={a.t}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-[2.5rem] border border-border bg-white p-10 shadow-sm transition-all hover:border-gold/50 hover:shadow-2xl"
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold/5 blur-3xl transition-opacity group-hover:opacity-20" />

                <div className="relative">
                  <div className="mb-8 grid h-16 w-16 place-items-center rounded-2xl bg-secondary text-primary group-hover:bg-gold group-hover:text-primary transition-all duration-500">
                    <a.icon className="h-8 w-8" />
                  </div>

                  <h3 className="font-display text-3xl tracking-tight text-primary">{a.t}</h3>
                  <div className="mt-4 h-0.5 w-10 bg-gold/30 group-hover:w-20 transition-all duration-500" />
                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{a.d}</p>

                  <div className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    Learn More <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FOOTER CALL TO ACTION */}
      <section className="bg-surface-dark py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl px-6"
        >
          <h2 className="font-display text-4xl md:text-5xl text-white">Require specialized legal assistance?</h2>
          <p className="mt-6 text-lg text-white/60">Our team is ready to provide the expertise your legal matter deserves.</p>
          <div className="mt-10">
            <button className="rounded-full bg-gold px-10 py-4 text-sm font-bold text-primary hover:scale-105 transition-transform shadow-xl">
              Contact an Expert
            </button>
          </div>
        </motion.div>
      </section>
    </PageLayout>
  );
}
