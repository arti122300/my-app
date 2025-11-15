import "./globals.css";

import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <img src="public/img/footer-logo.png" alt="logo" />
          <p>@2023 Chill All Rights Reserved.</p>
        </div>
        <div className="footer-content2">
          <h4>Genre</h4>
          <ul className="list">
            <div>
              <li><a href="#"></a>Aksi</li>
              <li><a href="#"></a>Anak-anak</li>
              <li><a href="#"></a>Anime</li>
              <li><a href="#"></a>Britania</li>
            </div>
            <div>
              <li><a href="#"></a>Drama</li>
              <li><a href="#"></a>Fantasi Ilmiah & Fantasi</li>
              <li><a href="#"></a>Kejahatan</li>
              <li><a href="#"></a>KDrama</li>
            </div>
            <div>
              <li><a href="#"></a>Komedi</li>
              <li><a href="#"></a>Petualangan</li>
              <li><a href="#"></a>Perang</li>
              <li><a href="#"></a>Romantis</li>
            </div>
            <div>
              <li><a href="#"></a>Sains & Alam</li>
              <li><a href="#"></a>Thriller</li>
            </div>
          </ul>
          <a href=""><img src="public/img/v.png" alt="v" /></a>
        </div>
        <div className="footer-content2">
          <h4>Bantuan</h4>
          <ul className="list2">
            <li><a href="#"></a>FAQ</li>
            <li><a href="#"></a>Kontak Kami</li>
            <li><a href="#"></a>Privasi</li>
            <li><a href="#"></a>Syarat & Ketentuan</li>
          </ul>
          <a href=""><img src="public/img/v.png" alt="v" /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer