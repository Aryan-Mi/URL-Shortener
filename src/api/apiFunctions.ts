import isUrl from 'validator/lib/isURL'

const TINY_URL_API = 'https://api.tinyurl.com/create'

export async function shortenURL(longURL: string) {
  const newURL = formatURL(longURL)
  if (!isURLValid(newURL)) {
    throw new Error('Invalid URL Link.')
  }

  const response = await fetch(TINY_URL_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TINY_URL_API_KEY}`,
    },
    body: JSON.stringify({ url: longURL }),
  })
  const { data, code, errors } = await response.json()

  if (!response.ok || code !== 0) {
    throw new Error(errors[0])
  }
  const shortURL = data.tiny_url
  return shortURL
}

function formatURL(url: string) {
  const protocols = ['http', 'https', 'ftp']
  // Check if input has a protocol, otherwise append https
  const newURL = protocols.some((protocol) => url.startsWith(protocol + '://'))
    ? url
    : `https://${url}`
  return newURL
}

function isURLValid(url: string) {
  return isUrl(url)
}
