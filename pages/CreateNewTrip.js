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
      <br />
      <div className="case">
      <h2>Inizia il tuo viaggio a D E S T I N A Z I O N E</h2>
      <br />
      <br />
      <br />
      <div className="header-new-trip">
      <div className="allSuggCont">
        <div className="row">
          <div className="blockOne">
            <h3 className="text-need-sugg">Ti serve un suggerimento?</h3>
          </div>
          <div className="blockTwo">
            <DropdownButton
              alignRight
              title="Categories"
              id="dropdown-menu-align-right"
              variant="success"
            >
              <Dropdown.Item onSelect={() => handleSelect(museumSuggestions)}>Museums</Dropdown.Item>
              <Dropdown.Item onSelect={() => handleSelect(restaurantSuggestions)}>Restaurants</Dropdown.Item>
              <Dropdown.Item onSelect={() => handleSelect(hotelSuggestions)}>Hotels</Dropdown.Item>
              <Dropdown.Item onSelect={() => handleSelect(placeSuggestions)}>Best places to discover</Dropdown.Item>
              <Dropdown.Item onSelect={() => handleSelect(tourSuggestions)}>Tours to takes</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
        <br />
        <div className="sugg-container">
          <h3 className="select-sugg">Seleziona i suggerimenti di tuoi interesse:</h3>
          <div className="suggestions">
            {renderSuggestions()}
          </div>
        </div>
      </div>

      <div className="to-do-list-container">
      <h3 className="to-do-list">Ecco la tua To Do List:</h3>
      {renderToDoList()}
      </div>
      </div>
      <br />
      <br />
      <br />
      <Calendar renderToDoList={renderToDoList()} />
      </div>
    </div>
  );
}

export default CreateNewTrip;