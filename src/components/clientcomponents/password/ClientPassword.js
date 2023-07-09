import React from 'react'
import './clientpassword.css'
//import { Editor } from '@tinymce/tinymce-react';

const ClientPassword = () => {
    
  return (
    <>
      <div className='clientpassword'>
        <h2>Change your password</h2>

        <form className='form'>    
            <div className='f-group'>
                <div className='form-group'>
                    <label>Old password</label>
                    <input type="text" placeholder="Firstname" />
                </div>

                <div className='form-group'>
                    <label>New Password</label>
                    <input type="text" placeholder="Firstname" />
               </div>
            </div>

            

            </form>
           
      </div>
    </>
  )
}

export default ClientPassword