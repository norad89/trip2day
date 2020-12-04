import { useState } from "react";
import dayjs from "dayjs";
import DatePicker from "react-datepicker";
import { Card, Button, Container, Row } from "react-bootstrap"
import "react-datepicker/dist/react-datepicker.css";

export default function CheckDate(cabbage) {

  const [startDate, setstartDate] = useState(new Date())
  const [endDate, setendDate] = useState(new Date())

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

  Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
  };

  function pushTry(arr) {
    arr.insert(3, 0, { sugg: "sticazzi" })
  }

  function myAgenda(props) {
    const day = { giorno: "Giorno", sugg: "" }
    const agenda = new Array(props).fill(day)

    return (
      <Container fluid><Row>{
        agenda.map((item, index) => (
          <>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{item.giorno} {index + 1}</Card.Title>
                <Card.Text>
                  {item.sugg}
                  {cabbage.renderToDoList}
                </Card.Text>
                <Button variant="primary">Duccio, apri tutto</Button>
              </Card.Body>
            </Card>
          </>
        ))}</Row></Container>
    );
  }

  const daysLeft = calculateDaysLeft(startDate, endDate);

  return (
    <div>
      <h3 className="textStyleSugg">Please select the dates of travel:</h3>
      <b>Start Date</b>:
      <DatePicker
        selected={startDate}
        onChange={handleChangeStart}
      />
        &nbsp;&nbsp;&nbsp;
      <b>End Date</b>:
      <DatePicker
        selected={endDate}
        onChange={handleChangeEnd}
      />
      <div className="amount">Your trip will last {daysLeft} days. Here's your daily agenda:</div>
      <div>{myAgenda(daysLeft)}</div>
    </div>
  );

}




