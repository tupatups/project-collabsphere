import React, { useContext, useState } from "react";
import { LoginContext } from "./LoginContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import app from '../firebase.js';
import {getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth(app);

export default function SignUpPage({ onLogin }) {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { setIsLoggedIn } = useContext(LoginContext);

  const handleLogin = (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCrential) => {
      const user = userCredential.user;
      console.log(user);
      navigate("/dashboard");
    })
    .catch((error) =>{
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    })

    onLogin(true);
  };

  function handleEmailChange (event){
    setEmail(event.target.value)
  }
  function handlePasswordChange(event){
    setPassword(event.target.value)
  }

  // function handleNavigate() {
  //   navigate("/dashboard");
  // }
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="text-6xl py-2 text-center font-bold leading-tight tracking-tight text-gray-900 md:text-6xl">
        CollabSphere
      </h1>
      <p className="text-center text-gray-700 text-xl mb-8">
        Navigate the workflow seas with ease!
      </p>
      <form onSubmit={handleLogin}>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 mb-[8rem]">
          <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <p className="text-xl text-align-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Create an account
              </p>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Enter your username
                </label>
                <input
                  placeholder="Username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  id="username"
                  type="email"
                  onChange={handleEmailChange}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Set password
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="••••••••"
                  id="password"
                  type="password"
                  onChange={handlePasswordChange}
                />
              </div>
              <button
                className="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white"
                type="submit"
                onClick={handleLogin}
              >
                Create account
              </button>

              <p>
                Already have an account? <Link to="/">Sign in</Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
