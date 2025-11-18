function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-left">
          <div className="flex ">
            <img className="movie" src="/img/logo.png" alt="logo" />
            <img className="chill" src="/img/CHILL.png" alt="Chill" />
          </div>
          <a href="#">Series</a>
          <a href="#">Film</a>
          <a href="#">Daftar Saya</a>
        </div>
      </nav>
      <div className="nav-right">
        <img src="/img/account.png" alt="account" />
        <img
          className="arrow-down"
          src="/img/arrow-down.png"
          alt="arrow-down"
        />
      </div>
    </header>
  );
}

export default Header;
