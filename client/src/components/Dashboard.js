import React, { useState } from 'react';
import InputForm from './InputForm';
import DisplayCard from './DisplayCard';

const Dashboard = () => {
  const [businessData, setBusinessData] = useState(null);

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="mb-6 text-3xl font-bold text-center">Mini Local Business Dashboard</h1>
      <div className="max-w-md p-4 mx-auto overflow-hidden bg-white shadow-md rounded-xl md:max-w-2xl">
        <InputForm setBusinessData={setBusinessData} />
        {businessData && <DisplayCard businessData={businessData} setBusinessData={setBusinessData} />}
      </div>
    </div>
  );
};

export default Dashboard;
