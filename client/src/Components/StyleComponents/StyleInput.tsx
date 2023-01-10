import React from 'react';


interface InputInfo {
    name: string,
    placeholder: string
    type: string
}

function Styleinput({name, placeholder, type}: InputInfo) {
  return (
      <label className="block">
        <span className="block text-sm font-semibold leading-6 text-color-200">{name}</span>
        <input type={type}  className="w-full mt-2 rounded-lg border border-color-700 px-4 py-2"/>
      </label>
);
}

export default Styleinput;