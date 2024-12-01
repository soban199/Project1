import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Account = () => {
  const [show, setShow] = useState(false);
 const [fName, setfName]=useState('');
 const [laName, setLaName]=useState('');
 const [email, setEmail]=useState('');
 const [password, setPassword]=useState('')
 const [userName, setUserName]=useState('')

 const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSignup = () => {
      // Fetch existing users from local storage
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    
      // Check if the email is already registered
      const isEmailExist = storedUsers.some(user => user.email === email);
      if (isEmailExist) {
        alert('Email already exists!');
        return;
      }

       // Check if the username is already registered
       const isUsernameExist = storedUsers.some(user => user.userName === userName);
       if (isUsernameExist) {
         alert('Username already exists!');
         return;
       }
    // Add the new user to the local storage
    if (userName && email && password) {
      const newUser = { fName, laName, userName, email, password };
      storedUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(storedUsers));
      alert('Signup Successful!');
      navigate('/login');
    } else {
      alert('Error!');
    }
  };
    

  return (
    <>
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-lg space-y-4"
    >
      <h2 className="text-xl font-bold text-center">Create Account</h2>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          First Name
        </label>
        <input
          type="text"
          id="fName"
          name="fName"
          value={fName}
          onChange={(e)=>setfName(e.target.value)}
          className="w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Last Name
        </label>
        <input
          type="text"
          id="laName"
          name="laName"
          value={laName}
          onChange={(e)=>setLaName(e.target.value)}
          className="w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>
      <div>
        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={userName}
          onChange={(e)=>setUserName(e.target.value)}
          className="w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>
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
          className="absolute right-1/3 mr-8 mt-3.5 cursor-pointer"
          
          onClick={() => setShow(!show)}
        >
          {show ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
      <button
      onClick={handleSignup}
        type="submit"
        className="w-full bg-black text-white py-2 px-4 hover:bg-indigo-100 hover:text:black">
      
        Sign Up
      </button>
      <br /><br />
      <Link title="If You already have an Account" to='/login' className="text-blue-800 hover:underline hover:font-bold">
    Login
    </Link>
    </form>
  
   
    </>
  
  );
};

export default Account;
