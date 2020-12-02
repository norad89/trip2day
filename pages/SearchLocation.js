import TopNavbar from "./components/TopNavbar";
import AddCardViaggio from "./functions/AddCardViaggio"
import { useState } from 'react'
import Link from 'next/link'

function LocationForm() {

  const [value, setValue] = useState('')

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault()
    fetch("http://localhost:3001/Parigi", {
      method: 'POST',
      body: JSON.stringify({ "location": [{ "location": value }] }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(json => setValue(json.value))
  }

  return (
    <form className="OnSubmitStyle" onSubmit={handleSubmit}>
      <label>
        <div>Choose your destination:</div>
          <input type="text" value={value} onChange={handleChange} />
      </label>
      <Link href="./CreateNewTrip"><input type="submit" value="Submit" /></Link>
    </form>
  );

}

function SearchLocation() {
  return (
    <div>

      <div>
        <TopNavbar />
      </div>

      <img className="LocationLogo" src="trip2day_logo.png" width="30%" />

      <div className='BackgroundLocation'>
        <h1 className="TextCenter" >Prepare for a new adventure!</h1>
        <div className="LocationStyle">
        <LocationForm />
        </div>
      </div>
      <br />

    </div>
  );
}

export default SearchLocation;
