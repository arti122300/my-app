import React from "react";
import "./globals.css";

type SubmitProps = {
  h1?: string;
  p?: string;
};

const Submit = (props: SubmitProps) => {
  const { h1 = "Masuk", p = "Selamat Datang Kembali" } = props;
  return (
    <div className="submit">
      <div className="title">
        <img src="public/img/logo2.png" alt="logo" />
        <h1>{h1}</h1>
        <p>{p}</p>
      </div>

      <div className="username">
        <label>Username</label>
        <div className="box">
          <input type="text" placeholder="Masukkan username" required />
        </div>
      </div>
      <div className="password">
        <label>Kata Sandi</label>
        <div className="box">
          <input type="password" placeholder="Masukkan kata sandi" required />
        </div>
      </div>
    </div>
  );
};

export default Submit;
