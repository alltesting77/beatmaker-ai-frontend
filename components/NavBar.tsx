import Link from "next/link";

type User = {
  email: string;
} | null;

type NavBarProps = {
  user: User;
};

export function NavBar({ user }: NavBarProps) {
  return (
    <nav style={{
      display: "flex",
      gap: 24,
      padding: "16px 32px",
      background: "#222",
      color: "#fff",
      alignItems: "center"
    }}>
      <Link href="/" style={{ color: "#fff", fontWeight: 700, fontSize: 20 }}>🎵 Beatmaker AI</Link>
      <Link href="/generate" style={{ color: "#fff" }}>Генератор</Link>
      <Link href="/pricing" style={{ color: "#fff" }}>Тарифы</Link>
      {user && <Link href="/account" style={{ color: "#fff" }}>Кабинет</Link>}
      <div style={{ marginLeft: "auto" }}>
        {!user ? (
          <>
            <Link href="/login" style={{ color: "#fff", marginRight: 16 }}>Вход</Link>
            <Link href="/signup" style={{ color: "#fff" }}>Регистрация</Link>
          </>
        ) : (
          <span>👤 {user.email}</span>
        )}
      </div>
    </nav>
  );
}
