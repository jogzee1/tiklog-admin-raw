import React from 'react';
import './singleclient.css'

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ClientProfile from '../../components/clientcomponents/profile/ClientProfile';

import ClientHistory from '../../components/clientcomponents/history/ClientHistory';
import ClientPassword from '../../components/clientcomponents/password/ClientPassword';



const SingleClient = () => {
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
                <Tab label="History" value="2" />
                <Tab label="Password" value="3" />
            </TabList>
            </Box>
            <TabPanel value="1"><ClientProfile /></TabPanel>

            <TabPanel value="2"><ClientHistory /></TabPanel>

            <TabPanel value="3"><ClientPassword /></TabPanel>
        </TabContext>
        </Box>
        </div>
     </section>
    </>
  )
}

export default SingleClient