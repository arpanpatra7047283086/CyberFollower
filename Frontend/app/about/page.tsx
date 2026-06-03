"use client";

import { motion } from "framer-motion";
import { History, Target, Users2, Scale, Award, Shield } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

export default function About() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Our Profile"
        title="RSG Associates."
        subtitle="A premier full-service law firm based in New Delhi, committed to excellence and ethical legal practice."
      />

      <section className="py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-20 lg:grid-cols-2 items-center">
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
              <div className="text-[11px] uppercase tracking-[0.4em] text-accent font-bold mb-6">About the Firm</div>
              <h2 className="font-display text-5xl text-primary mb-8">Excellence in Advocacy</h2>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  RSG Associates is a full-service law firm with its principal office in New Delhi. The firm is founded on the principles of professional integrity, meticulous attention to detail, and a results-driven approach.
                </p>
                <p>
                  Led by Ravi S. Gupta, an Advocate-on-Record in the Supreme Court of India, our team brings decades of combined experience across various legal domains. We represent a diverse clientele before the Supreme Court, High Courts, NCLT, NCLAT, and other specialized tribunals.
                </p>
                <p>
                  Our mission is to provide strategic legal solutions that are both legally sound and practically viable, ensuring the best possible outcomes for our clients in an increasingly legal landscape.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="/AdvRaviSGupta2.png"
                  alt="Adv. Ravi S. Gupta"
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-gold p-8 rounded-3xl shadow-xl hidden md:block">
                <div className="text-4xl font-display text-primary">AOR</div>
                <div className="text-[10px] uppercase tracking-widest text-primary/70 font-bold">Supreme Court of India</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-32 bg-surface-dark text-surface-dark-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <div className="text-[11px] uppercase tracking-[0.4em] text-gold font-bold">Our Philosophy</div>
            <h2 className="mt-4 font-display text-5xl">Core Principles</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Shield, t: "Professional Integrity", d: "We maintain the highest ethical standards, ensuring transparent and honest legal representation for every client." },
              { icon: Target, t: "Strategic Solutions", d: "Our approach is tailored to the specific needs of each case, combining legal expertise with strategic foresight." },
              { icon: Users2, t: "Client Focus", d: "We prioritize our clients' objectives, providing dedicated support and clear communication throughout the legal process." }
            ].map((v) => (
              <div key={v.t} className="p-10 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="w-14 h-14 bg-gold/20 rounded-2xl flex items-center justify-center mb-8">
                  <v.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-display text-2xl mb-4">{v.t}</h3>
                <p className="text-sm leading-relaxed text-surface-dark-foreground/60">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
