import React, { Fragment, useState } from "react";

const inputSuggestion = () => {
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { suggestion };
      console.log(body);
      const response = await fetch("http://localhost:3001/images", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  const [suggestion, setSuggestion] = useState("");
  return (
    <div>
      <h3 className="add-sugg-text">Add a Suggestion</h3>
      <Fragment>
        <form onSubmit={onSubmitForm}>
          <input
            className="suggestion-input"
            type="text"
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
          ></input>
          <button className="button-travel">Add</button>
        </form>
      </Fragment>
    </div>
  );
};

export default inputSuggestion;
