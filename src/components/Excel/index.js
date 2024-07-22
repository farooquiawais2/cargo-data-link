import { useState } from 'react';
import { ExcelRenderer, OutTable } from 'react-excel-renderer';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';

export default function Excel() {
  const [ cols, setCols ] = useState( [] );
  const [ rows, setRows ] = useState( [] );

  const handleFileChange = ( event ) => {
    const file = event.target.files[ 0 ];
    ExcelRenderer( file, ( err, resp ) => {
      if ( err ) {
        console.error( err );
      } else {
        setCols( resp.cols );
        setRows( resp.rows );
      }
    } );
  };

  return (
    <Stack direction="row">
      <Button variant="contained" component="label" sx={{ '& input[type="file"]': { display: 'none' } }}>
        <span>Upload File</span>
        <input type="file" onChange={handleFileChange} accept=".xlsx,.xls,.csv,.xlsm,.xlsb,.xlt,.xltx,.xltm,.xlam,.xlw" />
      </Button>
      <OutTable data={rows} columns={cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" />
      <Button variant="contained" component="label" sx={{ '& input[type="file"]': { display: 'none' } }}>
        <span>Download File</span>
        <input type="file" onChange={handleFileChange} accept=".xlsx,.xls,.csv,.xlsm,.xlsb,.xlt,.xltx,.xltm,.xlam,.xlw" />
      </Button>
      <OutTable data={rows} columns={cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" />
    </Stack>
  );
}
