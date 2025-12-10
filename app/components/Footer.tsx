/* eslint-disable @next/next/no-img-element */
import { footerLinks } from '@/lib/constants'
import React from 'react'

const Footer = () => {
  return (
    <footer className='info'>
      <p>
        More ways to shop: Find an Apple Store or other retailer near you. Or call 000800 040 1966.
        <img src="/logo.svg" alt="apple logo" />
      </p>

      <hr />

      <div className="links">
        <p>
          Copyright © 2024 Apple Inc. All rights reserved.
        </p>

        <ul>
          {footerLinks.map(({ label, link }) => (
            <li key={label}>
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer