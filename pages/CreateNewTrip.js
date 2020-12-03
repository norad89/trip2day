import { DropdownButton, Dropdown, Form } from "react-bootstrap";
import TopNavbar from "./components/TopNavbar";
import Calendar from "./components/Calendar"
import React, { useState, useEffect } from "react";
import { Checkbox, useCheckboxState } from 'pretty-checkbox-react'

function CreateNewTrip() {

  const museumSuggestions = [
    {
      author: "Mario",
      sug: "Ti consiglio di visitare il Museo dei Funghi",
    },
    {
      author: "Luigi",
      sug: "Il Museo dei Meme va assolutamente visitato!",
    },
    {
      author: "Peach",
      sug: "Non visitare il museo di React, è una perdita di tempo",
    },
  ];

  const restaurantSuggestions = [
    {
      author: "Mario",
      sug: "Ti consiglio di visitare il Ristorante Pizza e Fichi",
    },
    {
      author: "Luigi",
      sug: "Il Paninaro Onto va assolutamente visitato!",
    },
    {
      author: "Peach",
      sug: "Non visitare il Gelataio Fiammingo, è una perdita di tempo",
    },
  ];

  const hotelSuggestions = [];
  const placeSuggestions = [];
  const tourSuggestions = [];

  const checkbox = useCheckboxState({ state: [] });
  const [shown, setShown] = useState([])

  const handleSelect = (e) => {
    setShown(e)
  }

  function renderSuggestions() {
    return (
      shown.map(({ author, sug, index }) => (
        <Checkbox key={index} value={sug} {...checkbox}>
          {author + " suggerisce: " + sug}
        </Checkbox>
      )))
  }

  function renderToDoList() {
    return (
      checkbox.state.map((item, { index }) => (
        <ul key={index}>
          <li>{item}</li>
        </ul>
      )))
  }

  return (
    <div>
      <TopNavbar />
      <h2>Inizia il tuo viaggio a D E S T I N A Z I O N E</h2>
      <h3>Ti serve un suggerimento? Scegli tra queste categorie:</h3> 

      <DropdownButton
        alignRight
        title="Categories"
        id="dropdown-menu-align-right"
      >
        <Dropdown.Item onSelect={() => handleSelect(museumSuggestions)}>Museums</Dropdown.Item>
        <Dropdown.Item onSelect={() => handleSelect(restaurantSuggestions)}>Restaurants</Dropdown.Item>
        <Dropdown.Item onSelect={() => handleSelect(hotelSuggestions)}>Hotels</Dropdown.Item>
        <Dropdown.Item onSelect={() => handleSelect(placeSuggestions)}>Best places to discover</Dropdown.Item>
        <Dropdown.Item onSelect={() => handleSelect(tourSuggestions)}>Tours to takes</Dropdown.Item>
      </DropdownButton>
      <br />
      <br />
      <h3>Seleziona i suggerimenti di tuoi interesse:</h3>
      {renderSuggestions()}
      <h3>Ecco la tua To Do List:</h3>
      {renderToDoList()}
      <Calendar renderToDoList={renderToDoList()}/>

    </div>
  );
}

export default CreateNewTrip;