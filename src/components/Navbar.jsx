import React, { useState, useEffect } from 'react'
import { FiShoppingBag, FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Collection', href: '#collection' },
    { name: 'Heritage', href: '#story' },
    { name: 'Notes', href: '#notes' },
    { name: 'Ingredients', href: '#ingredients' },
    { name: 'Boutique', href: '#showcase' }
  ]

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Click handler to scroll to top
  const handleLogoClick = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          scrolled
            ? 'py-4 bg-[#000000]/85 backdrop-blur-md border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'py-7 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* 1. Left Side: Brand Logo Emblem and Name */}
          <a
            href="#"
            onClick={handleLogoClick}
            className="flex items-center gap-3.5 group select-none pointer-events-auto"
          >
            {/* SVG Luxury Circle Z Logo */}
            <svg
              width="36"
              height="36"
              viewBox="0 0 100 100"
              className="transition-transform duration-500 group-hover:rotate-12"
            >
              <defs>
                <linearGradient id="nav-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#dfba73" />
                  <stop offset="50%" stopColor="#c5a880" />
                  <stop offset="100%" stopColor="#8c7150" />
                </linearGradient>
              </defs>
              <circle
                cx="50"
                cy="50"
                r="44"
                stroke="url(#nav-gold-grad)"
                strokeWidth="3.5"
                fill="none"
                className="opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
              <text
                x="50"
                y="56"
                textAnchor="middle"
                fill="url(#nav-gold-grad)"
                fontSize="50"
                fontFamily="'Cormorant Garamond', Georgia, serif"
                fontWeight="300"
                dominantBaseline="middle"
              >
                Z
              </text>
            </svg>
            
            {/* Brand text */}
            <span className="text-white group-hover:text-gold-bright transition-colors text-base md:text-lg font-serif font-light tracking-[5px] uppercase pl-1 leading-none mt-0.5">
              ZARSHAL
            </span>
          </a>

          {/* 2. Center: Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-[10px] tracking-[4px] uppercase text-white/70 hover:text-gold-bright transition-all duration-300 font-light hover:scale-105"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* 3. Right Side: Shopping actions and Hamburg menu for Mobile */}
          <div className="flex items-center gap-4 md:gap-6">
            <button className="text-white hover:text-gold-bright transition-colors relative p-2" aria-label="Shopping Bag">
              <FiShoppingBag size={20} />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-gradient-to-r from-gold-dark to-gold-bright rounded-full" />
            </button>
            
            <a
              href="#showcase"
              onClick={(e) => handleLinkClick(e, '#showcase')}
              className="hidden md:inline-block px-6 py-2.5 bg-gradient-to-r from-gold-dark to-gold text-black text-[9px] tracking-[3px] uppercase font-semibold hover:from-gold-bright hover:to-gold transition-all duration-300 rounded-[1px] shadow-[0_0_15px_rgba(197,168,128,0.15)] hover:shadow-[0_0_20px_rgba(223,186,115,0.45)]"
            >
              Reserve Bottle
            </a>

            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden text-white hover:text-gold transition-colors focus:outline-none p-1.5"
              aria-label="Toggle Menu"
            >
              <FiMenu size={24} />
            </button>
          </div>

        </div>
      </header>

      {/* 4. Fullscreen Overlay Mobile Navigation */}
      <div
        className={`fixed inset-0 w-full h-screen bg-black/98 z-50 flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-8 right-8 text-white hover:text-gold transition-colors"
          aria-label="Close Menu"
        >
          <FiX size={28} />
        </button>

        <div className="flex flex-col items-center gap-8">
          
          {/* Mobile Overlay Logo */}
          <div className="flex flex-col items-center gap-2 mb-6">
            <svg width="60" height="60" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="44" stroke="url(#nav-gold-grad)" strokeWidth="3" fill="none" />
              <text x="50" y="56" textAnchor="middle" fill="url(#nav-gold-grad)" fontSize="52" fontFamily="'Cormorant Garamond', Georgia, serif" fontWeight="300" dominantBaseline="middle">Z</text>
            </svg>
            <p className="text-[11px] tracking-[8px] uppercase text-gold font-light pl-[8px] mt-2">
              HAUTE PARFUMERIE
            </p>
          </div>
          
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-2xl font-serif text-white hover:text-gold-bright transition-colors tracking-[4px]"
              style={{
                transitionDelay: `${idx * 80}ms`
              }}
            >
              {link.name}
            </a>
          ))}
          
          <a
            href="#showcase"
            onClick={(e) => handleLinkClick(e, '#showcase')}
            className="mt-8 px-8 py-3.5 bg-gradient-to-r from-gold-dark to-gold text-black text-[10px] tracking-[4px] uppercase font-semibold rounded-[2px]"
          >
            Reserve Collection
          </a>
        </div>
      </div>
    </>
  )
}
