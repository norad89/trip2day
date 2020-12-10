import React, { Fragment, useState } from "react";

const inputSuggestions = () => {
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { suggestions };
      const response = await fetch("http://localhost:3001/images", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  const [suggestions, setSuggestions] = useState();
  return (
    <div>
      <h3 className="choose-destination-text">Bagascia</h3>
      <Fragment>
        <form onSubmit={onSubmitForm}>
          <input
            type="text"
            value={suggestions}
            onChange={(e) => setSuggestions(e.target.value)}
          ></input>
          <button className="button-travel">Porca Troia</button>
        </form>
      </Fragment>
    </div>
  );
};

export default inputSuggestions;
