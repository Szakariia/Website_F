import React, { useState } from 'react';
import Styleinput from './StyleComponents/StyleInput';
import { useNavigate } from 'react-router-dom';

interface FormValues {
    username: string,
    password: string
}

const intialFormValues : FormValues = {
    username: '',
    password: ''
}

function Login() {

    const navigate = useNavigate();
    const [formValues, setFormValues] = useState<FormValues>(intialFormValues);
    console.log("Page : Login" , formValues)

  return (
    <div className="mx-10 relative flex flex-1 flex-col items-center justify-center pt-10 pb-16">
       
        <div className="pb-10 inline-flex items-center font-bold text-2xl text-color-100">
              Login
        </div>

        {/* <p className="mb-6">
            <a className="text-center text-red text-sm">These credentials do not match our records.</a>
        </p> */}
        <form className="w-full max-w-sm bg-gray-500 text-color-100 space-y-8">

            <Styleinput name='Username' placeholder='' type="text" onValueChange={(value) => setFormValues({ ...formValues, username: value })}/>
            <Styleinput name='Password' placeholder='' type="password" onValueChange={(value) => setFormValues({ ...formValues, password: value })}/>

            <button type="submit" className="w-full flex justify-center bg-color-100 hover:bg-color-700 text-white rounded-lg border border-gray-300 px-4 py-2">
                <span className="text-center">
                    Sign in to account 
                </span>
            </button>
            <p className="p-5 text-center text-color-700 ">
                <a href="/resetpassword" className="text-sm hover:underline"> Forgot password? </a>
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
                <button
                    type="button"
                    onClick={() => navigate("/register")}
                    className="mb-3 border border-color-700 text-sm hover:border-color-600  text-color-100 items-center rounded-lg px-4 py-2.5"
                >
                  <span> Get access </span>
                  <span className="ml-1">???</span>
                </button>
              </div>
              </div>  
        </footer>
      </div>
);
}

export default Login;