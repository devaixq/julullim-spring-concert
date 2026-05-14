import { useEffect } from 'react'

function SongDetailPage({ song, onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0)

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onBack()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onBack])

  return (
    <article className="song-detail-page" aria-labelledby="detail-title">
      <header className="detail-header">
        <button type="button" className="detail-back" onClick={onBack} aria-label={"\uB4A4\uB85C\uAC00\uAE30"}>
          <span className="detail-back-icon" aria-hidden="true">
            &#x2190;
          </span>
        </button>

        <div className="detail-header-meta">
          <h1 id="detail-title" className="detail-title">
            {song.title}
          </h1>
        </div>

        <p className="detail-header-label">Setlist</p>
      </header>

      <main className="detail-content">
        <p className="detail-artist">{song.originalArtist}</p>

        {song.performers && song.performers.length > 0 && (
          <section
            className="detail-section detail-performers-section"
            aria-labelledby="detail-performers"
          >
            <h2
              id="detail-performers"
              className="detail-section-title detail-hidden-title"
            >
              악기별 공연자
            </h2>
            <div className="detail-performer-list">
              {song.performers.map((performer, index) => (
                <article
                  className="detail-performer-card"
                  key={`${performer.role}-${index}`}
                >
                  <p className="detail-performer-names">
                    {performer.names.map((name) => (
                      <span className="detail-performer-name-line" key={name}>
                        {name}
                      </span>
                    ))}
                  </p>
                  <p className="detail-performer-role">{performer.role}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        <section className="detail-section detail-lyrics-section" aria-labelledby="detail-lyrics">
          <h2 id="detail-lyrics" className="detail-section-title detail-lyrics-title detail-hidden-title">가사</h2>
          <pre className="detail-lyrics">{song.lyrics}</pre>
        </section>
      </main>
    </article>
  )
}

export default SongDetailPage
