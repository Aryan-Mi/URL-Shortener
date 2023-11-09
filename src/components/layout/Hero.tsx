import '@/styles/Hero.css'
import heroImg from '@assets/images/illustration-working.svg'

function Hero() {
  return (
    <section className="hero">
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
    </section>
  )
}

export default Hero
