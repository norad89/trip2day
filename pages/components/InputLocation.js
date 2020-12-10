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
    <div>
      <h3 className="choose-destination-text">Choose your Destination:</h3>
      <Fragment>
        <form onSubmit={onSubmitForm}>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          ></input>
          <button className="button-travel">Travel</button>
        </form>
      </Fragment>
    </div>
  );
};

export default inputLocation;
