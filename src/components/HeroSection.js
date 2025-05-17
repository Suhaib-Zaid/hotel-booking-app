import React from "react";

const HeroSection = () => (
  <div className="bg-cover bg-center h-64 flex items-center justify-center text-white text-center px-4"
       style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?hotel,luxury')" }}>
    <div className="bg-black bg-opacity-50 p-6 rounded">
      <h1 className="text-4xl font-bold mb-2">Find Your Perfect Stay</h1>
      <p className="text-lg">Book luxury and comfort at the best prices</p>
    </div>
  </div>
);

export default HeroSection;
