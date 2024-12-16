import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServiceDetails from './pages/ServiceDetails';
import Quote from './pages/Quote';

export default function App() {
  return (
    <Router>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services/:serviceId" element={<ServiceDetails />} />
          <Route path="quote" element={<Quote />} />
        </Route>
      </Routes>
    </Router>
  );
}