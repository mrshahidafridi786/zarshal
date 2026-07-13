import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

// Components & Sections
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import Hero from './sections/Hero'
import BrandStory from './sections/BrandStory'
import Notes from './sections/Notes'
import Ingredients from './sections/Ingredients'
import Features from './sections/Features'
import Showcase from './sections/Showcase'
import Experience from './sections/Experience'
import Testimonials from './sections/Testimonials'
import FAQ from './sections/FAQ'
import CTA from './sections/CTA'
import Footer from './sections/Footer'

// 3D Scene
import Scene3D from './three/Scene3D'

// Animations
import { initScrollAnimations } from './animations/scroll'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeStyle, setActiveStyle] = useState('noir')
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    if (isLoading) return

    // Initialize Lenis smooth scroll with premium luxury easing
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0
    })

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', (e) => {
      ScrollTrigger.update()
      setScrollProgress(e.progress)
    })

    // Bind GSAP ticker to Lenis requestAnimationFrame
    const rafCallback = (time) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(rafCallback)
    gsap.ticker.lagSmoothing(0)

    // Run GSAP scroll animations for HTML sections
    initScrollAnimations()

    // Smooth scroll anchor link handler
    const handleAnchorClicks = () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault()
          const targetId = this.getAttribute('href')
          const target = document.querySelector(targetId)
          if (target) {
            lenis.scrollTo(target)
          }
        })
      })
    }
    handleAnchorClicks()

    return () => {
      lenis.destroy()
      gsap.ticker.remove(rafCallback)
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [isLoading])

  return (
    <>
      {/* 1. Preloader */}
      <AnimatePresence>
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="relative min-h-screen bg-black text-white overflow-hidden select-none">
          {/* 3. Global Navbar */}
          <Navbar />

          {/* 4. Fixed 3D Perfume Bottle Viewport */}
          <Scene3D scrollProgress={scrollProgress} activeStyle={activeStyle} />

          {/* 5. Scrollable Page Content Sections */}
          <main className="relative w-full flex flex-col z-20">
            {/* Hero Section */}
            <Hero />

            {/* Heritage / Story Section */}
            <div id="story">
              <BrandStory />
            </div>

            {/* Scent Accords Section */}
            <div id="notes">
              <Notes />
            </div>

            {/* Ingredients Section */}
            <div id="ingredients">
              <Ingredients />
            </div>

            {/* Why Choose Us (Pillars) Section */}
            <div id="features">
              <Features />
            </div>

            {/* Interactive Showcase Configurator Section */}
            <div id="showcase">
              <Showcase activeStyle={activeStyle} setActiveStyle={setActiveStyle} />
            </div>

            {/* Fullscreen Video / Light Rays Experience */}
            <div id="experience">
              <Experience />
            </div>

            {/* Testimonials Review Section */}
            <div id="testimonials">
              <Testimonials />
            </div>

            {/* FAQ Accordion Section */}
            <div id="faq">
              <FAQ />
            </div>

            {/* Final CTA Reservation Section */}
            <div id="cta">
              <CTA />
            </div>
            
            {/* Luxury Footer */}
            <Footer />
          </main>
        </div>
      )}
    </>
  )
}
