import React from "react";
import { Link } from "react-router-dom";

const RoomCard = ({ room }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition hover:shadow-xl">
    <img src={room.image} alt={room.title} className="h-56 w-full object-cover" />
    <div className="p-5 space-y-2">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{room.title}</h2>
        <span className="text-sm text-yellow-500 font-semibold">⭐ {room.rating}</span>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300">📍 {room.hotel} — 🛏️ {room.capacity} guests</p>
      <p className="text-lg font-bold text-gray-900 dark:text-white">${room.price} <span className="text-sm font-normal">/ night</span></p>
      <div className="flex gap-2 pt-2">
        <Link
to={`/rooms/${room.id}`}
          className="flex-1 text-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded"
        >
          View Details
        </Link>
        <button className="flex-1 text-sm font-medium text-white bg-green-600 hover:bg-green-700 px-3 py-2 rounded">
          Book Now
        </button>
      </div>
    </div>
  </div>
);

export default RoomCard;
