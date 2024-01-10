import React, { useState } from 'react';
import axios from 'axios';

const Customer: React.FC = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [postcode, setPostcode] = useState('');
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [diverse, setDiverse] = useState(false);
  const [error, setError] = useState('');
  const [chamberFullWarning, setChamberFullWarning] = useState('');
  const [nearestChamberFullWarning, setNearestChamberFullWarning] = useState('');

  const handleCreateCustomer = async () => {
    setError('')
    setChamberFullWarning('')
    setNearestChamberFullWarning('')
    try {
      const response = await axios.post('http://localhost:3001/api/customers', { name, address, postcode, latitude, longitude, diverse });
      if (response.data.chamberNowFull.length) {
        setChamberFullWarning(`Following chambers are now full: ${response.data.chamberNowFull.join(', ')}`)
      }
      if (response.data.nearestChamberFull) {
        setNearestChamberFullWarning('The nearest chamber to this customer was at full capacity.')
      }
      setName('');
      setAddress('');
      setPostcode('');
      setLatitude(0);
      setLongitude(0);
    } catch (error: any) {
      setError(error.response?.data?.message || error.message)
    }
  };

  return (
    <div className='task-form'>
      <h2>Create Customer</h2>
      <div>
        <label>Name: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Address: </label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div>
        <label>Postcode: </label>
        <input type="text" value={postcode} onChange={(e) => setPostcode(e.target.value)} />
      </div>
      <div>
        <label>Latitude: </label>
        <input type="number" value={latitude} onChange={(e) => setLatitude(+e.target.value)} />
      </div>
      <div>
        <label>Longitude: </label>
        <input type="number" value={longitude} onChange={(e) => setLongitude(+e.target.value)} />
      </div>
      <div>
        <label>Diverse: </label>
        <input type="checkbox" checked={diverse} onChange={() => setDiverse(!diverse)} />
      </div>
      <button onClick={handleCreateCustomer}>Create Customer</button>
      {error && <div className='error'>{error}</div>}
      {chamberFullWarning && <div className='warning'>{chamberFullWarning}</div>}
      {nearestChamberFullWarning && <div className='warning'>{nearestChamberFullWarning}</div>}
    </div>
  );
};

export default Customer;
