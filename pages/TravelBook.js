import { useState, useEffect } from "react";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { Button, Card, Container, Row } from "react-bootstrap";
import TopNavbar from "./components/TopNavbar";
import Header from "./components/Header";
import Link from "next/link";
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

function PlannedTrips() {
  const [location, setLocation] = useState([]);
  const [cardList, setList] = useState([]);

  const getLocation = async () => {
    try {
      const response = await fetch("http://localhost:3001/location");
      const jsonData = await response.json();
      setLocation(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  const trip = {
    id: "Parigi",
  };

  return (
    <div>
      <div>{loginCheck()}</div>
      <TopNavbar />
      <Header />
      <br />
      <div className="text-center">
        <br />
        <Container>
          <Row>
            <Card>
              <div className="image-container">
                <Card.Img variant="top" />
                <img
                  className="new-trip-image"
                  src="/New_Trips.jpg"
                  width="230px"
                  height="230px"
                  overflow="hidden"
                ></img>
                <div className="middle">
                  <div className="button-container">
                    <Link href="./SearchLocation">
                      <button className="new-trip-button">
                        <a> New Trip </a>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <Card.Body>
                <br />

                <Card.Title>
                  <p className="travel-photo-text"> Start a new trip</p>
                </Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img variant="top" />
              <Link
                href="/trips/[id]"
                as={`/trips/${location[0] ? location[0].location : ""}`}
              >
                <a>
                  <img src="/Londra.jpg" width="230px" overflow="hidden"></img>
                </a>
              </Link>
              <Card.Body>
                <br />


                <Card.Title>
                  {" "}
                  {location.map((location) => (
                    <Link href="/trips/[id]" as={`/trips/${location.location}`}>
                      <a className="travel-photo-text">
                        Your trip to {location.location}
                      </a>
                    </Link>
                  ))}{" "}
                </Card.Title>
                <Card.Text></Card.Text>

              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
      <br />

      <br />
      <Footer />
    </div>
  );
}

export default PlannedTrips;
