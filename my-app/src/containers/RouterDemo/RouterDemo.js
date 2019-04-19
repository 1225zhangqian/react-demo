import React, { Component } from 'react'
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'moment/locale/es';

import moment from 'moment';

moment.locale('es');
class RouterDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: this.props.startDate ? moment(this.props.startDate) : this.props.startDate,
      focused: false,
      startFocused: false,
      endFocused: false,
      endDate: this.props.endDate ? moment(this.props.endDate) : this.props.endDate,
      today: moment().endOf('day'),
    }
  }
  render() {
    return <div>
      <p>路由用例</p>
      <a href="https://reacttraining.com/react-router/web/example/basic">https://reacttraining.com/react-router/web/example/basic</a>
      <DateRangePicker
        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
      />

    </div>
  }
}


export default RouterDemo
