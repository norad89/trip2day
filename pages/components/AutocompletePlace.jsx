import React, { Component } from "react";
import axios from "axios";

export default class AutocompletePlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      results: [],
      isLoading: false,
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);

    if (!process.env.NEXT_PUBLIC_MAPBOX_API_KEY) {
      throw new Error(
        "You don't have any 'process.env.NEXT_PUBLIC_MAPBOX_API_KEY'"
      );
    }
  }
  handleSearchChange(e) {
    this.setState({
      search: e.target.value,
      isLoading: true,
    });

    // Stop the previous setTimeout if there is one in progress
    clearTimeout(this.timeoutId);

    // Launch a new request in 1000ms
    this.timeoutId = setTimeout(() => {
      this.performSearch();
    }, 1000);
  }
  performSearch() {
    if (this.state.search === "") {
      this.setState({
        results: [],
        isLoading: false,
      });
      return;
    }
    axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.search}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_API_KEY}`
      )
      .then((response) => {
        this.setState({
          results: response.data.features,
          isLoading: false,
        });
      });
  }
  handleItemClicked(place) {
    this.setState({
      search: place.place_name,
      results: [],
    });
    this.props.onSelect(place);
  }
  render() {
    return (
      <div className="autocomplete-place">
        <input
          className="autocomplete-place-input"
          type="text"
          value={this.state.search}
          onChange={this.handleSearchChange}
          placeholder=""
        />
        <ul className="autocomplete-place-results">
          {this.state.results.map((place) => (
            <li
              key={place.id}
              className="autocomplete-place-items"
              onClick={() => this.handleItemClicked(place)}
            >
              {place.place_name}
            </li>
          ))}
          {this.state.isLoading && (
            <li className="autocomplete-place-items">Loading...</li>
          )}
        </ul>
      </div>
    );
  }
}
