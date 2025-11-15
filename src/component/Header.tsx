import "./globals.css";

import React from 'react'

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-left">
          <div className="logo">
            <img className="movie" src="public/img/logo.png" alt="logo" />
            <img className="chill" src="public/img/CHILL.png" alt="Chill" />
          </div>
          <a href="#">Series</a>
          <a href="#">Film</a>
          <a href="#">Daftar Saya</a>
        </div>
      </nav>
      <div className="nav-right">
        <img src="public/img/account.png" alt="account" />
        <img className="arrow-down" src="public/img/arrow-down.png" alt="arrow-down" />
      </div>
    </header>
  )
}

export default Header