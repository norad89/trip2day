import TopNavbar from "./components/TopNavbar";
import AddCardViaggio from "./functions/AddCardViaggio"
import {useState} from 'react'

function LocationForm() {

  const [value, setValue] = useState('')

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault()
    fetch("http://localhost:3001/Parigi", {
      method: 'POST',
      body: JSON.stringify({ "location": [{"location": value }]}),
      headers: { 'Content-Type': 'application/json'},
    })
      .then(res => res.json())
      .then(json => setValue(json.value))
  }

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={value} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  
}

function SearchLocation() {
  return (
    <div>
      <TopNavbar />
          <AddCardViaggio />
      <LocationForm />
    </div>
  );
}

export default SearchLocation;
