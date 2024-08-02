import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Inventory Management System</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-2">View Inventory</h2>
            <p className="text-gray-700">See the list of all items in your inventory.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-2">Add New Item</h2>
            <p className="text-gray-700">Add new items to your inventory.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-2">Update Item</h2>
            <p className="text-gray-700">Edit or update existing inventory items.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-2">Remove Item</h2>
            <p className="text-gray-700">Delete items from your inventory.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-2">Inventory Reports</h2>
            <p className="text-gray-700">Generate reports based on inventory data.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-2">Settings</h2>
            <p className="text-gray-700">Configure your inventory management settings.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;