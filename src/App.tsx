import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Navbar, New } from './components';
// import styles from './App.module.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path=":id" element={<New />} />
      </Route>
    </Routes>
  );
}

export default App;
