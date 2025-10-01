interface CreditBadgeProps {
  credits: number;
  low?: boolean;
}

export default function CreditBadge({ credits, low }: CreditBadgeProps) {
  let colorClasses = "bg-blue-100 text-blue-700";
  if (credits < 10) colorClasses = "bg-orange-100 text-orange-700";
  if (credits < 3) colorClasses = "bg-red-100 text-red-700";

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${colorClasses}`}
    >
      {credits} credits
    </span>
  );
}
