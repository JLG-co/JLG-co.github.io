"use client"

import React from "react"
import { motion } from "framer-motion"

export function AGSeal() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex items-center justify-center p-2 rounded-full bg-deep-charcoal neon-border"
    >
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-electric-blue to-neon-cyan rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative flex items-center justify-center w-12 h-12 bg-black rounded-full border border-neon-cyan/50">
          <span className="text-xl font-black text-neon-cyan neon-glow tracking-tighter">AG</span>
        </div>
      </div>
    </motion.div>
  )
}
