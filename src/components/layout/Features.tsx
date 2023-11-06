// import React from 'react'
import '@/styles/Features.css'
import FeatureCards from '../FeatureCards'
import LinkInput from '../LinkInput'

function Features() {
  return (
    <section className="features">
      <LinkInput />
      <h2 className="features-title">Advanced Statistics</h2>
      <p className="features-desc">
        Track how your links are performing across the web with our advanced
        statistics dashboard
      </p>
      <FeatureCards />
    </section>
  )
}

export default Features
