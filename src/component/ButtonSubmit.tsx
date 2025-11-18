type ButtonSubmitProps = {
  button1?: string;
  button2?: string;
};

const ButtonSubmit = (props: ButtonSubmitProps) => {
  return (
    <div className="text-center text-sm md:text-xs">
      <div className="box-submit">
        <button type="submit">{props.button1 || "Daftar"}</button>
      </div>
      <p className="my-3">Atau</p>
      <div className="box">
        <button type="submit">
          <img className="inline" src="/img/google.png" alt="google" />
          {props.button2 || "Daftar dengan Google"}
        </button>
      </div>
    </div>
  );
};
export default ButtonSubmit;
