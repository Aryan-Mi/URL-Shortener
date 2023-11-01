// import React from 'react'
import '@/styles/Hero.css'
import logo from '@assets/images/logo.svg'
import heroImg from '@assets/images/illustration-working.svg'
import LinkInput from '../LinkInput'

LinkInput
function Hero() {
  return (
    <section className="hero">
      <nav>
        <img className="logo" src={logo} alt="Website logo" />
        <IconMenu className="menu" />
      </nav>
      <img
        className="hero-img"
        src={heroImg}
        alt="Illustration of a person working at office"
      />
      <h1 className="hero-title">
        More than just <br /> shorter links
      </h1>
      <p className="hero-description">
        Build your brand's recognition and get detailed insights on how your
        links are performing
      </p>
      <button className="button btn-primary btn-round">Get Started</button>
      <LinkInput />
    </section>
  )
}

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

export default Hero
