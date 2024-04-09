// src/App.js

import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Admin = React.lazy(() => import('./components/admin/admin'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}> {/* Fallback UI */}
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/admin" element={<><Admin  /></>} />
          {/* Add other routes here */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;