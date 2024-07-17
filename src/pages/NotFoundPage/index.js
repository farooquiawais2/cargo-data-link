import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function PageNotFound() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <Typography variant="h4" component="h2" gutterBottom>
                404 - Page Not Found
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
                The page you are looking for could not be found.
            </Typography>
        </Box>
    );
}
