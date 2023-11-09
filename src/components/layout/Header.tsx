import '@/styles/Header.css'
import logo from '@assets/images/logo.svg'
import { useState } from 'react'
import MobileNavOverlay from './MobileNavOverlay'

export default function Header() {
  const [toggleOverlay, setToggleOverlay] = useState(false)

  return (
    <header className="header">
      <a href="">
        <img className="logo" src={logo} alt="Website logo" />
      </a>
      {/* MOBILE NAV */}
      <nav className="nav-mobile">
        <button
          className="menu-button"
          onClick={() => {
            setToggleOverlay(!toggleOverlay)
          }}
        >
          <IconMenu />
        </button>
        <MobileNavOverlay visible={toggleOverlay}>
          <NavLinksList />
        </MobileNavOverlay>
      </nav>
      <nav className="nav-desktop">
        <NavLinksList />
      </nav>
    </header>
  )
}

const NavLinksList = () => (
  <>
    <ul className="nav-links">
      {navSections.map((section) => (
        <li key={section}>
          <a href="#">{section}</a>
        </li>
      ))}
    </ul>
    <div className="auth-links">
      <button className="log-in-btn">Log In</button>
      <button className="button btn-primary btn-round sign-up-btn">
        Sign Up
      </button>
    </div>
  </>
)

const navSections = ['Features', 'Pricing', 'Resources'] as const

const IconMenu = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1rem"
      width="1rem"
      {...props}
    >
      <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" />
    </svg>
  )
}
