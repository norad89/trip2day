import { Container, Row, Col } from "react-bootstrap";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "./components/Footer";

function loginCheck() {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session || loading) {
      router.push("/TravelBook");
    }
  }, [session, loading]);
}

function LoginPage() {
  const [session, loading] = useSession();

  return (
    <>
      <div>{loginCheck()}</div>
      <Container fluid>
        <Row>
          <Col
            className="logincover"
            style={{ backgroundImage: 'url("loginpage.jpg")' }}
          />
          <div className="loginformcontainer">
            <img className="logo" src="trip2day_logo.png" width="60%" />

            <div className="case">
              {!session && (
                <>
                  Not signed in
                  <br />
                  <br />
                  <button
                    className="default-button"
                    onClick={() =>
                      signIn("facebook", {
                        callbackUrl: "http://localhost:3000/TravelBook",
                      })
                    }
                  >
                    Sign in with Facebook
                  </button>
                </>
              )}
              {session && (
                <>
                  <div
                    style={{
                      width: "300px",
                      margin: "auto",
                      background: "white",
                      padding: "20px",
                      color: "#000",
                    }}
                  >
                    <img
                      className="img-prof-log"
                      width="100px"
                      src={session.user.image}
                      alt={session.user.name}
                    />
                    <br />
                    <h2 className="welcome">Welcome {session.user.name}!</h2>
                  </div>{" "}
                  <br />
                  <button
                    className="default-button"
                    onClick={() =>
                      signOut({ callbackUrl: "http://localhost:3000" })
                    }
                  >
                    Sign out
                  </button>
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
export default LoginPage;
