import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "./LoginContext";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState("");
  const navigate = useNavigate();
  const { handleLogin } = useContext(LoginContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login form submitted', { email, password, userRole });
    
    axios
      .post("http://localhost:3000/api/users/login", { email, password, userRole })
      .then((result) => {
        console.log('Login API response:', result);
        if (result.data.message === "Success") {
          handleLogin(userRole); // Pass userRole to login logic if needed
          navigate("/home"); // Redirect to Home page
        } else {
          console.log('Login failed:', result.data.message);
          alert(result.data.message);
        }
      })
      .catch((err) => {
        console.error('Login API error:', err);
      });
  };
  

  return (
    <div className="flex flex-col justify-center items-center min h-screen bg-gray-200">
      <h1 className="text-3xl mb-8">Inventory Management System</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <label htmlFor="username" className="mb-2">
            Email:
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="userRole" className="mb-2">
            User Role:
          </label>
          <select
            id="userRole"
            value={userRole}
            onChange={(e) => setUserRole(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="salesManager">Sales Manager</option>
            <option value="salesPerson">Sales Person</option>
            <option value="inventoryManager">Inventory Manager</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
