import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/client";
import { Button, Card, Container, Row } from "react-bootstrap";
import InputSuggestion from "../components/InputSuggestion";
import UploadFile from "../functions/Upload";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";
import ModalImage from "react-modal-image";
import Link from "next/link";
import "react-big-calendar/lib/css/react-big-calendar.css";

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
  const [suggestion, setSuggestion] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  function printImage(id) {
    return "http://localhost:3001/images/" + id;
  }

  const getSuggestion = async () => {
    try {
      const response = await fetch("http://localhost:3001/images/sugg/1");
      const data = await response.json();
      setSuggestion(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getSuggestion();
  }, []);

  function renderAddedPhoto() {
    if (suggestion !== "placeholder") {
      return (
        <>
          <Card>
            <Card.Img variant="top" />

            <ModalImage
              className="my-photo-of-trip"
              small={printImage(2)}
              large={printImage(2)}
              overflow="hidden"
            />

            <Card.Body>
              <br />
              <Card.Title>
                {" "}
                <p className="travel-photo-text">
                  {suggestion ? suggestion : ""}
                </p>{" "}
              </Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </>
      );
    }
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
        <Container>
          <Row>
            <Card>
              <div>
                <Card.Img variant="top" />
                <ModalImage
                  className="my-photo-of-trip"
                  small={"/Night City.png"}
                  large={"/Night City.png"}
                  overflow="hidden"
                />
              </div>

              <Card.Body>
                <br />

                <Card.Title>
                  <p className="travel-photo-text">Night City è meravigliosa</p>
                </Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img variant="top" />

              <ModalImage
                className="my-photo-of-trip"
                small={"/Cyberpunk.jpg"}
                large={"/Cyberpunk.jpg"}
                overflow="hidden"
              />

              <Card.Body>
                <br />

                <Card.Title>
                  {" "}
                  <p className="travel-photo-text">
                    Va assolutamente visitata la casa di Johnny Silverhand
                  </p>{" "}
                </Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>

            {renderAddedPhoto()}
          </Row>
        </Container>

        <UploadFile />
        <br />
        <InputSuggestion />
        <br />
        <Link
          href="/trips/[id]"
          as={`/trips/${id}`}
        >
          <Button>Back to your trip</Button>
        </Link>

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
