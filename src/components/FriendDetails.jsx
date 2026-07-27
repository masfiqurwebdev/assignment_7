"use client";
import toast from "react-hot-toast";
import { useTimeline } from "@/context/TimelineContext";

import {
  CalendarClock,
  Archive,
  Trash2,
  Pencil,
  Phone,
  MessageSquare,
  Video,
} from "lucide-react";
import Image from "next/image";

const statusStyle = {
  "on-track": "bg-green-100 text-green-700",
  "almost due": "bg-yellow-100 text-yellow-700",
  overdue: "bg-red-100 text-red-700",
};

export default function FriendDetails({ friend }) {
  const addTimeline = (type) => {
    addInteraction(friend, type);

    toast.success(`You ${type}ed ${friend.name}!`);
  };
  const { addInteraction } = useTimeline();

  return (
    <section className="bg-slate-50 py-10">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-12">
        {/* LEFT */}

        <div className="space-y-4 lg:col-span-4">
          <div className="rounded-xl border bg-white p-6 text-center shadow-sm">
            <Image width={500} height={500}
              src={friend.picture}
              alt={friend.name}
              className="mx-auto h-24 w-24 rounded-full object-cover"
            />

            <h2 className="mt-4 text-2xl font-bold">{friend.name}</h2>

            <span
              className={`mt-3 inline-block rounded-full px-4 py-1 text-sm font-semibold capitalize ${statusStyle[friend.status]}`}
            >
              {friend.status}
            </span>

            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {friend.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-emerald-100 px-3 py-1 text-xs text-emerald-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-5 italic text-gray-500">{friend.bio}</p>

            <p className="mt-4 text-sm text-gray-600">{friend.email}</p>
          </div>

          <button className="flex w-full items-center justify-center gap-2 rounded-lg border bg-white py-3 hover:bg-gray-50">
            <CalendarClock size={18} />
            Snooze 2 Weeks
          </button>

          <button className="flex w-full items-center justify-center gap-2 rounded-lg border bg-white py-3 hover:bg-gray-50">
            <Archive size={18} />
            Archive
          </button>

          <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-red-200 bg-white py-3 text-red-600 hover:bg-red-50">
            <Trash2 size={18} />
            Delete
          </button>
        </div>


        
        <div className="space-y-6 lg:col-span-8">
          {/* Stats */}

         
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border bg-white p-6 text-center shadow-sm">
              <h3 className="text-4xl font-bold text-emerald-700">
            
                {friend.days_since_contact}
              </h3>

              <p className="mt-2 text-gray-500">Days Since Contact</p>
            </div>

            <div className="rounded-xl border bg-white p-6 text-center shadow-sm">
              <h3 className="text-4xl font-bold text-emerald-700">
                {friend.goal}
              </h3>

              <p className="mt-2 text-gray-500">Goal (Days)</p>
            </div>

            <div className="rounded-xl border bg-white p-6 text-center shadow-sm">
              <h3 className="text-2xl font-bold text-emerald-700">
                {friend.next_due_date}
              </h3>

              <p className="mt-2 text-gray-500">Next Due</p>
            </div>
          </div>


          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Relationship Goal</h2>

              <button className="flex items-center gap-2 rounded border px-3 py-2 text-sm hover:bg-gray-100">
                <Pencil size={16} />
                Edit
              </button>
            </div>

            <p className="text-gray-600">
              Connect every <strong>{friend.goal} days</strong>
            </p>
          </div>

          {/* Quick Check */}
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-lg font-semibold">Quick Check-In</h2>

            <div className="grid gap-4 md:grid-cols-3">
              <button className="btn hover:text-blue-800 hover:bg-white btn-primary " onClick={() => addTimeline("Call")}>
                <Phone size={22} />
                Call
              </button>

              <button className="btn hover:text-blue-800 hover:bg-white btn-primary " onClick={() => addTimeline("Text")}>
                <MessageSquare size={22} />
                Text
              </button>

              <button className="btn hover:text-blue-800 hover:bg-white btn-primary " onClick={() => addTimeline("Video")}>
                <Video size={22} />
                Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
