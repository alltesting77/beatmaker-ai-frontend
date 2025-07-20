export function History({ generations }) {
  if (!generations.length) return <p>История пуста.</p>;
  return (
    <ul>
      {generations.map(gen => (
        <li key={gen.id}>
          {gen.createdAt}: {gen.params.style}, {gen.params.bpm} BPM, {gen.params.duration} сек, {gen.params.quality} —
          <a href={gen.fileUrl} download style={{ marginLeft: 6 }}>Скачать</a>
          {gen.licenseUrl && (
            <a href={gen.licenseUrl} download style={{ marginLeft: 6 }}>Лицензия</a>
          )}
        </li>
      ))}
    </ul>
  );
}