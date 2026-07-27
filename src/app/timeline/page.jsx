import TimelineList from "@/components/TimelineList";

export default function TimelinePage() {
  return (
    <main className="bg-slate-50 min-h-screen py-10">
      <div className="mx-auto max-w-5xl px-5">
        <h1 className="mb-8 text-4xl font-bold text-slate-800">
          Timeline
        </h1>
        <TimelineList />
      </div>
      
    </main>

  );
}