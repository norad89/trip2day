import { Button, Card, Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import ModalImage from "react-modal-image";
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


function Photos() {
  const [cardList, setList] = useState([]);

  const [location, setLocation] = useState([]);

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

  return (
    <div>
      <div>{loginCheck()}</div>
      <TopNavbar />

      <Header />
      <div>
        <br />
        <Container>
          <Row>
          <Card>
          <Card.Img variant="top" />
              <Link
                href="/photos/[id]"
                as={`/photos/${location[0] ? location[0].location : ""}`}
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
                    <Link href="/photos/[id]" as={`/photos/${location.location}`}>
                      <a className="travel-photo-text">
                        Your photos of {location.location}
                      </a>
                    </Link>
                  ))}{" "}
                </Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
            <div>{renderCard()}</div>
          </Row>
        </Container>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}
export default Photos;
