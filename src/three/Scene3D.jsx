import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, ContactShadows, Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import PerfumeBottle from './PerfumeBottle'

// Floating Gold Dust Particle System in the background
function BackgroundParticles({ count = 120 }) {
  const pointsRef = useRef()

  // Generate particle positions
  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const spd = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      // Position particles in a vertical column around the scene
      pos[i * 3] = (Math.random() - 0.5) * 5
      pos[i * 3 + 1] = (Math.random() - 0.5) * 4
      pos[i * 3 + 2] = (Math.random() - 0.5) * 3 - 1 // behind the bottle mostly
      spd[i] = Math.random() * 0.15 + 0.05 // float speed
    }
    return [pos, spd]
  }, [count])

  useFrame((state) => {
    if (!pointsRef.current) return
    const time = state.clock.getElapsedTime()
    const posArray = pointsRef.current.geometry.attributes.position.array

    for (let i = 0; i < count; i++) {
      // Float particles upward
      posArray[i * 3 + 1] += speeds[i] * 0.02
      
      // Horizontal drift (swaying)
      posArray[i * 3] += Math.sin(time + i) * 0.002

      // Reset when particle goes too high
      if (posArray[i * 3 + 1] > 2) {
        posArray[i * 3 + 1] = -2
        posArray[i * 3] = (Math.random() - 0.5) * 5
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#dfba73" // Premium gold particles
        size={0.035}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.65}
      />
    </Points>
  )
}

// Configuration of the 3D bottle for each landing page section
const SECTION_CONFIGS = [
  // 0. Hero
  {
    position: [0, -0.05, 0],
    rotation: [0, 0, 0],
    scale: [0.95, 0.95, 0.95],
  },
  // 1. Brand Story
  {
    position: [1.1, -0.15, 0],
    rotation: [0.1, -Math.PI / 4, 0.05],
    scale: [0.8, 0.8, 0.8],
  },
  // 2. Fragrance Notes
  {
    position: [-1.2, 0.05, 0],
    rotation: [-0.05, Math.PI / 3, -0.05],
    scale: [0.9, 0.9, 0.9],
  },
  // 3. Ingredients
  {
    position: [0, -0.6, -1.8],
    rotation: [0.2, Math.PI, 0.1],
    scale: [0.65, 0.65, 0.65],
  },
  // 4. Features (Why Choose Us)
  {
    position: [1.2, -0.1, 0],
    rotation: [-0.1, -Math.PI / 6, -0.05],
    scale: [0.8, 0.8, 0.8],
  },
  // 5. Product Showcase (Interactive Selector)
  {
    position: [-0.75, -0.1, 0],
    rotation: [0, -Math.PI / 12, 0],
    scale: [0.85, 0.85, 0.85],
  },
  // 6. Luxury Experience
  {
    position: [0, 0.1, 1.2], // Zooms in very close
    rotation: [0.05, Math.PI / 2, 0],
    scale: [1.5, 1.5, 1.5],
  },
  // 7. Testimonials
  {
    position: [1.1, -0.15, 0],
    rotation: [0.1, -Math.PI / 4, 0],
    scale: [0.8, 0.8, 0.8],
  },
  // 8. FAQ
  {
    position: [-1.2, -0.05, 0],
    rotation: [-0.05, Math.PI / 3, 0],
    scale: [0.8, 0.8, 0.8],
  },
  // 9. CTA
  {
    position: [0.55, -0.1, 0],
    rotation: [0, -Math.PI / 8, 0],
    scale: [0.85, 0.85, 0.85],
  }
]

function ScrollController({ scrollProgress, activeStyle }) {
  const groupRef = useRef()

  useFrame(() => {
    if (!groupRef.current) return

    // Calculate current section index and interpolation factor
    // scrollProgress goes from 0 to 1 across 10 sections (0 to 9)
    const numSections = SECTION_CONFIGS.length
    const rawProgress = scrollProgress * (numSections - 1)
    
    // Clamp values
    const sectionIndex = Math.min(Math.floor(rawProgress), numSections - 2)
    const progressInSec = rawProgress - sectionIndex

    const currentConfig = SECTION_CONFIGS[sectionIndex]
    const nextConfig = SECTION_CONFIGS[sectionIndex + 1]

    if (!currentConfig || !nextConfig) return

    // Interpolate positions
    const posX = THREE.MathUtils.lerp(currentConfig.position[0], nextConfig.position[0], progressInSec)
    const posY = THREE.MathUtils.lerp(currentConfig.position[1], nextConfig.position[1], progressInSec)
    const posZ = THREE.MathUtils.lerp(currentConfig.position[2], nextConfig.position[2], progressInSec)

    // Interpolate rotations
    const rotX = THREE.MathUtils.lerp(currentConfig.rotation[0], nextConfig.rotation[0], progressInSec)
    const rotY = THREE.MathUtils.lerp(currentConfig.rotation[1], nextConfig.rotation[1], progressInSec)
    const rotZ = THREE.MathUtils.lerp(currentConfig.rotation[2], nextConfig.rotation[2], progressInSec)

    // Interpolate scales
    const scaleX = THREE.MathUtils.lerp(currentConfig.scale[0], nextConfig.scale[0], progressInSec)
    const scaleY = THREE.MathUtils.lerp(currentConfig.scale[1], nextConfig.scale[1], progressInSec)
    const scaleZ = THREE.MathUtils.lerp(currentConfig.scale[2], nextConfig.scale[2], progressInSec)

    // Smoothly apply to group
    groupRef.current.position.set(
      THREE.MathUtils.lerp(groupRef.current.position.x, posX, 0.1),
      THREE.MathUtils.lerp(groupRef.current.position.y, posY, 0.1),
      THREE.MathUtils.lerp(groupRef.current.position.z, posZ, 0.1)
    )

    groupRef.current.rotation.set(
      THREE.MathUtils.lerp(groupRef.current.rotation.x, rotX, 0.1),
      THREE.MathUtils.lerp(groupRef.current.rotation.y, rotY, 0.1),
      THREE.MathUtils.lerp(groupRef.current.rotation.z, rotZ, 0.1)
    )

    groupRef.current.scale.set(
      THREE.MathUtils.lerp(groupRef.current.scale.x, scaleX, 0.1),
      THREE.MathUtils.lerp(groupRef.current.scale.y, scaleY, 0.1),
      THREE.MathUtils.lerp(groupRef.current.scale.z, scaleZ, 0.1)
    )
  })

  return (
    <group ref={groupRef}>
      <PerfumeBottle activeStyle={activeStyle} />
    </group>
  )
}

export default function Scene3D({ scrollProgress = 0, activeStyle = 'noir' }) {
  return (
    <div className="fixed inset-0 w-full h-screen pointer-events-none z-10">
      <Canvas
        shadows
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 3.2], fov: 45 }}
      >
        {/* Ambient background lighting */}
        <ambientLight intensity={0.5} />

        {/* Studio spotlight to illuminate front of the bottle */}
        <spotLight
          position={[4, 5, 6]}
          angle={0.35}
          penumbra={1}
          intensity={2.5}
          castShadow
          shadow-bias={-0.0001}
          shadow-mapSize={[1024, 1024]}
        />
        
        {/* Soft fill light from the left */}
        <directionalLight 
          position={[-4, 2, 2]} 
          intensity={0.8} 
        />

        {/* BACKLIGHT: Golden amber rim light for the luxury halo effect */}
        <directionalLight
          position={[0, 1, -5]}
          intensity={3.5}
          color="#dfba73" // Warm gold backlight
        />
        
        {/* Rim highlights from top-left */}
        <pointLight
          position={[-3, 4, -2]}
          intensity={1.2}
          color="#ffffff"
        />

        {/* Renders the bottle with scroll controls */}
        <ScrollController scrollProgress={scrollProgress} activeStyle={activeStyle} />

        {/* Soft shadow on the floor */}
        <ContactShadows
          position={[0, -1.15, 0]}
          opacity={0.6}
          scale={3.5}
          blur={1.8}
          far={1.5}
        />

        {/* Floating particles in background */}
        <BackgroundParticles count={150} />

        {/* Load Studio/Sunset Environment Map for photorealistic reflections */}
        <Environment preset="sunset" />
      </Canvas>
    </div>
  )
}
