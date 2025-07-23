import React from "react";
import"./Fleet.css"
import { useNavigate } from "react-router-dom";

const cars = [
  {
    name: "E-Tron GT",
    image: "https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "Sedan",
    price: "13,821",
    currency: "INR",
    seats: 5,
    doors: 3,
    transmission: "Manual",
    fuel: "Diesel"
  },
  {
    name: "S5 Sportback",
    image: "https://images.pexels.com/photos/810357/pexels-photo-810357.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "Sports",
    price: "12,525",
    currency: "INR",
    seats: 5,
    doors: 3,
    transmission: "Manual",
    fuel: "Diesel"
  },
  {
    name: "Lamborgini",
    image: "https://images.pexels.com/photos/5213525/pexels-photo-5213525.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "Sports",
    price: "14,253",
    currency: "INR",
    seats: 5,
    doors: 4,
    transmission: "Manual",
    fuel: "Diesel"
  },
  {
    name: "S7 Mercedes",
    image: "https://images.pexels.com/photos/952338/pexels-photo-952338.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "Sports",
    price: "11,661",
    currency: "INR",
    seats: 5,
    doors: 6,
    transmission: "Manual",
    fuel: "Diesel"
  },
  {
    name: "S6 luxury back",
    image: "https://images.pexels.com/photos/977003/pexels-photo-977003.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "luxury",
    price: "12,093",
    currency: "INR",
    seats: 4,
    doors: 5,
    transmission: "Manual",
    fuel: "Diesel"
  },
  {
    name: "Lancer Cedia",
    image: "	https://images.pexels.com/photos/1682666/pexels-photo-1682666.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "Luxury",
    price: "9,501", 
    currency: "INR",
    seats: 4,
    doors: 2,
    transmission: "Auto",
    fuel: "Diesel"
  }
];

const FleetPage = () => {
  const navigate = useNavigate();
  return (
<div className="fleet-container">
  <div className="fleet-inner">
    <div className="fleet-header">
      <div className="fleet-subtitle">CHOOSE YOUR CAR</div>
      <h1 className="fleet-title">Our Vehicle Fleet</h1>
    </div>
    <div className="fleet-grid">
      {cars.map((car, idx) => (
        <div key={idx} className="fleet-card">
          <img
            src={car.image}
            alt={car.name}
            onClick={() => navigate(`/fleet/${idx}`)}
          />
          <div className="fleet-card-header">
            <div className="fleet-car-name">{car.name}</div>
            <span className="fleet-car-type">{car.type}</span>
          </div>
          <div className="fleet-details">
            <span>👤 {car.seats}</span>
            <span>🚪 {car.doors}</span>
            <span>🚪 {car.transmission}</span>
            <span>⛽ {car.fuel}</span>
          </div>
          <div className="fleet-price">
            ₹{car.price} {car.currency}{" "}
            <span>/Per Month</span>
          </div>
          <button className="fleet-button">
            <span>→</span>
          </button>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default FleetPage; 