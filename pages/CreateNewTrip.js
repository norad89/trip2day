import React, { useState, useEffect } from "react";
import { Checkbox, useCheckboxState } from "pretty-checkbox-react";
import { DropdownButton, Dropdown, Modal, Button } from "react-bootstrap";
import { useSession } from "next-auth/client";
import TopNavbar from "./components/TopNavbar";
import DailyPlanner from "./components/DailyPlanner";
import DatePicker from "react-datepicker";
import Footer from "./components/Footer";

function loginCheck() {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!(session || loading)) {
      router.push("/");
    }
  }, [session, loading]);
}

function CreateNewTrip() {
  const [location, setLocation] = useState([]);
  const [museumSuggestions, setMuseumSuggestions] = useState([]);
  const [restaurantSuggestions, setRestaurantSuggestions] = useState([]);
  const [hotelSuggestions, setHotelSuggestions] = useState([]);
  const [placeSuggestions, setPlaceSuggestions] = useState([]);
  const [tourSuggestions, setTourSuggestions] = useState([]);

  const getLocation = async () => {
    try {
      const response = await fetch("http://localhost:3001/location");
      const jsonData = await response.json();
      setLocation(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getMuseumSuggestions = async () => {
    try {
      const response = await fetch("http://localhost:3001/museumSuggestions");
      const jsonData = await response.json();
      setMuseumSuggestions(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getRestaurantSuggestions = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/restaurantSuggestions"
      );
      const jsonData = await response.json();
      setRestaurantSuggestions(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getHotelSuggestions = async () => {
    try {
      const response = await fetch("http://localhost:3001/hotelSuggestions");
      const jsonData = await response.json();
      setHotelSuggestions(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getPlaceSuggestions = async () => {
    try {
      const response = await fetch("http://localhost:3001/placeSuggestions");
      const jsonData = await response.json();
      setPlaceSuggestions(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTourSuggestions = async () => {
    try {
      const response = await fetch("http://localhost:3001/tourSuggestions");
      const jsonData = await response.json();
      setTourSuggestions(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getLocation();
    getMuseumSuggestions();
    getRestaurantSuggestions();
    getHotelSuggestions();
    getPlaceSuggestions();
    getTourSuggestions();
  }, []);

  const checkbox = useCheckboxState({ state: [] });
  const [chosenCategory, setChosenCategory] = useState([]);
  const [selectDate, setselectDate] = useState(new Date());
  const [currentSuggestion, setcurrentSuggestion] = useState("");
  const [show, setShow] = useState(false);
  const [suggestionToAdd, setsuggestionToAdd] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSelect = (e) => {
    setChosenCategory(e);
  };

  function handleChangeSelect(date) {
    setselectDate(date);
  }

  function renderSuggestions() {
    return (
      <>
        <h3 className="select-sugg">Choose from your friends' advices:</h3>

        {chosenCategory.map(({ author, sug, indexSugg }) => (
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
              dateFormat="dd/MM/yyyy"
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
      <div>{loginCheck()}</div>
      <TopNavbar />
      <br />
      <br />
      <div className="case">
        <div className="create-new-trip-title">
          {location.map((location) => (
            <h2 className="create-new-trip-text">
              This is your trip to {location.location}
            </h2>
          ))}
        </div>

        <br />
        <br />
        <br />
        <div className="header-new-trip">
          <div className="all-sugg-cont">
            <div className="row-create-trip">
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

        <DailyPlanner
          suggestionToAdd={suggestionToAdd}
          toDoList={checkbox.state}
          location={location[0] ? location[0].location : ""} // console error to be fixed
        />
      </div>
      <br />
      <br />
    <Footer />
    </div>
  );
}

export default CreateNewTrip;
