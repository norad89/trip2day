import { useState, useEffect, react } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const myEventsList = [
  { start: new Date(), end: new Date(), title: "Your Trip" },
];

export default function DailyPlanner(props) {
  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  const [suggestionToAdd, setsuggestionToAdd] = useState(props.suggestionToAdd);

  const localizer = momentLocalizer(moment);

  const daysLeft = calculateDaysLeft(startDate, endDate);

  useEffect(() => {
    setsuggestionToAdd(props.suggestionToAdd);
    addSuggestionToCalendar(props.suggestionToAdd);
  }, [props.suggestionToAdd]);

  useEffect(() => {
    addTravelToCalendar({ start: startDate, end: endDate, title: "Your Trip" });
  }, [daysLeft]);

  function addTravelToCalendar(tripLength) {
    myEventsList.splice(0, 1, tripLength);
  }

  function addSuggestionToCalendar(sugg) {
    myEventsList.push(sugg);
  }

  function handleChangeStart(date) {
    setstartDate(date);
  }

  function handleChangeEnd(date) {
    setendDate(date);
  }

  function calculateDaysLeft(startDate, endDate) {
    if (!moment.isMoment(startDate)) startDate = moment(startDate);
    if (!moment.isMoment(endDate)) endDate = moment(endDate);

    return endDate.diff(startDate, "days") + 1;
  }

  function BigCalendar() {
    return (
      <div className="App">
        <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    );
  }

  return (
    <div>
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

      <div className="amount">
        <br />
        Your trip will last {daysLeft} days. Here's your daily agenda:
      </div>
      <BigCalendar />
    </div>
  );
}
