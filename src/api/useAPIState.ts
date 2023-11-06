import { useState, useEffect } from 'react'
import { shortenURL } from './apiFunctions'

function useAPIState() {
  const [longURL, setLongURL] = useState('')
  const [shortURL, setShortURL] = useState('')
  const [error, setError] = useState('')

  // Remove error when user starts typing again
  useEffect(() => {
    setError('')
  }, [longURL])

  async function handleURL() {
    try {
      const result = await shortenURL(longURL)
      setShortURL(result)
      setError('')
    } catch (error) {
      let errorMsg = 'Unknown Error.'
      if (error instanceof Error) {
        errorMsg = error.message
      }
      setError(errorMsg)
      setShortURL('')
    }
  }

  return { shortURL, longURL, setLongURL, error, handleURL }
}

export { useAPIState }
