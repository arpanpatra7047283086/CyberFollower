"use client";

import React from "react";
import { motion } from "framer-motion";
import { practiceAreas, firmInfo } from "../data/rsgData";

export default function LegalPracticeAreas() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Legal Practice Areas
          </h2>
          <p className="mt-4 text-xl text-gray-500 uppercase tracking-wider text-sm font-semibold">
            {firmInfo.tagline}
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {practiceAreas.map((area, index) => (
            <motion.div
              key={area.id}
              // Smooth scroll-into-view animation
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              // Smooth hover animation
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100 cursor-pointer"
            >
              <div className="text-4xl mb-4">{area.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {area.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}