import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus, FiMinus } from 'react-icons/fi'

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)

  const faqs = [
    {
      question: 'How long do Zarshal fragrances last?',
      answer: 'Our fragrances are formulated as Extrait de Parfum with an oil concentration of 25% to 30%. On average, they last 12 to 24 hours on skin and up to several days on fabric, depending on environmental conditions.'
    },
    {
      question: 'Are the ingredients completely natural?',
      answer: 'We prioritize natural, ethically sourced absolute oils (like Cambodian agarwood and Bulgarian rose). When required for structural stability, sustainability, or allergen safety, we use organic compound blends compliant with strict European Union regulations (IFRA).'
    },
    {
      question: 'How should I store my luxury perfume bottle?',
      answer: 'To preserve the delicate molecular structure of the raw extracts, we recommend storing your bottle in a cool, dark place away from direct sunlight and humidity. The ideal temperature range is between 12°C and 18°C.'
    },
    {
      question: 'Do you offer custom blending services?',
      answer: 'Yes, we provide bespoke private commissions for our clients. By consulting our flagship boutiques or arranging a video consultation, our master perfumer will craft a unique olfactory profile reserved exclusively for you.'
    },
    {
      question: 'What is your shipping and return policy?',
      answer: 'We offer complimentary express shipping worldwide. Due to safety restrictions regarding flammable liquids, we cannot accept returns on opened perfume bottles. However, every order includes a 2ml trial sample so you can test the fragrance before breaking the gold seal on the main box.'
    }
  ]

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx)
  }

  return (
    <section id="faq" className="faq-section relative w-full bg-black py-24 md:py-36 px-6 md:px-12 z-20 overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-10 w-[30vw] h-[30vw] bg-gold/2 blur-[90px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center gap-4">
          <span className="text-[10px] tracking-[6px] uppercase text-gold font-light">
            Questions & Answers
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white font-light">
            The FAQ <span className="italic text-gold-bright">Registry</span>
          </h2>
          <div className="w-12 h-[1px] bg-gold/50 my-2" />
          <p className="text-white/50 text-sm tracking-wide font-light leading-relaxed max-w-lg">
            Find answers regarding fragrance longevity, ingredients purity, storage guidelines, and bespoke orders.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <div
                key={faq.question}
                className="border-b border-white/10 pb-4 transition-all duration-300"
              >
                {/* Header / Click Trigger */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="faq-header w-full py-4 flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className={`text-base md:text-lg font-serif font-light tracking-[0.5px] transition-colors duration-300 ${
                    isOpen ? 'text-gold-bright' : 'text-white hover:text-gold-bright'
                  }`}>
                    {faq.question}
                  </span>
                  
                  {/* Icon toggle */}
                  <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:border-gold/30 group-hover:text-gold transition-all duration-300 ${
                    isOpen ? 'border-gold text-gold-bright' : ''
                  }`}>
                    {isOpen ? <FiMinus size={14} /> : <FiPlus size={14} />}
                  </div>
                </button>

                {/* Animated Dropdown Answer Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: 'auto', marginTop: 12 },
                        collapsed: { opacity: 0, height: 0, marginTop: 0 }
                      }}
                      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-white/60 text-xs md:text-sm leading-relaxed tracking-wider font-light pb-2 pr-12">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
