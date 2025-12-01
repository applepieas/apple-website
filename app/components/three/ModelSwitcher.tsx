/* eslint-disable @typescript-eslint/no-explicit-any */
import gsap from '@/lib/gsap'
import { PresentationControls } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import MacbookModel16 from '../models/Macbook-16'
import MacbookModel14 from '../models/Macbook-14'
import { useGSAP } from '@gsap/react'

interface ModelSwitcherProps {
  scale: number
  isMobile: boolean
  color: string
}

const ANIMATION_DURATION = 1
const OFFSET_DISTANCE = 5

const fadeMeshes = (group: any, opacity: number, immediate = false): void => {
  if (!group) return
  group.traverse((child: any) => {
    if (child.isMesh && child.material) {
      const materials = Array.isArray(child.material) ? child.material : [child.material]
      materials.forEach((mat: any) => {
        if (mat) {
          mat.transparent = true
          if (immediate) {
            mat.opacity = opacity
            mat.needsUpdate = true
          } else {
            gsap.to(mat, { opacity, duration: ANIMATION_DURATION })
          }
        }
      })
    }
  })
}

const moveGroup = (group: any, x: number): void => {
  if (!group) return
  gsap.to(group.position, { x, duration: ANIMATION_DURATION })
}

const ModelSwitcher = ({ scale, isMobile, color }: ModelSwitcherProps) => {
  const smallMacbookRef = useRef<any>(null)
  const largeMacbookRef = useRef<any>(null)

  const showLarge = scale === 0.08

  // Set initial off-screen + opacity state once
  useEffect(() => {
    if (!smallMacbookRef.current || !largeMacbookRef.current) return
    smallMacbookRef.current.position.x = 0
    largeMacbookRef.current.position.x = OFFSET_DISTANCE
    fadeMeshes(smallMacbookRef.current, 1, true)
    fadeMeshes(largeMacbookRef.current, 0, true)
  }, [])

  useGSAP(() => {
    if (showLarge) {
      moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE)
      moveGroup(largeMacbookRef.current, 0)
      fadeMeshes(smallMacbookRef.current, 0)
      fadeMeshes(largeMacbookRef.current, 1)
    } else {
      moveGroup(smallMacbookRef.current, 0)
      moveGroup(largeMacbookRef.current, OFFSET_DISTANCE)
      fadeMeshes(smallMacbookRef.current, 1)
      fadeMeshes(largeMacbookRef.current, 0)
    }
  }, [showLarge])

  const controlsConfig = {
    snap: true,
    speed: 1,
    zoom: 1,
    azimuth: [-Infinity, Infinity] as [number, number],
    config: { mass: 1, tension: 0, friction: 26 }
  }

  const smallScale = isMobile ? 0.035 : 0.06
  const largeScale = isMobile ? 0.045 : 0.08

  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={smallMacbookRef}>
          <MacbookModel14 scale={smallScale} color={color} />
        </group>
      </PresentationControls>

      <PresentationControls {...controlsConfig}>
        <group ref={largeMacbookRef}>
          <MacbookModel16 scale={largeScale} color={color} />
        </group>
      </PresentationControls>
    </>
  )
}

export default ModelSwitcher