// import React from "react";
// import Card from "./Card";
// import { useState, useEffect } from "react";
// import Grid from "@mui/material/Grid";
// import { getAllHotels } from "../services/api";
// import Notification from "./Notification/Notification";
// import CardModal from "./CardModel";

// export const CardLayout = ({ BlurFilter, modalVisible }) => {
//   const [hotels, setHotels] = useState([]);
//   const [selectedHotel, setSelectedHotel] = useState(null);
//   const [bookingHotel, setBookingHotel] = useState(null);
//   const [notificationVisible, setNotificationVisible] = useState(false);

//   const handleBookNow = (hotel) => {
//     setBookingHotel(hotel);

//   };

//   const handleCardClick = (hotelId) => {
//     setSelectedHotel(hotelId);
//     BlurFilter(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedHotel(null);
//   };


//   useEffect(() => {
//     const getHotels = async () => {
//       const response = await getAllHotels();
//       setHotels(response.data);
//     };
//     getHotels();
//   }, []);

//   return (
//     <>
//       <div style={{ position: "relative", zIndex: modalVisible ? 1 : "auto" }}>
//         <Grid container spacing={2} sx={{ pt: 2, pl: 2, pr: 2 }}>
//           {hotels.map((ele, index) => (
//             <Grid key={index} item xs={6} sm={4} md={3}>
//               <Card
//                 ele={ele}
//                 isSelected={ele.id === selectedHotel}
//                 onBookNow={() => handleBookNow(ele)}
//                 onClick={() => handleCardClick(ele.id)}
//                 handleShowNotification={() => setNotificationVisible(true)}
//               />
//             </Grid>
//           ))}
//         </Grid>

//         {notificationVisible && (
//           <>
//             <Notification
//               message={`Booking done for ${bookingHotel.name}`}
//               type="success"
//               onclose={() => setNotificationVisible(false)}
//               notificationVisible={notificationVisible}

//             />
//           </>
//         )}

//         {selectedHotel && (
//           <CardModal
//             ele={hotels.find((ele) => ele.id === selectedHotel)}
//             onClose={() => {
//               setSelectedHotel(null);
//               BlurFilter(false); 
//             }}
//           />
//         )}
//       </div>
//     </>
//   );
// };




import React, { useState, useEffect } from "react";
import Card from "./Card";
import Grid from "@mui/material/Grid";
import { getAllHotels } from "../services/api";
import Notification from "./Notification/Notification";
import CardModal from "./CardModel";

export const CardLayout = ({ BlurFilter, modalVisible }) => {
  const [hotels, setHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [bookingHotel, setBookingHotel] = useState(null);
  const [notificationVisible, setNotificationVisible] = useState(false);

  const handleBookNow = (hotel) => {
    setBookingHotel(hotel);
  };

  const handleCardClick = (hotelId) => {
    setSelectedHotel(hotelId);
  };

  const handleCloseModal = () => {
    setSelectedHotel(null);
  };

  useEffect(() => {
    const getHotels = async () => {
      const response = await getAllHotels();
      setHotels(response.data);
    };
    getHotels();
  }, []);

  // Define the CSS style object for the blur effect
  const blurBackgroundStyle = {
    filter: modalVisible ? "blur(5px)" : "none",
    pointerEvents: modalVisible ? "none" : "auto",
  };

  return (
    <>
      <div style={blurBackgroundStyle}>
        <Grid container spacing={2} sx={{ pt: 2, pl: 2, pr: 2 }}>
          {hotels.map((ele, index) => (
            <Grid key={index} item xs={6} sm={4} md={3}>
              <Card
                ele={ele}
                isSelected={ele.id === selectedHotel}
                onBookNow={() => handleBookNow(ele)}
                onClick={() => handleCardClick(ele.id)}
                handleShowNotification={() => setNotificationVisible(true)}
              />
            </Grid>
          ))}
        </Grid>
      </div>

      {notificationVisible && (
        <Notification
          message={`Booking done for ${bookingHotel.name}`}
          type="success"
          onclose={() => setNotificationVisible(false)}
          notificationVisible={notificationVisible}
        />
      )}

      {selectedHotel && (
        <CardModal
          ele={hotels.find((ele) => ele.id === selectedHotel)}
          onClose={() => {
            setSelectedHotel(null);
            BlurFilter(false);
          }}
        />
      )}
    </>
  );
};
