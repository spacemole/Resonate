import React, { useState } from "react";
import { User } from "../types/User";
import "./Contact.css";

const Contact: React.FC<{ user: User }> = ({ user }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="card">
      <div className="header">
        <div className="info">
          <h3>{user.name}</h3>
          <p>@{user.username}</p>
        </div>
        <button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? "Show Less" : "Show More"}
        </button>
      </div>
      {showDetails && (
        <div className="details">
          <div>
            <h3>Contact Information</h3>
            <div className="detail-line">
              <strong>Email:</strong> {user.email}
            </div>
            <div className="detail-line">
              <strong>Phone:</strong> {user.phone}
            </div>
            <div className="detail-line">
              <strong>Website:</strong> {user.website}
            </div>
          </div>
          <div>
            <h3>Address</h3>
            <div className="detail-line">
              <strong>Street:</strong> {user.address.street}
            </div>
            <div className="detail-line">
              <strong>Suite:</strong> {user.address.suite}
            </div>
            <div className="detail-line">
              <strong>City:</strong> {user.address.city}
            </div>
            <div className="detail-line">
              <strong>Zipcode:</strong> {user.address.zipcode}
            </div>
          </div>
          <div>
            <h3>Company</h3>
            <div className="detail-line">
              <strong>Name:</strong> {user.company.name}
            </div>
            <div className="detail-line">
              <strong>Catch Phrase:</strong> {user.company.catchPhrase}
            </div>
            <div className="detail-line">
              <strong>Business:</strong> {user.company.bs}
            </div>
          </div>
          <div>
            <h3>Geo Location</h3>
            <div className="detail-line">
              <strong>Latitude:</strong> {user.address.geo.lat}
            </div>
            <div className="detail-line">
              <strong>Longitude:</strong> {user.address.geo.lng}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
