import React, {Component} from 'react'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {DateRangePicker} from 'react-dates';
import firebase from "firebase/app";
import { render } from '@testing-library/react';

class CalendarAdmin extends Component  {

    constructor(props){
      super(props);
      this.state = {
        startDate: null,
        endDate: null,
        startingDate: "",
        endingDate: "",
        date: "",

        nameRef: "",
        emailRef: "",
        messageRef: "",
        numberRef: "",
        occupiedDates:[]
      }
    }

    componentDidMount(){
        firebase.firestore().collection("Dates").doc("EY3kntWS5XQZCHvcOQA7").get().then(doc=>{
            this.setState({occupiedDates:doc.data().dates})
        })
    }
     addDatesBetween = (startDate,endDate)=> {
        
        let arr = []
        let currentDate = startDate
        while(currentDate<= endDate){
            arr.push(currentDate.format('YYYY/MM/DD'))
            currentDate = currentDate.add(1,'days');
        }
        
        return arr
    }

    handleSubmit = ()=> {
        alert()
        const new_dates = this.addDatesBetween(this.state.startDate,this.state.endDate)
        const dates = [...this.state.occupiedDates,...new_dates]
   
        firebase.firestore().collection("Dates").doc("EY3kntWS5XQZCHvcOQA7").set({dates})
    }


    alert = () => {
        
        this.setState({
          startingDate: (this.state.startDate && this.state.startDate.format('YYYY/MM/DD')),
          endingDate: (this.state.endDate && this.state.endDate.format('YYYY/MM/DD'))
        })
 
      } 

      isBlocked = day =>{
        const availableDates = this.state.occupiedDates
        return availableDates.some(date => day.isSame(date, 'day'))
      }

      render(){
          return(
        <>
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
          /><br></br>
            <button type="button" onClick={this.handleSubmit}>Submit</button>
        </>
          )
      }
        
}

export default CalendarAdmin;