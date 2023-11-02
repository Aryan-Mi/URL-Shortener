// import React from 'react'
import '@/styles/CTABoost.css'
import boost_bg from '@assets/images/bg-boost-mobile.svg'

export default function CTABoost() {
  return (
    <section className="cta">
      <img className="cta-bg" src={boost_bg} />
      <h2>Boost your links today</h2>
      <button className="button btn-round btn-primary">Get Started</button>
    </section>
  )
}
