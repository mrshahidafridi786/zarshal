import React from 'react'

export default function Testimonials() {
  const reviews = [
    {
      quote: "Zarshal Noir is a masterpiece of dark wood and rose. It has a heavy, hypnotic presence that commands attention without saying a word. The sillage is absolutely legendary.",
      author: "Helena Rostova",
      role: "Vogue Beauty Editor",
      rating: 5
    },
    {
      quote: "The attention to detail is staggering. The procedural hand-turned wood cap, the heavy lead-free crystal base, and the pure concentration of agarwood. It is the gold standard of modern niche perfumery.",
      author: "Julian Vance",
      role: "Scent Connoisseur & Critic",
      rating: 5
    },
    {
      quote: "Luminous Gold feels like wearing liquid sunshine. It starts with a crisp citrus brightness and settles into the most opulent ambergris-musk skin scent. My signature fragrance for the year.",
      author: "Marcus Sterling",
      role: "GQ Style Director",
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="testimonials-section relative w-full bg-black py-24 md:py-36 px-6 md:px-12 z-20 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[35vw] h-[35vw] bg-gold/2 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24 flex flex-col items-center gap-4">
          <span className="text-[10px] tracking-[6px] uppercase text-gold font-light">
            Acclaim & Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white font-light">
            Voices of <span className="italic text-gold-bright">Connoisseurs</span>
          </h2>
          <div className="w-12 h-[1px] bg-gold/50 my-2" />
          <p className="text-white/50 text-sm tracking-wide font-light leading-relaxed">
            Read what luxury critics, fashion editors, and niche fragrance connoisseurs say about the Zarshal collection.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {reviews.map((rev, index) => (
            <div
              key={rev.author}
              className="testimonial-card glass-gold rounded-[2px] p-8 md:p-10 flex flex-col justify-between border border-white/5 transition-all duration-500 hover:border-gold/30 hover:-translate-y-1 relative group"
            >
              {/* Quote marks */}
              <div className="absolute top-6 left-6 text-6xl font-serif font-light text-gold/10 select-none pointer-events-none leading-none">
                “
              </div>

              {/* Quote Body */}
              <div className="relative z-10 flex flex-col gap-6 pt-4 mb-8">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-gold-bright" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-white/80 text-xs md:text-sm font-light tracking-wide leading-relaxed italic">
                  "{rev.quote}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="border-t border-white/10 pt-4 flex flex-col gap-0.5">
                <span className="text-sm font-serif font-light text-white tracking-[0.5px] group-hover:text-gold-bright transition-colors">
                  {rev.author}
                </span>
                <span className="text-[9px] tracking-[2px] uppercase text-white/45 font-medium">
                  {rev.role}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
