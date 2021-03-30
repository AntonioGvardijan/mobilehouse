import React, { useContext } from 'react'
import { firebaseAuth } from './AuthProvider'
import CalendarAdmin from './CalendarAdmin'

function AdminAuth() {
    const {token} = useContext(firebaseAuth)
    const {handleSignin, inputs, setInputs, errors} = useContext(firebaseAuth)

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const pass = e.target.password.value
        const sendState = {email: email, password: pass}
        setInputs(sendState)
        handleSignin(sendState)
        
      }
  
    if(token){
        return <CalendarAdmin/>
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="email" placeholder="email"/>
                <input name="password" placeholder="password"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AdminAuth
