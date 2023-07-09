import React from 'react'
import './clienthistory.css'
import dp from './dp.png'
import mapimg from './map.png'

const SingleHistory = () => {
  return (
    <>
      <section className='singlehistory-section'>
      <div className='container'>
         <div className='left'>
            <div className='history-content'>
                <div className='his-left'>
                    <div className='sh-flex'>
                        <img src={dp} alt='tiklog' />
                        <p>john thamas</p>
                    </div>
                    <p className='his-mt'>Personal Effects</p>
                </div>
                <div className='his-right'>
                    <p>jan 15 23 - jan 16 23</p>
                </div>
                
            </div>

            <div className='history-content'>
              <div className='his-left'>
              <p>Status</p>
              <p>Delivery fee</p>
              </div>

              <div className='his-right'>
              <p>Completed</p>
              <p>#5000</p> 
                </div>
            </div>

            <div className='history-content'>
              <div className='his-left'>
              <p>Item Type</p>
              <p>Estimated Value</p>
              </div>

              <div className='his-right'>
              <p>Personal Effect</p>
              <p>#5000</p> 
                </div>
            </div>

            <div className='history-content'>
              <div className='his-left'>
              <p>Pickup time</p>
              <p>Sender</p>
              <p>Sender Address</p>
              </div>

              <div className='his-right'>
              <p>25 jan 2023 - 2pm</p>
              <p>Priscilla Okonji</p>
              <p>92 Airport Road, Rumuodomaya,<br/> Port Harcourt, Rivers</p> 
                </div>
            </div>

            <div className='history-content'>
              <div className='his-left'>
              <p>Delivery time</p>
              <p>Receiver</p>
              <p>Receiver Address</p>
              </div>

              <div className='his-right'>
              <p>25 jan 2023 - 2pm</p>
              <p>Big Joe</p>
              <p>92 Airport Road, Rumuodomaya,<br/> Port Harcourt, Rivers</p> 
                </div>
            </div>

            {/*<div className='history-content'>
              <div className='his-left'>

              </div>

              <div className='his-right'>
                   
                </div>
            </div>*/}
            
         </div>

         <div className='right'>
         <div className='map'>
            <img src={mapimg} alt="maping" />
         </div>
         </div>

        </div>
      </section>
    </>
  )
}

export default SingleHistory