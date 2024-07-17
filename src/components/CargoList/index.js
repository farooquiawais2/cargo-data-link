import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData( name, calories, fat, carbs, protein ) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData( 'Frozen yoghurt', 159, 6.0, 24, 4.0 ),
  createData( 'Ice cream sandwich', 237, 9.0, 37, 4.3 ),
  createData( 'Eclair', 262, 16.0, 24, 6.0 ),
  createData( 'Cupcake', 305, 3.7, 67, 4.3 ),
  createData( 'Gingerbread', 356, 16.0, 49, 3.9 ),
];

export default function CargoList() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ border: 1, borderColor: 'black' }}>Date</TableCell>
            <TableCell align="center" sx={{ border: 1, borderColor: 'black' }}>Cargo #</TableCell>
            <TableCell align="center" sx={{ border: 1, borderColor: 'black' }}>Stickers</TableCell>
            <TableCell align="center" sx={{ border: 1, borderColor: 'black' }}>Customer Email</TableCell>
            <TableCell align="center" sx={{ border: 1, borderColor: 'black' }}>Customer Name</TableCell>
            <TableCell align="center" sx={{ border: 1, borderColor: 'black' }}>Description</TableCell>
            <TableCell align="center" sx={{ border: 1, borderColor: 'black' }}>Packages</TableCell>
            <TableCell align="center" sx={{ border: 1, borderColor: 'black' }}>Weight</TableCell>
            <TableCell align="center" sx={{ border: 1, borderColor: 'black' }}>CBM</TableCell>
            <TableCell align="center" sx={{ border: 1, borderColor: 'black' }}>Price Per KG</TableCell>
            <TableCell align="center" sx={{ border: 1, borderColor: 'black' }}>Packing</TableCell>
            <TableCell align="center" sx={{ border: 1, borderColor: 'black' }}>Pickup Delivery</TableCell>
            <TableCell align="center" sx={{ border: 1, borderColor: 'black' }}>Other Charges / Export</TableCell>
            <TableCell align="center" sx={{ border: 1, borderColor: 'black' }}>Total Amount USD</TableCell>
            <TableCell align="center" sx={{ border: 1, borderColor: 'black' }}>Amount AED</TableCell>
            <TableCell align="center" sx={{ border: 1, borderColor: 'black' }}>Paid in Dubai</TableCell>
            <TableCell align="center" sx={{ border: 1, borderColor: 'black' }}>Paid in Kazakhstan</TableCell>
            <TableCell align="center" sx={{ border: 1, borderColor: 'black' }}>Paid in Moscow</TableCell>
            <TableCell align="center" sx={{ border: 1, borderColor: 'black' }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map( ( row ) => (
            <TableRow   >
              <TableCell sx={{ border: 1, borderColor: 'black' }}>
                10-Jan 2024
              </TableCell>
              <TableCell align="center" sx={{ border: 1, borderColor: 'black' }}>Air # 126</TableCell>
              <TableCell align="center" sx={{ border: 1, borderColor: 'black' }}>001-002</TableCell>
              <TableCell align="center" sx={{ border: 1, borderColor: 'black' }}>12345678911</TableCell>
              <TableCell align="center" sx={{ border: 1, borderColor: 'black' }}>customer@cargo.com</TableCell>
              <TableCell align="center" sx={{ border: 1, borderColor: 'black' }}>Baku Transe</TableCell>
              <TableCell align="center" sx={{ border: 1, borderColor: 'black' }}>Play Stations</TableCell>
              <TableCell align="center" sx={{ border: 1, borderColor: 'black' }}>2</TableCell>
              <TableCell align="center" sx={{ border: 1, borderColor: 'black' }}>20</TableCell>
              <TableCell align="center" sx={{ border: 1, borderColor: 'black' }}>0.15123</TableCell>
              <TableCell align="center" sx={{ border: 1, borderColor: 'black' }}>10</TableCell>
              <TableCell align="center" sx={{ border: 1, borderColor: 'black' }}>11</TableCell>
              <TableCell align="center" sx={{ border: 1, borderColor: 'black' }}>55</TableCell>
              <TableCell align="center" sx={{ border: 1, borderColor: 'black' }}>120</TableCell>
              <TableCell align="center" sx={{ border: 1, borderColor: 'black' }}>1211</TableCell>
              <TableCell align="center" sx={{ border: 1, borderColor: 'black' }}></TableCell>
              <TableCell align="center" sx={{ border: 1, borderColor: 'black' }}></TableCell>
              <TableCell align="center" sx={{ border: 1, borderColor: 'black' }}></TableCell>
              <TableCell align="center">On the way</TableCell>
            </TableRow>
          ) )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
