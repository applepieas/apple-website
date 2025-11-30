'use client'

import clsx from 'clsx'
import useMacbookStore from '../store'
import { Canvas } from '@react-three/fiber'
import StudioLights from '../components/three/StudioLights'
import ModelSwitcher from '../components/three/ModelSwitcher'
import { useMediaQuery } from 'react-responsive'

const ProductSection = () => {
  const { color, setColor, scale, setScale } = useMacbookStore()
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <section id='product-viewer'>
      <h2>Take a closer look</h2>

      <div className="controls">
        <p className="info">MacBook Pro {scale === 0.08 ? '16"' : '14"'} in {color}</p>

        <div className="flex-center gap-5 mt-5">
          <div className="color-control">
            <div
              className={clsx('bg-neutral-300', color === '#adb5bd' && 'active')}
              onClick={() => setColor('#adb5bd')} />
            <div
              className={clsx('bg-neutral-900', color === '#2e2c2e' && 'active')}
              onClick={() => setColor('#2e2c2e')} />
          </div>

          <div className="size-control">
            <div
              className={clsx(scale === 0.06 ? 'bg-white text-black' : 'bg-transparent text-white')}
              onClick={() => setScale(0.06)}>
              <p>14&quot;</p>
            </div>
            <div
              className={clsx(scale === 0.08 ? 'bg-white text-black' : 'bg-transparent text-white')}
              onClick={() => setScale(0.08)}>
              <p>16&quot;</p>
            </div>
          </div>
        </div>
      </div>

      <Canvas id='canvas' camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}>
        <StudioLights />
        <ModelSwitcher scale={scale} isMobile={isMobile} color={color} />
      </Canvas>
    </section>
  )
}

export default ProductSection