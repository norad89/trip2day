import TopNavbar from "./components/TopNavbar";
import InputLocation from "./components/InputLocation";
import Footer from "./components/Footer";

function SearchLocation() {
  return (
    <div>
      <TopNavbar />
      <div className="case">
        <img className="location-logo" src="trip2day_logo.png" width="30%" />

        <div className="background-location">
          <h1 className="src-location-title">Prepare for a new adventure!</h1>
          <div className="location-style">
            <InputLocation />
          </div>

          <br />
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default SearchLocation;
