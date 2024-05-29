import React, { useContext } from "react";
import { LoginContext } from "./LoginContext";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function LoginPage({ onLogin }) {
  const navigate = useNavigate();

  const { setIsLoggedIn } = useContext(LoginContext);

  const handleLogin = (event) => {
    event.preventDefault();

    const email = document.querySelector()
    const password =loginForm.password.value

   signInWithEmailAndPassword(auth, email, password)
    .then((cred) => {
        window.alert(`User created: ${cred.user}`)

        
    })
    .catch((err) =>{
        window.alert(`ALERT: ${err.message}`)
    })



    
  };

  function handleNavigate() {
    navigate("/dashboard");
  }
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="text-6xl py-2 text-center font-bold leading-tight tracking-tight text-gray-900 md:text-6xl">
        CollabSphere
      </h1>
      <p className="text-center text-gray-700 text-xl mb-8">
        Navigate the workflow seas with ease!
      </p>
      <form onSubmit={handleLogin}>
        <div className ="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 mb-[8rem]">
          <div className ="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
            <div className ="p-6 space-y-4 md:space-y-6 sm:p-8">
              <p className ="text-xl text-align-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Login
              </p>
              <div>
                <label className ="block mb-2 text-sm font-medium text-gray-900">
                  Your username
                </label>
                <input
                  placeholder="Username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  id="username"
                  type="text"
                />
              </div>
              <div>
                <label className ="block mb-2 text-sm font-medium text-gray-900">
                  Password
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="••••••••"
                  id="password"
                  type="password"
                />
              </div>
              <button
                className="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white"
                type="submit"
                onClick={handleNavigate}
              >
                Login
              </button>

              <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
