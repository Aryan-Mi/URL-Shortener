import '@/styles/LinkInput.css'
import shortenImg from '@assets/images/bg-shorten-mobile.svg'
import { useAPIState } from '@/api/useAPIState'
import ShortLink from './ShortLink'

function LinkInput() {
  const { longURL, setLongURL, error, handleURL, links } = useAPIState()
  const errorStatus = error !== ''

  return (
    <div className="links">
      <div className="link-input-wrapper">
        <img className="bg-link-input" src={shortenImg} />
        <div>
          <input
            value={longURL}
            onChange={(e) => setLongURL(e.target.value)}
            type="url"
            name="link-input"
            id="link-input"
            className={`link-input ${errorStatus && 'input-error-state'}`}
            placeholder="Shorten a link here..."
          />
          {errorStatus && <p className="errorMessage">{error}</p>}
        </div>
        <button onClick={handleURL} className="button btn-primary btn-square">
          Shorten It!
        </button>
      </div>

      {links.map((link) => (
        <ShortLink
          key={link.alias}
          longLink={link.longLink}
          shortLink={link.shortLink}
        />
      ))}
    </div>
  )
}

export default LinkInput

// TODO: Make links permanent with local storage
