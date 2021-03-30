import React, {Component} from 'react';
import * as emailjs from 'emailjs-com'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {DateRangePicker} from 'react-dates';
import firebase from 'firebase';
import {
    Input,
    FormControl,
    FormLabel,
    Button,
    Textarea,
    Box,
    Flex
  } from '@chakra-ui/react'


class Calendar extends Component  {
    constructor(props){
      super(props);
      this.state = {
        startDate: null,
        endDate: null,
        startingDate: "",
        endingDate: "",

        nameRef: "",
        emailRef: "",
        messageRef: "",
        numberRef: "",
      }



      

      this.firebaseApp = firebase.apps[0];
      //console.log(this.state.DateRangePicker.DateInput.id);
    }

    

    handleSubmit(e) {
        e.preventDefault()
        const {nameRef, emailRef, messageRef, startingDate, endingDate, numberRef} = this.state
        let templateParams = {
          from_name: nameRef,
          reply_to: emailRef,
          to_name: 'toni.gvardijan7@gmail.com',
          poruka: messageRef,
          StartDate: startingDate,
          EndDate: endingDate,
          brojGostiju: numberRef,
         }
         
         emailjs.send(
          'service_mobilehomes',
          'template_m41xhfo',
           templateParams,
          'user_3s2VO5yeBewihEufqZfux'
         )
         this.resetForm();
     }

     resetForm() {
        this.setState({
          nameRef: '',
          emailRef: '',
          messageRef: '',
          numberRef: '',
        })
      }
    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
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

            <Flex flexDirection="column" >
                <form className="contact-form" onSubmit={this.handleSubmit.bind(this)}>
                    <FormControl isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input type="text" name="nameRef" className="nameRef" value={this.state.nameRef} onChange={this.handleChange.bind(this, 'nameRef')} autoComplete="false" ref={this.nameRef} />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" name="emailRef" className="emailRef" value={this.state.emailRef} onChange={this.handleChange.bind(this, 'emailRef')} autoComplete="false" ref={this.emailRef} />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Number of guests</FormLabel>
                        <Input type="number" name="numberRef" className="numberRef" value={this.state.numberRef} onChange={this.handleChange.bind(this, 'numberRef')} autoComplete="false" ref={this.numberRef}/>
                    </FormControl>

                    <FormControl>
                        <FormLabel>Message</FormLabel>
                        <Textarea name="messageRef" value={this.state.messageRef} onChange={this.handleChange.bind(this, 'messageRef')} autoComplete="false" ref={this.messageRef} />
                    </FormControl>
                    <Button type="submit" value="Send" className="submit" onClick={this.alert} bgColor="brand.100" mt="4">Send</Button>
                </form>
            </Flex>

          {/*<Form onSubmit={this.handleSubmit.bind(this)}>
          <FormControl id="full-name" isRequired>
              <FormLabel>Full name</FormLabel>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
              />
              
          </FormControl>

          <FormControl id="email" isRequired>
              <FormLabel>Email adress</FormLabel>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email"
              />
              <FormHelperText>We'll never share your email</FormHelperText>
          </FormControl>

          <FormControl id="amount" isRequired>
              <FormLabel>Number of guests</FormLabel>
              <NumberInput max={10} min={1}
                
              >
                <NumberInputField 
                name="broj_gostiju"
                value={this.state.broj_gostiju}
                onChange={this.handleChange.bind(this, 'broj_gostiju')}/>
                <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
          </FormControl>


          <FormControl id="message">
              <FormLabel>Leave us a message</FormLabel>
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                placeholder="Enter message"
                onChange={this.handleChange.bind(this, 'message')}
              />
          </FormControl>
          </Form>

          <Button variant="primary" type="submit" onClick={this.alert}>
              Submit
      </Button>*/}









          {/*<Form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="formBasicName">
              
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
              />
            </FormGroup>
            <FormGroup controlId="formBasicEmail">
              
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email"
              />
            </FormGroup>
            <FormGroup controlId="formBasicMessage">
              
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                placeholder="Enter message"
                onChange={this.handleChange.bind(this, 'message')}
              />
            </FormGroup>
            <Button variant="primary" type="submit" onClick={this.alert}>
              Submit
            </Button>
      </Form>*/}
        
        </div>
    )
    
  }
}



export default Calendar;