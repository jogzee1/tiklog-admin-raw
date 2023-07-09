import { Card } from '@mui/material'
import React from 'react'

const Forgotpassword = () => {
  return (
    <>
      <div className='auth-section'>
        <Card className='card'>
            <img src="assets/images/logo.png" alt="tiklog.com" /> 
            <h3>Forgot your password?</h3>
            <p>Enter your email address <br></br>We will validate and send a link to your email</p>
            <form>
                <input type="email" placeholder='Email' />
                
                <button type='submit'>Login</button>
            </form>
            
        </Card>
        </div>
    </>
  )
}

export default Forgotpassword