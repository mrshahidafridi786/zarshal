import React from 'react'
import boutiqueImg from '../assets/zarshal_boutique.png'
import collageImg from '../assets/zarshal_collage.jpg'

export default function BrandStory() {
  return (
    <section id="story" className="story-section relative w-full bg-black py-24 md:py-36 px-6 md:px-12 z-20 overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/4 right-0 w-[40vw] h-[40vw] bg-gold/3 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[40vw] h-[40vw] bg-gold/2 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-24 md:gap-36">
        
        {/* Row 1: Boutique Narrative (Text left, image right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Narrative Text */}
          <div className="lg:col-span-5 flex flex-col gap-6 story-text">
            <span className="text-[10px] tracking-[6px] uppercase text-gold font-light">
              Heritage & Alchemy
            </span>
            
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight font-light">
              Enter the Boutique <br />
              <span className="italic text-gold-bright">of Eternal Scents</span>
            </h2>
            
            <div className="w-12 h-[1px] bg-gold/50 my-2" />
            
            <p className="text-white/60 text-sm leading-relaxed tracking-wide font-light">
              Born from a pursuit of olfactory perfection, Zarshal represents the peak of luxury perfumery. Each bottle is not merely a fragrance, but a bottled narrative of rarity, elegance, and raw sensory power.
            </p>
            
            <p className="text-white/50 text-xs leading-relaxed tracking-wider font-light italic">
              "We do not create perfumes; we capture fleeting moments of elegance and solidify them in gold."
            </p>
          </div>

          {/* Boutique Image Box */}
          <div className="lg:col-span-7 flex justify-end">
            <div className="relative w-full max-w-[620px] aspect-[16/10] overflow-hidden rounded-[1px] border border-white/10 group shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
              <img
                src={boutiqueImg}
                alt="Zarshal Luxury Boutique"
                className="story-image w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-6 text-white">
                <p className="text-[8px] tracking-[4px] uppercase text-white/50 mb-1">Location</p>
                <p className="text-xs font-serif tracking-[2px] text-gold-bright">The Flagship Salon, Dubai</p>
              </div>
            </div>
          </div>

        </div>

        {/* Row 2: Craftsmanship Narrative (Image left, text right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Craftsmanship Image Box */}
          <div className="lg:col-span-7 order-2 lg:order-1 flex justify-start">
            <div className="relative w-full max-w-[620px] aspect-[16/10] overflow-hidden rounded-[1px] border border-white/10 group shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
              <img
                src={collageImg}
                alt="Zarshal Ingredients & Art"
                className="story-image w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-6 text-white">
                <p className="text-[8px] tracking-[4px] uppercase text-white/50 mb-1">Process</p>
                <p className="text-xs font-serif tracking-[2px] text-gold-bright">Sourcing Raw Splendor</p>
              </div>
            </div>
          </div>

          {/* Craftsmanship Text */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col gap-6 story-text">
            <span className="text-[10px] tracking-[6px] uppercase text-gold font-light">
              Meticulous Artistry
            </span>
            
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight font-light">
              Crafted in <br />
              <span className="italic text-gold-bright">Obsession & Gold</span>
            </h2>
            
            <div className="w-12 h-[1px] bg-gold/50 my-2" />
            
            <p className="text-white/60 text-sm leading-relaxed tracking-wide font-light">
              Every curve of the custom lead-free glass bottle is hand-finished to achieve perfect optical clarity, while the signature Z logo is embossed in warm gold. The solid wood cap is turned and polished, offering an organic contrast to the sleek geometry of glass.
            </p>
            
            <p className="text-white/60 text-sm leading-relaxed tracking-wide font-light">
              Our master perfumers select only hand-harvested Turkish rose petals, rare Cambodian oud bark, and fossilized amber blocks to formulate a perfume that lasts through a full solar cycle.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
