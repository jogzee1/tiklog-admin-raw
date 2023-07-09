import React from 'react'
import './singleadmin.css'

import dp from './dp.png'
import upload from './photo.png'

const SingleAdmin = () => {
  return (
    <>
    <div className='singleadmin-container'>
        <div className='left'>
            <div className='imgs-div'>
                <img src={dp} alt='tiklog profile' className='dp' />
                <div className='upload-img'>
                    <label htmlFor='file'>
                    <img src={upload} alt='tiklog upload' className='#' />
                    </label>
                    <input type="file" id="file" />
                </div>
            </div>

            <h3>Thamas Bridgen</h3>
        </div>

        <div className='right'>
            <p className='blue-p'>Basic Client Informaton</p>
            <p>Please fill all information correctly</p>
            <form className='form'>
                
                    <div className='f-group'>
                        <div className='form-group'>
                            <label>First name</label>
                            <input type="text" placeholder="Firstname" />
                        </div>

                        <div className='form-group'>
                        <label>Last name</label>
                        <input type="text" placeholder="Firstname" />
                    </div>

                    <div className='form-group'>
                        <label>Other names</label>
                        <input type="text" placeholder="Firstname" />
                    </div>
                    </div>
                    
                    <div className='f-group'>
                    <div className='form-group'>
                        <label>Email</label>
                        <input type="email" placeholder="Email" />
                    </div>

                    <div className='form-group'>
                        <label>Date of Birth</label>
                        <input type="date" placeholder="Phone no" />
                    </div>

                    <div className='form-group'>
                    <label>Password</label>
                            <select>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>
                            </select>
                    </div>
                    
                    </div>

                    <div className='f-group'>
                        <div className='form-group'>
                            <label>Address line 1</label>
                            <textarea placeholder="Address line 1"></textarea>
                        </div>

                        <div className='form-group'>
                            <label>Address line 2</label>
                            <textarea placeholder="Address line 2"></textarea>
                        </div>

                        <div className='form-group'>
                            <label>Password</label>
                            <select>
                                <option>Nigeria</option>
                                <option>Ghana</option>
                                <option>Togo</option>
                            </select>
                        </div>
                    </div>

                    <div className='f-group'>
                        <div className='form-group'>
                            <label>Phone No</label>
                            <input type="phone" placeholder="Phone Number" />
                        </div>

                        <div className='form-group'>
                        <label>State</label>
                        <input type="text" placeholder="State" />
                    </div>

                    <div className='form-group'>
                        <label>Postal Code</label>
                        <input type="number" placeholder="Postal Code" />
                    </div>
                    </div>

                    <div className='f-group'>
                        <button className='button'>Save</button>
                    </div>
                </form>
        </div>
     </div>
    </>
  )
}

export default SingleAdmin