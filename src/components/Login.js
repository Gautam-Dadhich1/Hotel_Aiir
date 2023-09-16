import React, { useState } from "react";
import { signInwithGoogle } from "../Firebase";
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
} from "mdb-react-ui-kit";

const loginContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  backgroundImage: `url('https://e1.pxfuel.com/desktop-wallpaper/185/392/desktop-wallpaper-4-dark-theme-light-theme-portrait.jpg')`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const cardStyle = {
  borderRadius: "25px",
  padding: "20px",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  width: "60%", // Set the width to 60% of the viewport width
  textAlign: "center", // Center-align the card content
};

const profilePicStyle = {
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  marginBottom: "20px",
};

function Login() {
  const navigate = useNavigate();
  const [profilePic, setProfilePic] = useState("");

  const handleGoogleSignIn = () => {
    signInwithGoogle()
      .then((res) => {
        const name = res.user.displayName;
        const email = res.user.email;
        const profPic = res.user.photoURL;

        localStorage.setItem("name", JSON.stringify(name));
        localStorage.setItem("email", JSON.stringify(email));
        localStorage.setItem("profPic", JSON.stringify(profPic));

        setProfilePic(profPic);

        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={loginContainerStyle}>
      <MDBCard style={cardStyle}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center mx-auto" // Center-align the card content
            >
              <h1 className="text-center fw-bold mb-4" style={{ color: "#333" }}>
                Sign up
              </h1>

              {profilePic && (
                <img
                  src={profilePic}
                  alt="Profile"
                  style={profilePicStyle}
                />
              )}

              <MDBBtn
                className="mb-2 w-100"
                size="lg"
                style={{ backgroundColor: "#4285f4", color: "#fff" }}
                onClick={handleGoogleSignIn}
              >
                <MDBIcon fab icon="google" className="mx-2" />
                Sign in with Google
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}

export default Login;
