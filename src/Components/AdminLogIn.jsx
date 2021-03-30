import React, { useContext, useEffect ,useState } from 'react'
import { Redirect } from 'react-router-dom';



import { firebaseAuth } from './AuthProvider';

function AdminLogIn() {

  const {handleSignin, inputs, setInputs,token, errors} = useContext(firebaseAuth)

    const handleSubmit = (e) => {
      e.preventDefault()
      const email = e.target.email.value
      const pass = e.target.password.value
      const sendState = {email: email, password: pass}
      setInputs(sendState)
      handleSignin(sendState)
      
    }

    if(token!==null){
      return  <Redirect to ={{pathname:"/admin"}}/>
    }
   
    return (

        <form onSubmit={handleSubmit}>
        {/* replace the div tags with a form tag */}
        Signin
        {/* make inputs  */}

        {/* TODO FIX THIS  */}
        <input  name="email" placeholder='email' type="email"  required/>
        <input  name="password" placeholder='password' type="text" required />
  
        <button>signin</button>
        {errors.length > 0 ? errors.map(error => <p style={{color: 'red'}}>{error}</p> ) : null}





      </form>
        
    )
}

export default AdminLogIn
