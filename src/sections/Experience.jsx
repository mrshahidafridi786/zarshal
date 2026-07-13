import React from 'react'
import { motion } from 'framer-motion'
import noirUrbanImg from '../assets/zarshal_noir_urban.png'

export default function Experience() {
  return (
    <section id="experience" className="relative w-full h-screen bg-black overflow-hidden z-20 flex items-center justify-center">
      
      {/* 1. Cinematic Parallax Background Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
        <img
          src={noirUrbanImg}
          alt="Zarshal Noir & Urban"
          className="w-full h-full object-cover scale-105"
        />
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-black" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* 2. Golden Light Rays (Gradients) */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-70">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-gold/30 via-gold/5 to-transparent rotate-[25deg] origin-top" style={{ filter: 'blur(30px)' }} />
        <div className="absolute top-0 left-1/3 w-[1px] h-full bg-gradient-to-b from-gold/40 via-gold/10 to-transparent rotate-[20deg] origin-top" style={{ filter: 'blur(45px)' }} />
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-gold/20 via-gold/5 to-transparent rotate-[15deg] origin-top" style={{ filter: 'blur(20px)' }} />
      </div>

      {/* 3. Floating gold leaf dust (CSS-animated particles) */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-br from-gold to-gold-bright rounded-full opacity-60 animate-float-slow"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${Math.random() * 8 + 6}s`,
              filter: 'blur(0.5px)'
            }}
          />
        ))}
      </div>

      {/* 4. Text Content */}
      <div className="relative z-20 max-w-5xl px-6 text-center flex flex-col items-center gap-8">
        
        <span className="text-[10px] tracking-[8px] uppercase text-gold font-light block pl-[8px]">
          The Scent Narrative
        </span>

        {/* Huge Typo */}
        <h2 className="text-[7vw] lg:text-[5vw] font-serif font-light text-white leading-tight uppercase tracking-[8px]">
          An Invisible <br />
          <span className="italic text-gold-bright text-gold-gradient font-normal">Sovereignty</span>
        </h2>

        <div className="w-16 h-[1px] bg-gold/50 my-2" />

        {/* Body Description */}
        <p className="text-white/75 text-sm md:text-base max-w-2xl font-light tracking-wide leading-relaxed">
          Zarshal does not shout. It hovers. An unspoken presence that commands the room and triggers subconscious memory. Long after you leave, the golden aura of Cambodian oud, rosewood, and ambergris lingers as an indelible signature.
        </p>

        {/* Secondary tagline */}
        <p className="text-[9px] tracking-[6px] uppercase text-white/30 font-medium pl-[6px] mt-4">
          Zarshal &bull; Est. 2026 &bull; Crafted in Exclusivity
        </p>

      </div>

    </section>
  )
}
