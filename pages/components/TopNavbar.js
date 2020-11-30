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
        <Nav.Link href="/MyTrips">My Trips</Nav.Link>
        <Nav.Link href="/MyFriendsList">Friends</Nav.Link>
      </Nav>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar inline>
          {!session && (
            <>
              <p>Not signed in</p>
              <button onClick={() => signIn("facebook", { callbackUrl: "http://localhost:3000/MyTrips" })
              }> Sign in </button></>)}
          {session && (
            <>
              <p>Signed in as {session.user.name}!</p>
              <button className='ButtonNavbar' onClick={() => signOut({ callbackUrl: "http://localhost:3000" })
              }> Sign out </button></>)}
        </Navbar>
      </Navbar.Collapse>
    </Navbar>
  </>



  )
};
