import https from 'https'
import fs from 'fs'

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REFRESH_TOKEN = process.env.REFRESH_TOKEN
const FILE_PATH = process.env.FILE_PATH || 'portfolio-blog/public/now-playing.json'

console.log('Starting Spotify script...')
console.log('CLIENT_ID set:', !!CLIENT_ID)
console.log('CLIENT_SECRET set:', !!CLIENT_SECRET)
console.log('REFRESH_TOKEN set:', !!REFRESH_TOKEN)
console.log('FILE_PATH:', FILE_PATH)

if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
  console.error('Missing required env vars')
  process.exit(1)
}

function request(url, method, headers, body) {
  return new Promise((resolve, reject) => {
    const u = new URL(url)
    const opts = {
      hostname: u.hostname,
      path: u.pathname + u.search,
      method,
      headers,
    }
    const req = https.request(opts, (res) => {
      let data = ''
      res.on('data', (chunk) => (data += chunk))
      res.on('end', () => {
        console.log('Response status:', res.statusCode)
        console.log('Response body preview:', data.slice(0, 300))
        if (res.statusCode === 204) resolve(null)
        else resolve(JSON.parse(data))
      })
    })
    req.on('error', (e) => {
      console.error('Request error:', e.message)
      reject(e)
    })
    if (body) req.write(body)
    req.end()
  })
}

async function main() {
  console.log('Requesting access token...')
  const auth = Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64')
  const params = new URLSearchParams({ grant_type: 'refresh_token', refresh_token: REFRESH_TOKEN }).toString()

  const token = await request('https://accounts.spotify.com/api/token', 'POST', {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Basic ' + auth,
  }, params)

  if (!token || !token.access_token) {
    console.error('Token error:', JSON.stringify(token))
    fs.writeFileSync(FILE_PATH, JSON.stringify({ is_playing: false }))
    return
  }

  console.log('Access token received, fetching currently playing...')
  const playing = await request('https://api.spotify.com/v1/me/player/currently-playing', 'GET', {
    Authorization: 'Bearer ' + token.access_token,
  })

  console.log('Playing data received')

  if (playing && playing.is_playing && playing.item) {
    console.log('Writing playing track to file...')
    fs.writeFileSync(FILE_PATH, JSON.stringify({
      is_playing: true,
      item: {
        name: playing.item.name,
        artists: playing.item.artists.map((a) => ({ name: a.name })),
        album: {
          name: playing.item.album.name,
          images: playing.item.album.images.slice(0, 1),
        },
      },
    }))
    return
  }

  console.log('Nothing playing, writing empty state')
  fs.writeFileSync(FILE_PATH, JSON.stringify({ is_playing: false }))
}

main().catch((e) => {
  console.error('Script error:', e.message)
  fs.writeFileSync(FILE_PATH, JSON.stringify({ is_playing: false }))
})
