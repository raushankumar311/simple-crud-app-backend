import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewInventory = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState({
    name: '',
    price: 0,
    quantity: 0
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/products');
        setProducts(response.data);
        localStorage.setItem('products', JSON.stringify(response.data));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      fetchProducts();
    }
  }, []);

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:3000/api/products/${productId}`);
      const updatedProducts = products.filter(product => product._id !== productId);
      setProducts(updatedProducts);
      localStorage.setItem('products', JSON.stringify(updatedProducts));
      console.log('Product deleted successfully');
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleUpdate = (product) => {
    setEditingProduct(product);
    setUpdatedProduct({
      name: product.name,
      price: product.price,
      quantity: product.quantity
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedProductData = {
        ...editingProduct,
        name: updatedProduct.name,
        price: updatedProduct.price,
        quantity: updatedProduct.quantity
      };
      await axios.put(`http://localhost:3000/api/products/${editingProduct._id}`, updatedProductData);
      const updatedProducts = products.map(product => (product._id === editingProduct._id ? updatedProductData : product));
      setProducts(updatedProducts);
      localStorage.setItem('products', JSON.stringify(updatedProducts));
      setEditingProduct(null);
      console.log('Product updated successfully');
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const cancelEdit = () => {
    setEditingProduct(null);
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Product Inventory</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Price</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Quantity</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product._id}>
              <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.price}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.quantity}</td>
              <td className="px-6 py-4 whitespace-nowrap space-x-2">
                <button
                  onClick={() => handleUpdate(product)}
                  className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingProduct && (
        <form onSubmit={handleSubmit} className="mt-4">
          <h2 className="text-lg font-bold mb-2">Edit Product</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col mb-2">
              <label htmlFor="name" className="mb-1 font-semibold">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={updatedProduct.name}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="price" className="mb-1 font-semibold">Price:</label>
              <input
                type="number"
                id="price"
                name="price"
                value={updatedProduct.price}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="quantity" className="mb-1 font-semibold">Quantity:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={updatedProduct.quantity}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex mt-4 space-x-2">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            >
              Save
            </button>
            <button
              type="button"
              onClick={cancelEdit}
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-gray-500"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ViewInventory;
