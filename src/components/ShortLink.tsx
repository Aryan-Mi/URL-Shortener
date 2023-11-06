import { useState } from 'react'
import '@/styles/ShortLink.css'

function ShortLink({ longLink, shortLink }: Props) {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(shortLink)
    setCopied(true)
  }

  return (
    <div className="shortLink-wrapper">
      <div className="long-link">
        <a href={longLink} target="_blank">
          <p>{longLink}</p>
        </a>
      </div>
      <div className="short-link">
        <a
          href={shortLink}
          target="_blank"
          // rel="noopener noreferrer"
        >
          {shortLink}
        </a>
        <button
          onClick={handleCopy}
          className={`button btn-primary btn-square ${
            copied && 'btn-secondary'
          }`}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  )
}

export default ShortLink

interface Props {
  longLink: string
  shortLink: string
}
