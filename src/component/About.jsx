import React from "react";
import { useNavigate } from "react-router-dom"; // 👈 import navigate
import "./About.css";
import aboutImage from "../assets/c3.jpg";

function About() {
  const navigate = useNavigate(); // 👈 hook to navigate

  return (
    <div className="about-container">
      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h2 className="about-title">
        The story behind our commitment to quality and service
      </h2>

      <div className="about-content">
        <div className="about-image">
          <img src={aboutImage} alt="Team" />
        </div>

        <div className="about-info">
          <h3>Established in 2016</h3>
          <p>
            Whether it’s a quick trip across country adventure, our diverse
            fleet of maintained vehicles ensures you’ll find the ideal car for
            every occasion.
          </p>

          <div className="about-grid">
            <div>
              <h4>Founder</h4>
              <p>Jack</p>
            </div>
            <div>
              <h4>Headquarters</h4>
              <p>
                4517 Washington Ave,<br />
                Manchester, Kentucky 39495
              </p>
            </div>
            <div>
              <h4>Fleet Size</h4>
              <p>2600+ Vehicles</p>
            </div>
            <div>
              <h4>Service Areas</h4>
              <p>Nationwide & International</p>
            </div>
          </div>

          <button className="about-btn">More About us ↗</button>
        </div>
      </div>
    </div>
  );
}

export default About;
