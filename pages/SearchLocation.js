import TopNavbar from "./components/TopNavbar";
import AddCardViaggio from "./functions/AddCardViaggio"
import React, { useState } from 'react'
import Link from 'next/link'
import AutocompletePlace from './AutocompletePlace'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      place: null,
    }
    this.handleSelect = this.handleSelect.bind(this)
  }
  handleSelect(place) {
    this.setState({ place })
  }
  render() {
    return (
      <div>
        <AutocompletePlace onSelect={this.handleSelect} />
      </div>
    );
  }
}


function LocationForm() {

  const [value, setValue] = useState('')

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault()
    fetch("http://localhost:3001/", {
      method: 'POST',
      body: JSON.stringify({ location: [{ location: value }] }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(json => setValue(json.value))
  }

  return (
    <form className="on-submit-style" onSubmit={handleSubmit}>
      <label>
        <div>Choose your destination:</div>
        <Search type="text" value={value} onChange={handleChange} />
      </label>
      <Link href="./CreateNewTrip"><input type="submit" value="Submit" /></Link>
    </form>
  );

}

function SearchLocation() {


  return (
    <div>

      <TopNavbar />
      <div className="case">
        <img className="location-logo" src="trip2day_logo.png" width="30%" />

        <div className='background-location'>
          <h1 className="src-location-title" >Prepare for a new adventure!</h1>
          <div className="location-style">
            <LocationForm />
          </div>
        </div>
        
        <br />
      </div>
    </div>
  );
}

export default SearchLocation;
