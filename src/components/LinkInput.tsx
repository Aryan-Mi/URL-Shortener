// import { useState } from 'react'
import '@/styles/LinkInput.css'
import shortenImg from '@assets/images/bg-shorten-mobile.svg'
// import { shortenURL } from '@/api/apiFunctions'
import { useAPIState } from '@/api/useAPIState'

function LinkInput() {
  const { shortURL, longURL, setLongURL, error, handleURL } = useAPIState()
  const errorStatus = error !== ''

  return (
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
      <button
        onClick={handleURL}
        // onClick={() => console.log(longURL)}
        className="button btn-primary btn-square"
      >
        {errorStatus ? error : 'Shorten It!'}
      </button>
    </div>
  )
}

export default LinkInput
