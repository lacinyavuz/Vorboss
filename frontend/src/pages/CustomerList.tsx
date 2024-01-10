import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Customer {
  _id: string;
  name: string;
  address: string;
  postcode: string;
  latitude: number;
  longitude: number;
  chambers: string[];
}

const CustomerList: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [error, setError] = useState('');
  const [chamberFullWarning, setChamberFullWarning] = useState('');

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/customers');
      setCustomers(response.data);
    } catch (error: any) {
      console.error('Error fetching customers:', error.message);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleDeleteCustomer = async (id: string) => {
    setError('')
    try {
      await axios.delete(`http://localhost:3001/api/customers/${id}`);
      fetchCustomers();
    } catch (error: any) {
      setError(error.response?.data?.message || error.message)
    }
  };

  const handleUpgradeCustomer = async (id: string) => {
    setError('')
    try {
      const response = await axios.put(`http://localhost:3001/api/customers/${id}`);
      if (response.data.chamberNowFull.length) {
        setChamberFullWarning(`Following chambers are now full: ${response.data.chamberNowFull.join(', ')}`)
      }
      fetchCustomers();
    } catch (error: any) {
      setError(error.response?.data?.message || error.message)
    }
  };

  return (
    <div>
      <h2>Customer List</h2>
      {chamberFullWarning && <div className='warning'>{chamberFullWarning}</div>}
      {error && <div className='error'>{error}</div>}
      <ul className="task-list">
        {customers.map((customer) => (
          <li key={customer._id}>
            <div style={{ display: 'contents' }}>
              <strong>{customer.name}</strong> {customer.chambers.join(', ')}{' '}
              <div>
                {customer.chambers.length === 1 &&
                  <button className='upgrade' onClick={() => handleUpgradeCustomer(customer._id)}>Upgrade</button>
                }
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={() => handleDeleteCustomer(customer._id)}>Delete</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {error && <div className='error'>{error}</div>}
    </div>
  );
};

export default CustomerList;
