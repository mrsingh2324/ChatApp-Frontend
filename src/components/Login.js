import React, { useState } from 'react';
import { signInWithEmailAndPassword, registerWithEmailAndPassword } from './Firebase'; // Make sure the import path is correct

const Login = () => {
  const [isActive, setIsActive] = useState(true); // Define isActive state
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if (isActive) {
      // Handle login
      const result = await signInWithEmailAndPassword(email, password);
      if (result.success) {
        console.log(result.message);
        // Redirect or perform other actions for successful login
      } else {
        console.error(result.message);
        // Show an error message to the user
      }
    } else {
      // Handle registration
      const result = await registerWithEmailAndPassword(email, password);
      if (result.success) {
        console.log(result.message);
        // Redirect or perform other actions for successful registration
      } else {
        console.error(result.message);
        // Show an error message to the user
      }
    }
  };

  const toggleForm = () => {
    setIsActive(!isActive);
  };
  
  return (
    <div className="h-screen border bg-cover bg-center flex flex-col justify-center items-center">
      <form
        className={`flex flex-col p-10 rounded shadow shadow-large shadow-white bg-white/20 w-[70%] h-[60%] ${
          isActive ? 'block' : 'hidden'
        }`}
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl mb-10 font-bold">Login</h2>
        <input
          type="text"
          className="text-lg mb-5 px-3 py-5 rounded"
          name="username"
          placeholder="Your Name"
          required
          autoFocus
          value={formData.username}
          onChange={handleInputChange}
        />
        <input
          type="password"
          className="text-lg mb-5 px-3 py-5 rounded"
          name="password"
          placeholder="Password"
          required
          value={formData.password}
          onChange={handleInputChange}
        />
        <button
          className="text-2xl p-3 flex items-center justify-center hover:bg-blue-500 mt-10 bg-blue-600/80"
          type="submit"
        >
          Login
        </button>
        <p className="mt-4 text-gray-500 text-sm cursor-pointer" onClick={toggleForm}>
          Not registered? Register here.
        </p>
      </form>

      <form
        className={`flex flex-col p-10 rounded shadow shadow-large shadow-white bg-white/20 w-[70%] h-[60%] ${
          !isActive ? 'block' : 'hidden'
        }`}
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl mb-10 font-bold">Register</h2>
        <input
          type="text"
          className="text-lg mb-5 px-3 py-5 rounded text-black"
          name="username"
          placeholder="Your Name"
          required
          autoFocus
          value={formData.username}
          onChange={handleInputChange}
        />
        <input
          type="password"
          className="text-lg mb-5 px-3 py-5 rounded text-black"
          name="password"
          placeholder="Password"
          required
          value={formData.password}
          onChange={handleInputChange}
        />
        <button
          className="text-2xl p-3 flex items-center justify-center hover:bg-blue-500 mt-10 bg-blue-600/80"
          type="submit"
        >
          Register
        </button>
        <p className="mt-4 text-gray-500 text-sm cursor-pointer" onClick={toggleForm}>
          Already registered? Login here.
        </p>
      </form>
    </div>
  );
};

export default Login;
