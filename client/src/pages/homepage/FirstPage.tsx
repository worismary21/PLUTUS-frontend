import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import SignUp from "../signUp/signUp";
import Login from "../login/login";

const FirstPage = () => {
  return (
    <>
      <div>
        <nav>
          <div className="flex mx-40 pt-10">
            <div>
              <h1 className="w-full text-3xl font-bold text-white z-10 w-0">
                Plutus.
              </h1>
              <p className="text-white z-40 font-bold">Online Banking</p>
            </div>
            <div className="flex text-[#4770ff] font-bold ml-20">
              <Link
                to="/signup"
                className="p-4 mr-10  bg-white w-40 hover:bg-blue-200 hover:scale-110 py-2 px-4 rounded-full z-10 h-[90%] pt-4"
              >
                <button>Signup</button>
              </Link>
              <Link
                to="/login"
                className=" text-white p-4 bg-blue-600 w-40 hover:bg-blue-400 hover:scale-110 py-2 px-4 rounded-full z-10 h-[90%] pt-4"
              >
                <button>Login</button>
              </Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>

      {/* <div>
        <nav className="bg-blue-600">
          <div className="flex justify-between items-center mx-4 md:mx-10 py-4">
            <div>
              <h1 className="text-2xl font-bold text-white">Plutus.</h1>
              <p className="text-white">Online Banking</p>
            </div>
            <div className="hidden md:flex text-white font-bold space-x-4">
              <button className="px-4 py-2 bg-white text-blue-600 hover:bg-blue-200 rounded-lg">
                Signup
              </button>
              <button className="px-4 py-2 bg-blue-700 hover:bg-blue-500 rounded-lg">
                Login
              </button>
            </div>
            <div className="md:hidden">
              <button className="text-white">☰</button>
            </div>
          </div>
        </nav>
      </div> */}
    </>
  );
};

export default FirstPage;
