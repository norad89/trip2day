import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/client";
import UploadFile from "../functions/Upload";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Button, Card, Container, Row } from "react-bootstrap";
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

function Trip() {
  const router = useRouter();
  const { id } = router.query;

  function printImage(id) {
    return "http://localhost:3001/images/" + id;
  }

  function printSuggestion(id) {
    return "http://localhost:3001/images/sugg/" + id;
  }

  return (
    <>
      <div>{loginCheck()}</div>
      <TopNavbar />

      <div className="case">
        <br />
        <br />
        <div className="create-new-trip-title">
          <h1> My photos of {id} </h1>
        </div>
        <br />
        <br />
        <br />

        <img src={printImage(1)}></img>
        {printSuggestion(1)}

        <Container>
          <Row>
            <Card>
              <div>
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

            {/* <div>{renderCard()}</div> */}

            <Card>
              <Card.Img variant="top" />

              <ModalImage
                className="my-photo-of-trip"
                small={"/Parigi.jpg"}
                large={"/Parigi.jpg"}
                overflow="hidden"
              />

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
                overflow="hidden"
              />

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

        {/* <img src={printImage()}></img> */}

        <UploadFile />

        <br />
        <br />
        <br />
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3001/location`);
  const data = await res.json();

  return {
    props: { data },
  };
}

export default Trip;
