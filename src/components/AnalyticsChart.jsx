"use client";

import { useTimeline } from "@/context/TimelineContext";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function AnalyticsChart() {
  const { timeline } = useTimeline();

  // Count interactions
  const callCount = timeline.filter(
    (item) => item.type === "Call"
  ).length;

  const textCount = timeline.filter(
    (item) => item.type === "Text"
  ).length;

  const videoCount = timeline.filter(
    (item) => item.type === "Video"
  ).length;

  const data = [
    {
      name: "Call",
      value: callCount,
    },
    {
      name: "Text",
      value: textCount,
    },
    {
      name: "Video",
      value: videoCount,
    },
  ];

  const COLORS = [
    "#265847", // Call
    "#7C3AED", // Text
    "#3BB273", // Video
  ];

  return (
    <div className="rounded-xl border bg-white p-8 shadow-sm">

      <h2 className="mb-8 text-lg font-semibold">
        By Interaction Type
      </h2>

      <div className="h-[350px]">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={65}
              outerRadius={95}
              dataKey="value"
              paddingAngle={5}
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}