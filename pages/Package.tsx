import React from 'react';
import Card from "../components/Card";
import myImage from '../assets/1.avif';
import { useNavigate } from "react-router-dom";
import "../App.css";

const packageData = [
  {
    name: "Daily",
    price: "59THB/d.",
    description: "Members can access all services within the fitness center for a full day.",
    duration: "1 day",
    aosDelay: "0",
  },
  {
    name: "Monthly",
    price: "499THB/m.",
    description: "Members can access all services within the fitness center an unlimited number of times for one month.",
    duration: "1 month",
    aosDelay: "500",
  },
  {
    name: "Yearly",
    price: "1999THB/yr.",
    description: "Members can access all services within the fitness center an unlimited number of times for a full year.",
    duration: "1 year",
    aosDelay: "1000",
  },
];

const Package = () => {
  const navigate = useNavigate();

  const handlePurchase = (pkg: any) => {
    navigate("/payment", { state: { package: pkg } }); // Pass the package as state
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center text-white">
      {/* Header Section */}
      <div
        className="bg-cover bg-center h-96 w-full flex items-center justify-center"
        style={{ backgroundImage: `url(${myImage})` }}
      >
        {/* Add content here if needed */}
      </div>
      <div className="text-center text-6xl font-bold mt-8">Our Fitness Pass</div>

      {/* Packages Section */}
      <div className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {packageData.map((pkg) => (
            <Card
              key={pkg.name}
              name={pkg.name}
              price={pkg.price}
              description={pkg.description}
              duration={pkg.duration}
              aosDelay={pkg.aosDelay}
              onPurchase={() => handlePurchase(pkg)}  // Add click handler
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Package;
