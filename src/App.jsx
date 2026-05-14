import { useEffect, useRef, useState } from 'react'
import './App.css'
import { songs } from './data/songs'
import SongList from './components/SongList'
import SongDetailPage from './components/SongDetailPage'

function App() {
  const [selectedSong, setSelectedSong] = useState(null)
  const listScrollY = useRef(0)

  useEffect(() => {
    if (selectedSong === null) {
      window.scrollTo(0, listScrollY.current)
    }
  }, [selectedSong])

  const openSongPage = (song) => {
    listScrollY.current = window.scrollY
    setSelectedSong(song)
  }

  const closeSongPage = () => {
    setSelectedSong(null)
  }

  if (selectedSong) {
    return <SongDetailPage song={selectedSong} onBack={closeSongPage} />
  }

  return (
    <main className="concert-site">
      <section className="hero-poster" aria-labelledby="concert-title">
        <div className="hero-ghost" aria-hidden="true">
          JULULLIM
        </div>

        <h1 id="concert-title" className="hero-main-title">
          JULULLIM
        </h1>
        <p className="hero-subtitle">SPRING CONCERT</p>

        <div className="hero-info" aria-label="Concert date">
          <p>2026.05.15_FRI</p>
        </div>

        <div className="hero-year" aria-hidden="true">
          2026
        </div>
        <img
          className="hero-emblem"
          src="/hero-flower.png"
          alt=""
          aria-hidden="true"
        />
        <div className="hero-korean" aria-hidden="true">
          {'\u6625\u97f3'}
        </div>
      </section>

      <section className="setlist-section" aria-labelledby="setlist-title">
        <div className="setlist-heading">
          <h2 id="setlist-title">SETLIST</h2>
          <p>2026 Spring Concert</p>
        </div>
        <SongList songs={songs} onSongSelect={openSongPage} />
      </section>
    </main>
  )
}

export default App
