import Header from "@/components/Header";
import Card from "@/components/Card";
import OverviewCard from "@/components/OverviewCard";

async function getData() {
  const res = await fetch("http://localhost:3000/api/statistics", {
    cache: "no-store",
  });

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="px-6 md:px-16 py-6 max-w-7xl mx-auto">
      <Header total={data.totalFollowers} />

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {data.stats.map((item: any, i: number) => (
          <Card key={i} item={item} />
        ))}
      </div>

    
      <h2 className="text-xl font-bold mt-10 mb-6 text-[var(--subtext)]">
        Overview - Today
      </h2>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {data.stats.map((item: any, i: number) => (
          <OverviewCard
            key={i}
            title={item.platform}
            value={item.followers}
            change={item.change}
          />
        ))}
      </div>
    </main>
  );
}