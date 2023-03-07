import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import { Home, New } from './components';
// import styles from './App.module.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path=":id"
          loader={() => {
            console.log('dgdffgdf');
          }}
          element={<New />}
        />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/1">About</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}

export default App;
