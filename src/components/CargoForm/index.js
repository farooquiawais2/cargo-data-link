import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Card, CardContent, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

export default function CargoForm() {
  const [errors, setErrors] = React.useState({});
  const [formData, setFormData] = React.useState({
    name: '',
    cargoNumber: '',
    stickers: '',
    mobileNumber: '',
    customerEmail: '',
    customerName: '',
    description: '',
    packages: '',
    weight: '',
    cbm: '',
    pricePerKg: '',
    packing: '',
    pickupDelivery: '',
    extraCharges: '',
    dob: null,
  });

  const clearFieldError = (fieldName) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: '',
    }));
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    clearFieldError(event.target.name);
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      dob: date,
    });
    clearFieldError('dob');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Basic validation
    const newErrors = {};
    if (!formData.date) newErrors.date = 'Date is required'; // Add dob validation
    if (!formData.cargoNumber) newErrors.cargoNumber = 'Cargo # is required'; // Add dob validation
    if (!formData.stickers) newErrors.stickers = 'Stickers is required';
    if (!formData.mobileNumber) newErrors.mobileNumber = 'Mobile Number is required';
    if ( !/\S+@\S+\.\S+/.test( formData.customerEmail ) ) newErrors.customerEmail = 'Please enter valid customer email';
    if (!formData.customerName) newErrors.customerName = 'Customer Name is required';
    if (!formData.description) newErrors.description = 'Description is required';
    if (!formData.packages) newErrors.packages = 'Packages is required';
    if (!formData.weight) newErrors.weight = 'Weight is required';
    if (!formData.cbm) newErrors.cbm = 'CBM is required';
    if (!formData.pricePerKg) newErrors.pricePerKg = 'Price Per KG is required';
    if (!formData.packing) newErrors.packing = 'Packing is required';
    if (!formData.pickupDelivery) newErrors.pickupDelivery = 'Pickup Delivery is required';
    if (!formData.extraCharges) newErrors.extraCharges = 'Other Charges / Export is required';
    if (!formData.dob) newErrors.dob = 'Date is required'; // Add dob validation

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Handle form submission logic here
      console.log(formData);
    }
  };

  return (
    <Card sx={{
      margin: 2, // Default margin
      '@media (min-width:600px)': { margin: 3 },
      '@media (min-width:900px)': { margin: 4 }
    }}>
      <CardContent>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <Typography variant="h4" component="h2">
            Cargo Data
          </Typography>
          <FormControl fullWidth error={Boolean(errors.dob)}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date"
                value={formData.dob}
                onChange={handleDateChange}
                textField={(params) => <TextField 
      
                  {...params} sx={{ width:"100%" }} 
                  error
                  helperText={errors.dob}
                />}
                slotProps={{
                  textField: {
                    required: true,
                  },
                }}
              />
            </LocalizationProvider>
          </FormControl>
          <FormControl fullWidth error={Boolean(errors.cargoNumber)}>
            <TextField
              label="Cargo # *"
              variant="outlined"
              name="cargoNumber"
              value={formData.cargoNumber}
              onChange={handleChange}
              error={Boolean(errors.cargoNumber)}
              helperText={errors.cargoNumber}
              
              slotprops={{
                textField: {
                  required: true,
                },
              }}
            />
          </FormControl>
          <FormControl fullWidth error={Boolean(errors.stickers)}>
            <TextField
              label="Stickers *"
              variant="outlined"
              name="stickers"
              value={formData.stickers}
              onChange={handleChange}
              error={Boolean(errors.stickers)}
              helperText={errors.stickers}
            />
          </FormControl>
          <FormControl fullWidth error={Boolean(errors.mobileNumber)}>
            <TextField
              label="Mobile Number *"
              variant="outlined"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              error={Boolean(errors.mobileNumber)}
              helperText={errors.mobileNumber}
            />
          </FormControl>
          <FormControl fullWidth error={Boolean(errors.customerEmail)}>
            <TextField
              label="Customer Email"
              variant="outlined"
              name="customerEmail"
              value={formData.customerEmail}
              onChange={handleChange}
              error={Boolean(errors.customerEmail)}
            />
          </FormControl>
          <FormControl fullWidth error={Boolean(errors.customerName)}>
            <TextField
              label="Customer Name *"
              variant="outlined"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              error={Boolean(errors.customerName)}
              helperText={errors.customerName}
            />
          </FormControl>
          <FormControl fullWidth error={Boolean(errors.description)}>
            <TextField
              label="Description *"
              variant="outlined"
              name="description"
              value={formData.description}
              onChange={handleChange}
              error={Boolean(errors.description)}
              helperText={errors.description}
            />
          </FormControl>
          <FormControl fullWidth error={Boolean(errors.packages)}>
            <TextField
              label="Packages *"
              variant="outlined"
              name="packages"
              value={formData.packages}
              onChange={handleChange}
              error={Boolean(errors.packages)}
              helperText={errors.packages}
            />
          </FormControl>
          <FormControl fullWidth error={Boolean(errors.weight)}>
            <TextField
              label="Weight *"
              variant="outlined"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              error={Boolean(errors.weight)}
              helperText={errors.weight}
            />
          </FormControl>
          <FormControl fullWidth error={Boolean(errors.cbm)}>
            <TextField
              label="CBM *"
              variant="outlined"
              name="cbm"
              value={formData.cbm}
              onChange={handleChange}
              error={Boolean(errors.cbm)}
              helperText={errors.cbm}
            />
          </FormControl>
          <FormControl fullWidth error={Boolean(errors.pricePerKg)}>
            <TextField
              label="Price Per KG *"
              variant="outlined"
              name="pricePerKg"
              value={formData.pricePerKg}
              onChange={handleChange}
              error={Boolean(errors.pricePerKg)}
              helperText={errors.pricePerKg}
            />
          </FormControl>
          <FormControl fullWidth error={Boolean(errors.pricePerKg)}>
            <TextField
              label="Price Per KG *"
              variant="outlined"
              name="pricePerKg"
              value={formData.pricePerKg}
              onChange={handleChange}
              error={Boolean(errors.pricePerKg)}
              helperText={errors.pricePerKg}
            />
          </FormControl>
          <FormControl fullWidth error={Boolean(errors.packing)}>
            <TextField
              label="Packing *"
              variant="outlined"
              name="packing"
              value={formData.packing}
              onChange={handleChange}
              error={Boolean(errors.packing)}
              helperText={errors.packing}
            />
          </FormControl>
          <FormControl fullWidth error={Boolean(errors.pickupDelivery)}>
            <TextField
              label="Pickup Delivery *"
              variant="outlined"
              name="pickupDelivery"
              value={formData.pickupDelivery}
              onChange={handleChange}
              error={Boolean(errors.pickupDelivery)}
              helperText={errors.pickupDelivery}
            />
          </FormControl>
          <FormControl fullWidth error={Boolean(errors.extraCharges)}>
            <TextField
              label="Other Charges / Export *"
              variant="outlined"
              name="extraCharges"
              value={formData.extraCharges}
              onChange={handleChange}
              error={Boolean(errors.extraCharges)}
              helperText={errors.extraCharges}
            />
          </FormControl>
          <FormControl fullWidth error={Boolean(errors.extraCharges)}>
          <InputLabel id="status-label">Status</InputLabel>
          <Select
            labelId="status-label"
            id="status"
            value={1}
            label="Status"
            onChange={handleChange}
          >
            <MenuItem value={1}>Delivered</MenuItem>
            <MenuItem value={2}>On the way</MenuItem>
          </Select>
        </FormControl>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
