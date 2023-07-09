import React from 'react'
import './header.css'
import { IoMenuOutline, IoNotificationsCircleOutline } from 'react-icons/io5'
import {  useSelector } from "react-redux";



const Header = ({handleClick}) => {
    const { userInfo } = useSelector((state) => state.auth)


  return (
    <>
      <div className='header'>
       <div className='h-left-menu'>
       <IoMenuOutline size={20} onClick={handleClick}  />
       </div>
       <div className='h-right-menu'>
        <IoNotificationsCircleOutline size={20} />
        { userInfo ? (
          <>
          <div className='h-user'>
            <p>{userInfo.firstName}name</p>
            <img src='assets/images/dp.png' alt='tiklog-user' />
        </div>
          </>
        ) : (<></>) }
        
       </div>
      </div>
    </>
  )
}

export default Header