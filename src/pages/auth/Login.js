import { Card, Checkbox, FormControlLabel } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import './auth.css'

import { useLoginMutation } from '../../redux/slices/usersApiSlice';
import { setCredentials } from '../../redux/slices/authSlice';
import Loader from '../../components/loader/Loader';


const initialState = {
  email: "",
  password: "",
};

const Login = () => {

  const [formData, setFormData] = useState(initialState);
  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, {isLoading}] = useLoginMutation();

  const {userInfo} = useSelector((state) => state.auth);

  useEffect(() => {
    if(userInfo) {
      navigate('/')
    }
  }, [navigate, userInfo]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const loginUser = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("All fields are required");
    }

    try {
      const res = await login({email, password}).unwrap();
      dispatch(setCredentials({...res}))
      navigate('/')
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }

    
    
  };

  return (
    <>
     <div className='auth-section'>
     <Card className='card'>
        <img src="assets/images/logo.png" alt="tiklog.com" /> 
        <h3>Hi, Welcome back</h3>
        <p>Enter you credencials to continue</p>
        <form onSubmit={loginUser}>
            <input type="email" placeholder="email" required name="email" value={email} onChange={handleInputChange} />

            <input type="password"  placeholder="Password" name="password" value={password} onChange={handleInputChange} />
            <div className='flex'>
                <div><FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" /></div>

                <div><p className='pf-pass'>Forgot password</p></div>
            </div>
            <button type='submit'>Login</button>
        </form>
        {isLoading && <Loader />}
     </Card>
     </div>
    </>
  )
}

export default Login