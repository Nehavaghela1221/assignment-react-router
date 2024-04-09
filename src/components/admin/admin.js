
import React from 'react';
import { Outlet } from 'react-router-dom';
// import { routes } from './routes';
const admin = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Outlet />  {/* Outlet for child routes */}
      {/* Additional Admin content here */}
    </div>
  );
};

export default admin;