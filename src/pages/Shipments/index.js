import * as React from 'react';
import Excel from '../../components/Excel';
import CargoList from '../../components/CargoList';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useLocation, useNavigate, useResolvedPath } from 'react-router-dom';
import TabPanel from '@mui/lab/TabPanel';
import { TabContext } from '@mui/lab';
import UsersFilter from '../../components/UsersFilter';
import ForgetPassword from '../ForgetPassword';

export default function CenteredTabs() {
  const location = useLocation();
  const navigate = useNavigate();
  const [value, setValue] = React.useState(location.pathname === '/shipments/users' ? '/shipments/users' : '/shipments');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const resolvedPathShipments = useResolvedPath('/shipments');
  const resolvedPathUsers = useResolvedPath('/shipments/users');

  const handleTabClick = (newValue) => {
    const resolvedPath = newValue === '/shipments' ? resolvedPathShipments : resolvedPathUsers;
    navigate(resolvedPath.pathname);
  };

  return (
    <>
      <Box sx={{ width: '100%', typography: 'body1', bgcolor: 'background.paper' }}>
      <Excel />
        <TabContext value={value}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="All Shipments" value="/shipments" onClick={() => handleTabClick('/shipments')} />
            <Tab label="Users With Shipments" value="/shipments/users" onClick={() => handleTabClick('/shipments/users')} />
          </Tabs>
          <TabPanel value="/shipments"><CargoList /></TabPanel>
          <TabPanel value="/shipments/users"><UsersFilter /> <CargoList /></TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
