import React from 'react'

function register() {
  return (
    <div>
         <label>Konfirmasi kata Sandi</label>
          <div className="box">
            <input type="password" placeholder="Masukkan kata sandi" required />
          </div>
    </div>
  )
}

export default register