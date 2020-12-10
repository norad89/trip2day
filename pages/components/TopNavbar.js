import { Navbar, Nav } from "react-bootstrap";
import { signIn, signOut, useSession } from "next-auth/client";

export default function TopNavbar() {
  const [session, loading] = useSession();

  function showProfilePicture() {
    return session ? session.user.image : "profile";
  }

  return (
    <>
      <Navbar bg="primary" sticky="top">
        <Navbar.Brand href="/TravelBook">
          <img
            src="/trip2day_logo.png"
            height="30"
            className="d-inline-block align-top"
            alt="Trip2Day Logo"
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/TravelBook">My Travel Book</Nav.Link>
          <Nav.Link href="/Photos">My Photos</Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar>
            <div className="img-container">
              <img className="img-profile" src={showProfilePicture()} />
            </div>
            {!session && (
              <>
                <p>Not signed in</p>
                <button
                  className="button-navbar"
                  onClick={() =>
                    signIn("facebook", {
                      callbackUrl: "http://localhost:3000/TravelBook",
                    })
                  }
                >
                  {" "}
                  Sign in{" "}
                </button>
              </>
            )}
            {session && (
              <>
                <p>Signed in as {session.user.name}!</p>
                <button
                  className="button-navbar"
                  onClick={() =>
                    signOut({ callbackUrl: "http://localhost:3000" })
                  }
                >
                  {" "}
                  Sign out{" "}
                </button>
              </>
            )}
          </Navbar>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
