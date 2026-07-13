import React from 'react'

export default function CTA() {
  const handleScrollToConfig = (e) => {
    e.preventDefault()
    const target = document.querySelector('#collection')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="cta" className="relative w-full bg-black py-24 md:py-36 px-6 md:px-12 z-20 flex items-center justify-center overflow-hidden">
      
      {/* Background radial gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vw] bg-gold/5 blur-[120px] pointer-events-none" />

      {/* Glassmorphic border cage */}
      <div className="max-w-5xl w-full border border-white/5 bg-white/[0.01] rounded-[2px] p-12 md:p-20 text-center flex flex-col items-center gap-8 relative overflow-hidden">
        
        {/* Soft background glow within cage */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

        <span className="text-[10px] tracking-[6px] uppercase text-gold font-light block pl-[6px]">
          Limited Allocations
        </span>

        {/* Big Serif Heading */}
        <h2 className="text-4xl md:text-6xl font-serif text-white font-light leading-tight tracking-[1px] uppercase">
          Claim Your Olfactory <br />
          <span className="italic text-gold-bright text-gold-gradient">Signature</span>
        </h2>

        <div className="w-16 h-[1px] bg-gold/50 my-2" />

        <p className="text-white/60 text-xs md:text-sm font-light tracking-wide max-w-xl leading-relaxed">
          Zarshal is produced in micro-batches to guarantee the absolute concentration of our raw essences. Reserve your bottle from our flagship editions today.
        </p>

        {/* Shiny Golden Button */}
        <a
          href="#collection"
          onClick={handleScrollToConfig}
          className="mt-6 px-12 py-4 bg-gradient-to-r from-gold-dark via-gold-bright to-gold text-black text-[10px] tracking-[4px] uppercase font-bold hover:scale-[1.02] transition-all duration-300 rounded-[1px] shadow-[0_0_25px_rgba(197,168,128,0.2)] hover:shadow-[0_0_35px_rgba(223,186,115,0.4)]"
        >
          Order Zarshal Collection
        </a>

        {/* Boutique text */}
        <p className="text-[9px] tracking-[3px] uppercase text-white/30 font-medium pl-[3px] mt-4">
          Free Express Worldwide Delivery &bull; Trial Sample Included
        </p>

      </div>
    </section>
  )
}
