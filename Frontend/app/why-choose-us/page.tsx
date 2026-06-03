"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Users, Trophy, Heart, Zap, ArrowRight, Scale, Gavel } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import Link from "next/link";

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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  },
  viewport: { once: true }
};

const reasons = [
  {
    icon: Gavel,
    t: "Supreme Court Expertise",
    d: "Led by an Advocate-on-Record, we provide specialized representation in the highest court of the land."
  },
  {
    icon: ShieldCheck,
    t: "Ethical Advocacy",
    d: "We strictly adhere to the highest professional and ethical standards in all our legal dealings."
  },
  {
    icon: Clock,
    t: "Timely Solutions",
    d: "We understand the value of time in legal matters and strive for efficient and prompt resolution."
  },
  {
    icon: Scale,
    t: "Strategic Approach",
    d: "Every case is analyzed with legal precision and strategic foresight to ensure the best possible outcome."
  },
  {
    icon: Heart,
    t: "Client Trust",
    d: "Building long-term relationships through transparent communication and dedicated service."
  },
  {
    icon: Zap,
    t: "Result-Oriented",
    d: "Our primary focus remains on delivering tangible results that meet our clients' legal objectives."
  },
];

export default function WhyChoose() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="The RSG Edge"
        title="Why RSG Associates."
        subtitle="Discover why clients trust us with their most complex legal challenges across Indian courts."
      />

      <section className="relative py-32 bg-background overflow-hidden">
        <div className="absolute inset-0 topo-pattern opacity-5" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {reasons.map((r, i) => (
              <motion.div
                key={r.t}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-[3rem] bg-surface-dark p-10 text-surface-dark-foreground shadow-elegant border border-white/5 transition-all duration-500"
              >
                {/* Decorative Glow */}
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-3xl transition-all group-hover:bg-gold/30" />

                <div className="relative z-10">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gold/15 text-gold border border-gold/20 mb-8 transition-transform duration-500 group-hover:scale-110">
                    <r.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-display text-3xl tracking-tight mb-4">{r.t}</h3>
                  <div className="h-0.5 w-10 bg-gold/30 mb-6 group-hover:w-16 transition-all duration-500" />
                  <p className="text-lg leading-relaxed text-surface-dark-foreground/70 font-display italic">
                    {r.d}
                  </p>
                </div>

                <div className="mt-10 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-gold opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                   Our Commitment <ArrowRight className="h-3 w-3" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="bg-card py-32 border-y border-border">
        <div className="mx-auto max-w-4xl px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
                <h2 className="font-display text-5xl md:text-6xl text-primary">Experience <br /> <span className="text-gold italic">Legal Mastery.</span></h2>
                <p className="mt-8 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Partner with RSG Associates for dedicated legal representation and professional counsel.
                </p>
                <div className="mt-12 flex flex-wrap justify-center gap-6">
                    <Link href="/query" className="rounded-full bg-gold px-12 py-5 text-sm font-bold text-primary shadow-2xl hover:scale-105 transition-transform">
                        Start an Inquiry
                    </Link>
                    <Link href="/contact" className="rounded-full border border-border px-12 py-5 text-sm font-bold text-primary hover:bg-secondary transition-all">
                        Contact Us
                    </Link>
                </div>
            </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
