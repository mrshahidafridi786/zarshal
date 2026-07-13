import React from 'react'

export default function Features() {
  const pillars = [
    {
      title: '24-Hour Longevity',
      description: 'Engineered with a high concentration of pure perfume oil (Extrait de Parfum), ensuring the fragrance remains active through a full solar cycle.',
      icon: (
        <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Luxury Packaging',
      description: 'Housed in lead-free optical glass bottles, meticulously polished by hand, and sealed with a bespoke, hand-turned organic solid wood cap.',
      icon: (
        <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      title: 'Bespoke Ingredients',
      description: 'Formulated with certified organic botanicals, precious resins, and pure essential oils. Zero synthetic placeholders or cheap fillers.',
      icon: (
        <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: 'International Standards',
      description: 'Tested and certified under strict European safety regulations (IFRA), guaranteeing compatibility with sensitive skin and global distribution.',
      icon: (
        <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2a2.5 2.5 0 002.5-2.5V14a2 2 0 012-2h.08M9 21h6a2 2 0 002-2v-1a2 2 0 00-2-2v-3a2 2 0 00-2-2H9z" />
        </svg>
      )
    },
    {
      title: 'Emotional Resonance',
      description: 'Designed as a liquid mood, evoking memories of luxury, confidence, and exclusivity. A personal statement that leaves an indelible trail.',
      icon: (
        <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Elegant Experience',
      description: 'From unboxing to the final mist spray, every touchpoint is curated to replicate the experience of entering a high-end luxury boutique.',
      icon: (
        <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ]

  return (
    <section id="features" className="features-section relative w-full bg-black py-24 md:py-36 px-6 md:px-12 z-20 overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-[45vw] h-[45vw] bg-gold/2 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-24 flex flex-col gap-4">
          <span className="text-[10px] tracking-[6px] uppercase text-gold font-light">
            The Pillars of Excellence
          </span>
          
          <h2 className="text-4xl md:text-5xl font-serif text-white font-light leading-tight">
            Why Choose <br />
            <span className="italic text-gold-bright">Zarshal Perfume</span>
          </h2>
          
          <div className="w-12 h-[1px] bg-gold/50 my-2" />
          
          <p className="text-white/50 text-sm tracking-wide font-light leading-relaxed">
            We operate in the realm of uncompromising quality. Every aspect of our creations is curated to meet the expectations of the most discerning fragrance connoisseur.
          </p>
        </div>

        {/* Features Stagger Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="feature-item glass-gold rounded-[2px] p-8 flex flex-col gap-5 border border-white/5 transition-all duration-500 hover:border-gold/30 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(197,168,128,0.04)] group"
            >
              {/* Icon wrap with soft bounce on hover */}
              <div className="w-12 h-12 rounded-full bg-white/3 border border-white/5 flex items-center justify-center group-hover:border-gold/30 group-hover:bg-gold/5 transition-all duration-500">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {p.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-serif text-white tracking-[0.5px] group-hover:text-gold-bright transition-colors">
                {p.title}
              </h3>

              {/* Body */}
              <p className="text-white/60 text-xs leading-relaxed tracking-wider font-light">
                {p.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
