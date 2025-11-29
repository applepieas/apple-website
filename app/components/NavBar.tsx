/* eslint-disable @next/next/no-img-element */
import React from 'react'


const NavBar = () => {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Apple Logo" />

        <ul>
          {[
            { label: 'Store' },
            { label: 'Mac' },
            { label: 'iPhone' },
            { label: 'Watch' },
            { label: 'AirPods' },
            { label: 'Vision' },
          ].map(({ label }) => (
            <a key={label} href={label}>{label}</a>
          ))}
        </ul>

        <div className="flex-center gap-3">
          <button>
            <img src="/search.svg" alt="Search" />
          </button>

          <button>
            <img src="/cart.svg" alt="Cart" />
          </button>

        </div>
      </nav>
    </header>
  )
}

export default NavBar