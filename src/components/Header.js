// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import { useNavigate } from "react-router-dom";

// function Header() {
//   // logout..
//   let navigate = useNavigate();
//   const logout = async () => {
//     console.log("logout button (frontend)");
//     localStorage.removeItem("email");
//     localStorage.removeItem("name");
//     localStorage.removeItem("profPic");
//     navigate("/");
//   };

//   return (
//     <Navbar
//       collapseOnSelect
//       expand="lg"
//       style={{ backgroundColor: "#1C2F54" }}
//       variant="dark"
//     >
//       <Container>
//         {/* <img
//           src={img}
//           alt="Hotel Image"
//           width="40"
//           height="50"
//           style={{ marginRight: "30px" }}
//         /> */}
//         <Navbar.Brand href="#home">Hotel Booking</Navbar.Brand>

//         <Navbar.Toggle
//           aria-controls="responsive-navbar-nav"
//           className="custom-toggler"
//         >
//           <i className="fa fa-bars" style={{ color: "black" }}></i>
//         </Navbar.Toggle>

//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="/faq">FAQ</Nav.Link>
//             <Nav.Link href="/contactus">Contact Us</Nav.Link>
//           </Nav>

//           <Nav>
//             <button
//               type="button"
//               className="btn btn-secondary btn-sm d-none d-lg-inline rounded-circle"
//               onClick={() => navigate("/home")} // Navigate to home page
//             >
//               {localStorage.getItem("name")[1].toUpperCase()}
//               {/* {console.log(localStorage.getItem("name")[1].toUpperCase())} */}
//             </button>
//             {/* <img
//               src={localStorage.getItem("profPic")}
//               alt="Profile"
//               width="30"
//               height="30"
//               className="rounded-circle"
//             /> */}
//             <button
//               type="button"
//               className="btn btn-light btn-sm"
//               onClick={() => logout()}
//             >
//               Logout
//             </button>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;

import React from "react";
import {
  Container,
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Header() {
  let navigate = useNavigate();

  const logout = async () => {
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    localStorage.removeItem("profPic");
    navigate("/");
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: "#1C2F54", padding: "20px" }}
      variant="dark"
    >
      <Container>
        <Navbar.Brand
          href="/home"
          style={{ fontSize: "24px", fontWeight: "bold" }}
        >
          Inn Reservations
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="custom-toggler"
        >
          <i className="fa fa-bars" style={{ color: "black" }}></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/help" style={{ color: "white" }}>
              Help
            </Nav.Link>
            <Nav.Link href="/contactus" style={{ color: "white" }}>
              Contact Us
            </Nav.Link>
          </Nav>
          <Form className="d-flex ml-auto" onSubmit={(e) => e.preventDefault()}>
            <FormControl
              type="text"
              placeholder="Search..."
              className="mr-2 border-0 rounded-pill"
              style={{
                backgroundColor: "#f8f9fa",
                padding: "8px 15px",
                color: "#333",
              }}
            />
            <Button
              variant="primary"
              type="submit"
              className="rounded-pill"
              style={{ backgroundColor: "#4285f4", border: "none" }}
            >
              Search
            </Button>
          </Form>
          <Nav>
            <button
              type="button"
              className="btn btn-secondary btn-sm d-none d-lg-inline rounded-circle"
              onClick={() => navigate("/home")} // Navigate to home page
            >
              {localStorage.getItem("name")[1].toUpperCase()}
              {/* {console.log(localStorage.getItem("name")[1].toUpperCase())} */}
            </button>

            <button
              type="button"
              className="btn btn-light btn-sm"
              onClick={() => logout()}
              style={{
                marginLeft: "10px",
                transition: "color 0.3s", // Add a transition for smooth color change
                color: "#333", // Default color
              }}
              // Add an :hover style to change the color on hover
              onMouseEnter={(e) => (e.target.style.color = "#4285f4")}
              onMouseLeave={(e) => (e.target.style.color = "#333")}
            >
              Logout
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
