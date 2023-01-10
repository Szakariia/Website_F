import React from 'react';


function Home() {
  return (
      <div className="block h-[70vh] w-full justify-center items-center">
        <div className=" bg-gray-500 text-center  text-color-100">

            <p className="font-bold text-[50px]">Unlimited movies,<br/> TV shows, and more.</p>
            <p className="mt-3 text-xl text-color-600">Watch anywhere. Cancel anytime.</p>
            <p className="mt-3 text-xl font-semibold">Ready to watch? Enter your email to create new Account.</p>
            
            <div className="flex flex-wrap mt-10 justify-center items-center space-x-3">
              
              <div className="mb-3">
                <input className="w-lg rounded-lg border border-gray-300 px-4 py-2" placeholder='Email addresse'></input>
              </div>
              
              <div>
                <button type="button" className="mb-3 bg-color-100 hover:bg-color-700 text-white items-center rounded-lg border border-gray-300 focus:border-color-800 px-4 py-2">
                  <span> Get Started </span>
                  <span className="ml-2">→</span>
                </button>
              </div>
              
            </div>
        </div>
      </div>
);
}

export default Home;