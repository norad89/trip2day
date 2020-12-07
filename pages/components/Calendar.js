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

  /* useEffect(() => {setcheckboxState(checkedProps.checkboxState)
    console.log(checkedProps.checkboxState)},[checkedProps.checkboxState]) */

  useEffect(() => {
    setselectDate(checkedProps.selectDate);
    console.log(checkedProps.selectDate);
  }, [checkedProps.selectDate]);
  useEffect(() => {
    setselectedSuggestion(checkedProps.selectedSuggestion);
    console.log(checkedProps.selectedSuggestion);
  }, [checkedProps.selectedSuggestion]);

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
    if (props > 0) {
      const day = { giorno: "Giorno", sugg: "duccio apri tutto" };
      const agenda = new Array(props).fill(day);

      function addSuggestion(arr) {
        arr.splice(3, 1, {
          giorno: "Giorno",
          sugg: checkedProps.checkboxState[0],
        });
      }

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
                      <Button variant="primary" onClick={addSuggestion(agenda)}>
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
