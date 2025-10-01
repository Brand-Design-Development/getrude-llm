interface CreditBadgeProps {
  credits: number;
  low?: boolean;
}

export default function CreditBadge({ credits, low }: CreditBadgeProps) {
  let color = "#0096d6";
  if (credits < 10) color = "#f59e42";
  if (credits < 3) color = "#e53e3e";
  return (
    <span
      className="rounded-full px-3 py-1 font-semibold text-white"
      style={{ background: color }}
    >
      {credits} credits
    </span>
  );
}
