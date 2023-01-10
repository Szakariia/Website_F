import React from 'react';
import Styleinput from './StyleComponents/StyleInput'



function Login() {
  return (
    <div className="mx-10 relative flex flex-1 flex-col items-center justify-center pt-10 pb-16">
       
        <div className="pb-10 inline-flex items-center font-bold text-2xl text-color-100">
              Login
        </div>

        <form className="w-full max-w-sm bg-gray-500 text-color-100 space-y-8">

            <Styleinput name='Email address' placeholder='' type="email"/>
            <Styleinput name='Password' placeholder='' type="password"/>

            <button type="submit" className="w-full flex justify-center bg-color-100 hover:bg-color-700 text-white rounded-lg border border-gray-300 px-4 py-2">
                <span className="text-center">
                    Sign in to account 
                </span>
            </button>
            <p className="p-5 text-center text-color-700">
                <a> Forgot password? </a>
            </p>
        </form>

        <footer className="">
            <div className="flex flex-wrap mt-10 justify-center items-center space-x-3">
              
              <div className="mb-3">
                <p className="p-5 text-center text-color-700">
                    <a> Don't have an account? </a>
                </p>
              </div>
              
              <div>
                <button type="button" className="mb-3 border border-color-700 text-sm hover:border-color-600  text-color-100 items-center rounded-lg px-4 py-2.5">
                  <span> Get access </span>
                  <span className="ml-1">→</span>
                </button>
              </div>
              </div>  
        </footer>
      </div>
);
}

export default Login;