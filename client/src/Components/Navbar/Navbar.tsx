import React from 'react';


function Navbar() {
  return (
    <div className="mb-10 desktop:mx-40 laptop:mx-40">
        <div className="flex flex-row justify-between border-b border-color-500 px-4 py-5 sm:px-6 lg:px-8 xl:px-0">
            <div className="inline-flex items-center font-bold text-xl text-color-100">
              Logo
            </div>
            <div className="flex-row space-x-3">

              <button type="button" className="inline-flex items-center rounded-lg border border-gray-300 hover:border-color-700 px-4 py-2">
                Login
              </button>
              
              <button type="button" className="inline-flex bg-color-100 hover:bg-color-700 text-white items-center rounded-lg border border-gray-300 px-4 py-2">
                <span>
                  Register 
                  <span className="ml-2">→</span>
                </span>
              </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar;