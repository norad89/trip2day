import { Navbar, Nav } from 'react-bootstrap'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function TopNavbar() {
  const [session, loading] = useSession();
  return (<>

    <Navbar bg="primary" sticky="top">
      <Navbar.Brand href="/">
        <img
          src="/trip2day_logo.png"
          height="30"
          className="d-inline-block align-top"
          alt="Trip2Day Logo"
        />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/PlannedTrips">My Travel Book</Nav.Link>
        <Nav.Link href="/PlannedTrips">Friends</Nav.Link>
      </Nav>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar>
          {!session && (
            <>
              <p>Not signed in</p>
              <button className='buttonNavbar' onClick={() => signIn("facebook", { callbackUrl: "http://localhost:3000/PlannedTrips" })
              }> Sign in </button></>)}
          {session && (
            <>
              <p>Signed in as {session.user.name}!</p>
              <button className='buttonNavbar' onClick={() => signOut({ callbackUrl: "http://localhost:3000" })
              }> Sign out </button></>)}
        </Navbar>
      </Navbar.Collapse>
    </Navbar>
  </>



  )
};
