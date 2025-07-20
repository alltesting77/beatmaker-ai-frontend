import { History } from "../components/History";
import { PlanBadge } from "../components/PlanBadge";

type User = {
  email: string;
} | null;

type AccountProps = {
  user: User;
};

export default function Account({ user }: AccountProps) {
  // Моки
  const generations = [
    {
      id: "1",
      createdAt: "2025-07-20",
      params: { style: "Hip-Hop", bpm: 90, duration: 15, quality: "mp3" },
      fileUrl: "#",
      licenseUrl: "#",
    }
  ];
  const userPlan = { name: "Free" };

  return (
    <main>
      <h1>Личный кабинет</h1>
      <div>
        Ваш тариф: <PlanBadge plan={userPlan.name} />
      </div>
      <History generations={generations} />
      <button style={{ marginTop: 24 }}>Перейти на Plus/Pro</button>
    </main>
  );
}
