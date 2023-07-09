import React from 'react'
import './dariders.css'

const DaRiders = () => {
  return (
    <>
     <div className='dar-container'>
        <div className='dar-top'>
            <h3>New Riders</h3>
            <p>View all</p>
        </div>

        <div>
        <div className='dar-down'>
            <img src='assets/images/dp.png' alt="rider avartar" />
            <div>
                <p>John Thamas</p>
                <span>Joined feb 14 2023</span>
            </div>
            <button className='viewButton'>View</button>
        </div>

        <div className='dar-down'>
            <img src='assets/images/dp.png' alt="rider avartar" />
            <div>
                <p>John Thamas</p>
                <span>Joined feb 14 2023</span>
            </div>
            <button className='viewButton'>View</button>
        </div>

        <div className='dar-down'>
            <img src='assets/images/dp.png' alt="rider avartar" />
            <div>
                <p>John Thamas</p>
                <span>Joined feb 14 2023</span>
            </div>
            <button className='viewButton'>View</button>
        </div>

        <div className='dar-down'>
            <img src='assets/images/dp.png' alt="rider avartar" />
            <div>
                <p>John Thamas</p>
                <span>Joined feb 14 2023</span>
            </div>
            <button className='viewButton'>View</button>
        </div>
        </div>
     </div>
    </>
  )
}

export default DaRiders