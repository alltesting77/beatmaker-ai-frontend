import React, { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <main>
      <h1>Регистрация</h1>
      <form style={{ display: "flex", flexDirection: "column", maxWidth: 320, gap: 12 }}>
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input placeholder="Пароль" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button>Зарегистрироваться</button>
      </form>
    </main>
  );
}