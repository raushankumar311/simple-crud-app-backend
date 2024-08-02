import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ViewInventory from './ViewInventory';

const Home = () => {
  const [showProductList, setShowProductList] = useState(false);
  const [showReports, setShowReports] = useState(false);

  useEffect(() => {
    const savedShowProductList = localStorage.getItem('showProductList') === 'true';
    const savedShowReports = localStorage.getItem('showReports') === 'true';

    setShowProductList(savedShowProductList);
    setShowReports(savedShowReports);
  }, []);

  const handleViewInventory = () => {
    setShowProductList(true);
    localStorage.setItem('showProductList', 'true');
  };

  const handleShowReports = () => {
    setShowReports(true);
    localStorage.setItem('showReports', 'true');
  };

  return (
    <div className="min-h-screen bg-blue-200 p-4">
      <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Inventory Management System</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* First Column */}
          <div className="grid grid-cols-1 gap-6">
            <div
              className="bg-white p-6 rounded-lg shadow-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
              onClick={handleViewInventory}
            >
              <h2 className="text-xl font-bold mb-2 text-blue-600">View Inventory</h2>
              <p className="text-gray-700">See the list of all items in your inventory.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
              <h2 className="text-xl font-bold mb-2 text-blue-600">Add New Item</h2>
              <p className="text-gray-700">Add new items to your inventory.</p>
            </div>
          </div>

          {/* Second Column */}
          <div className="grid grid-cols-1 gap-6">
            <div
              className="bg-white p-6 rounded-lg shadow-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
              onClick={handleShowReports}
            >
              <h2 className="text-xl font-bold mb-2 text-blue-600">Inventory Reports</h2>
              <p className="text-gray-700">Generate reports based on inventory data.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
              <h2 className="text-xl font-bold mb-2 text-blue-600">Settings</h2>
              <p className="text-gray-700">Configure your inventory management settings.</p>
            </div>
          </div>
        </div>

        {/* Render ProductList if showProductList is true */}
        {showProductList && <ViewInventory />}

        {/* Render Reports if showReports is true */}
        {showReports && <div>Reports Content</div>}
      </div>
    </div>
  );
};

export default Home;
