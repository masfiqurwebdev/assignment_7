import Link from "next/link";

const statusColor = {
  "on-track": "bg-green-100 text-green-700",
  "almost due": "bg-yellow-100 text-yellow-700",
  overdue: "bg-red-100 text-red-700",
};

export default function FriendCard({ friend }) {
  return (
    <Link href={`/friends/${friend.id}`}>
      <div className="group cursor-pointer rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

        <img
          src={friend.picture}
          alt={friend.name}
          className="mx-auto h-20 w-20 rounded-full object-cover"
        />

        <h2 className="mt-4 text-lg font-semibold text-gray-800">
          {friend.name}
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          {friend.days_since_contact} day
          {friend.days_since_contact > 1 && "s"} ago
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {friend.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Status */}
        <div className="mt-4">
          <span
            className={`rounded-full px-4 py-1 text-xs font-semibold capitalize ${statusColor[friend.status]}`}
          >
            {friend.status}
          </span>
        </div>

      </div>
    </Link>
  );
}