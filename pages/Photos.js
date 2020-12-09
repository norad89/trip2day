import TopNavbar from "./components/TopNavbar";
import Header from "./components/Header";
import { Button, Card, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import ModalImage from "react-modal-image";

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
      <TopNavbar />
      <Header />
      <div>
        <br />
        <Container>
          <Row>
            <Card>
              <div >
                <Card.Img variant="top" />
                <ModalImage
                  className="my-photo-of-trip"
                  small={"/amsterdam.jpg"}
                  large={"/amsterdam.jpg"}
                  overflow="hidden"
                />
              </div>

              <Card.Body>
                <br />

                <Card.Title>
                  <p className="travel-photo-text"> Amsterdam </p>
                </Card.Title>
                <Card.Text></Card.Text>

              </Card.Body>
            </Card>

            <div>{renderCard()}</div>

            <Card>
              <Card.Img variant="top" />
              
                <ModalImage 
                  className="my-photo-of-trip" 
                  small={"/Parigi.jpg"} 
                  large={"/Parigi.jpg"}
                  overflow="hidden"/>
              
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
              
              <ModalImage 
                  className="my-photo-of-trip" 
                  small={"/Formentera.jpg"} 
                  large={"/Formentera.jpg"}
                  overflow="hidden"/>
              
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
    </div>
  );
}
export default Photos;
