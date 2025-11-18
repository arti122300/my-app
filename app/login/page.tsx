import React from "react";
import Submit from "@/src/component/Submit";
import ButtonSubmit from "@/src/component/ButtonSubmit";
import SubmitBox from "@/src/component/SubmitBox";
import styles from "@/app/page.module.css";

function login() {
  return (
    <div className={styles.bodylog}>
      <div className={styles.container}>
        <Submit />
        <SubmitBox />
        <SubmitBox label="Kata sandi" input="Masukkan kata sandi" />
        <div className="text-sm flex justify-between my-3 md:text-xs">
          <span>
            Belum punya akun? <a className={styles.klik}>Daftar</a>
          </span>
          <a>Lupa kata sandi?</a>
        </div>
        <ButtonSubmit button1="Masuk" button2="Masuk dengan Google" />
      </div>
    </div>
  );
}

export default login;
