"use client";

import { useState } from "react";
import { useTimeline } from "@/context/TimelineContext";
import TimelineItem from "./TimelineItem";

export default function TimelineList() {
  const { timeline } = useTimeline();

  const [filter, setFilter] = useState("All");

  const filteredTimeline =
    filter === "All"
      ? timeline
      : timeline.filter((item) => item.type === filter);

  if (timeline.length === 0) {
    return (
      <div className="rounded-lg border bg-white p-10 text-center">
        <h2 className="text-xl font-semibold">
          No interactions yet
        </h2>

        <p className="mt-2 text-gray-500">
          Go to a friends page and click Call, Text, or Video.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Filter */}
      <div className="mb-6">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-60 rounded-lg border border-gray-300 bg-white px-4 py-2"
        >
          <option value="All">All</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>
      </div>

      {/* Timeline */}
      <div className="space-y-4">
        {filteredTimeline.map((item) => (
          <TimelineItem
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </>
  );
}