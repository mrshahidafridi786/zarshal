import React, { useState } from 'react'

export default function Notes() {
  const [activeCard, setActiveCard] = useState(null)

  const noteCategories = [
    {
      id: 'top',
      title: 'Top Notes',
      subtitle: 'The First Impression',
      duration: 'Lasts 15 - 30 Minutes',
      description: 'The immediate sensory opening that greets the senses. A bright, sharp, and fleeting introduction crafted to captivate.',
      ingredients: ['Calabrian Bergamot', 'Pink Pepper', 'Saffron'],
      color: 'border-yellow-500/20',
      icon: (
        <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-11.314l.707.707m11.314 11.314l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      )
    },
    {
      id: 'heart',
      title: 'Heart Notes',
      subtitle: 'The Soul of the Scent',
      duration: 'Lasts 2 - 4 Hours',
      description: 'The core character of the fragrance. A rich, full-bodied blend that emerges as the top notes dissipate, expressing the brand’s core signature.',
      ingredients: ['Turkish Rose', 'Cambodian Oud', 'Night-Blooming Jasmine'],
      color: 'border-rose-500/20',
      icon: (
        <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      id: 'base',
      title: 'Base Notes',
      subtitle: 'The Lingering Memory',
      duration: 'Lasts 12 - 24 Hours',
      description: 'The deep, heavy anchor that provides longevity and depth. Complex molecules that slowly evaporate, leaving a powerful, memorable sillage.',
      ingredients: ['Warm Golden Amber', 'Patchouli', 'Sandalwood', 'White Musk'],
      color: 'border-amber-500/20',
      icon: (
        <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z" />
        </svg>
      )
    }
  ]

  return (
    <section id="notes" className="notes-section relative w-full bg-black py-24 md:py-36 px-6 md:px-12 z-20 overflow-hidden">
      
      {/* Dynamic Back-light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[40vw] bg-gold/3 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mb-16 md:mb-24 flex flex-col items-center gap-4">
          <span className="text-[10px] tracking-[6px] uppercase text-gold font-light">
            Olfactory Architecture
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white font-light">
            The Accord <span className="italic text-gold-bright">of Zarshal</span>
          </h2>
          <div className="w-12 h-[1px] bg-gold/50 my-2" />
          <p className="text-white/50 text-sm tracking-wide font-light leading-relaxed">
            Unlike standard fragrances, Zarshal evolves over three distinct aromatic phases, shifting seamlessly from fresh spice to floral wood, settling into a deep, magnetic warmth.
          </p>
        </div>

        {/* Notes Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {noteCategories.map((cat, index) => {
            const isActive = activeCard === cat.id
            return (
              <div
                key={cat.id}
                onMouseEnter={() => setActiveCard(cat.id)}
                onMouseLeave={() => setActiveCard(null)}
                className={`note-card glass-gold rounded-[2px] p-8 md:p-10 flex flex-col gap-6 transition-all duration-500 relative overflow-hidden group border border-white/5 ${
                  isActive 
                    ? 'border-gold shadow-[0_15px_30px_rgba(197,168,128,0.08)] -translate-y-2' 
                    : 'hover:border-white/20'
                }`}
              >
                {/* Background glow in card */}
                <div className={`absolute top-0 right-0 w-24 h-24 rounded-full bg-gold/5 blur-2xl transition-opacity duration-500 ${
                  isActive ? 'opacity-100' : 'opacity-20'
                }`} />

                {/* Index number */}
                <div className="absolute top-8 right-8 text-[40px] font-serif font-light text-white/5 group-hover:text-gold/10 transition-colors duration-500 leading-none">
                  0{index + 1}
                </div>

                {/* Icon wrapper */}
                <div className="w-14 h-14 rounded-full bg-white/3 flex items-center justify-center border border-white/5 mb-4 group-hover:border-gold/30 transition-colors duration-500">
                  {cat.icon}
                </div>

                {/* Headings */}
                <div>
                  <h3 className="text-2xl font-serif font-light text-white tracking-[1px] mb-1 group-hover:text-gold-bright transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-[10px] tracking-[3px] uppercase text-gold font-light">
                    {cat.subtitle}
                  </p>
                </div>

                <div className="w-full h-[1px] bg-white/10" />

                {/* Description */}
                <p className="text-white/60 text-xs leading-relaxed tracking-wider font-light">
                  {cat.description}
                </p>

                {/* Timeline info */}
                <p className="text-[9px] tracking-[2px] uppercase text-white/40 font-medium">
                  Timeline: <span className="text-gold">{cat.duration}</span>
                </p>

                {/* Ingredients list */}
                <div className="mt-auto pt-4">
                  <p className="text-[10px] tracking-[3px] uppercase text-white/30 font-semibold mb-3">
                    Key Components:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cat.ingredients.map((ing) => (
                      <span
                        key={ing}
                        className="px-3 py-1 bg-white/3 border border-white/5 text-[9px] tracking-[1px] text-white/70 rounded-full group-hover:border-gold/20 group-hover:text-gold transition-colors duration-300"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
