import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>AI Битмейкер</h1>
      <p>Создавай уникальные биты за секунды. Быстро. Просто. Интеллектуально.</p>
      <Link href="/generate">
        <button style={{ marginTop: 20, fontSize: 18, padding: "12px 32px" }}>
          Попробовать генератор
        </button>
      </Link>
    </main>
  );
}
