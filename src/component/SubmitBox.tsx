import React from "react";
type SubmitBoxProps = {
  label?: string;
  input?: string;
};

const SubmitBox = (props: SubmitBoxProps) => {
  const { label = "Username", input = "Masukkan username" } = props;
  return (
    <>
      <label className="text-sm mt-3">{label}</label>
      <div className="box text-xs">
        <input type="text" placeholder={input} required />
      </div>
    </>
  );
};

export default SubmitBox;
