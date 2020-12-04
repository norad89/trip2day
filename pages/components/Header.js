import { Button, ButtonGroup } from "react-bootstrap";
import Link from "next/link";

function Header() {
  return (
    <div className="case">
      <br />
      <div className="imgContainer">
        <img
          className="images"
          src="https://bidonica.files.wordpress.com/2010/04/vlcsnap-2010-04-19-19h00m46s204.png"
        />
      </div>
      <br />

      <div className="description">
        <h1 className="profileName"> Cristina Munuz </h1>
        <br />
        <p className="myStory">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <br />

      <div className="buttonPosition">
        <Link href="./SearchLocation">
          <button className="buttonToTrip">
            <a className="buttonText"> Plan your next trip </a>
          </button>
        </Link>
      </div>

      <br />
      <div className="text-center">
        <ButtonGroup aria-label="Basic example">
          <Link href="./PastTrips">
            <Button
              style={{ color: "white", backgroundColor: "#455753" }}
              variant="secondary"
            >
              My Past Trips
            </Button>
          </Link>

          <Link href="./PlannedTrips">
            <Button
              variant="secondary"
              style={{ color: "white", backgroundColor: "#455753" }}
            >
              My Planned Trips
            </Button>
          </Link>

          <Link href="./Photos">
            <Button
              style={{ color: "white", backgroundColor: "#455753" }}
              variant="secondary"
            >
              My Photos
            </Button>
          </Link>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default Header;
