// src/components/Admin/routes.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Replace these with your actual Admin child components
const Dashboard = () => <h1>Admin Dashboard</h1>;
const Settings = () => <h1>Admin Settings</h1>;

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/settings" element={<Settings />} />
      {/* Add more routes here */}
    </Routes>
  );
};

export { routes };