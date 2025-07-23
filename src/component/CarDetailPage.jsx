import React, { useState } from "react";
import { useParams } from "react-router-dom";

const cars = [
  {
    name: "E-Tron GT",
    image: "https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "Sedan",
    price: 160,
    currency: "USD",
    seats: 5,
    doors: 3,
    transmission: "Manual",
    fuel: "Diesel",
    bags: 3,
    color: "Navy Blue",
    vin: "9389456454",
    cityMpg: 10,
    highwayMpg: 13,
    engine: "8.4L Turbo",
    condition: "New"
  },
  {
    name: "S5 Sportback",
    image: "https://images.pexels.com/photos/810357/pexels-photo-810357.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "Sports",
    price: 145,
    currency: "USD",
    seats: 5,
    doors: 3,
    transmission: "Manual",
    fuel: "Diesel",
    bags: 3,
    color: "Black",
    vin: "1234567890",
    cityMpg: 11,
    highwayMpg: 14,
    engine: "7.2L Turbo",
    condition: "New"
  },
  {
    name: "Lamborgini",
    image: "https://images.pexels.com/photos/5213525/pexels-photo-5213525.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "Sports",
    price: 165,
    currency: "USD",
    seats: 5,
    doors: 4,
    transmission: "Manual",
    fuel: "Diesel",
    bags: 3,
    color: "Black",
    vin: "1234567890",
    cityMpg: 11,
    highwayMpg: 14,
    engine: "7.2L Turbo",
    condition: "New"
  },
  {
    name: "Lamborgini",
    image: "https://images.pexels.com/photos/952338/pexels-photo-952338.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "Sports",
    price: 165,
    currency: "USD",
    seats: 5,
    doors: 4,
    transmission: "Manual",
    fuel: "Diesel",
    bags: 3,
    color: "Black",
    vin: "1234567890",
    cityMpg: 11,
    highwayMpg: 14,
    engine: "7.2L Turbo",
    condition: "New"
  },
  {
    name: "S7 Mercedes",
    image: "https://images.pexels.com/photos/977003/pexels-photo-977003.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "Sports",
    price: 135,
    currency: "USD",
    seats: 5,
    doors: 6,
    transmission: "Manual",
    fuel: "Diesel",
    bags: 3,
    color: "Black",
    vin: "1234567890",
    cityMpg: 11,
    highwayMpg: 14,
    engine: "7.2L Turbo",
    condition: "New"
  },
  {
    name: "Luxury back",
    image: "https://images.pexels.com/photos/1682666/pexels-photo-1682666.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "luxury",
    price: 140,
    currency: "USD",
    seats: 4,
    doors: 5,
    transmission: "Manual",
    fuel: "Diesel",
    bags: 3,
    color: "Black",
    vin: "1234567890",
    cityMpg: 11,
    highwayMpg: 14,
    engine: "7.2L Turbo",
    condition: "New"
  },
  {
    name: "Lancer Cedia",
    image: "https://images.pexels.com/photos/1682666/pexels-photo-1682666.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "Luxury",
    price: 110,
    currency: "USD",
    seats: 4,
    doors: 2,
    transmission: "Auto",
    fuel: "Diesel",
    bags: 2,
    color: "Silver",
    vin: "9876543210",
    cityMpg: 12,
    highwayMpg: 15,
    engine: "6.0L Turbo",
    condition: "New"
  }
];

const CarDetailPage = () => {
  const { carId } = useParams();
  const car = cars[carId];

  // Booking form state (copied from Home.jsx)
  const [destination, setDestination] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [driverAgeConfirm, setDriverAgeConfirm] = useState(false);
  const [returnSameLoc, setReturnSameLoc] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    try {
      const response = await fetch("http://localhost/project/Project/api/book.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          destination,
          pickup_date: pickupDate,
          dropoff_date: dropoffDate,
          driver_age_confirm: driverAgeConfirm ? 1 : 0,
          return_same_loc: returnSameLoc ? 1 : 0,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setMessage("Booking successful! Your booking ID: " + data.booking_id);
        setDestination("");
        setPickupDate("");
        setDropoffDate("");
        setDriverAgeConfirm(false);
        setReturnSameLoc(false);
      } else {
        setMessage(data.error || "Booking failed.");
      }
    } catch (err) {
      setMessage("Network error. Please try again.");
    }
    setLoading(false);
  };

  if (!car) return <div>Car not found.</div>;
  return (
    <div style={{ background: "#f7f8fa", minHeight: "100vh", padding: "0 0 40px 0" }}>
      <img
        src={car.image}
        alt={car.name}
        style={{ width: "100%", height: "60vh", objectFit: "cover", filter: "brightness(0.85)" }}
      />
      <div style={{ maxWidth: 1400, margin: "0 auto", display: "flex", gap: 40, alignItems: "flex-start", padding: "40px 0" }}>
        {/* Left: Description and Fleet Overview */}
        <div style={{ flex: 2 }}>
          <h2 style={{ fontSize: 38, fontWeight: 500, marginBottom: 24 }}>Description</h2>
          <div style={{ fontSize: 20, color: "#222", marginBottom: 32 }}>
            Each car in our fleet is equipped with advanced technology and safety enhancements to ensure a secure and enjoyable journey. With spacious interiors, sleek designs, and fuel-efficient engines, our vehicles provide an exceptional driving experience. Every car is meticulously maintained and undergoes regular inspections to deliver.<br /><br />
            Our fleet of vehicles is crafted to cater to diverse travel requirements and enjoyable. Each car is designed with a perfect balance of style, functionality, and performance, offering an elevated driving experience. From fuel efficiency to advanced safety features, our vehicles prioritize both environmental responsibility and passenger security.
          </div>
          <h2 style={{ fontSize: 32, fontWeight: 500, marginBottom: 18 }}>Fleet Overview</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 18, fontSize: 20, color: "#222" }}>
            <div><span role="img" aria-label="car">🚗</span> <b>Condition:</b> {car.condition}</div>
            <div><span role="img" aria-label="palette">🎨</span> <b>Color:</b> {car.color}</div>
            <div><span role="img" aria-label="vin">🚌</span> <b>VIN Number:</b> {car.vin}</div>
            <div><span role="img" aria-label="road">/\</span> <b>Highway MPG:</b> {car.highwayMpg}</div>
            <div><span role="img" aria-label="city">🏙️</span> <b>City MPG:</b> {car.cityMpg}</div>
            <div><span role="img" aria-label="engine">🛠️</span> <b>Engine Size:</b> {car.engine}</div>
          </div>
        </div>
        {/* Right: Booking Form */}
        <div style={{ flex: 1, background: "#fff", borderRadius: 12, boxShadow: "0 4px 24px rgba(0,0,0,0.07)", padding: 32, minWidth: 350 }}>
          <h2 style={{ fontSize: 30, fontWeight: 600, marginBottom: 24, textAlign: "center" }}>Book Your Journey</h2>
          <form className="form-grid" onSubmit={handleBookingSubmit}>
            <div className="input-group">
              <label>Your Destination</label>
              <input
                type="text"
                placeholder="Add your location..."
                value={destination}
                onChange={e => setDestination(e.target.value)}
                required
                style={{ width: "100%" }}
              />
            </div>
            <div className="input-group">
              <label>Pick-up Date</label>
              <input
                type="date"
                value={pickupDate}
                onChange={e => setPickupDate(e.target.value)}
                required
                style={{ width: "100%" }}
              />
            </div>
            <div className="input-group">
              <label>Drop-off Date</label>
              <input
                type="date"
                value={dropoffDate}
                onChange={e => setDropoffDate(e.target.value)}
                required
                style={{ width: "100%" }}
              />
            </div>
            <button className="book-btn" type="submit" disabled={loading} style={{ width: "100%", marginTop: 18 }}>
              {loading ? "Booking..." : "Request for Booking"}
            </button>
          </form>
          <div className="checkboxes">
            <label>
              <input
                type="checkbox"
                checked={driverAgeConfirm}
                onChange={e => setDriverAgeConfirm(e.target.checked)}
              /> Drivers age between 25 - 75.
            </label>
            <label>
              <input
                type="checkbox"
                checked={returnSameLoc}
                onChange={e => setReturnSameLoc(e.target.checked)}
              /> Return car to a same location.
            </label>
          </div>
          {message && <div style={{ marginTop: '10px', color: message.includes('success') ? 'green' : 'red', textAlign: 'center' }}>{message}</div>}
        </div>
      </div>
    </div>
  );
};

export default CarDetailPage; 