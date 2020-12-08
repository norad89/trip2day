import React, { Fragment, useState } from "react";

const inputLocation = () => {
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { location };
      const response = await fetch("http://localhost:3001/location", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/CreateNewTrip";
    } catch (err) {
      console.error(err.message);
    }
  };

  const [location, setLocation] = useState("");
  return (
    <Fragment>
      <h1>Choose your Destination:</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        ></input>
        <button>Travel</button>
      </form>
    </Fragment>
  );
};

export default inputLocation;
