export default function Pricing() {
  return (
    <main>
      <h1>Тарифы</h1>
      <div style={{ display: "flex", gap: 36, marginTop: 24 }}>
        <div style={{ border: "1px solid #ccc", borderRadius: 8, padding: 24, minWidth: 220 }}>
          <h2>Free</h2>
          <ul>
            <li>5 генераций/день</li>
            <li>15 сек. бит</li>
            <li>Стандартные стили</li>
            <li>mp3</li>
          </ul>
        </div>
        <div style={{ border: "1px solid #0af", borderRadius: 8, padding: 24, minWidth: 220 }}>
          <h2>Plus</h2>
          <ul>
            <li>25 генераций/день</li>
            <li>15/30 сек. бит</li>
            <li>Больше стилей</li>
            <li>mp3</li>
          </ul>
        </div>
        <div style={{ border: "2px solid #090", borderRadius: 8, padding: 24, minWidth: 220 }}>
          <h2>Pro</h2>
          <ul>
            <li>Безлимит</li>
            <li>15/30/60 сек. бит</li>
            <li>Все стили</li>
            <li>mp3/wav</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
