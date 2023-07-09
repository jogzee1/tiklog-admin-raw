import React, { useState } from 'react'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'

const Layout = ( {children}) => {

    const [isShown, setIsShown] = useState(true);

  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);

    // 👇️ or simply set it to true
     //setIsShown(true);

     //setIsShown(isShown);
  };

  return (
    <>
      <div className='app-container'>
      <div className='app-sidebar'>{isShown && <Sidebar handleClick={handleClick} />}</div>
      <div className='app-content'>
        {/*<Header onToggleSidebar={onToggleSidebar} />*/}
        <Header handleClick={handleClick} />
        {children}
        </div>
     </div>
    </>
  )
}

export default Layout