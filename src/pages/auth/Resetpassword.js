import { Card } from '@mui/material'
import React from 'react'

const Resetpassword = () => {
  return (
    <>
      <div className='auth-section'>
        <Card className='card'>
            <img src="assets/images/logo.png" alt="tiklog.com" /> 
            <h3>Reset your password?</h3>
            <p>Enter your new credencials to continue</p>
            <form>
                <input type="password" placeholder='password' />
                <input type="password" placeholder='Confirm password' />
                
                <button type='submit'>Login</button>
            </form>
            
        </Card>
        </div>
    </>
  )
}

export default Resetpassword