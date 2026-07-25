import {
  Phone,
  MessageSquare,
  Video,
} from "lucide-react";

export default function TimelineItem({ item }) {
  const iconMap = {
    Call: Phone,
    Text: MessageSquare,
    Video: Video,
  };

  const Icon = iconMap[item.type];

  return (
    <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition">

      {/* Icon */}
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
        {Icon && <Icon size={24} className="text-emerald-600" />}
      </div>

      {/* Content */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold text-gray-800">
          {item.title}
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          {item.date}
        </p>
      </div>

    </div>
  );
}