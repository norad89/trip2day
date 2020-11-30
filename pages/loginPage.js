import { Container, Row, Col } from "react-bootstrap"
import { signIn, signOut, useSession } from "next-auth/client";
import Footer from "./components/Footer";

function LoginPage() {
  const [session, loading] = useSession();
  
  return (
    <>

      <Container fluid>
        <Row>
          <Col className="logincover" style={{ backgroundImage: 'url("loginpage.jpg")' }} />
          <div className="loginformcontainer">
            <img className="logo" src="trip2day_logo.png" width="60%" />

            <div className="loginform">
              {!session && (
                <>Not signed in
                <br />
                <br /> 
                  <button className="DefaultButton" onClick={() => signIn("facebook",
                    { callbackUrl: "http://localhost:3000/PlannedTrips" })}>Sign in</button>
                </>
              )}
              {session && (
                <><div
                  style={{
                    width: "300px",
                    margin: "auto",
                    background: "#e4e4e4",
                    padding: "20px",
                    color: "#000",
                  }}
                >
                  <img className="imgProfile" width="100px" src={session.user.image} alt={session.user.name} />
                  <br />
                  <h2 className='Welcome' >Welcome {session.user.name}!</h2>
                </div>{" "}
                  <br />
                  <button className="DefaultButton" onClick={() =>
                    signOut({ callbackUrl: "http://localhost:3000" })}>Sign out</button>
                </>
              )}
            </div>
          </div>
        </Row>
      </Container>
      <Footer />
    </>


  );
}
export default LoginPage