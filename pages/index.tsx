import { BeatForm } from '../components/BeatForm';
import { PlanBadge } from '../components/PlanBadge';

type GenerateParams = {
  bpm: number;
  style: string;
  duration: number;
  quality: string;
};

export default function Home() {
  // Заглушка: текущий план и user
  const userPlan = {
    name: "Free",
    allowedStyles: ["Hip-Hop", "Trap", "Pop"],
    durations: [15],
    qualities: ["mp3"],
  };

  const handleGenerate = (params: GenerateParams) => {
    // TODO: обработка генерации (API)
    alert(`Генерация: ${JSON.stringify(params)}`);
  };

  return (
    <main>
      <h1>AI Битмейкер</h1>
      <PlanBadge plan={userPlan.name} />
      <BeatForm userPlan={userPlan} onGenerate={handleGenerate} />
    </main>
  );
}
