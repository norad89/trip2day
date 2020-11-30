import { Button, ButtonGroup, Card, Container, Row } from "react-bootstrap";
import TopNavbar from "./components/TopNavbar";
import Header from './components/Header'
import Link from "next/link";
import { useState, useEffect } from 'react'

function PlannedTrips() {
  const [cardList, setList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/").then((response) => {
      response.json().then((content) => {
        setList([...content.cardViaggio]);
      });
    });
  }, []);
  const [value, setValue] = useState('')

  function handleChange(event) {
    setValue(event.target.value);
  }

  function renderCard() {
    return cardList.map((cardList, index) => {
      const { location, photo } = cardList
      return (<Card className="photo" key={index}>
        <Card.Img variant="top" /><img src={photo} width="200px" overflow="hidden"></img>
        <Card.Body>
          <Card.Title>{location}</Card.Title>
          <Card.Text>
          </Card.Text>
          <Button><Link href="./NewTrip">Cross</Link></Button>
        </Card.Body>
      </Card>
      )
    })
  }

  const trip = {
    id: "Parigi"
  }

  return (
    <div>
      <TopNavbar />
      <Header />
      

      <Container>

        <Row>
          <Card className="photo">

            <Card.Img variant="top" /><img src="/Tokyo.jpg" width="200px" overflow="hidden"></img>
            <Card.Body>
              <Card.Title>Plan your next trip</Card.Title>
              <Card.Text>

              </Card.Text>
              <Button onChange={handleChange}><Link href="./SearchLocation">+</Link></Button>
            </Card.Body>
          </Card>
          <div>{renderCard()}</div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" /><img src="/Parigi.jpg" width="200px" overflow="hidden"></img>
            <Card.Body>
              <Card.Title><Link href="/trips/[id]" as={`/trips/${trip.id}`}><a>{trip.id}</a></Link></Card.Title>
              <Card.Text>

              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" /><img src="/Formentera.jpg" width="200px" overflow="hidden"></img>
            <Card.Body>
              <Card.Title>Formentera</Card.Title>
              <Card.Text>

              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>

    </div>
  );
}

export default PlannedTrips
