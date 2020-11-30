import { Dropdown} from "react-bootstrap";
import TopNavbar from "./components/TopNavbar";
import { useState } from "react"

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

    const displaySuggestions = () => {}
 
    const mapSuggestions = () => {
      return museumSuggestions.map((museumSuggestions, index) => {
        const { Author } = museumSuggestions
        return (
          console.log(Author),
          <div>{Author}</div>
        )
      });
    }

    const Search = () => {
      const [showResults, setShowResults] = useState(false)
      const onClick = () => setShowResults(true)
      return (
        <div>
          <input type="submit" value="Search" onClick={onClick} />
          { showResults ? <Results /> : null }
        </div>
      )
    }
    
    const Results = () => (
      <div id="results" className="search-results">
        Some Results
      </div>
    )
    

  
  return (
    <div>
      <TopNavbar />

      <p>Ti serve un suggerimento? Scegli tra queste categorie:</p>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Categories
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={displaySuggestions}>Museums</Dropdown.Item>
          <Dropdown.Item>Restaurants</Dropdown.Item>
          <Dropdown.Item>Hotels</Dropdown.Item>
          <Dropdown.Item>Best places to discover</Dropdown.Item>
          <Dropdown.Item>Tours to takes</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Search />
      <div>{mapSuggestions()}</div>
    </div>

   
  );
}

export default CreateNewTrip;
