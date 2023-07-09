import React from 'react';
import './dashboard.css'
import ChartWidget from '../../components/chartwidget/ChartWidget'
//import Header from '../../components/header/Header'
import DaRiders from '../../components/daRiders/DaRiders';
import DaActivities from '../../components/daActivities/DaActivities';

const Dashboard = () => {
  return (
    <>
     {/*<Header />*/}
     <ChartWidget />
     <div className='da-flex'>
        <div className='da-riders'>
         <DaRiders />
        </div>

        <div className='da-activities'>
            <DaActivities />
        </div>
     </div>
    </>
  )
}

export default Dashboard