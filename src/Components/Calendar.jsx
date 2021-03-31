import React, {Component} from 'react';
import * as emailjs from 'emailjs-com'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {DateRangePicker} from 'react-dates';
import firebase from 'firebase';
import kuca1 from '../Images/kuca1.jpeg'
import kuca2 from '../Images/kuca2.jpeg'
import kuca3 from '../Images/kuca3.jpeg'
import kuca4 from '../Images/kuca4.jpeg'
import kuca5 from '../Images/kuca5.jpeg'
import kuca6 from '../Images/kuca6.jpeg'
import cijene from '../Images/prices.png'
import {FaFacebook, FaInstagram} from 'react-icons/fa'
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from 'react-image-gallery';
import {Container, Image, FormContainer, Wrapper, Footer, Headline, Subline, FooterText} from './CalendarStyle'

import {
    Input,
    FormControl,
    FormLabel,
    Button,
    Textarea,
    Box,
    Flex
  } from '@chakra-ui/react'

  const images = [
    {
      original: kuca1,
      thumbnail: kuca1,
      thumbnailWidth: 350,
      thumbnailHeight: 250,
      
    },
    {
      original: kuca2,
      thumbnail: kuca2,
      thumbnailWidth: 350,
      thumbnailHeight: 250,
    },
    {
      original: kuca3,
      thumbnail: kuca3,
      thumbnailWidth: 350,
      thumbnailHeight: 250,
    },
    {
      original: kuca6,
      thumbnail: kuca6,
      thumbnailWidth: 350,
      thumbnailHeight: 250,
    },
  ];


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
        occupiedDates :[],

        
      }

    
      

      this.firebaseApp = firebase.apps[0];
      //console.log(this.state.DateRangePicker.DateInput.id);
    }


    componentDidMount(){
      console.log(this.state.occupiedDates)
      firebase.firestore().collection("Dates").doc("EY3kntWS5XQZCHvcOQA7").get().then(doc=>{
        this.setState({
          occupiedDates:doc.data().dates
        })
      })
    }

    componentDidUpdate(){
      console.log(this.state.occupiedDates)
    
  }

    handleSubmit(e) {
        alert("Reservation has been succesfully sent.")
        e.preventDefault()
        const {nameRef, emailRef, messageRef, startingDate, endingDate, numberRef} = this.state
        let templateParams = {
          from_name: nameRef,
          reply_to: emailRef,
          to_name: 'mobilehomes.dream@gmail.com',
          poruka: messageRef,
          StartDate: startingDate,
          EndDate: endingDate,
          brojGostiju: numberRef,
         }
         
         emailjs.send(
          'service_mhd',
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
      const availableDates = this.state.occupiedDates
      return availableDates.some(date => day.isSame(date, 'day'))
    }
      
    render(){
  
      return (
        <Container>
          
          <Image>
            <ImageGallery items={images}
            enableLightbox={false}
            enableImageSelection={true}
            onClickThumbnail = {this.onSelectImage}
            thumbnailstyle = {this.styleSmall}/>
          </Image>
          
          <Headline>Mobile Homes Dream</Headline>
          <Subline>Register your vacation here</Subline>
          <img src={cijene} style={{marginBottom: "30px", width: "100%"}}/>
          <Wrapper>
          <DateRangePicker
          className="calendar"
          startDate={this.state.startDate} 
          startDateId="your_unique_start_date_id" 
          endDate={this.state.endDate} 
          endDateId="your_unique_end_date_id" 
          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} 
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => this.setState({ focusedInput })}
          displayFormat="DD/MM/YYYY"
          isDayBlocked={this.isBlocked}
          numberOfMonths= "1"
          
          />
          <br/>
          <FormContainer>
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
          </FormContainer>
          </Wrapper>

          <Footer>
            <FooterText>Follow us on social media:</FooterText>
            <a href="https://www.facebook.com/Mobile-Homes-Dream-100289145503066"><FaFacebook style={{color: "white", marginLeft: "20px", fontSize: "1.2rem", marginTop: "6px"}}/></a>
            <a href="https://www.instagram.com/mobilehomes.dream/"><FaInstagram style={{color: "white", marginLeft: "20px", fontSize: "1.4rem", marginTop: "5px"}}/></a>
          </Footer>
   
        </Container>
    )
    
  }
}



export default Calendar;