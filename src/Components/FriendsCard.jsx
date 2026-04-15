import Image from "next/image";
import users from "../../data/friends";

const getStatusStyle = (status) => {
  switch (status) {
    case "Overdue":
      return "bg-red-100 text-red-600";
    case "Almost Due":
      return "bg-yellow-100 text-yellow-600";
    case "On-Track":
      return "bg-green-100 text-green-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const FriendsList = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-left">Friends List</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-12 gap-14">
        {users.map((user, index) => (
            <div key={index} className="flex flex-col px-8 py-8 rounded-md shadow-xl">

                <Image src={user.image} alt={user.name} width={50} height={50} className="rounded-full container mx-auto w-18 mb-3"/>

                <h1 className="mb-2 font-bold text-[20px]">{user.name}</h1>
                <p className="mb-2 text-[12px] text-[#64748B] ">{user.dayAge}d ago</p>
                <p className="mb-3 rounded-full bg-[#CBFADB] w-[40%] container mx-auto">{user.category}</p>

                <span className={`w-[40%] container mx-auto text-xs px-3 py-1 rounded-full font-medium ${getStatusStyle(user.status)}`}
            >
              {user.status}
            </span>
            </div>
    ))}
    </div>

    </div>
  );
};

export default FriendsList;