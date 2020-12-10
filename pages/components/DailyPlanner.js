import { useState, useEffect, useRef } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import DatePicker from "react-datepicker";
import moment from "moment";
import SendNewTrip from "../components/SendNewTrip";
import "react-datepicker/dist/react-datepicker.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

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
      <SendNewTrip
        location={location}
        eventsList={myEventsList.current}
        toDoList={toDoList}
      />
    </div>
  );
}
