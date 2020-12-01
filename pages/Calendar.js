
import React from "react";
import moment from "moment";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


export default class CheckDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date()
    };
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
  }

  handleChangeStart(date) {
    this.setState({
      startDate: date
    });
  }

  handleChangeEnd(date) {
    this.setState({
      endDate: date
    });
  }

  calculateDaysLeft(startDate, endDate) {
    if (!moment.isMoment(startDate)) startDate = moment(startDate);
    if (!moment.isMoment(endDate)) endDate = moment(endDate);

    return endDate.diff(startDate, "days");
  }

  render() {
    const { startDate, endDate } = this.state;

    const daysLeft = this.calculateDaysLeft(startDate, endDate);
    return (
      <div>
        <h3>Get Difference between two dates in days</h3>
        <b>Start Date</b>:
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChangeStart}
        />
        &nbsp;&nbsp;&nbsp;
        <b>End Date</b>:
        <DatePicker
          selected={this.state.endDate}
          onChange={this.handleChangeEnd}
        />
        <div className="amount">{daysLeft}</div>
      </div>
    );
  }
}




