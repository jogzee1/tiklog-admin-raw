import React from 'react'
import './settingspassword.css'

const SettingsPassword = () => {
  return (
    <>
      <div className='settingspassword'>
        <h2>Change your password</h2>

        <form className='form'>    
            <div className='f-group'>
                <div className='form-group'>
                    <label>Old password</label>
                    <input type="text" placeholder="Firstname" />
                </div>

                <div className='form-group'>
                    <label>New Password</label>
                    <input type="password" placeholder="********" />
               </div>
               <div className='form-group'>
                    <label>Re-enter New Password</label>
                    <input type="password" placeholder="********" />
               </div>

               <button className='button'>Change</button>
            </div>

            

            </form>
           
      </div>
    </>

  )
}

export default SettingsPassword