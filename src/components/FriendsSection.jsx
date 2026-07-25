import friends from "@/data/friends.json";
import FriendCard from "./FriendCard";

export default function FriendsSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-5">

        <h2 className="mb-8 text-3xl font-bold text-gray-800">
          Your Friends
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {friends.map((friend) => (
            <FriendCard
              key={friend.id}
              friend={friend}
            />
          ))}
        </div>

      </div>
    </section>
  );
}