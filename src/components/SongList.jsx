function SongList({ songs, onSongSelect }) {
  const fallbackPartStart = Math.ceil(songs.length / 2)
  const songsWithPart = songs.map((song, index) => ({
    ...song,
    part: song.part ?? (index < fallbackPartStart ? 1 : 2),
  }))

  const sections = [
    { part: 1, title: '1부', songs: songsWithPart.filter((song) => song.part === 1) },
    { part: 2, title: '2부', songs: songsWithPart.filter((song) => song.part === 2) },
  ].filter((section) => section.songs.length > 0)

  return (
    <div className="song-sections" aria-label="\uC138\uD2B8\uB9AC\uC2A4\uD2B8">
      {sections.map((section) => (
        <section className="song-part" key={section.part}>
          <h3 className="song-part-title">
            <span className="song-part-label">{section.title}</span>
          </h3>
          <ul className="song-list" aria-label={`${section.title} \uACE1 \uBAA9\uB85D`}>
            {section.songs.map((song) => (
              <li key={song.id}>
                <button
                  type="button"
                  className="song-row"
                  onClick={() => onSongSelect(song)}
                  aria-label={`${song.number} ${song.title} \uACE1 \uC815\uBCF4 \ubcf4\uae30`}
                >
                  <span className="song-index">{song.number}</span>
                  <span className="song-main">
                    <span className="song-name">{song.title}</span>
                    <span className="song-meta">
                      {song.originalArtist}
                    </span>
                  </span>
                  <span className="song-arrow" aria-hidden="true">
                    ›
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}

export default SongList



