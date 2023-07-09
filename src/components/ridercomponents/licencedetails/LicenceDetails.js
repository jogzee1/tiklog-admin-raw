import React from 'react'
import './licensedetails.css'

const LicenceDetails = () => {
  return (
    <>
      <div className='licensedetails'>
        <h2>License details</h2>

        <form className='form'>    
            <div className='f-group'>

                <div className='form-group'>
                    <label>License Number</label>
                    <input type="text" placeholder="License Number" />
               </div>
               <div className='form-group'>
                    <label>Issue Date</label>
                    <input type="date" placeholder="Issue Date" />
               </div>

               <div className='form-group'>
                    <label>Expire Date</label>
                    <input type="date" placeholder="Color" />
               </div>

               <div className='form-group'>
                    <label>License Images</label>
                    <input type="file" placeholder="Plate Number" />
               </div>

               <button className='button'>Change</button>
            </div>

            

            </form>
           
      </div>
    </>
  )
}

export default LicenceDetails