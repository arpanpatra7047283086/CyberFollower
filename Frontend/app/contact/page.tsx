"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight, Globe } from "lucide-react";
import Link from "next/link";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";

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

export default function Contact() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Get in touch"
        title="Contact Us."
        subtitle="RSG Associates is available for consultations. Our team is dedicated to providing timely and clear legal guidance."
      />

      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 topo-pattern opacity-5" />

        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2"
          >
            {[
              {
                t: "Our Office",
                c: "New Delhi, India",
                icon: MapPin,
                tag: "Principal Office",
                phone: "+91 99102 34444",
                email: "rsg.associates@outlook.com"
              },
              {
                t: "Legal Chamber",
                c: "Supreme Court of India / High Court of Delhi",
                icon: Gavel,
                tag: "Chambers",
                phone: "+91 99102 34444",
                email: "rsg.associates@outlook.com"
              },
            ].map((card, i) => (
              <motion.div
                key={card.t}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="group relative rounded-[2.5rem] border border-border bg-white p-12 shadow-sm transition-all hover:border-gold/50 hover:shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="inline-flex items-center gap-2 rounded-full bg-surface-dark px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] text-gold font-bold">
                    {card.tag}
                  </div>
                </div>

                <h3 className="font-display text-4xl text-primary">{card.t}</h3>
                <p className="mt-6 text-xl text-foreground/80 leading-relaxed font-display italic">"{card.c}"</p>

                <div className="mt-10 pt-10 border-t border-border space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-gold group-hover:text-primary">
                      <Phone className="h-4 w-4" />
                    </div>
                    <span className="font-medium">{card.phone}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-gold group-hover:text-primary">
                      <Mail className="h-4 w-4" />
                    </div>
                    <span className="font-medium">{card.email}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center">
                      <Clock className="h-4 w-4" />
                    </div>
                    <span>Monday–Saturday</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-surface-dark py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 mx-auto max-w-4xl px-6"
        >
          <div className="text-[11px] uppercase tracking-[0.4em] text-gold font-bold mb-6">Inquiry</div>
          <h2 className="font-display text-5xl md:text-7xl text-white">Need professional <br /> <span className="text-gold italic">legal advice?</span></h2>
          <p className="mt-8 text-xl text-white/60 max-w-2xl mx-auto">Contact RSG Associates for strategic legal representation in the Supreme Court, High Courts, and Tribunals.</p>
          <div className="mt-12">
            <Link
              href="/query"
              className="inline-flex items-center gap-3 rounded-full bg-gold px-12 py-5 text-sm font-bold text-primary hover:scale-105 transition-transform shadow-2xl"
            >
              Send an Inquiry <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </section>
    </PageLayout>
  );
}

const Gavel = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m14.5 12.5-8 8a2.11 2.11 0 1 1-3-3l8-8" />
    <path d="m16 16 2 2" />
    <path d="m2 2 16 16" />
    <path d="m22 2-8 8" />
    <path d="m5 10-4 4" />
    <path d="m10 5-4 4" />
  </svg>
);
