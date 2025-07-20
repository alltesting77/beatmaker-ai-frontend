import { BeatForm } from "../components/BeatForm";

export default function GeneratePage() {
  // можно получить userPlan из props/useAuth
  const userPlan = {
    name: "Free",
    allowedStyles: ["Hip-Hop", "Trap", "Pop"],
    durations: [15],
    qualities: ["mp3"],
  };

  const handleGenerate = (params) => {
    // TODO: отправить запрос на backend
    alert(`Генерируется бит с параметрами: ${JSON.stringify(params)}`);
  };

  return (
    <main>
      <h1>Генератор битов</h1>
      <BeatForm userPlan={userPlan} onGenerate={handleGenerate} />
      <p style={{ marginTop: 16, color: "#888" }}>В Free тарифе: не более 5 генераций в день.</p>
    </main>
  );
}
