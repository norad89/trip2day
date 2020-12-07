import { useState } from "react";
import dayjs from "dayjs";
import DatePicker from "react-datepicker";
import { Card, Button, Container, Row } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";


export default function CheckDate(checkedProps) {
  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());

  function handleChangeStart(date) {
    setstartDate(date);
  }

  function handleChangeEnd(date) {
    setendDate(date);
  }

  function calculateDaysLeft(startDate, endDate) {
    if (!dayjs.isDayjs(startDate)) startDate = dayjs(startDate);
    if (!dayjs.isDayjs(endDate)) endDate = dayjs(endDate);

    return endDate.diff(startDate, "days");
  }

  function myAgenda(props) {
    if (props > 0) {
      const day = { giorno: "Giorno", sugg: "duccio apri" };
      const agenda = new Array(props).fill(day);

      function addSuggestion(arr) {
        arr.splice(3, 0, {
          giorno: "Giorno",
          sugg: checkedProps.checkboxState[0],
        });
        console.log(arr);
      }

      return (
        <>
          <Container fluid>
            <Row>
              {agenda.map((item, index) => (
                <>
                  <Card style={{ width: "18rem" }} key={index}>
                    <Card.Body>
                      <Card.Title>
                        {item.giorno} {index + 1}
                      </Card.Title>
                      <Card.Text>{item.sugg}</Card.Text>
                      <Button variant="primary" onClick={addSuggestion(agenda)}>
                        aggiungi le cose da fare
                      </Button>
                    </Card.Body>
                  </Card>
                </>
              ))}
            </Row>
          </Container>
        </>
      );
    }
  }

  const daysLeft = calculateDaysLeft(startDate, endDate) + 1;

  return (
    <div>
      <h3>Please select the dates of travel:</h3>
      <b>Start Date</b>:
      <DatePicker selected={startDate} onChange={handleChangeStart} />
      &nbsp;&nbsp;&nbsp;
      <b>End Date</b>:
      <DatePicker selected={endDate} onChange={handleChangeEnd} />
      <div className="amount">
        Your trip will last {daysLeft} days. Here's your daily agenda:
      </div>
      <div>{myAgenda(daysLeft)}</div>
    </div>
  );
}
