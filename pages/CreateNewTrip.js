import { DropdownButton, Dropdown, Modal, Button } from "react-bootstrap";
import TopNavbar from "./components/TopNavbar";
import DailyPlanner from "./components/DailyPlanner";
import React, { useState } from "react";
import { Checkbox, useCheckboxState } from "pretty-checkbox-react";
import DatePicker from "react-datepicker";

/////////////////////////////////////////////////////////////////////
import Link from "next/link";

/////////////////////////////////////////////////////////////////////

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
  const [selectDate, setselectDate] = useState(new Date());
  const [currentSuggestion, setcurrentSuggestion] = useState("");
  const [show, setShow] = useState(false);
  const [suggestionToAdd, setsuggestionToAdd] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSelect = (e) => {
    setShown(e);
  };

  function handleChangeSelect(date) {
    setselectDate(date);
  }

  function renderSuggestions() {
    return (
      <>
        <h3 className="select-sugg">Choose from your friends' advices:</h3>
        {shown.map(({ author, sug, indexSugg }) => (
          <Checkbox
            color="success"
            shape="curve"
            key={indexSugg}
            value={sug}
            {...checkbox}
          >
            {author + " suggests: " + sug}
          </Checkbox>
        ))}
      </>
    );
  }

  function addcurrentSuggestion(suggestionAtCurrentIndex) {
    handleShow();
    setcurrentSuggestion(checkbox.state[suggestionAtCurrentIndex]);
  }

  function showInAgenda() {
    handleClose();
    setsuggestionToAdd({
      start: selectDate,
      end: selectDate,
      title: currentSuggestion,
    });
  }

  function renderToDoList() {
    return (
      <>
        <h3 className="to-do-list">Your To Do List:</h3>
        {checkbox.state.map((checkedSuggestion, indexToDo) => (
          <ul key={indexToDo}>
            <li>{checkedSuggestion}</li>
            <Button
              className="button-to-do-list"
              variant="primary"
              onClick={() => addcurrentSuggestion(indexToDo)}
            >
              Plan this activity
            </Button>
          </ul>
        ))}

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Choose the date for this activity</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <DatePicker
              className="datapicker-input"
              selected={selectDate}
              onChange={handleChangeSelect}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="button-modal-footer"
              variant="secondary"
              onClick={handleClose}
            >
              Close
            </Button>
            <Button
              className="button-modal-footer"
              variant="primary"
              onClick={showInAgenda}
            >
              Save changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  return (
    <div>
      <TopNavbar />
      <br />
      <br />
      <div className="case">
        <h2>Start your trip to destination!</h2>
        <br />
        <br />
        <br />
        <div className="header-new-trip">
          <div className="all-sugg-cont">
            <div className="row">
              <div className="blockOne">
                <h3 className="text-need-sugg">
                  Are you looking for suggestions?
                </h3>
              </div>
              <div className="blockTwo">
                <DropdownButton
                  alignRight
                  title="Categories"
                  id="dropdown-menu-align-right"
                  variant="success"
                >
                  <Dropdown.Item
                    onSelect={() => handleSelect(museumSuggestions)}
                  >
                    Museums
                  </Dropdown.Item>
                  <Dropdown.Item
                    onSelect={() => handleSelect(restaurantSuggestions)}
                  >
                    Restaurants
                  </Dropdown.Item>
                  <Dropdown.Item
                    onSelect={() => handleSelect(hotelSuggestions)}
                  >
                    Hotels
                  </Dropdown.Item>
                  <Dropdown.Item
                    onSelect={() => handleSelect(placeSuggestions)}
                  >
                    Best places to discover
                  </Dropdown.Item>
                  <Dropdown.Item onSelect={() => handleSelect(tourSuggestions)}>
                    Tours to takes
                  </Dropdown.Item>
                </DropdownButton>
              </div>
            </div>
            <br />
            <div className="sugg-container">
              <div className="suggestions">{renderSuggestions()}</div>
            </div>
          </div>
          <div className="to-do-list-container">{renderToDoList()}</div>
        </div>
        <br />
        <br />
        <br />

          <DailyPlanner suggestionToAdd={suggestionToAdd} />
        
        <br />
        <Link href="/trips/[id]" as={`/trips/${location.location}`}>
          <Button>Save</Button>
        </Link>
      </div>
    </div>
  );
}

export default CreateNewTrip;
