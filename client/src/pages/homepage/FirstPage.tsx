import React from "react";

const FirstPage = () => {
  return (
    <>
      <div>
        {/* <img src="./images/bg-image.jpeg" alt="" /> */}
        <nav>
          <div className="flex mx-40 pt-10">
            <div>
              <h1 className="w-full text-3xl font-bold text-white z-10 w-0">
                Plutus.
              </h1>
              <p className="text-white z-40 font-bold">Online Banking</p>
            </div>
            <div className="flex text-[#4770ff] font-bold ml-20">
              <button className="p-4 mr-10  bg-white w-40 hover:bg-blue-200 py-2 px-4 rounded-lg z-10">
                Signup
              </button>
              <button className=" text-white p-4 bg-blue-600 w-40 hover:bg-blue-200 hover:transform-5 py-2 px-4 rounded-lg z-10">
                Login
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default FirstPage;
