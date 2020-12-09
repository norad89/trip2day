import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Link from "next/link";

const sendNewTrip = (props) => {
  return (
    <div>
      <Link href="/trips/[id]" as={`/trips/${props.location}`}>
        <Button>Save</Button>
      </Link>
    </div>
  );
};

export default sendNewTrip;
