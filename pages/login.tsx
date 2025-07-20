import React, { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <main>
      <h1>Вход</h1>
      <form style={{ display: "flex", flexDirection: "column", maxWidth: 320, gap: 12 }}>
        <input
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          placeholder="Пароль"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Войти</button>
      </form>
      <p style={{ marginTop: 16 }}>
        Нет аккаунта? <Link href="/signup">Зарегистрируйтесь</Link>
      </p>
    </main>
  );
}
