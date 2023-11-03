import facebook from '@assets/images/icon-facebook.svg'
import twitter from '@assets/images/icon-twitter.svg'
import pinterest from '@assets/images/icon-pinterest.svg'
import instagram from '@assets/images/icon-instagram.svg'
import logo from '@assets/images/logo-white.svg'
import '@/styles/Footer.css'

export default function Footer() {
  return (
    <section className="footer">
      <img className="logo footer-logo" src={logo} alt="Website logo" />

      <h4>Features</h4>
      <ul className="footer-links features-list">
        <li>Link Shortening</li>
        <li>Branded Links</li>
        <li>Analytics</li>
      </ul>
      <h4>Resources</h4>
      <ul className="footer-links features-list">
        <li>Blog</li>
        <li>Developers</li>
        <li>Support</li>
      </ul>
      <h4>Company</h4>
      <ul className="footer-links features-list">
        <li>About</li>
        <li>Our Team</li>
        <li>Careers</li>
        <li>Contact</li>
      </ul>

      <ul className="social-media-links">
        <li>
          <a
            href="https://facebook.com"
            target="_blank"
            className="social-media-link"
          >
            <img src={facebook} alt="Link to facebook page" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com"
            target="_blank"
            className="social-media-link"
          >
            <img src={twitter} alt="Link to twitter page" />
          </a>
        </li>
        <li>
          <a
            href="https://pinterest.com"
            target="_blank"
            className="social-media-link"
          >
            <img src={pinterest} alt="Link to pinterest page" />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com"
            target="_blank"
            className="social-media-link"
          >
            <img src={instagram} alt="Link to instagram page" />
          </a>
        </li>
      </ul>
    </section>
  )
}
