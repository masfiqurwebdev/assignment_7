import { UserPlus, Users, HeartHandshake, Bell, Activity } from "lucide-react";

const stats = [
  {
    id: 1,
    title: "10",
    subtitle: "Total Friends",
    icon: Users,
  },
  {
    id: 2,
    title: "3",
    subtitle: "On Track",
    icon: HeartHandshake,
  },
  {
    id: 3,
    title: "6",
    subtitle: "Need Attention",
    icon: Bell,
  },
  {
    id: 4,
    title: "12",
    subtitle: "Interactions This Month",
    icon: Activity,
  },
];

export default function Banner() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-5">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold text-slate-800 md:text-5xl">
            Friends to keep close in your life
          </h1>

          <p className="mt-4 text-sm leading-7 text-slate-500 md:text-base">
            Your personal shelf of meaningful connections.
            Browse, tend, and nurture the relationships that matter most.
          </p>

          <button className="mt-8 inline-flex items-center gap-2 rounded-md bg-emerald-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-800">
            <UserPlus size={18} />
            Add a Friend
          </button>
        </div>

        {/* Summary Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Icon size={22} />
                </div>

                <h2 className="text-3xl font-bold text-slate-800">
                  {item.title}
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}