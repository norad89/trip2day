import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/client";
import UploadFile from "../functions/Upload";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";
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
        <div className="header-new-trip">
          <div className="to-do-list-container">
            <img src={printImage(1)}></img>
  <div>{printSuggestion(1)}</div>
          </div>
          <UploadFile />
        </div>
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
