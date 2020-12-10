import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Link from "next/link";

const sendNewTrip = (props) => {
  const eventslist = props.eventsList;
  const todolist = props.toDoList;

  const SaveButton = React.forwardRef(({ onClick, href }, ref) => {
    const handleClick = async () => {
      try {
        const body = { todolist };
        const response = await fetch("http://localhost:3001/tripToDoList", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
      } catch (err) {
        console.error(err.message);
      }
      try {
        const eventsbody = { eventslist };
        const response = await fetch("http://localhost:3001/tripEventsList", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(eventsbody),
        });
      } catch (err) {
        console.error(err.message);
      }
    };

    return (
      <Button href={href} onClick={handleClick} ref={ref}>
        Save
      </Button>
    );
  });

  return (
    <div>
      <Link href="/trips/[id]" as={`/trips/${props.location}`} passHref>
        <SaveButton />
      </Link>
    </div>
  );
};

export default sendNewTrip;
