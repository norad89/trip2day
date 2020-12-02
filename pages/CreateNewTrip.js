import { DropdownButton, Dropdown, Form } from "react-bootstrap";
import TopNavbar from "./components/TopNavbar";
import React, { useState } from "react";

function CreateNewTrip() {
  const museumSuggestions = [
    {
      id: 1,
      Author: "A",
      sug: "Louvre",
    },
    {
      id: 2,
      Author: "B",
      sug: "Musei Vaticani",
    },
    {
      id: 3,
      Author: "C",
      sug: "British Museum",
    },
  ];

  const restaurantSuggestions = [
    {
      id: 1,
      Author: "A",
      sug: "Bellavista",
    },
    {
      id: 2,
      Author: "B",
      sug: "Piazza duomo",
    },
    {
      id: 3,
      Author: "C",
      sug: "San Marco",
    },
  ];

  const [value, setValue] = useState("");

  const handleSelect = () => {
    const Authors = [];
    museumSuggestions.map((museumSuggestions, index) => {
      const { Author } = museumSuggestions;
      const { sug } = museumSuggestions;
      Authors.push(Author + " " + sug + " ");
      setValue(Authors);
    });
  };
////////////////////////////////////////////////////////////////////////////////////////////////

class SuggestionsBox extends React.Component {

  // Checkbox Initial State
  state = {
    isA: false,
    isB: false,
    isC: false,

  };

  // React Checkboxes onChange Methods
  onChangeA = () => {
    this.setState(initialState => ({
      isA: !initialState.isA,
    }));
  }

  onChangeB = () => {
    this.setState(initialState => ({
      isB: !initialState.isB,
    }));
  }

  onChangeC = () => {
    this.setState(initialState => ({
      isC: !initialState.isC,
    }));
  }

  // Submit
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <h2> Checkbox: </h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.isA}
                onChange={this.onChangeA}
                className="form-check-input"
              />
              Louvre
            </label>
          </div>

          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.isB}
                onChange={this.onChangeB}
                className="form-check-input"
              />
              Musei Vaticani
            </label>
          </div>

          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.isC}
                onChange={this.onChangeC}
                className="form-check-input"
              />
              British Museum
            </label>
          </div>

          <div className="form-group">
            <button className="btn btn-success">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div>
      <TopNavbar />

      <h3>Ti serve un suggerimento? Scegli tra queste categorie:</h3>

      <DropdownButton
        alignRight
        title="Categories"
        id="dropdown-menu-align-right"
      >
        <Dropdown.Item eventKey="Museums" onSelect={handleSelect}>
          Museums
        </Dropdown.Item>
        <Dropdown.Item eventKey="Restaurants">Restaurants</Dropdown.Item>
        <Dropdown.Item eventKey="Hotels">Hotels</Dropdown.Item>
        <Dropdown.Item eventKey="Best places to discover">
          Best places to discover
        </Dropdown.Item>
        <Dropdown.Item eventKey="Tours to takes">Tours to takes</Dropdown.Item>
      </DropdownButton>
      <h4>{value}</h4>

      <SuggestionsBox />
    

    </div>
  );
}

export default CreateNewTrip;