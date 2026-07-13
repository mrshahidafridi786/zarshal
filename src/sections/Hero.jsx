import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'

export default function Hero() {
  const scrollToStory = (e) => {
    e.preventDefault()
    const target = document.querySelector('#story')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative w-full h-screen flex flex-col justify-between items-center text-center px-6 md:px-12 py-24 select-none overflow-hidden z-20">
      
      {/* 1. Cinematic Background glow overlay behind the 3D bottle */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full bg-gold/5 blur-[120px] bg-glow-radial" />
      </div>

      {/* 2. Top Header Metadata */}
      <div className="w-full flex justify-between items-center text-[8px] md:text-[10px] tracking-[6px] uppercase text-white/40 pl-[6px]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 1.0 }}
        >
          Haute Parfumerie &bull; Collection
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 1.0 }}
        >
          Paris &bull; Milan &bull; Dubai
        </motion.div>
      </div>

      {/* 3. Center Giant Typographic Layer (Behind 3D Bottle) */}
      <div className="my-auto flex flex-col items-center relative">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 2.0, delay: 0.8, ease: 'easeOut' }}
          className="text-[12vw] font-serif font-light text-white tracking-[24px] uppercase select-none pointer-events-none leading-none pl-[24px]"
        >
          ZARSHAL
        </motion.h2>
        
        {/* Subtle foreground text overlay */}
        <div className="absolute top-[60%] flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 1.5, delay: 1.2, ease: [0.25, 1, 0.5, 1] }}
            className="text-xs md:text-sm tracking-[12px] uppercase text-gold pl-[12px] mb-4"
          >
            L'Élixir Rare
          </motion.p>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.4, ease: [0.25, 1, 0.5, 1] }}
            className="text-xl md:text-2xl font-serif text-white/80 font-light italic"
          >
            A Symphony of Liquid Gold
          </motion.h3>
        </div>
      </div>

      {/* 4. Bottom Metadata & CTA Action */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-end mt-auto text-left">
        
        {/* Descriptive Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.5 }}
          className="hidden md:flex flex-col gap-2 max-w-xs text-white/50 text-[11px] leading-relaxed tracking-wider"
        >
          <span className="text-gold tracking-[3px] uppercase font-medium">The Scent Profile</span>
          An opulent blend of organic Bulgarian Rose, premium Cambodian Oud, and rich Golden Amber. Bottled in hand-polished glass with a solid artisan wood cap.
        </motion.div>

        {/* Center CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.7 }}
          className="flex justify-center"
        >
          <a
            href="#showcase"
            className="group relative px-10 py-4 bg-transparent border border-gold/40 text-white text-[9px] tracking-[4px] uppercase font-semibold overflow-hidden transition-all duration-500 hover:border-gold-bright rounded-[1px] text-center"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold-dark via-gold-bright to-gold opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            Explore Collection
          </a>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.9 }}
          className="flex justify-end"
        >
          <a
            href="#story"
            onClick={scrollToStory}
            className="flex items-center gap-3 text-white/40 hover:text-gold transition-colors text-[9px] tracking-[3px] uppercase pl-[3px]"
          >
            Scroll Down
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            >
              <FiArrowDown size={14} className="text-gold" />
            </motion.div>
          </a>
        </motion.div>

      </div>
    </section>
  )
}
