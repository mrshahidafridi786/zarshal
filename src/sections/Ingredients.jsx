import React, { useState } from 'react'

export default function Ingredients() {
  const [hoveredIdx, setHoveredIdx] = useState(null)

  const ingredients = [
    {
      name: 'Cambodian Oud',
      category: 'Resin & Wood',
      origin: 'Sourced from Cardamom Mountains',
      description: 'One of the most expensive raw materials in perfumery. Aged resinous wood that yields a rich, dark, and complex animalic wood note.',
      sensory: 'Smoky, deep, sweet, and highly complex wood profile.',
      goldHighlight: 'group-hover:border-amber-500/30'
    },
    {
      name: 'Bulgarian Rose',
      category: 'Floral Absolute',
      origin: 'Valley of Roses, Bulgaria',
      description: 'Hand-picked at dawn before the sun dries the petals. It takes approximately 4,000 kilograms of petals to distill a single kilogram of rose oil.',
      sensory: 'Intensely rich, deep sweet-honey floral with subtle green spicy facets.',
      goldHighlight: 'group-hover:border-rose-500/30'
    },
    {
      name: 'Fossilized Amber',
      category: 'Balsamic Resin',
      origin: 'Baltic Coastline',
      description: 'A warm, honey-like balsamic resin formulated through custom slow-extraction, anchoring the base notes and lending an opulent warmth.',
      sensory: 'Powdery, golden sweet, vanilla-like, and highly comforting warmth.',
      goldHighlight: 'group-hover:border-yellow-600/30'
    },
    {
      name: 'Saffron Absolute',
      category: 'Exotic Spice',
      origin: 'Khorasan Province',
      description: 'Often referred to as "Red Gold". Hand-separated stigmas of the Crocus flower, adding a bittersweet metallic shine to the top notes.',
      sensory: 'Bittersweet, leather-like, earthy, and warm-spicy highlights.',
      goldHighlight: 'group-hover:border-yellow-500/30'
    }
  ]

  return (
    <section id="ingredients" className="ingredients-section relative w-full bg-black py-24 md:py-36 px-6 md:px-12 z-20 overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute top-10 left-10 w-[30vw] h-[30vw] bg-gold/2 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[30vw] h-[30vw] bg-gold/3 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mb-16 md:mb-24 flex flex-col items-center gap-4">
          <span className="text-[10px] tracking-[6px] uppercase text-gold font-light">
            Rare Materials
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white font-light">
            Sourced in <span className="italic text-gold-bright">Singularity</span>
          </h2>
          <div className="w-12 h-[1px] bg-gold/50 my-2" />
          <p className="text-white/50 text-sm tracking-wide font-light leading-relaxed">
            We scour the earth for botanical gems and resinous rarities, establishing direct ethical partnerships to obtain ingredients of peerless concentration and character.
          </p>
        </div>

        {/* Ingredients Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {ingredients.map((ing, idx) => {
            const isHovered = hoveredIdx === idx
            return (
              <div
                key={ing.name}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`ingredient-card glass rounded-[2px] p-8 md:p-12 flex flex-col gap-6 border border-white/5 transition-all duration-500 relative overflow-hidden group ${ing.goldHighlight} ${
                  isHovered ? 'shadow-[0_15px_30px_rgba(197,168,128,0.05)] bg-white/[0.04]' : ''
                }`}
              >
                {/* Backdrop gradient ring */}
                <div className={`absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-gold/3 blur-3xl transition-all duration-700 ${
                  isHovered ? 'scale-125 opacity-100' : 'opacity-20'
                }`} />

                {/* Subtitle / Category */}
                <div className="flex justify-between items-center text-[10px] tracking-[3px] uppercase text-gold font-light">
                  <span>{ing.category}</span>
                  <span className="text-white/40 font-mono">0{idx + 1}</span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-3xl font-serif font-light text-white tracking-[1px] mb-2 group-hover:text-gold-bright transition-colors">
                    {ing.name}
                  </h3>
                  <p className="text-[9px] tracking-[2px] uppercase text-white/50 font-medium">
                    {ing.origin}
                  </p>
                </div>

                <div className="w-full h-[1px] bg-white/10" />

                {/* Body Copy */}
                <p className="text-white/60 text-xs leading-relaxed tracking-wider font-light">
                  {ing.description}
                </p>

                {/* Expanded Hover Overlay Details */}
                <div className={`transition-all duration-500 overflow-hidden flex flex-col gap-2 pt-2 ${
                  isHovered ? 'max-h-24 opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-2'
                }`}>
                  <p className="text-[10px] tracking-[3px] uppercase text-gold font-semibold">
                    Sensory Profile:
                  </p>
                  <p className="text-white/80 text-xs font-light tracking-wide italic leading-relaxed">
                    {ing.sensory}
                  </p>
                </div>

                {/* Corner details */}
                <div className={`absolute bottom-3 right-6 text-[8px] tracking-[4px] uppercase text-white/20 transition-opacity duration-500 ${
                  isHovered ? 'opacity-0' : 'opacity-100'
                }`}>
                  Hover to reveal
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
