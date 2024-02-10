import React, { useState, useEffect } from 'react';

const PacketLatencyComponent = () => {
  const [latency, setLatency] = useState(null);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const pylonWebSocket = new WebSocket('ws://localhost:55455');
    setWs(pylonWebSocket);

    const handleMessage = (event) => {
      const packetTimestamp = parseInt(event.data);
      const currentTimestamp = Date.now();
      const packetLatency = currentTimestamp - packetTimestamp;
      setLatency(packetLatency);
    };

    pylonWebSocket.addEventListener('message', handleMessage);

    return () => {
      if (pylonWebSocket) {
        pylonWebSocket.removeEventListener('message', handleMessage);
        pylonWebSocket.close();
      }
    };
  }, []);

  return (
    <div>
      <h2>Packet Latency</h2>
      {latency !== null ? (
        <p>Latency: {latency} ms</p>
      ) : (
        <p>Waiting for packets...</p>
      )}
    </div>
  );
};

export default PacketLatencyComponent;
