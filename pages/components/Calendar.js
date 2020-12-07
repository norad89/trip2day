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
    setselectedSuggestion(checkedProps.selectedSuggestion);
    console.log(checkedProps.selectedSuggestion);
    console.log(checkedProps.selectDate);
  }, [checkedProps.selectDate]);

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
      const day = { giorno: "Giorno", sugg: "Le tue attività" };
      const agenda = new Array(props).fill(day);

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
                      <Button className="button-activities" variant="primary">
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

      <h3>Please select the dates of travel:</h3>
      <br />
      <div className="calendar-date-container">
        <div>
          <b>Start Date</b>: &nbsp;
      <DatePicker dateFormat="dd/MM/yyyy" className="datapicker-input" selected={startDate} onChange={handleChangeStart} />
        </div>
        <div>
          <b>End Date</b>: &nbsp;
      <DatePicker dateFormat="dd/MM/yyyy" className="datapicker-input" selected={endDate} onChange={handleChangeEnd} />
        </div>
      </div>

      <div className="amount">
        <br />
        Your trip will last {daysLeft} days. Here's your daily agenda:
      </div>
      <br />
      <div>{myAgenda(daysLeft)}</div>
    </div>
  );
}
