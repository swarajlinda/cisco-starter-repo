// IPDisplayComponent.jsx
import React, { useState, useEffect } from 'react';

const IPDisplayComponent = ({ ipAddressType }) => {
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const response = await fetch(`https://api.ipify.org?format=json&${ipAddressType}`);
        if (!response.ok) {
          throw new Error('Failed to fetch IP address');
        }
        const data = await response.json();
        setIpAddress(data.ip);
      } catch (error) {
        console.error('Error fetching IP address:', error);
      }
    };

    fetchIpAddress();

    return () => {
      // Cleanup
    };
  }, [ipAddressType]);

  return (
    <div>
      <h2>Your Public IP Address ({ipAddressType}):</h2>
      <p>{ipAddress}</p>
    </div>
  );
};

export default IPDisplayComponent;
