import AnalyticsChart from "@/components/AnalyticsChart";
export default function StatsPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-6xl px-5">
        <h1 className="mb-8 text-4xl font-bold text-slate-800">
          Friendship Analytics
        </h1>
        <AnalyticsChart />
      </div>
    </main>
  );
}