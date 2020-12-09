import { useState, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Link from "next/link";

export default function DailyPlanner(props) {
  const myEventsList = useRef([]);
  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  const [suggestionToAdd, setsuggestionToAdd] = useState(props.suggestionToAdd);
  const [toDoList, setToDoList] = useState(props.toDoList);
  const [location, setLocation] = useState(props.location);

  const localizer = momentLocalizer(moment);

  const daysLeft = calculateDaysLeft(startDate, endDate);

  useEffect(() => {
    setsuggestionToAdd(props.suggestionToAdd);
    addSuggestionToCalendar(props.suggestionToAdd);
    console.log("stai viaggiando a:");
    console.log(props.location);
    console.log("questi sono gli eventi del viaggio:");
    console.log(myEventsList.current);
    console.log("e queste le attività che hai deciso di fare:");
    console.log(props.toDoList);
  }, [props.suggestionToAdd]);

  useEffect(() => {
    setToDoList(props.toDoList);
  }, [props.toDoList]);

  useEffect(() => {
    setLocation(props.location);
  }, [props.location]);

  useEffect(() => {
    addTravelToCalendar({ start: startDate, end: endDate, title: "Your Trip" });
  }, [daysLeft]);

  function addTravelToCalendar(tripLength) {
    myEventsList.current.splice(0, 1, tripLength);
  }

  function addSuggestionToCalendar(sugg) {
    myEventsList.current.push(sugg);
  }

  function handleChangeStart(date) {
    setstartDate(date);
  }

  function handleChangeEnd(date) {
    setendDate(date);
  }

  function calculateDaysLeft(startDate, endDate) {
    if (!moment.isMoment(startDate)) {
      startDate = moment(startDate);
    }
    if (!moment.isMoment(endDate)) {
      endDate = moment(endDate);
    }

    return endDate.diff(startDate, "days") + 1;
  }

  function BigCalendar() {
    return (
      <div className="app">
        <Calendar
          localizer={localizer}
          events={myEventsList.current}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    );
  }

  return (
    <div>
      <div className="data-travel-container">
        <br />
        <h3>Please select the dates of travel:</h3>
        <br />
        <div className="calendar-date-container">
          <div>
            <b>Start Date</b>: &nbsp;
            <DatePicker
              dateFormat="dd/MM/yyyy"
              className="datapicker-input"
              selected={startDate}
              onChange={handleChangeStart}
            />
          </div>
          <div>
            <b>End Date</b>: &nbsp;
            <DatePicker
              dateFormat="dd/MM/yyyy"
              className="datapicker-input"
              selected={endDate}
              onChange={handleChangeEnd}
            />
          </div>
        </div>
        <br />
      </div>

      <div className="amount">
        <br />
        <br />
        <br />
        Your trip will last {daysLeft} days. Here's your daily agenda:
      </div>
      <br />
      <br />
      <br />
      <BigCalendar />
      <br />
      <Link href="/trips/[id]" as={`/trips/${location}`}>
        <Button>Save</Button>
      </Link>
    </div>
  );
}
