import React from "react";

const CardModel = ({ ele, onClose }) => {
  const cardModelStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: "20px",
    zIndex: 999999,
    filter: "none !important", // This will override any parent filter property
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
  };

  const closeButtonStyle = {
    backgroundColor: "#f44336",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "10px",
    fontSize: "16px",
  };

  const textStyle = {
    fontSize: "18px",
    marginBottom: "20px",
  };

  return (
    <div style={cardModelStyle}>
      <h2>{ele.name}</h2>
      <p style={textStyle}>Additional details or text goes here</p>
      <button style={closeButtonStyle} onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default CardModel;
