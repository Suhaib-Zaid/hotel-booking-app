import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { db, auth } from "../firebase/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const roomData = {
  "deluxe": {
    title: "Deluxe Room",
    hotel: "Sea Breeze Resort",
    price: 100,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
  },
  "suite": {
    title: "Suite Room",
    hotel: "Grand Lux Hotel",
    price: 150,
    image: "https://images.unsplash.com/photo-1552903023-9ec09fecd5bb?auto=format&fit=crop&w=1600&q=80"
  },
  "standard": {
    title: "Standard Room",
    hotel: "Budget Inn",
    price: 80,
    image: "https://images.unsplash.com/photo-1505692794403-55b49f79b256?auto=format&fit=crop&w=1600&q=80"
  }
};

const RoomDetails = () => {
  const { id } = useParams();
  const room = roomData[id] || {};
  const [nights, setNights] = useState(1);
  const [checkIn, setCheckIn] = useState("");

  const handleBooking = async () => {
    try {
      const user = auth.currentUser;
      if (!user) return alert("Please login to book a room.");

      await addDoc(collection(db, "bookings"), {
        userId: user.uid,
        roomId: id,
        roomTitle: room.title,
        hotel: room.hotel,
        nights,
        checkInDate: checkIn,
        createdAt: serverTimestamp()
      });

      alert("✅ Room booked successfully!");
    } catch (error) {
      console.error(error);
      alert("❌ Booking failed. Try again.");
    }
  };

  return (
<div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded shadow-md overflow-hidden">
        <img src={room.image} alt={room.title} className="w-full h-80 object-cover" />
        <div className="p-6 space-y-4">
          <h1 className="text-3xl font-bold">{room.title}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-300">📍 {room.hotel}</p>
          <p className="text-xl font-semibold text-blue-600">${room.price} / night</p>

          <div className="space-y-2">
            <label className="block">Check-in Date:</label>
            <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)}
              className="w-full px-4 py-2 rounded border dark:bg-gray-700 dark:text-white" />
            <label className="block mt-2">Number of Nights:</label>
            <input type="number" value={nights} min="1" onChange={(e) => setNights(e.target.value)}
              className="w-full px-4 py-2 rounded border dark:bg-gray-700 dark:text-white" />
          </div>

          <button onClick={handleBooking} className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded text-lg font-medium">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
