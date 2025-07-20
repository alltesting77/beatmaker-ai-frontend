export function PlanBadge({ plan }: { plan: string }) {
  const color = plan === "Pro" ? "#0a0" : plan === "Plus" ? "#06c" : "#aaa";
  return (
    <span style={{
      padding: "2px 8px",
      borderRadius: 6,
      background: color,
      color: "#fff",
      fontWeight: 600,
      fontSize: 14,
      marginLeft: 8
    }}>
      {plan}
    </span>
  );
}
