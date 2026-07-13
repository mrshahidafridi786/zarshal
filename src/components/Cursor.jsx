import React, { useEffect, useState, useRef } from 'react'

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(true)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  
  const followerRef = useRef()
  const dotRef = useRef()
  const requestRef = useRef()
  const mouseRef = useRef({ x: 0, y: 0 })
  const followerPosRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Enable custom cursor class on body for hiding standard cursor
    document.body.classList.add('custom-cursor-enabled')

    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
      setHidden(false)
    }

    const onMouseLeave = () => {
      setHidden(true)
    }

    const onMouseDown = () => {
      setClicked(true)
    }

    const onMouseUp = () => {
      setClicked(false)
    }

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)

    // Smooth Lerp animation for follower
    const render = () => {
      const ease = 0.12 // Spring speed
      
      // Update dot position immediately
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseRef.current.x - 3}px, ${mouseRef.current.y - 3}px, 0)`
      }

      // Update follower position with easing
      followerPosRef.current.x += (mouseRef.current.x - followerPosRef.current.x) * ease
      followerPosRef.current.y += (mouseRef.current.y - followerPosRef.current.y) * ease

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerPosRef.current.x - 20}px, ${followerPosRef.current.y - 20}px, 0)`
      }

      requestRef.current = requestAnimationFrame(render)
    }

    requestRef.current = requestAnimationFrame(render)

    // Add hover listeners for interactive items
    const addHoverListeners = () => {
      const interactives = document.querySelectorAll('a, button, [role="button"], .note-card, .ingredient-card, .faq-header, .selector-btn')
      
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', () => setLinkHovered(true))
        el.addEventListener('mouseleave', () => setLinkHovered(false))
      })
    }

    // Set up MutationObserver to re-attach hover listeners when components render/change
    const observer = new MutationObserver(addHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    addHoverListeners()

    return () => {
      document.body.classList.remove('custom-cursor-enabled')
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      cancelAnimationFrame(requestRef.current)
      observer.disconnect()
    }
  }, [])

  if (hidden) return null

  return (
    <>
      {/* 1. Core Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-1.5 h-1.5 bg-gold-bright rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out ${
          linkHovered ? 'scale-0' : 'scale-100'
        }`}
      />

      {/* 2. Outer Circle (Follower) */}
      <div
        ref={followerRef}
        className={`fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-50 border transition-all duration-300 ease-out ${
          clicked 
            ? 'scale-75 bg-gold/15 border-gold-bright' 
            : linkHovered 
              ? 'scale-150 bg-gold/5 border-gold-bright shadow-[0_0_15px_rgba(223,186,115,0.3)]' 
              : 'scale-100 border-white/20'
        }`}
        style={{ willChange: 'transform' }}
      />
    </>
  )
}
