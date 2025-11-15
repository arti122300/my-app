import "./globals.css";

import React from 'react'

function main() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <div className="content">
            <h1>Duty After School</h1>
            <p>
              Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
              Departemen Pertahanan mulai merekrut lebih banyak tentara,
              termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang
              garis depan dalam perang.
            </p>
          </div>
          <div className="buttons">
            <div className="left-button">
              <button className="button primary">Main</button>
              <button className="button secondary">
                <img src="public/img/info.png" alt="info" />Selengkapnya
              </button>
              <span className="button disabled">18+</span>
            </div>
            <button className="button disabled sound">
              <img src="public/img/sound.png" alt="sound-off" />
            </button>
          </div>
        </div>
      </section>
      <section className="hero2">
        <h3>Melanjutkan Tonton Film</h3>
        <div className="film-row">
          <div className="film-card">
            <img src="public/img/film1.png" alt="Don't Look Up" />
            <div className="info">
              <p>Don't Look Up</p>
              <span><img src="public/img/star.png" alt="rating" />4.5/5</span>
            </div>
          </div>
          <div className="film-card">
            <img src="public/img/film2.png" alt="All of Us Are Dead" />
            <div className="info">
              <p>All of Us Are Dead</p>
              <span><img src="public/img/star.png" alt="rating" />4.2/5</span>
            </div>
          </div>
          <div className="film-card">
            <img src="public/img/film3.png" alt="Blue Lock" />
            <div className="info">
              <p>Blue Lock</p>
              <span><img src="public/img/star.png" alt="rating" />4.6/5</span>
            </div>
          </div>
          <div className="film-card">
            <img src="public/img/film4.png" alt="A Man Called Otto" />
            <div className="info">
              <p>A Man Called Otto</p>
              <span><img src="public/img/star.png" alt="rating" />4.4/5</span>
            </div>
          </div>
        </div>
      </section>

      <section className="hero3">
        <h3>Top Rating Film dan Series Hari ini</h3>
        <div className="movie-today">
          <img src="public/img/mv1.png" alt="movie-today" />
          <img src="public/img/mv2.png" alt="movie-today" />
          <img src="public/img/mv3.png" alt="movie-today" />
          <img src="public/img/mv4.png" alt="movie-today" />
          <img src="public/img/mv5.png" alt="movie-today" />
        </div>
      </section>

      <section className="hero4">
        <h3>Film Trending</h3>
        <div className="Film-trending">
          <img src="public/img/FT1.png" alt="" />
          <img src="public/img/FT2.png" alt="" />
          <img src="public/img/FT3.png" alt="" />
          <img src="public/img/FT4.png" alt="" />
          <img src="public/img/FT5.png" alt="" />
        </div>
      </section>

      <section className="hero5">
        <h3>Rilis Baru</h3>
        <div className="rilis-baru">
          <img src="public/img/FT5.png" alt="" />
          <img src="public/img/RB2.png" alt="" />
          <img src="public/img/mv5.png" alt="" />
          <img src="public/img/mv4.png" alt="" />
          <img src="public/img/RB5.png" alt="" />
        </div>
      </section>
    </main>

  )
}

export default main