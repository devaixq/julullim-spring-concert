import { useEffect, useId } from 'react'

function SongModal({ song, onClose }) {
  const titleId = useId()

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    const previousOverflowY = document.body.style.overflowY
    document.body.style.overflowY = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflowY = previousOverflowY
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={handleBackdropClick}
    >
      <article
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <header className="modal-header">
          <p className="modal-number">{song.number}</p>
          <h2 id={titleId} className="modal-title">
            {song.title}
          </h2>
          <p className="modal-artist">Original by {song.originalArtist}</p>
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            X
          </button>
        </header>

        <div className="modal-body">
          {song.performers.length > 0 && (
            <section className="modal-section" aria-labelledby="performers">
              <h3 id="performers">Performers</h3>
              <div className="performer-list">
                {song.performers.map((performer) => (
                  <div className="performer-row" key={performer.role}>
                    <span className="performer-role">{performer.role}</span>
                    <span className="performer-names">
                      {performer.names.join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="modal-section" aria-labelledby="lyrics">
            <h3 id="lyrics">Lyrics</h3>
            <pre className="modal-lyrics">{song.lyrics}</pre>
          </section>
        </div>
      </article>
    </div>
  )
}

export default SongModal
