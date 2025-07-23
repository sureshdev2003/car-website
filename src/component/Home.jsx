import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import "./Home.css";
import bgVideo from "../assets/carv.mp4"; // Use your actual video path

function Home() {
  const navigate = useNavigate();

  // 🔐 Redirect if not logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn || isLoggedIn !== "true") {
      alert("Please login to access this page.");
      navigate("/auth"); // Replace with your actual login route if different
    }
  }, [navigate]);

  // Booking form state
  const [name,setName]= useState("");
  const [destination, setDestination] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [driverAgeConfirm, setDriverAgeConfirm] = useState(false);
  const [returnSameLoc, setReturnSameLoc] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [loadingBookings, setLoadingBookings] = useState(false);

  const handleBookingSubmit = async (e) => {
    e.preventDefault();

    // 🔐 Double-check before booking
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn || isLoggedIn !== "true") {
      alert("You must be logged in to book a car.");
      navigate("/auth");
      return;
    }

    setMessage("");
    setLoading(true);
    try {
      const response = await fetch("http://localhost/project/Project/api/book.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
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
        setName("");
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

  const fetchBookings = async () => {
    setLoadingBookings(true);
    try {
      const response = await fetch("http://localhost/project/Project/api/book.php");
      const data = await response.json();
      if (data.success) {
        setBookings(data.bookings);
      }
    } catch (err) {
      // Optionally handle error
    }
    setLoadingBookings(false);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  useEffect(() => {
    if (message && message.includes("Booking successful")) {
      fetchBookings();
    }
    // eslint-disable-next-line
  }, [message]);

  return (
    <div className="home-section">
      <video className="bg-video" autoPlay muted loop playsInline>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-section">
        <h1>Life is a journey, Enjoy the ride!</h1>
        <p>
          Discover the ease of car rentals designed to fit your lifestyle.
          Whether you're planning a quick city drive, a weekend getaway, or a
          long-term journey.
        </p>

        <div className="booking-form">
          <h2>Need to rent a luxury car?</h2>
          <form className="form-grid" onSubmit={handleBookingSubmit}>
             <div className="input-group">
              <label>Your Name</label>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Your Destination</label>
              <input
                type="text"
                placeholder="Add your location..."
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Pick-up Date</label>
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Drop-off Date</label>
              <input
                type="date"
                value={dropoffDate}
                onChange={(e) => setDropoffDate(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <button className="book-btn" type="submit" disabled={loading}>
                {loading ? "Booking..." : "Book A Car ↗"}
              </button>
            </div>
          </form>

          <div className="checkboxes">
            <label>
              <input
                type="checkbox"
                checked={driverAgeConfirm}
                onChange={(e) => setDriverAgeConfirm(e.target.checked)}
              />{" "}
              <span>Drivers age between 25 - 75.</span>
            </label>
            <label>
              <input
                type="checkbox"
                checked={returnSameLoc}
                onChange={(e) => setReturnSameLoc(e.target.checked)}
              />{" "}
              <span>Return car to a same location.</span>
            </label>
          </div>

          {message && (
            <div
              style={{
                marginTop: "10px",
                color: message.includes("success") ? "green" : "red",
              }}
            >
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
