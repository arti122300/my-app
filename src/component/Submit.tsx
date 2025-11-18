import React from "react";
// Global CSS is imported in `app/layout.tsx` — don't import it inside components.

type SubmitProps = {
  h1?: string;
  p?: string;
};

const Submit = (props: SubmitProps) => {
  const { h1 = "Masuk", p = "Selamat Datang Kembali" } = props;
  return (
    <div className="text-center py-6">
      <img className="inline" src="/img/logo2.png" alt="logo" />
      <h1 className="text-3xl font-bold my-3 md:text-md">{h1}</h1>
      <p className="text-lg font-normal md:text-sm">{p}</p>
    </div>
  );
};

export default Submit;
