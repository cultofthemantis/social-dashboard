export default function Card({ item }: any) {
  const isPositive = item.change >= 0;

  const getBorderColor = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "facebook":
        return "bg-[var(--facebook)]";
      case "twitter":
        return "bg-[var(--twitter)]";
      case "youtube":
        return "bg-[var(--youtube)]";
      case "instagram":
        return "bg-gradient-to-r from-[var(--instagram-start)] to-[var(--instagram-end)]";
      default:
        return "bg-gray-400"; 
    }
  };

  return (
    <div className="rounded-xl overflow-hidden">

      <div className={`h-1 ${getBorderColor(item.platform)}`}></div>

      <div className="bg-[var(--card)] p-6 text-center hover:opacity-90 transition">
        <p className="text-sm text-[var(--subtext)]">
          {item.username}
        </p>

        <h2 className="text-5xl font-bold my-2">
          {item.followers.toLocaleString()}
        </h2>

        <p className="uppercase text-xs tracking-widest text-[var(--subtext)]">
          Followers
        </p>

        <p
          className={`mt-2 text-sm ${
            isPositive ? "text-[var(--lime)]" : "text-[var(--red)]"
          }`}
        >
          {isPositive ? "▲" : "▼"} {Math.abs(item.change)} Today
        </p>
      </div>
    </div>
  );
}