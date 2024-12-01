import React, { useState,useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { VisibleContext } from "./LoginVisible";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const navigate = useNavigate()
  const {setLoginVisible} = useContext(VisibleContext)
  const handleSubmit = (e) => {
   
  };
 
  // Login Function
  const handleLogin = (e) => {
    e.preventDefault();
      // Check if the user is already logged in
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      if (isLoggedIn === "true") {
        alert('You are already logged in!');
        return;
      }
    const storedUsers = JSON.parse(localStorage.getItem('users'));
     // Check if any user matches the entered email and password
     const userExists = storedUsers.find(
      (user) => user.email === email && user.password === password
    );
    if (userExists) {
      alert('Login Successful!');
      localStorage.setItem('isLoggedIn', true); // Set login status
      setLoginVisible(false)
      navigate('/'); // Redirect to dashboard
    } else {
      alert('Retry Please!');
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-lg space-y-4"
    >
      <h2 className="text-xl font-bold text-center">Login</h2>
    
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type={show ? "text" : "password"}
          id="password"
          name="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
        <span
          className="absolute right-6 top-30 mt-4 text-gray-500 cursor-pointer hover:text-gray-800"
          onClick={() => setShow(!show)} // Toggle the show state
        >
          {show ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
        </span>
      </div>
      <button
      onClick={handleLogin}
        type="submit"
        className="w-full bg-black text-white py-2 px-4 hover:bg-indigo-100 hover:text-black">
      
        Login
      </button>
      <br /> <br /><br />
      <Link to='/account'>
      <button onClick={()=>setLoginVisible(false)} type="submit" className="w-full bg-black text-white py-2 px-4 hover:bg-indigo-100 hover:text-black">
       Create Account
      </button>
      </Link>
    </form>
  );
};

export default Login;
