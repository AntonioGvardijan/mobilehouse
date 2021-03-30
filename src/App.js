import React from 'react'
import Landing from './Components/Landing'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App () {

  return(
    <Router>
      <Switch>
        <Route exact path="/" component={Landing}/>
        {/*<Route path="/admin" component={TokenValidation}/>*/}
      </Switch>
    </Router>
  )
}

export default App;