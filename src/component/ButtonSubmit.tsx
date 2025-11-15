import React from "react";
import "./globals.css";


type ButtonSubmitProps = {
    button1 ?: string;
    button2 ?: string;
};


const ButtonSubmit= (props: ButtonSubmitProps) => {
  return (
    <div className="bottom">
      <div className="box-extra">
        <button type="submit" className="daftar">
            {props.button1 || "Daftar"}
        </button>
      </div>
      <p>Atau</p>
      <div className="box-extra">
        <button type="submit" className="google">
          <img src="public/img/google.png" alt="google" />
            {props.button2 || "Daftar dengan Google"}
        </button>
      </div>
    </div>
  );
}
export default ButtonSubmit;
