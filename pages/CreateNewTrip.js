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
        <Checkbox color="success" shape="round" key={index} value={sug} {...checkbox}>
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
      <br />
      <h2 className="HeaderNewTrip">Inizia il tuo viaggio a D E S T I N A Z I O N E</h2>
      <br />

      <div className="AllSuggCont">
        <div className="row">
          <div className="blockOne">
            <h3 className="TextStyleSugg">Ti serve un suggerimento?</h3>
          </div>
          <div className="blockTwo">
            <DropdownButton
              alignRight
              title="Categories"
              id="dropdown-menu-align-right"
              variant="success"
            >
              <Dropdown.Item style={{ color: '#222222' }} onSelect={() => handleSelect(museumSuggestions)}>Museums</Dropdown.Item>
              <Dropdown.Item style={{ color: '#222222' }} onSelect={() => handleSelect(restaurantSuggestions)}>Restaurants</Dropdown.Item>
              <Dropdown.Item style={{ color: '#222222' }} onSelect={() => handleSelect(hotelSuggestions)}>Hotels</Dropdown.Item>
              <Dropdown.Item style={{ color: '#222222' }} onSelect={() => handleSelect(placeSuggestions)}>Best places to discover</Dropdown.Item>
              <Dropdown.Item style={{ color: '#222222' }} onSelect={() => handleSelect(tourSuggestions)}>Tours to takes</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>

        <div ClassName="SuggContainer">
          <h3 className="TextStyleSugg">Seleziona i suggerimenti di tuoi interesse:</h3>
          <div className="Suggestions">
            {renderSuggestions()}
          </div>
        </div>
      </div>

      <h3 className="TextStyleSugg">Ecco la tua To Do List:</h3>
      {renderToDoList()}
      <Calendar renderToDoList={renderToDoList()} />

    </div>
  );
}

export default CreateNewTrip;