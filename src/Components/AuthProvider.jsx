import React, {useState, useEffect} from 'react';
import firebase from 'firebase'





export const firebaseAuth = React.createContext()



const AuthProvider = (props) => {

  const initState = {email: '', password: ''}
  const [inputs, setInputs] = useState(initState)
  const [errors, setErrors] = useState([])
  const [token, setToken] = useState(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((e)=>{
      if(e){
        setToken(e.refreshToken)
      }
      else{
        setToken(null)
      }
    })
  }, [])

  const handleSignup = () => {

    // middle man between firebase and signup 
    // console.log('handleSignup')
    // // calling signup from firebase server
    // authMethods.signup(inputs.email, inputs.password,setErrors ,setToken )
    // console.log(errors, token)
  }
  const handleSignin = (logIn) => {
    //changed to handleSingin

    // made signup signin
    authMethods.signin(logIn.email, logIn.password, setErrors, setToken)
  }

  const handleSignout = () => {
    authMethods.signout(setErrors, setToken)
  }

  return (
    <firebaseAuth.Provider
    value={{
      //replaced test with handleSignup
      handleSignup,
      handleSignin,
      token,
      inputs,
      setToken,
      setInputs,
      errors,
      handleSignout,
    }}>
      {props.children}
    </firebaseAuth.Provider>
  );
};

export default AuthProvider;


const authMethods = {
  // firebase helper methods go here... 
  signup: (email, password, setErrors,setToken ) => {
    // firebase.auth().createUserWithEmailAndPassword(email,password) 
    //   //make res asynchonous so that we can make grab the token before saving it.
    //   .then( async res => {
    //     const token = await Object.entries(res.user)[5][1].b
    //     //set token to localStorage 
    //     await localStorage.setItem('token', token)
    //     setToken(token)
    //     //grab token from local storage and set to state. 
    //       console.log(res)
    //     })
    //     .catch(err => {
    //     setErrors(prev => ([...prev, err.message]))
    //   })
    },
  signin: (email, password, setErrors, setToken) => {
    //change from create users to...
    firebase.auth().signInWithEmailAndPassword(email, password) 
      //everything is almost exactly the same as the function above
      .then( async res => {
        const token = await Object.entries(res.user)[5][1].b
          //set token to localStorage 
          await localStorage.setItem('token', token)
          
          
          setToken(window.localStorage.token)
         
        })
        .catch(err => {
          setErrors(prev => [...new Set([...prev, err.message])])
        })
      },
      //no need for email and password
      signout: (setErrors, setToken) => {
      // signOut is a no argument function
    firebase.auth().signOut().then( res => {
      //remove the token
      localStorage.removeItem('token')
        //set the token back to original state
        setToken(null)
    })
    .catch(err => {
      //there shouldn't every be an error from firebase but just in case



      setErrors(prev => [...new Set([...prev, err.message])])

      //whether firebase does the trick or not i want my user to do there thing.
        localStorage.removeItem('token')
          setToken(null)

    })
    },
  }