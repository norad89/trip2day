import { useState, useEffect } from "react";
import dayjs from "dayjs";
import DatePicker from "react-datepicker";
import { Card, Button, Container, Row } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";

export default function CheckDate(checkedProps) {
  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  /* const [checkboxState, setcheckboxState] = useState(checkedProps.checkboxState) */
  const [selectDate, setselectDate] = useState(checkedProps.selectDate); //date selected in the modal
  const [selectedSuggestion, setselectedSuggestion] = useState(
    checkedProps.selectedSuggestion
  ); //suggestion selected in the modal

  useEffect(() => {
    setselectDate(checkedProps.selectDate);
    setselectedSuggestion(checkedProps.selectedSuggestion);
    console.log(agenda);
  }, [checkedProps.selectDate]);
  /* useEffect(() => {setcheckboxState(checkedProps.checkboxState)
    console.log(checkedProps.checkboxState)},[checkedProps.checkboxState]) */

  function handleChangeStart(date) {
    setstartDate(date);
  }

  function handleChangeEnd(date) {
    setendDate(date);
  }

  function calculateDaysLeft(startDate, endDate) {
    if (!dayjs.isDayjs(startDate)) startDate = dayjs(startDate);
    if (!dayjs.isDayjs(endDate)) endDate = dayjs(endDate);

    return endDate.diff(startDate, "days") + 1;
  }

  function myAgenda(props) {
    if (props > 0 && checkedProps.selectedSuggestion !== "") {
      setAgenda(
        agenda.splice(calculateDaysLeft(startDate, selectDate) - 1, 1, {
          giorno: "Giorno",
          sugg: checkedProps.selectedSuggestion,
        })
      );
      return (
        <>
          <Container fluid>
            <Row>
              {agenda.map((item, indexAgenda) => (
                <>
                  <Card style={{ width: "18rem" }} key={indexAgenda}>
                    <Card.Body>
                      <Card.Title>
                        {item.giorno} {indexAgenda + 1}
                      </Card.Title>
                      <Card.Text>{item.sugg}</Card.Text>
                      <Button variant="primary">
                        Aggiungi altre attività:
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

    if (props > 0) {
      return (
        <>
          <Container fluid>
            <Row>
              {agenda.map((item, indexAgenda) => (
                <>
                  <Card style={{ width: "18rem" }} key={indexAgenda}>
                    <Card.Body>
                      <Card.Title>
                        {item.giorno} {indexAgenda + 1}
                      </Card.Title>
                      <Card.Text>{item.sugg}</Card.Text>
                      <Button variant="primary">
                        Aggiungi altre attività:
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

  const daysLeft = calculateDaysLeft(startDate, endDate);
  const day = { giorno: "Giorno", sugg: "Le tue attività" };
  useEffect(() => {
    setAgenda(new Array(daysLeft).fill(day));
  }, [daysLeft]);
  const [agenda, setAgenda] = useState(new Array(daysLeft).fill(day));

  return (
    <div>
      <h3 className="textStyleSugg">Please select the dates of travel:</h3>
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
