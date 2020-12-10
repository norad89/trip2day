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
  const [cardList, setList] = useState([]);

  /*useEffect(() => {
    fetch("http://localhost:3001/").then((response) => {
      response.json().then((content) => {
        setList([...content.cardViaggio]);
      });
    });
  }, []);
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  } */

  function renderCard() {
    return cardList.map((cardList, index) => {
      const { location, photo } = cardList;
      return (
        <Card className="photo" key={index}>
          <Card.Img variant="top" />
          <img src={photo} width="200px" overflow="hidden"></img>
          <Card.Body>
            <Card.Title>{location}</Card.Title>
            <Card.Text></Card.Text>
            <Button>
              <Link href="./NewTrip">Cross</Link>
            </Button>
          </Card.Body>
        </Card>
      );
    });
  }

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
                  <p className="travel-photo-text"> New trip</p>
                </Card.Title>
                <Card.Text></Card.Text>

               
              </Card.Body>
            </Card>

            <div>{renderCard()}</div>

            <Card>
              <Card.Img variant="top" />
              <a>
                <img src="/Parigi.jpg" width="230px" overflow="hidden"></img>
              </a>
              <Card.Body>
                <br />
                <Card.Title>
                  {" "}
                  <p className="travel-photo-text"> Parigi </p>{" "}
                </Card.Title>
                <Card.Text></Card.Text>

              </Card.Body>
            </Card>

            <Card>
              <Card.Img variant="top" />
              <a>
                <img
                  src="/Formentera.jpg"
                  width="230px"
                  overflow="hidden"
                ></img>
              </a>
              <Card.Body>
                <br />
                <Card.Title>
                  {" "}
                  <p className="travel-photo-text"> Formentera </p>{" "}
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
