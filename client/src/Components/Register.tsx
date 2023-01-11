import React, { useState, useEffect } from 'react';
import Styleinput from './StyleComponents/StyleInput'
import { useNavigate } from 'react-router-dom';
import Validator from '../Utils/inputValidator'

interface FormValues {
    firstName : string,
    lastName : string,
    email : string,
    username: string,
    password : string,
    repeatPassword: string
}

const intialFormValues : FormValues = {
    firstName : '',
    lastName : '',
    email : '',
    username: '',
    password : '',
    repeatPassword: ''
}


function Register() {
    
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState<FormValues>(intialFormValues);
    const HandlingOnchangeValue = (target: string, value: string) => {
        setFormValues({...formValues, [target]: value })
    }
    useEffect(() => {
        // action on update of formValues
        console.log(">> Info Befor Validation", formValues)
        let errorMessageType = Validator(formValues, 0)
        console.log("error page :", errorMessageType)
    }, [formValues]);

    // console.log("register page :", formValues)

    return (
    <div className="mx-10 relative flex flex-1 flex-col items-center justify-center pt-10 pb-16">
       
        <div className="pb-10 inline-flex items-center font-bold text-2xl text-color-100">
              Register
        </div>

        <form className="w-full max-w-xl bg-gray-500 text-color-100 space-y-8">
            <div className="grid tablet:grid-cols-2 tablet:space-x-2 grid-cols-1">
                <div>
                    <Styleinput name='First name' placeholder='firstName' type="text" onValueChange={(value) => HandlingOnchangeValue("firstName", value)}/>
                    <Styleinput name='Last name' placeholder='lastName' type="text" onValueChange={(value) => HandlingOnchangeValue("lastName", value)}/>
                    <Styleinput name='Email address' placeholder='email' type="email" onValueChange={(value) => HandlingOnchangeValue("email", value)}/>
                </div>
                <div>
                    <Styleinput name='Username' placeholder='' type="text" onValueChange={(value) => HandlingOnchangeValue("username", value)}/>
                    <Styleinput name='Password' placeholder='' type="password" onValueChange={(value) => HandlingOnchangeValue("password", value)}/>
                    <Styleinput name='Repeat Password' placeholder='' type="password" onValueChange={(value) => HandlingOnchangeValue("repeatPassword", value)}/>
                </div>
            </div>
            <button type="submit" className="w-full flex justify-center bg-color-100 hover:bg-color-700 text-white rounded-lg border border-gray-300 px-4 py-2">
                <span className="text-center">
                    Create account
                </span>
            </button>
            <p className="p-5 text-center text-color-700">
                <a href="/resetpassword" className="text-sm hover:underline"> Forgot password? </a>
            </p>
        </form>

        <footer className="">
            <div className="flex flex-wrap mt-10 justify-center items-center space-x-3">
              
              <div className="mb-3">
                <p className="p-5 text-center text-color-700">
                    <a> Already have an account? </a>
                </p>
              </div>
              
              <div>
                <button
                    onClick={() => navigate('/login')}
                    type="button"
                    className="mb-3 border border-color-700 text-sm hover:border-color-600  text-color-100 items-center rounded-lg px-4 py-2.5"
                >
                    <span> Login </span>
                    <span className="ml-1">→</span>
                </button>
              </div>
              </div>  
        </footer>
      </div>
);
}

export default Register;