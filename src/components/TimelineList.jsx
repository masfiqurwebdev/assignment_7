"use client";

import { useTimeline } from "@/context/TimelineContext";
import TimelineItem from "./TimelineItem";

export default function TimelineList() {
  const { timeline } = useTimeline();

  if (timeline.length === 0) {
    return (
      <div className="rounded-lg border bg-white p-10 text-center">
        <h2 className="text-xl font-semibold">
          No interactions yet.
        </h2>

        <p className="mt-2 text-gray-500">
          Go to a friends page and click Call, Text or Video.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {timeline.map((item) => (
        <TimelineItem
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}