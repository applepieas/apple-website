import gsap from '@/lib/gsap'
import { PresentationControls } from '@react-three/drei'
import { useRef } from 'react'
import MacbookModel16 from '../models/Macbook-16'
import { Group } from 'next/dist/shared/lib/router/utils/route-regex'

interface ModelSwitcherProps {
  scale: number | string
  isMobile: boolean
}

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

const fadeMashes = (group: Group | null, opacity: number): void => {
  if (!group) return;

  group.traverse((child) => {
    if (child.isMesh) {
      child.material.transparent = true;
      gsap.to(child.material, { opacity, duration: ANIMATION_DURATION });
    }
  })
}

const ModelSwitcher = ({ scale, isMobile }: ModelSwitcherProps) => {
  const smallMacbookRef = useRef(null)
  const largeMacbookRef = useRef(null)

  const showLargeMacbook = scale === 0.08 || scale === 0.05

  const controlsConfig = {
    snap: true,
    speed: 1,
    zoome: 1,
    // polar: [-Math.PI, Math.PI],
    azimuth: [-Infinity, Infinity],
    config: { mass: 1, tension: 0, friction: 26 }
  }

  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={largeMacbookRef}>
          <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>

      {/* <PresentationControls {...controlsConfig}>
        <group ref={smallMacbookRef}>
          <MacbookModel16 scale={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls> */}
    </>
  )
}

export default ModelSwitcher