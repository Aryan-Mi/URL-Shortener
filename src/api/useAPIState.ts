import { useState, useEffect } from 'react'
import { shortenURL } from './apiFunctions'

interface LinkItem {
  alias: string
  shortLink: string
  longLink: string
}

function useAPIState() {
  const [longURL, setLongURL] = useState('')
  const [links, setLinks] = useState<LinkItem[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    const cacheKey = 'cachedLinks'
    // Update links on the initial render
    if (links.length === 0) {
      const cachedLinks = localStorage.getItem(cacheKey)
      if (!cachedLinks) return
      const linkItems = <LinkItem[]>JSON.parse(cachedLinks)
      setLinks(linkItems)
    } else {
      // Update the cache with new values
      localStorage.setItem(cacheKey, JSON.stringify(links))
    }
  }, [links])

  // Remove error when user starts typing again
  useEffect(() => {
    setError('')
  }, [longURL])

  async function handleURL() {
    try {
      const { alias, url } = await shortenURL(longURL)
      updateLinks({ alias, shortLink: url, longLink: longURL })
      setError('')
      setLongURL('')
    } catch (error) {
      let errorMsg = 'Unknown Error.'
      if (error instanceof Error) {
        errorMsg = error.message
      }
      setError(errorMsg)
    }
  }

  function updateLinks(newLink: LinkItem) {
    setLinks((links) => [newLink, ...links])
  }

  return { longURL, setLongURL, error, handleURL, links }
}

export { useAPIState }
