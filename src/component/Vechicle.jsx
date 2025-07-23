import React from "react";
import "./Vechicle.css";
// import { FaArrowUpRight } from "react-icons/fa";

// Image imports
import sportsCar from "../assets/car1.jpg";
import convertible from "../assets/car12.jpg";
import electric from "../assets/car11.jpg";
import luxury from "../assets/car9.jpg";

const carTypes = [
  { title: "Sports", image: sportsCar },
  { title: "Convertible", image: convertible },
  { title: "Electric", image: electric },
  { title: "Luxury", image: luxury },
];

function VehicleTypes() {
  return (
    <div className="vehicle-types-container">
      <p className="vehicle-subheading">VEHICLES OPTIONS</p>
      <h2 className="vehicle-heading">Browse by car types</h2>

      <div className="vehicle-grid" >
        {carTypes.map((car, index) => (
          <div
            className="vehicle-card"
            key={index}
            style={{ backgroundImage: `url(${car.image})` }}
          >
            <div className="vehicle-title">{car.title}</div>
            <div className="vehicle-icon">
              {/* <FaArrowUpRight /> */}
              ↗
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VehicleTypes;


