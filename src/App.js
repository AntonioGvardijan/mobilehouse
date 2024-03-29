import React, { useEffect } from 'react'
import Landing from './Components/Landing'
import firebase from "firebase/app";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
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
        <Route exact path="/" component={Landing}/>
        <AuthProvider>
        <Route exact path="/admin" component={AdminAuth}/>
        </AuthProvider>
      </Switch>
    </Router>
  )
}

export default App;