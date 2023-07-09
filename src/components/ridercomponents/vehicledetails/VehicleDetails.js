import React from 'react'
import './vehicledetails.css'

const VehicleDetails = () => {
  return (
    <>
      <div className='vehicledetails'>
        <h2>Vehicle details</h2>

        <form className='form'>    
            <div className='f-group'>
                <div className='form-group'>
                    <label>Vehicle Type</label>
                    <select>
                        <option>Bike</option>
                        <option>Car</option>
                        <option>Bus</option>
                        <option>Truck</option>
                    </select>
                </div>

                <div className='form-group'>
                    <label>Car Name</label>
                    <input type="text" placeholder="Car name" />
               </div>
               <div className='form-group'>
                    <label>Car Model</label>
                    <input type="text" placeholder="car Model" />
               </div>

               <div className='form-group'>
                    <label>Color</label>
                    <input type="text" placeholder="Color" />
               </div>
               <div className='form-group'>
                    <label>Plate Number</label>
                    <input type="password" placeholder="Plate Number" />
               </div>

               <div className='form-group'>
                    <label>Plate Number</label>
                    <input type="file" placeholder="Plate Number" />
               </div>

               <button className='button'>Change</button>
            </div>

            

            </form>
           
      </div>
    </>

  )
}

export default VehicleDetails