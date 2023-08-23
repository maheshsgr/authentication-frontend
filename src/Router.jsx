import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './container/Login';
import Home from './container/Home';
import SignUp from './container/SignUp';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
