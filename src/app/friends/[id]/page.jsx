import friends from "@/data/friends.json";
import FriendDetails from "@/components/FriendDetails";
import { notFound } from "next/navigation";
export default async function FriendPage({ params }) {
  const { id } = await params;
  const friend = friends.find(
    (item) => item.id === Number(id)
  );
  if (!friend) {
    notFound();
  }

  return <FriendDetails friend={friend} />;
}