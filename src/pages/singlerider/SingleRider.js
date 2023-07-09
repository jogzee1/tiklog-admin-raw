import React from 'react'
import './singlerider.css'

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import RiderProfile from '../../components/ridercomponents/riderprofile/RiderProfile';
import RiderHistory from '../../components/ridercomponents/riderhistory/RiderHistory';
import RiderPassword from '../../components/ridercomponents/riderpassword/RiderPassword';
import VehicleDetails from '../../components/ridercomponents/vehicledetails/VehicleDetails';
import LicenceDetails from '../../components/ridercomponents/licencedetails/LicenceDetails';
//import ClientProfile from '../../components/clientcomponents/profile/ClientProfile';

const SingleRider = () => {
    const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
      <section className='singleclient-section'>
        <div className='container'>
        <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Profile Details" value="1" />
                
                <Tab label="Vehicle Details" value="2" />
                <Tab label="Licence Details" value="3" />
                <Tab label="History" value="4" />
                <Tab label="Password" value="5" />
            </TabList>
            </Box>
            <TabPanel value="1"><RiderProfile /></TabPanel>

            <TabPanel value="2"><VehicleDetails /></TabPanel>

            <TabPanel value="3"><LicenceDetails /></TabPanel>
            <TabPanel value="4"><RiderHistory /></TabPanel>
            <TabPanel value="5"><RiderPassword /></TabPanel>
        </TabContext>
        </Box>
        </div>
     </section>
    </>
  )
}

export default SingleRider