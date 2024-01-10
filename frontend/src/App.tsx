import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Customer from './pages/Customer';
import Home from './pages/Home';
import CustomerList from './pages/CustomerList';

function App() {
  return (
    <div className='App'>
      <h1>Customer Management App</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/customer">Create Customer</NavLink>
          </li>
          <li>
            <NavLink to="/customers">Customers</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/customers" element={<CustomerList />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/customer/:id" element={<Customer />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
