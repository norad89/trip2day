import TopNavbar from "./components/TopNavbar";
import React, { useState } from "react";
import Link from "next/link";
import AutocompletePlace from "./AutocompletePlace";
import InputLocation from "./components/InputLocation";

// const LocationForm = () => {
//   const onSubmitForm = async e => {
//     e.preventDefault();
//     try {
//       const body = { location };
//       const response = await fetch("http://localhost:3002/location", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(body)
//       });
//       console.log(response)
//     } catch (err) {
//       console.error(err.message);
//     }
//   }
// function handleSelect(place) {
//   setLocation({ place })
// }
//   const [location, setLocation] = useState("")
//   return (
//     <form className="OnSubmitStyle" onSubmit={onSubmitForm}>
//       <label>
//         <input type="text" value={location} onChange={e => setLocation(e.target.value)}></input>
//         <div>Choose your destination:</div>
//       </label>
//       <Link href="./CreateNewTrip"><button>Ammazzati</button></Link>
//     </form>
//   );
// }

function SearchLocation() {
  return (
    <div>
      <TopNavbar />
      <div className="case">
        <img className="location-logo" src="trip2day_logo.png" width="30%" />

        <div className="background-location">
          <h1 className="src-location-title">Prepare for a new adventure!</h1>
          <div className="location-style">
            <InputLocation />
            <Link href="./CreateNewTrip">
              <button>Vai a CreateNewTrip</button>
            </Link>
          </div>

          <br />
        </div>
      </div>
    </div>
  );
}

export default SearchLocation;
