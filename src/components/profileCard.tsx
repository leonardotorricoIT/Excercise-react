import type { User } from "../types/user";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProfileCard = ({ user }: { user: User }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
        />
        {user.isFavorite ? (
          <AiFillStar className="text-yellow-400 text-2xl" />
        ) : (
          <AiOutlineStar className="text-gray-300 text-2xl" />
        )}
      </div>

      <div className="space-y-1">
        <h3 className="text-xl font-semibold text-gray-900">{user.name}</h3>
        <p className="text-blue-600 font-medium">{user.role}</p>
        <p className="text-gray-500 text-sm">{user.location}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
