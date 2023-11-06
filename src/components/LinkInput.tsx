// import { useState } from 'react'
import '@/styles/LinkInput.css'
import shortenImg from '@assets/images/bg-shorten-mobile.svg'
// import { shortenURL } from '@/api/apiFunctions'
import { useAPIState } from '@/api/useAPIState'
import ShortLink from './ShortLink'

function LinkInput() {
  const { longURL, setLongURL, error, handleURL, links } = useAPIState()
  const errorStatus = error !== ''

  return (
    <div className="links">
      <div className="link-input-wrapper">
        <img className="bg-link-input" src={shortenImg} />
        <input
          value={longURL}
          onChange={(e) => setLongURL(e.target.value)}
          type="url"
          name="link-input"
          id="link-input"
          placeholder="Shorten a link here..."
        />
        <button onClick={handleURL} className="button btn-primary btn-square">
          {errorStatus ? error : 'Shorten It!'}
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
