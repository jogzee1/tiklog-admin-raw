import React from 'react'
import './settings.css'

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SettingsProfile from '../../components/settingscomponents/settingsprofile/SettingsProfile';
import SettingsPassword from '../../components/settingscomponents/settingspassword/SettingsPassword';

const Settings = () => {

    const [value, setValue] = React.useState('1');
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    
  return (
    <>
      <section className='settings-section'>
        <div className='container'>
        <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Profile Details" value="1" />
                <Tab label="Password" value="2" />
            </TabList>
            </Box>
            <TabPanel value="1"><SettingsProfile /></TabPanel>
            <TabPanel value="2"><SettingsPassword /></TabPanel>
        </TabContext>
        </Box>
        </div>
     </section>
    </>
  )
}

export default Settings