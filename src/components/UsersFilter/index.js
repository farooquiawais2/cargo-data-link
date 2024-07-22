import { Box, Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import React from 'react';


export default function UsersFilter() {
  const [ user, setUser ] = React.useState( '' );

  const handleChange = ( event ) => {
    setUser( event.target.value );
  };
  return (
    <>

      <Box sx={{ maxWidth: 240 }} >
        <Stack direction="row">
          <FormControl fullWidth required>
            <InputLabel id="user-select-filter-required-label">User Name</InputLabel>
            <Select
              labelId="user-select-filter-required-label"
              id="user-select-filter-required"
              value={user}
              label="User Name *"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>User 1</MenuItem>
              <MenuItem value={20}>User 2aaaaaaaaaaaaaaa</MenuItem>
              <MenuItem value={30}>User 3</MenuItem>
            </Select>
          </FormControl>
          <Button sx={{ left: 15 }} variant="contained">Search</Button>
        </Stack>
      </Box>
    </>
  );
}
