import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { FaStar } from "react-icons/fa";

export default function Card({
  ele,
  isSelected,
  onClick,
  onBookNow,
  handleShowNotification,
}) {
  return (
    <MDBCard
      border="1px solid black"
      style={{ padding: "20px", transition: "transform 0.2s" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <MDBCardTitle style={{ textAlign: "center" }}>{ele.name}</MDBCardTitle>
      <MDBCardImage
        src={ele.images[0]}
        position="top"
        width={100}
        height={200}
        alt="..."
        onClick={onClick}
        style={{
          border: isSelected ? "2px solid blue" : "2px solid #ccc",
          padding: "10px",
          margin: "10px",
        }}
      />
      {isSelected && <p>Show some text inside the card</p>}
      <MDBCardBody>
        <div className="row">
          <div className="col-md-6 mb-2">
            <MDBCardText>{ele.city}</MDBCardText>
          </div>
          <div className="col-md-6 mb-2">
            <div className="d-flex justify-content-md-end">
              {[...Array(ele.star)].map((index) => (
                <FaStar key={index} color="#FFD700" size={12} />
              ))}
            </div>
          </div>
          <div className="col-md-12">
            <MDBBtn
              onClick={() => {
                onBookNow();
                handleShowNotification();
              }}
            >
              Book Now
            </MDBBtn>
          </div>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
}
