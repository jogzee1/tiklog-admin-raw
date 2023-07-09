import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import { validateEmail } from '../../redux/features/auth/authService';
import './newadmin.css'
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from 'react-router-dom';
import Loader from '../../components/loader/Loader';
import { useRegisterMutation } from '../../redux/slices/usersApiSlice';
import { setCredentials } from '../../redux/slices/authSlice';


const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "male",
    role: "super admin role",
    password: "",
    confirm_password: "",
  };

const NewAdmin = () => {

    const [formData, setFormData] = useState(initialState);
    const { firstName, lastName, email, phone, gender, role, password, confirm_password } = formData;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    //const [register, { isLoading }] = useRegisterMutation();

    


    
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const registerAdminUser = async (e) => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !phone || !gender || !role || !password) {
          return toast.error("All fields are required");
        }
        if (password.length < 6) {
          return toast.error("Password must be up to 6 characters");
        }
        if (!validateEmail(email)) {
          return toast.error("Please enter a valid email");
        }
        if (password !== confirm_password) {
          return toast.error("Passwords do not match");
        }
        /*else {
          try {
            const res = await register({ firstName, lastName,  email, phone, gender, role, password }).unwrap();
            dispatch(setCredentials({ ...res }));
            navigate('/admin-users');
          } catch (err) {
            toast.error(err?.data?.message || err.error);
          }
        }*/


    };


  return (
    <>
     <section className='newadmin-section'>
        <div className='container'>
            <h2>Add New Client</h2>
            
            <form className='form' onSubmit={registerAdminUser}>
            <p className='blue-p'>Basic Client Informaton</p>
            <p>Please fill all information correctly</p>
            <div className='f-group'>
                <div className='form-group'>
                    
                    <select onChange={handleInputChange} name="role" value={role}>
                        <option>super Admin role</option>
                        <option>Manager</option>
                        <option>Developers</option>
                    </select>
                </div>

                <div className='form-group'>
                        
                        <select onChange={handleInputChange} name="gender" value={gender}>
                            
                            <option >Male</option>
                            <option >Female</option>
                        </select>
                    </div>
            </div>
                <div className='f-group'>
                    <div className='form-group'>
                        
                        <input type="text" placeholder="First Name" required name="firstName" value={firstName} onChange={handleInputChange} />
                    </div>

                    <div className='form-group'>
                        
                        <input type="text" placeholder="Last Name" required name="lastName" value={lastName} onChange={handleInputChange} />
                    </div>
                </div>
                
                <div className='f-group'>
                <div className='form-group'>
                    
                    <input type="email" placeholder="Email" required name="email" value={email} onChange={handleInputChange} />
                </div>

                <div className='form-group'>
                    
                    <input type="phone" placeholder="Phone Number" required name="phone" value={phone} onChange={handleInputChange} />
                </div>

                </div>
                <div className='f-group'>
                <div className='form-group'>
                    
                    <input type="password"  placeholder="Password" name="password" value={password} onChange={handleInputChange} />
                </div>

                <div className='form-group'>
                    
                    <input type="password"  placeholder="Re-type Password" name="confirm_password" value={confirm_password} onChange={handleInputChange} />
                </div> 
                </div>

                <button type="submit" className='button'>Add Client</button>
            </form>
            
          
        </div>
     </section>
    </>
  )
}

export default NewAdmin