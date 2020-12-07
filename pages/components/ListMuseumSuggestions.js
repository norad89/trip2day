import React, { Fragment, useEffect, useState } from "react";

const ListMuseumSuggestions = () => {
  const [museumSuggestions, setMuseumSuggestions] = useState([]);

  const getMuseumSuggestions = async () => {
    try {
      const response = await fetch("http://localhost:3002/museumSuggestions");
      const jsonData = await response.json();
      setMuseumSuggestions(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getMuseumSuggestions();
  }, []);

  return (
    <Fragment>
      <table class="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td> */}
          {museumSuggestions.map((museumSuggestions) => (
            <tr>
              <td>{museumSuggestions.author}</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListMuseumSuggestions;
