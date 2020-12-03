import { Button, Card, Container, Row } from "react-bootstrap";
import TopNavbar from "./components/TopNavbar";
import Header from './components/Header'
import Link from "next/link";
import { useState, useEffect } from 'react'
import { useSession } from "next-auth/client";
import { useRouter } from 'next/router'

function loginCheck() {
  const [session, loading] = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!(session || loading)) {
      router.push('/')
    }
  }, [session, loading])
}

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
      <div>{loginCheck()}</div>
      <TopNavbar />
      <Header />
      <br />
      <div className='text-center'>
        <br />
        <Container>

          <Row>

            <Card>
              <div className='ImageContainer'>
                <Card.Img variant="top" /><img className='NewTripImage' src="/New_Trips.jpg" width="230px" height='230px' overflow="hidden"></img>
                <div className='Middle'>
                  <div className='ButtonContainer'>
                    <Link href='./SearchLocation'><button className='NewTripButton'><a> New Trip </a></button></Link>
                  </div>
                </div>
              </div>
              <Card.Body>
                <br />
                <Card.Title><p className='TravelPhotoText'> New trip</p></Card.Title>
                <Card.Text>

                </Card.Text>
                {/* <Link href="./SearchLocation"><Button onChange={handleChange}><a className='NewTripsButton'> Prepare </a></Button></Link> */}
              </Card.Body>
            </Card>

            <div>{renderCard()}</div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" /><a><img src="/Parigi.jpg" width="230px" overflow="hidden"></img></a>
              <Card.Body>
                <br />
                {/* <Card.Title><Link href="/trips/[id]" as={`/trips/${trip.id}`}><a className='NewTripsButton'>{trip.id}</a></Link></Card.Title> */}
                <Card.Title> <p className='TravelPhotoText'> Parigi </p> </Card.Title>
                <Card.Text>

                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" /><a><img src="/Formentera.jpg" width="230px" overflow="hidden"></img></a>
              <Card.Body>
                <br />
                <Card.Title> <p className='TravelPhotoText'> Formentera </p> </Card.Title>
                <Card.Text>

                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
      <br />
    </div>
  );
}

export default PlannedTrips
