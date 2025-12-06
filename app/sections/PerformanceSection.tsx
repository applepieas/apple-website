/* eslint-disable @next/next/no-img-element */
'use client'

import { performanceImages, performanceImgPositions } from '@/lib/constants'
import gsap from '@/lib/gsap'
import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'

const PerformanceSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' })

  useGSAP(() => {
    if (!sectionRef.current) return

    // Text animation - always runs on all screen sizes
    gsap.to('.content p', {
      scrollTrigger: {
        trigger: '.content',
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none reverse',
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
    })

    // Image timeline - desktop only
    if (isDesktop) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'center center',
          scrub: 1,
          onUpdate: (self) => {
            gsap.set(sectionRef.current, { '--scroll-progress': self.progress })
          },
        },
      })

      // Animate each image to its final position at time 0
      performanceImgPositions.forEach((position) => {
        if (position.id === 'p5') {
          // p5 (MacBook) stays stationary in the middle - make it visible
          gsap.set(`.wrapper .${position.id}`, {
            opacity: 1,
          })
          return
        }

        const imgSelector = `.wrapper .${position.id}`
        const imgElement = sectionRef.current?.querySelector(imgSelector)

        if (imgElement) {
          // Set initial state
          gsap.set(imgElement, {
            opacity: 0,
            y: 50,
          })

          // Animate to final position
          const animationProps: Record<string, number | string> = {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
          }

          if (position.left !== undefined) {
            animationProps.left = `${position.left}%`
          }
          if (position.right !== undefined) {
            animationProps.right = `${position.right}%`
          }
          if (position.bottom !== undefined) {
            animationProps.bottom = `${position.bottom}%`
          }

          timeline.to(imgSelector, animationProps, 0)
        }
      })
    }
  }, { scope: sectionRef, dependencies: [isDesktop] })

  return (
    <section id='performance' ref={sectionRef}>
      <h2>Next-level graphics
        performance. Game on.</h2>

      <div className="wrapper">
        {performanceImages.map(({ id, src }) => (
          <img key={id} className={id} src={src} alt={id} />
        ))}
      </div>

      <div className="content">
        <p>Run graphics-intensive workflows with a responsiveness that keeps up with your imagination. The M4 family of chips features a GPU with a second-generation hardware-accelerated ray tracing engine that renders images faster, so
          {' '}<span className='text-white'>gaming feels more immersive and realistic than ever.</span>{' '}

          <span>
            And Dynamic Caching optimizes fast on-chip memory to dramatically increase average GPU utilization — driving a huge performance boost for the most demanding pro apps and games.</span>
        </p>
      </div>
    </section>
  )
}

export default PerformanceSection