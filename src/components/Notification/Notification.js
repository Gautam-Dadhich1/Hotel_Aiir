import React, { useEffect, useState } from "react";
import "./Notification.css";

const Notification = ({ message, type, onclose, notificationVisible }) => {
  const getMessageStyle = () => {
    switch (type) {
      case "success":
        return { backgroundColor: "#4CAF50", color: "#fff" }; // Green background for success messages
      case "error":
        return { backgroundColor: "#f44336", color: "#fff" }; // Red background for error messages
      default:
        return {}; // Default styles (you can customize this as needed)
    }
  };

  return (
    <div
      className={`notification ${notificationVisible ? "visible" : ""}`}
      style={getMessageStyle()} // Apply the custom message style
    >
      <div className="message">{message}</div>
      <button
        className="close-btn"
        onClick={() => {
          onclose();
        }}
      >
        &times;
      </button>
    </div>
  );
};

export default Notification;
