import React from 'react'

export default function Footer() {
  const handleScrollToSection = (e, id) => {
    e.preventDefault()
    const target = document.querySelector(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative w-full bg-[#050505] border-t border-white/5 py-16 md:py-24 px-6 md:px-12 z-20 overflow-hidden">
      
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Top half: Newsletter and links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Logo & Tagline */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h3 className="text-2xl font-serif text-white font-light tracking-[10px] uppercase">
              ZARSHAL
            </h3>
            <p className="text-white/40 text-xs tracking-wider font-light leading-relaxed max-w-sm">
              An award-winning luxury perfume house crafting the finest olfactory signatures. Built on absolute purity, artistry, and spatial elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8 text-left">
            
            {/* Nav links */}
            <div className="flex flex-col gap-3">
              <span className="text-[10px] tracking-[3px] uppercase text-gold font-light mb-1">
                The Brand
              </span>
              <a href="#story" onClick={(e) => handleScrollToSection(e, '#story')} className="text-[11px] text-white/50 hover:text-white transition-colors tracking-wide font-light">Heritage</a>
              <a href="#notes" onClick={(e) => handleScrollToSection(e, '#notes')} className="text-[11px] text-white/50 hover:text-white transition-colors tracking-wide font-light">Accords</a>
              <a href="#ingredients" onClick={(e) => handleScrollToSection(e, '#ingredients')} className="text-[11px] text-white/50 hover:text-white transition-colors tracking-wide font-light">Ingredients</a>
              <a href="#features" onClick={(e) => handleScrollToSection(e, '#features')} className="text-[11px] text-white/50 hover:text-white transition-colors tracking-wide font-light">Pillars</a>
            </div>

            {/* Support links */}
            <div className="flex flex-col gap-3">
              <span className="text-[10px] tracking-[3px] uppercase text-gold font-light mb-1">
                Allocations
              </span>
              <a href="#collection" onClick={(e) => handleScrollToSection(e, '#collection')} className="text-[11px] text-white/50 hover:text-white transition-colors tracking-wide font-light">Noir Edition</a>
              <a href="#collection" onClick={(e) => handleScrollToSection(e, '#collection')} className="text-[11px] text-white/50 hover:text-white transition-colors tracking-wide font-light">Luminous Gold</a>
              <a href="#collection" onClick={(e) => handleScrollToSection(e, '#collection')} className="text-[11px] text-white/50 hover:text-white transition-colors tracking-wide font-light">Mystic Blue</a>
              <a href="#faq" onClick={(e) => handleScrollToSection(e, '#faq')} className="text-[11px] text-white/50 hover:text-white transition-colors tracking-wide font-light">FAQ Registry</a>
            </div>

          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="text-[10px] tracking-[3px] uppercase text-gold font-light">
              Newsletter Registry
            </span>
            <p className="text-white/40 text-xs font-light tracking-wide leading-relaxed">
              Subscribe to receive updates on micro-batch allocations, new harvests, and private boutique arrivals.
            </p>
            
            <form onSubmit={(e) => e.preventDefault()} className="flex border-b border-white/20 focus-within:border-gold transition-colors py-1 mt-2">
              <input
                type="email"
                placeholder="YOUR EMAIL ADDRESS"
                className="bg-transparent text-white border-none outline-none text-[10px] tracking-[2px] w-full placeholder:text-white/20 font-light"
              />
              <button type="submit" className="text-[9px] tracking-[3px] uppercase text-gold hover:text-gold-bright transition-colors font-bold pl-2">
                Register
              </button>
            </form>
          </div>

        </div>

        {/* Bottom half: Copyright & Socials */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Copyright info */}
          <span className="text-[9px] tracking-[3px] uppercase text-white/30 font-medium pl-[3px]">
            &copy; {new Date().getFullYear()} ZARSHAL. All Rights Reserved &bull; EST. 2026.
          </span>

          {/* Social icons */}
          <div className="flex gap-8 text-[9px] tracking-[3px] uppercase">
            <a href="#" className="text-white/40 hover:text-gold transition-colors font-light">Instagram</a>
            <a href="#" className="text-white/40 hover:text-gold transition-colors font-light">Pinterest</a>
            <a href="#" className="text-white/40 hover:text-gold transition-colors font-light">Editorial</a>
          </div>

        </div>

      </div>
    </footer>
  )
}
