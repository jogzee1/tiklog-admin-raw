import React, { useState } from 'react'
import './newrider.css'

const initialState = {
    email: "",
    firstname: "",
    lastname: "",
    othername: "",
    password: "",
    password2: "",
  };

const NewRider = () => {

    const [formData, setFormData] = useState(initialState);
    const { firstname, lastname, othername, email, phone, password } = formData;
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

  return (
    <>
     <section className='newrider-section'>
        <div className='container'>
            <h2>Add New Rider</h2>
            
            <form className='form'>
            <p className='blue-p'>Basic Client Informaton</p>
            <p>Please fill all information correctly</p>
                <div className='f-group'>
                    <div className='form-group'>
                        <label>First name</label>
                        <input type="text" placeholder="First Name" required name="firstname" value={firstname} onChange={handleInputChange} />
                    </div>

                    <div className='form-group'>
                    <label>Last name</label>
                    <input type="text" placeholder="Last Name" required name="lastname" value={lastname} onChange={handleInputChange} />
                </div>

                <div className='form-group'>
                    <label>Other names</label>
                    <input type="text" placeholder="Other Name" required name="othername" value={othername} onChange={handleInputChange} />
                </div>
                </div>
                
                <div className='f-group'>
                <div className='form-group'>
                    <label>Email</label>
                    <input type="email" placeholder="Email" required name="email" value={email} onChange={handleInputChange} />
                </div>

                <div className='form-group'>
                    <label>Phone number</label>
                    <input type="phone" placeholder="Phone" required name="phone" value={phone} onChange={handleInputChange} />
                </div>
                </div>
                <div className='f-group'>
                    <div className='form-group'>
                        <label>Password</label>
                        <input type="password"  placeholder="Password" name="password" value={password} onChange={handleInputChange} />
                    </div>
                </div>

                <div className='form-group'>
                    <button className='button'>Add Rider</button>
                </div>
            </form>
        </div>
     </section>
    </>
  )
}

export default NewRider