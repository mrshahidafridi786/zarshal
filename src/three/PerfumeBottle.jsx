import React, { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'

// Dynamic procedural wood texture generator
function createWoodTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const ctx = canvas.getContext('2d')
  
  // Base wood color
  ctx.fillStyle = '#4a2f1b'
  ctx.fillRect(0, 0, 512, 512)
  
  // Draw wood grain lines
  ctx.strokeStyle = '#28170c'
  for (let i = 0; i < 300; i++) {
    ctx.lineWidth = Math.random() * 2 + 0.5
    ctx.globalAlpha = Math.random() * 0.4 + 0.2
    ctx.beginPath()
    const y = Math.random() * 512
    ctx.moveTo(0, y)
    ctx.bezierCurveTo(
      150, y + (Math.random() - 0.5) * 40,
      350, y + (Math.random() - 0.5) * 40,
      512, y
    )
    ctx.stroke()
  }
  
  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  return texture
}

// Dynamic procedural marble texture generator
function createMarbleTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const ctx = canvas.getContext('2d')
  
  // Alabaster white base
  ctx.fillStyle = '#f4f0e6'
  ctx.fillRect(0, 0, 512, 512)
  
  // Soft grey marble veins
  ctx.strokeStyle = '#dfdacb'
  for (let i = 0; i < 20; i++) {
    ctx.lineWidth = Math.random() * 3 + 1
    ctx.globalAlpha = Math.random() * 0.3 + 0.1
    ctx.beginPath()
    ctx.moveTo(Math.random() * 512, 0)
    ctx.bezierCurveTo(
      Math.random() * 512, 150,
      Math.random() * 512, 350,
      Math.random() * 512, 512
    )
    ctx.stroke()
  }
  
  const texture = new THREE.CanvasTexture(canvas)
  return texture
}

// Generate the premium Zarshal logo decal texture
function createLogoTexture(glowColor = '#dfba73') {
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const ctx = canvas.getContext('2d')
  
  // Transparent background
  ctx.clearRect(0, 0, 512, 512)
  
  // Elegant serif 'Z' logo
  ctx.font = '300 240px "Cormorant Garamond", Georgia, serif'
  ctx.fillStyle = '#ffffff' // Pure white is modulated by the material color
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('Z', 256, 200)
  
  // Elegant 'ZARSHAL' text below
  ctx.font = '400 36px "Outfit", sans-serif'
  ctx.letterSpacing = '12px'
  ctx.fillText('ZARSHAL', 256, 360)
  
  const texture = new THREE.CanvasTexture(canvas)
  return texture
}

export default function PerfumeBottle({ activeStyle = 'noir', isHovered = false }) {
  const bottleGroupRef = useRef()
  const floatingGroupRef = useRef()

  // Generate textures once
  const woodTexture = useMemo(() => createWoodTexture(), [])
  const marbleTexture = useMemo(() => createMarbleTexture(), [])
  const logoTexture = useMemo(() => createLogoTexture(), [])

  // Material and color settings based on active style
  const styleConfig = useMemo(() => {
    switch (activeStyle) {
      case 'luminous':
        return {
          glassColor: '#fcd34d',
          glassTransmission: 0.9,
          glassRoughness: 0.05,
          glassMetalness: 0.1,
          liquidColor: '#f59e0b',
          capType: 'gold',
          collarColor: '#dfba73',
          logoColor: '#ffffff',
          thickness: 1.2
        }
      case 'mystic':
        return {
          glassColor: '#1e3a8a',
          glassTransmission: 0.85,
          glassRoughness: 0.05,
          glassMetalness: 0.2,
          liquidColor: '#0f172a',
          capType: 'blueWood',
          collarColor: '#dfba73',
          logoColor: '#ffffff',
          thickness: 1.5
        }
      case 'rosewood':
        return {
          glassColor: '#78350f',
          glassTransmission: 0.8,
          glassRoughness: 0.1,
          glassMetalness: 0.15,
          liquidColor: '#451a03',
          capType: 'darkWood',
          collarColor: '#dfba73',
          logoColor: '#ffffff',
          thickness: 1.4
        }
      case 'alabaster':
        return {
          glassColor: '#ffffff',
          glassTransmission: 0.5, // Semi-opaque / Frosted white
          glassRoughness: 0.4,    // Rough/frosted feel
          glassMetalness: 0.1,
          liquidColor: '#fafaf9',
          capType: 'alabaster',
          collarColor: '#dfba73',
          logoColor: '#b08246',
          thickness: 2.0
        }
      case 'modernist':
        return {
          glassColor: '#ffffff',
          glassTransmission: 0.95,
          glassRoughness: 0.02,
          glassMetalness: 0.05,
          liquidColor: '#f1f5f9',
          capType: 'silver',
          collarColor: '#e2e8f0',
          logoColor: '#334155',
          thickness: 1.0
        }
      case 'noir':
      default:
        return {
          glassColor: '#1a1a1a', // Smoke black
          glassTransmission: 0.7,
          glassRoughness: 0.15,
          glassMetalness: 0.2,
          liquidColor: '#d97706', // Warm golden liquid inside dark glass
          capType: 'darkWood',
          collarColor: '#dfba73',
          logoColor: '#ffffff',
          thickness: 1.6
        }
    }
  }, [activeStyle])

  // Animate the bottle: float, spin, and track mouse hover parallax
  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime()
    
    // Slow cinematic floating
    if (floatingGroupRef.current) {
      floatingGroupRef.current.position.y = Math.sin(elapsed * 1.2) * 0.06
      floatingGroupRef.current.position.x = Math.cos(elapsed * 0.8) * 0.02
    }

    // Auto rotate and mouse parallax
    if (bottleGroupRef.current) {
      const mouseX = state.pointer.x * 0.25
      const mouseY = state.pointer.y * 0.15
      
      // Interpolate rotation to include mouse movement
      bottleGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        bottleGroupRef.current.rotation.y,
        elapsed * 0.15 + mouseX,
        0.05
      )
      
      bottleGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        bottleGroupRef.current.rotation.x,
        mouseY,
        0.05
      )
    }
  })

  // Set up materials
  const capMaterial = useMemo(() => {
    switch (styleConfig.capType) {
      case 'gold':
        return new THREE.MeshStandardMaterial({
          color: '#dfba73',
          metalness: 1.0,
          roughness: 0.08,
          clearcoat: 1.0,
          clearcoatRoughness: 0.05
        })
      case 'silver':
        return new THREE.MeshStandardMaterial({
          color: '#d1d5db',
          metalness: 1.0,
          roughness: 0.05,
          clearcoat: 1.0,
          clearcoatRoughness: 0.02
        })
      case 'alabaster':
        return new THREE.MeshStandardMaterial({
          map: marbleTexture,
          roughness: 0.6,
          metalness: 0.1,
          bumpMap: marbleTexture,
          bumpScale: 0.01
        })
      case 'blueWood':
        return new THREE.MeshStandardMaterial({
          map: woodTexture,
          color: '#1e3a8a',
          roughness: 0.7,
          metalness: 0.0,
          bumpMap: woodTexture,
          bumpScale: 0.02
        })
      case 'darkWood':
      default:
        return new THREE.MeshStandardMaterial({
          map: woodTexture,
          color: '#3d2618',
          roughness: 0.8,
          metalness: 0.0,
          bumpMap: woodTexture,
          bumpScale: 0.03
        })
    }
  }, [styleConfig.capType, woodTexture, marbleTexture])

  const collarMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: styleConfig.collarColor,
      metalness: 1.0,
      roughness: 0.1
    })
  }, [styleConfig.collarColor])

  const glassMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: styleConfig.glassColor,
      transmission: styleConfig.glassTransmission,
      opacity: 1,
      roughness: styleConfig.glassRoughness,
      metalness: styleConfig.glassMetalness,
      thickness: styleConfig.thickness,
      ior: 1.52, // Refractive index of heavy lead glass
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      transparent: true,
      attenuationColor: styleConfig.glassColor,
      attenuationDistance: 0.5
    })
  }, [styleConfig])

  const liquidMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: styleConfig.liquidColor,
      transmission: 0.7,
      roughness: 0.1,
      thickness: 0.3,
      ior: 1.33, // Refractive index of alcohol/water
      transparent: true
    })
  }, [styleConfig.liquidColor])

  const logoMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      map: logoTexture,
      transparent: true,
      color: styleConfig.logoColor === '#ffffff' ? '#dfba73' : styleConfig.logoColor,
      metalness: 1.0,
      roughness: 0.05,
      depthWrite: false, // Prevents Z-fighting and clipping with the glass mesh
      blending: THREE.NormalBlending
    })
  }, [logoTexture, styleConfig.logoColor])

  const tubeMaterial = new THREE.MeshStandardMaterial({
    color: '#ffffff',
    transparent: true,
    opacity: 0.15,
    roughness: 0.2
  })

  return (
    <group ref={floatingGroupRef}>
      <group ref={bottleGroupRef}>
        
        {/* 1. BOTTLE CAP (Wood Sphere or Metal Ball) */}
        <mesh position={[0, 1.45, 0]} material={capMaterial} castShadow>
          <sphereGeometry args={[0.42, 64, 64]} />
        </mesh>

        {/* 2. GOLD/SILVER COLLAR (Cap Neck) */}
        <mesh position={[0, 1.02, 0]} material={collarMaterial} castShadow>
          <cylinderGeometry args={[0.18, 0.18, 0.12, 32]} />
        </mesh>
        
        {/* Spray nozzle sub-ring */}
        <mesh position={[0, 0.93, 0]} material={collarMaterial}>
          <cylinderGeometry args={[0.22, 0.22, 0.06, 32]} />
        </mesh>

        {/* 3. MAIN GLASS BOTTLE BODY */}
        <RoundedBox
          args={[1.35, 1.65, 0.8]} // Width, height, depth
          radius={0.16}            // Rounded corners radius
          smoothness={8}          // Corner subdivisions
          position={[0, 0, 0]}
          castShadow
          receiveShadow
        >
          <primitive object={glassMaterial} attach="material" />
        </RoundedBox>

        {/* 4. LIQUID CONTENT (Inside the bottle) */}
        <RoundedBox
          args={[1.18, 1.42, 0.65]}
          radius={0.12}
          smoothness={8}
          position={[0, -0.06, 0]} // Slightly offset to fit inside the bottom
        >
          <primitive object={liquidMaterial} attach="material" />
        </RoundedBox>

        {/* 5. DIP TUBE (Thin translucent cylinder inside the liquid) */}
        <mesh position={[0, -0.05, 0]}>
          <cylinderGeometry args={[0.015, 0.015, 1.4, 16]} />
          <primitive object={tubeMaterial} attach="material" />
        </mesh>

        {/* 6. EMBOSSED GOLD BRAND LOGO (Applied slightly in front of the front glass face) */}
        {/* Since the glass front face is at z = 0.40, placing the logo at z = 0.405 prevents clipping */}
        <mesh position={[0, -0.05, 0.405]} material={logoMaterial}>
          <planeGeometry args={[0.9, 0.9]} />
        </mesh>
        
        {/* Backside label - subtle dark transparency for depth */}
        <mesh position={[0, -0.05, -0.405]} rotation={[0, Math.PI, 0]}>
          <planeGeometry args={[0.8, 0.8]} />
          <meshBasicMaterial 
            color="#000000" 
            transparent 
            opacity={0.3} 
            depthWrite={false}
          />
        </mesh>

      </group>
    </group>
  )
}
