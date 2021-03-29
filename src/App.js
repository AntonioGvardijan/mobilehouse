import React, { useState } from 'react'
import Calendar from './Components/Calendar'
import Form from './Components/Form'

function App () {

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return(
    <>
      <Calendar setStartDate={setStartDate} setEndDate={setEndDate} />
      <Form/>
    </>
  )
}

export default App;