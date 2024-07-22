import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TabContext, TabPanel } from '@mui/lab';

export default function ForgetPassword() {
  const [ value, setValue ] = useState( 0 );

  useEffect( () => {
    const storedValue = localStorage.getItem( 'activeTab' );
    if ( storedValue ) {
      setValue( storedValue );
    }
  }, [] );

  const handleChange = ( newValue ) => {
    setValue( newValue );
    localStorage.setItem( 'activeTab', newValue );
  };

  return (
    <Box sx={{ width: '100%' }}>
      <TabContext value={value}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {/* Your tab panels */}
          <Tab label="All Shipments" value="/shipments" onClick={() => handleChange( '/shipments' )} />
          <Tab label="Users With Shipments" value="/shipments/users" onClick={() => handleChange( '/shipments/users' )} />
        </Tabs>
        {/* Tab content */}
        <TabPanel value="/shipments">shipment</TabPanel>
        <TabPanel value="/shipments/users">shipments/users</TabPanel>
      </TabContext>
    </Box>
  );
}
