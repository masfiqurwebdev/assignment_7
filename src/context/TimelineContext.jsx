"use client";

import { createContext, useContext, useEffect, useState } from "react";

const TimelineContext = createContext();

export function TimelineProvider({ children }) {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("timeline");

    if (stored) {
      setTimeline(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("timeline", JSON.stringify(timeline));
  }, [timeline]);

  const addInteraction = (friend, type) => {
    const newItem = {
      id: Date.now(),
      friendId: friend.id,
      friendName: friend.name,
      type,
      title: `${type} with ${friend.name}`,
      date: new Date().toLocaleDateString(),
      createdAt: new Date().toISOString(),
    };

    setTimeline((prev) => [newItem, ...prev]);
  };

  return (
    <TimelineContext.Provider
      value={{
        timeline,
        addInteraction,
      }}
    >
      {children}
    </TimelineContext.Provider>
  );
}

export const useTimeline = () => useContext(TimelineContext);