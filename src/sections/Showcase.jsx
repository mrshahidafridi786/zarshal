import React, { useState, useMemo } from 'react'

export default function Showcase({ activeStyle, setActiveStyle }) {
  const [activeSize, setActiveSize] = useState('100ml')

  const editions = [
    {
      id: 'noir',
      name: 'Zarshal Noir',
      tagline: 'The Shadow of Opulence',
      price50ml: 195,
      price100ml: 310,
      description: 'Our signature masterpiece. An enigmatic, heavy scent that wraps dark Cambodian oud and smoky incense around a velvet core of Bulgarian rose.',
      notes: { top: 'Saffron, Pink Pepper', heart: 'Bulgarian Rose, Incense', base: 'Cambodian Oud, Amber' },
      accentColor: 'from-[#dfba73]/10 to-[#8c7150]/20',
      btnColor: 'bg-[#dfba73]'
    },
    {
      id: 'luminous',
      name: 'Luminous Gold',
      tagline: 'Liquid Sunlight',
      price50ml: 185,
      price100ml: 295,
      description: 'A radiant, bright fragrance reflecting luxury gold rays. Bright citrus absolute meets fresh white jasmine, settling into a glowing base of white musk.',
      notes: { top: 'Calabrian Bergamot, Lime', heart: 'Jasmine Absolute, Neroli', base: 'Ambergris, White Musk' },
      accentColor: 'from-[#f59e0b]/15 to-[#d97706]/20',
      btnColor: 'bg-[#f59e0b]'
    },
    {
      id: 'mystic',
      name: 'Mystic Blue',
      tagline: 'Deep Ocean Alchemy',
      price50ml: 190,
      price100ml: 300,
      description: 'A cool, mineralic wood fragrance that captures a stormy skyline. Sea salt minerals and blue lavender blend with dry cedar and rich oakmoss.',
      notes: { top: 'Sea Salt, Sage', heart: 'Blue Lavender, Cardamom', base: 'Atlas Cedar, Oakmoss' },
      accentColor: 'from-[#1e3a8a]/15 to-[#0f172a]/20',
      btnColor: 'bg-[#3b82f6]'
    },
    {
      id: 'rosewood',
      name: 'Rosewood & Oud',
      tagline: 'Imperial Forest Secret',
      price50ml: 210,
      price100ml: 340,
      description: 'An ultra-rare composition where dry sandalwood meets oily cardamom-infused rosewood bark, anchored by resinous agarwood droplets.',
      notes: { top: 'Cardamom, Rosewood', heart: 'Sandalwood, Vetiver', base: 'Cambodian Oud, Amber' },
      accentColor: 'from-[#78350f]/15 to-[#451a03]/20',
      btnColor: 'bg-[#b45309]'
    },
    {
      id: 'alabaster',
      name: 'Alabaster Classic',
      tagline: 'Frosted Marble Silence',
      price50ml: 180,
      price100ml: 285,
      description: 'A pure, clean, and powdery skin scent reminiscent of smooth alabaster pillars. Frosted white tea leaves, soft iris petals, and light clean musk.',
      notes: { top: 'Frosted White Tea', heart: 'Iris Root, Lily of the Valley', base: 'Sandalwood, Clean Musk' },
      accentColor: 'from-[#ffffff]/5 to-[#f4f0e6]/10',
      btnColor: 'bg-white text-black'
    },
    {
      id: 'modernist',
      name: 'Modernist Silver',
      tagline: 'Chrome Precision',
      price50ml: 180,
      price100ml: 285,
      description: 'A metallic, cold, and razor-sharp scent profile. Crisp metallic aldehydes, spicy cardamom, and a base of clean metallic vetiver roots.',
      notes: { top: 'Aldehydes, Grapefruit', heart: 'Spicy Cardamom, Mint', base: 'Vetiver, Cedarwood' },
      accentColor: 'from-[#e2e8f0]/10 to-[#cbd5e1]/10',
      btnColor: 'bg-[#94a3b8]'
    }
  ]

  const activeEd = useMemo(() => {
    return editions.find((e) => e.id === activeStyle) || editions[0]
  }, [activeStyle])

  const price = useMemo(() => {
    return activeSize === '50ml' ? activeEd.price50ml : activeEd.price100ml
  }, [activeSize, activeEd])

  return (
    <section id="collection" className="relative w-full min-h-screen py-24 md:py-36 px-6 md:px-12 z-20 flex items-center overflow-hidden">
      
      {/* Dynamic Background Glow changing according to selected perfume style */}
      <div className={`absolute inset-0 bg-gradient-to-br ${activeEd.accentColor} opacity-50 blur-[150px] transition-all duration-750 pointer-events-none`} />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Empty to give breathing room for 3D Perfume Bottle Canvas */}
        <div className="lg:col-span-6 hidden lg:block" />

        {/* Right Side: Interactive Configurator Box */}
        <div className="lg:col-span-6 w-full max-w-xl mx-auto glass rounded-[2px] p-8 md:p-12 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl relative">
          
          {/* Header */}
          <div className="mb-6">
            <span className="text-[10px] tracking-[4px] uppercase text-gold font-light block mb-2">
              The Configurator
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-white font-light tracking-[1px] mb-1">
              {activeEd.name}
            </h2>
            <p className="text-xs font-serif italic text-gold-bright tracking-[2px]">
              {activeEd.tagline}
            </p>
          </div>

          <p className="text-white/60 text-xs leading-relaxed tracking-wider font-light mb-8">
            {activeEd.description}
          </p>

          {/* 1. Selector: Style / Edition */}
          <div className="mb-8">
            <span className="text-[10px] tracking-[3px] uppercase text-white/40 font-semibold block mb-4">
              Select Edition:
            </span>
            <div className="grid grid-cols-3 gap-2">
              {editions.map((ed) => (
                <button
                  key={ed.id}
                  onClick={() => setActiveStyle(ed.id)}
                  className={`px-3 py-2.5 text-[9px] tracking-[2px] uppercase transition-all duration-300 rounded-[1px] border text-center ${
                    activeStyle === ed.id
                      ? 'border-gold text-gold-bright bg-white/5 font-semibold'
                      : 'border-white/5 text-white/50 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {ed.name.replace('Zarshal ', '')}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Selector: Size */}
          <div className="mb-8 flex justify-between items-center">
            <div>
              <span className="text-[10px] tracking-[3px] uppercase text-white/40 font-semibold block mb-3">
                Volume:
              </span>
              <div className="flex gap-3">
                {['50ml', '100ml'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setActiveSize(size)}
                    className={`px-4 py-2 text-[9px] tracking-[2px] uppercase transition-all duration-300 rounded-[1px] border ${
                      activeSize === size
                        ? 'border-gold text-gold-bright font-semibold'
                        : 'border-white/5 text-white/40 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Price display */}
            <div className="text-right">
              <span className="text-[10px] tracking-[3px] uppercase text-white/40 font-semibold block mb-2">
                Investment:
              </span>
              <span className="text-3xl font-serif font-light text-white tracking-[1px]">
                ${price} <span className="text-[10px] font-sans text-white/40 uppercase">USD</span>
              </span>
            </div>
          </div>

          {/* 3. Fragrance Accord Breakdown */}
          <div className="mb-8 bg-black/40 rounded-[2px] border border-white/5 p-4 flex flex-col gap-2.5">
            <span className="text-[9px] tracking-[3px] uppercase text-white/30 font-semibold mb-1">
              Active Accord:
            </span>
            <div className="grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="text-[8px] tracking-[2px] uppercase text-gold font-light mb-0.5">Top</p>
                <p className="text-[10px] text-white/80 font-light truncate">{activeEd.notes.top}</p>
              </div>
              <div>
                <p className="text-[8px] tracking-[2px] uppercase text-gold font-light mb-0.5">Heart</p>
                <p className="text-[10px] text-white/80 font-light truncate">{activeEd.notes.heart}</p>
              </div>
              <div>
                <p className="text-[8px] tracking-[2px] uppercase text-gold font-light mb-0.5">Base</p>
                <p className="text-[10px] text-white/80 font-light truncate">{activeEd.notes.base}</p>
              </div>
            </div>
          </div>

          {/* 4. Action Button */}
          <button
            className={`w-full py-4 text-black text-[10px] tracking-[4px] uppercase font-bold transition-all duration-300 rounded-[1px] hover:shadow-[0_0_20px_rgba(223,186,115,0.3)] ${
              activeStyle === 'alabaster'
                ? 'bg-white hover:bg-gold-bright text-black'
                : 'bg-gradient-to-r from-gold-dark via-gold-bright to-gold hover:scale-[1.01] text-black'
            }`}
          >
            Reserve Custom Blend
          </button>

        </div>

      </div>
    </section>
  )
}
