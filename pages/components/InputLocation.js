import React, { Fragment, useState } from "react";

const inputLocation = () => {
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { location };
      const response = await fetch("http://localhost:3002/location", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
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
        <button>Sparati</button>
      </form>
    </Fragment>
  );
};

export default inputLocation;
