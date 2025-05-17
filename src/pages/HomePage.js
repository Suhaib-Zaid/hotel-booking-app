import React from "react";
import Navbar from "../components/Navbar";
import RoomCard from "../components/RoomCard";

const HomePage = () => {
  const rooms = [
    {
      id: 1,
      title: "Deluxe Room",
      price: 100,
      capacity: 2,
      hotel: "Sea Breeze Resort",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Suite Room",
      price: 150,
      capacity: 3,
      hotel: "Grand Lux Hotel",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Standard Room",
      price: 80,
      capacity: 2,
      hotel: "Budget Inn",
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Luxury Room",
      price: 200,
      capacity: 4,
      hotel: "Elite Stay",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="dark:bg-gray-900 bg-gray-100 min-h-screen">
      <Navbar />
      <div className="p-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Available Rooms</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
