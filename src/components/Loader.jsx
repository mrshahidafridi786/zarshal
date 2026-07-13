import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Slow, realistic progress simulation for luxury loader
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 800) // Small delay for smooth exit
          return 100
        }
        // Random increments to feel realistic
        const increment = Math.floor(Math.random() * 8) + 2
        return Math.min(prev + increment, 100)
      })
    }, 120)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: '-100%',
        transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 w-full h-screen bg-[#000] z-50 flex flex-col items-center justify-center select-none"
    >
      <div className="flex flex-col items-center max-w-md px-6 text-center">
        {/* Animated letter Z logo */}
        <div className="relative mb-8 h-40 w-40 flex items-center justify-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute text-[160px] font-serif font-light text-white leading-none select-none"
          >
            Z
          </motion.span>
          
          {/* Animated Gold Fill Overlay */}
          <motion.span
            initial={{ clipPath: 'inset(100% 0px 0px 0px)' }}
            animate={{ clipPath: `inset(${100 - progress}% 0px 0px 0px)` }}
            transition={{ duration: 0.1 }}
            className="absolute text-[160px] font-serif font-light text-gold-bright leading-none select-none drop-shadow-[0_0_15px_rgba(223,186,115,0.4)]"
          >
            Z
          </motion.span>
        </div>

        {/* Brand name and subtitle */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
          className="text-white text-2xl tracking-[16px] font-light mb-2 font-serif uppercase pl-[16px]"
        >
          Zarshal
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="text-xs tracking-[8px] uppercase text-white font-light pl-[8px] mb-12"
        >
          Haute Parfumerie
        </motion.p>

        {/* Cinematic Progress Bar */}
        <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden mb-3">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
            className="h-full bg-gradient-to-r from-gold-dark via-gold-bright to-gold"
          />
        </div>

        <motion.span 
          className="text-[10px] tracking-[3px] text-gold font-light pl-[3px]"
        >
          {progress}%
        </motion.span>
      </div>

      {/* Exquisite bottom tagline */}
      <div className="absolute bottom-10 left-0 w-full text-center">
        <p className="text-[9px] tracking-[6px] uppercase text-white/30 pl-[6px]">
          Crafted in Exclusivity &bull; Est. 2026
        </p>
      </div>
    </motion.div>
  )
}
