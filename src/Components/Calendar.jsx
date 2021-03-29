import React, {Component} from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {DateRangePicker, DayPickerRangeController} from 'react-dates';
import firebase from 'firebase';
import moment from 'moment';



class Calendar extends Component  {
    constructor(props){
      super(props);
      this.state = {
        startDate: null,
        endDate: null,
        feedback: '',
        name: 'Name',
        email: 'email@example.com',
        startingDate: null,
        endingDate: null,
        
      }

      let setStartDate = this.setStartDate.bind(this)
      let setStartDate = this.setStartDate.bind(this)

      this.firebaseApp = firebase.apps[0];
      //console.log(this.state.DateRangePicker.DateInput.id);
    }
  
    alert = () => {
      this.setState({
        startingDate: (this.state.startDate && this.state.startDate.format('ll')),
        endingDate: (this.state.endDate && this.state.endDate.format('ll'))
      })
    } 
  
    isBlocked = day =>{
      const availableDates = ["2021-04-20"]
      return availableDates.some(date => day.isSame(date, 'day'))
    }
      
    render(){
  
      return (
        <div>
          <h1>React & Firebase</h1>
          <h2>By @farazamiruddin</h2>
          
          <DateRangePicker
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          displayFormat="DD/MM/YYYY"
          isDayBlocked={this.isBlocked}
          />
          <br/>
          <DayPickerRangeController
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          initialVisibleMonth={() => moment().add(2, "M")} // PropTypes.func or null,
          isDayBlocked={this.isBlocked}
        />
  
        
  
        <a onClick={this.alert} href={"mailto:toni.gvardijan7@gmail.com?body=Start date:" + this.state.startingDate + "\\nEnd date:" + this.state.endingDate }>Send mail</a>
        
        </div>
    )
  }

}

export default Calendar;