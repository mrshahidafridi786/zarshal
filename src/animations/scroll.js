import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger)

export function initScrollAnimations() {
  // Clean up any existing ScrollTriggers to avoid duplicates on re-renders
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())

  // 1. Reveal brand story section text with smooth fade-in
  gsap.fromTo('.story-text', 
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.story-section',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    }
  )

  // 2. Parallax scale on brand story images
  gsap.utils.toArray('.story-image').forEach(image => {
    gsap.fromTo(image,
      { scale: 1.15 },
      {
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: image,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      }
    )
  })

  // 3. Staggered reveal for Fragrance Notes (Top, Heart, Base)
  gsap.fromTo('.note-card',
    { opacity: 0, y: 60, scale: 0.95 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.0,
      stagger: 0.25,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.notes-section',
        start: 'top 70%',
        end: 'bottom 30%',
        toggleActions: 'play none none reverse'
      }
    }
  )

  // 4. Staggered reveal for Ingredients cards
  gsap.fromTo('.ingredient-card',
    { opacity: 0, scale: 0.9, y: 40 },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.ingredients-section',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    }
  )

  // 5. Why Choose Zarshal (Features) section reveals
  gsap.fromTo('.feature-item',
    { opacity: 0, x: -30 },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.features-section',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    }
  )

  // 6. Testimonials reveal
  gsap.fromTo('.testimonial-card',
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.testimonials-section',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    }
  )

  // 7. Dynamic backgrounds: subtle gold highlight glow shifting on scroll
  gsap.fromTo('.bg-glow-radial',
    { scale: 0.8, opacity: 0.3 },
    {
      scale: 1.3,
      opacity: 0.7,
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1
      }
    }
  )
}
