export default function OverviewCard({ title, value, change }: any) {
  const isPositive = change >= 0;

  return (
    <div className="bg-[var(--card)] p-5 rounded-lg flex justify-between items-center hover:opacity-90 transition">
      <div>
        <p className="text-sm text-[var(--subtext)]">{title}</p>
        <h3 className="text-2xl font-bold mt-1">{value}</h3>
      </div>

      <p
        className={`text-sm font-semibold ${
          isPositive ? "text-[var(--lime)]" : "text-[var(--red)]"
        }`}
      >
        {isPositive ? "▲" : "▼"} {Math.abs(change)}%
      </p>
    </div>
  );
}