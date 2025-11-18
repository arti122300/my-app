import React from "react";
import Submit from "@/src/component/Submit";
import ButtonSubmit from "@/src/component/ButtonSubmit";
import styles from "@/app/page.module.css";
import SubmitBox from "@/src/component/SubmitBox";

function register() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <Submit h1="Daftar" p="Selamat Datang" />
        <SubmitBox />
        <SubmitBox label="Kata sandi" input="Masukkan kata sandi" />
        <SubmitBox label="Konfirmasi kata sandi" input="Masukkan kata sandi" />
        <div className="text-sm my-3 md:text-xs">
          Sudah punya akun? <a className={styles.klik}>Masuk</a>
        </div>
        <ButtonSubmit />
      </div>
    </div>
  );
}

export default register;
