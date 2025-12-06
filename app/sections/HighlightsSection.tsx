'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useMediaQuery } from 'react-responsive'

const HighlightsSection = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  useGSAP(() => {
    gsap.to(['.left-column', '.right-column'], {
      scrollTrigger: {
        trigger: '#highlights',
        start: isMobile ? 'bottom bottom' : 'top center',
      },
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.5,
      ease: 'power1.inOut',
    });
  });

  return (
    <section id='highlights' className='mt-20'>
      <h2>There&apos;s never been a<br />
        better time to upgrade.</h2>
      <h3>Here&apos;s what you get with the new MacBook Pro.</h3>

      <div className="masonry">
        <div className="left-column">
          <div>
            <img src="/laptop.png" alt="laptop" />
            <p>Fly through
              demanding tasks
              up to 9.8x faster.
            </p>
          </div>

          <div>
            <img src="/sun.png" alt="sun" />
            <p>A stunning <br />
              Liquid Retina XDR<br />
              display.
            </p>
          </div>


        </div>

        <div className="right-column">
          <div className='apple-gradient'>
            <img src="/ai.png" alt="ai" />
            <p>
              Build for <br />
              <span>Apple Intelligence</span>
            </p>
          </div>

          <div>
            <img src="/battery.png" alt="battery" />
            <p>
              Up to
              {' '}<span className='green-gradient'>14 more hours</span>{' '}
              battery life.
              <span className='text-dark-100'>{' '}(Up to 24 hours on total.)</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HighlightsSection