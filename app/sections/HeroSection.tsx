/* eslint-disable @next/next/no-img-element */
'use client'

import { useEffect, useRef } from "react"



const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2
  }, []);

  return (
    <section id='hero'>
      <div>
        <h1>MacBook Pro</h1>
        <img src="/title.png" alt="MacBook Pro" />
      </div>

      <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline></video>

      <button>Buy</button>

      <p>From $1999 or $83.29/mo for 24 mo</p>
    </section>
  )
}

export default HeroSection