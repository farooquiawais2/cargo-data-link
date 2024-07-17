import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShipmentPage from './pages/Shipments';
import LoginPage from './pages/Login';
import ShipmentForm from './pages/ShipmentForm';

const PageUrl = () => {
  return (
    <Router>
      <Routes>
        <Route path="/shipments" element={<ShipmentPage />} />
        <Route path="/shipments/form" element={<ShipmentForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route exact path="/" element={<ShipmentPage />} />
        <Route  path="*" element={<ShipmentPage />} />
      </Routes>
    </Router>
  );
};

export default PageUrl;
