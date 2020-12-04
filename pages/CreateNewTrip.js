import { DropdownButton, Dropdown, Modal, Button } from "react-bootstrap";
import TopNavbar from "./components/TopNavbar";
import Calendar from "./components/Calendar";
import React, { useState } from "react";
import { Checkbox, useCheckboxState } from "pretty-checkbox-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
  const [shown, setShown] = useState([]);

  const handleSelect = (e) => {
    setShown(e);
  };

  function renderSuggestions() {
    return shown.map(({ author, sug, index }) => (
      <Checkbox
        color="success"
        shape="round"
        key={index}
        value={sug}
        {...checkbox}
      >
        {author + " suggerisce: " + sug}
      </Checkbox>
    ));
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectDate, setSelectDate] = useState(new Date());

  function renderToDoList() {
    return (
      <>
        {checkbox.state.map((item, index) => (
          <ul key={index}>
            <li>{item}</li>
            <Button variant="primary" onClick={handleShow}>
              Inserisci nel calendario
            </Button>
          </ul>
        ))}
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Scegli la data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <DatePicker
              selected={selectDate}
              onChange={(date) => setSelectDate(date)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Chiudi
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Salva le modifiche
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
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
        <Dropdown.Item onSelect={() => handleSelect(museumSuggestions)}>
          Museums
        </Dropdown.Item>
        <Dropdown.Item onSelect={() => handleSelect(restaurantSuggestions)}>
          Restaurants
        </Dropdown.Item>
        <Dropdown.Item onSelect={() => handleSelect(hotelSuggestions)}>
          Hotels
        </Dropdown.Item>
        <Dropdown.Item onSelect={() => handleSelect(placeSuggestions)}>
          Best places to discover
        </Dropdown.Item>
        <Dropdown.Item onSelect={() => handleSelect(tourSuggestions)}>
          Tours to takes
        </Dropdown.Item>
      </DropdownButton>

      <br />
      <h2 className="headerNewTrip">
        Inizia il tuo viaggio a D E S T I N A Z I O N E
      </h2>
      <br />

      <div className="allSuggCont">
        <div className="row">
          <div className="blockOne">
            <h3 className="textStyleSugg">Ti serve un suggerimento?</h3>
          </div>
          <div className="blockTwo">
            <DropdownButton
              alignRight
              title="Categories"
              id="dropdown-menu-align-right"
              variant="success"
            >
              <Dropdown.Item
                style={{ color: "#222222" }}
                onSelect={() => handleSelect(museumSuggestions)}
              >
                Museums
              </Dropdown.Item>
              <Dropdown.Item
                style={{ color: "#222222" }}
                onSelect={() => handleSelect(restaurantSuggestions)}
              >
                Restaurants
              </Dropdown.Item>
              <Dropdown.Item
                style={{ color: "#222222" }}
                onSelect={() => handleSelect(hotelSuggestions)}
              >
                Hotels
              </Dropdown.Item>
              <Dropdown.Item
                style={{ color: "#222222" }}
                onSelect={() => handleSelect(placeSuggestions)}
              >
                Best places to discover
              </Dropdown.Item>
              <Dropdown.Item
                style={{ color: "#222222" }}
                onSelect={() => handleSelect(tourSuggestions)}
              >
                Tours to takes
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </div>

        <div className="SuggContainer">
          <h3 className="textStyleSugg">
            Seleziona i suggerimenti di tuoi interesse:
          </h3>
          <div className="suggestions">{renderSuggestions()}</div>
        </div>
      </div>

      <h3 className="textStyleSugg">Ecco la tua To Do List:</h3>
      {renderToDoList()}

      <Calendar checkboxState={checkbox.state} selectDate={selectDate} />
    </div>
  );
}

export default CreateNewTrip;
