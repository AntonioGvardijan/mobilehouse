import React, { useEffect } from 'react'
import Landing from './Components/Landing'
import firebase from "firebase/app";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CalendarAdmin from './Components/CalendarAdmin';
import AuthProvider from './Components/AuthProvider';
import AdminAuth from './Components/AdminAuth';

function App () {

  useEffect(() => {
    return () => {
    }
  }, [])


  return(
    <Router>
      <Switch>
        <Route exact path="/mobilehouse" component={Landing}/>
        <AuthProvider>
        <Route path="/admin" component={AdminAuth}/>
        </AuthProvider>
      </Switch>
    </Router>
  )
}

export default App;