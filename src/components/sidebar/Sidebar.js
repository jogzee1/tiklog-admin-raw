import React, { useState } from 'react'
import './sidebar.css';
import logo from './logo.png';
import {
    FaUsers,
    FaCar,
}from "react-icons/fa";
import { IoMenuOutline, IoSettingsOutline, IoSpeedometerOutline } from "react-icons/io5";
import {  MdArrowCircleLeft,  MdOutlineEditNote, MdOutlinePowerSettingsNew, MdOutlineSupervisorAccount } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from '../../redux/slices/usersApiSlice';
import { logout } from '../../redux/slices/authSlice';


const Sidebar = ({children, handleClick}) => {

    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);

    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<IoSpeedometerOutline size={20} />
        },
        {
            path:"/clients",
            name:"Clients",
            icon:<FaUsers size={20} />
        },
        {
            path:"/riders",
            name:"Riders",
            icon:<FaCar size={20} />
        },
        {
            path:"/web-pages",
            name:"Website Pages",
            icon:<MdOutlineEditNote size={20}  />
        },
        
        {
            path:"/settings",
            name:"settings",
            icon:<IoSettingsOutline size={20} />
        }
    ]

    const { userInfo } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const [logoutApiCall] = useLogoutMutation();


    const logoutHandler = async () => {
        try {
          await logoutApiCall().unwrap();
          
          navigate('/login');
        } catch (err) {
          console.error(err);
        }
      };

  return (
    <>
     <div className='main-content'>

        <div style={{width: isOpen ? "300px" : "70px", padding: isOpen ? "20px" : "20px 10px"}} className="sidebar">
       
            <div className='side-top'>
            <IoMenuOutline size={20} onClick={handleClick}  />
                <img style={{height: isOpen ? "50px" : "30px"}} src={logo} alt='tiklog-logo' />

                <div className='side-center'>
            {
                   menuItem.map((item, index)=>(
                       <Link to={item.path} key={index} className="link active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </Link>
                   ))
               }
            </div>
            </div>

            

            <div className='side-bottom'>
            <div className='side-b-div'>
            <Link to='/admin-users' className="link active">
                <div className="icon"><MdOutlineSupervisorAccount size={20} /></div>
                <div style={{display: isOpen ? "block" : "none"}} className="link_text">Admin Users</div>
             </Link>
            <div className="link active" onClick={logoutHandler}>
                <div className="icon"><MdOutlinePowerSettingsNew size={20} /></div>
                <div style={{display: isOpen ? "block" : "none"}} className="link_text">Logout</div>
             </div>
            </div>

             <MdArrowCircleLeft size={30} color="#1f6cb5" className='b-icon' onClick={toggle} />
            </div>
        </div>
        {/*<main>{children}</main>*/}

     </div>
     
    </>
  )
}

export default Sidebar