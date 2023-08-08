import React from "react";
import "./homepage.css";
import Home from "./Home";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";

const Homepage = () => {
  return (
    <>
      <div className="overlay"></div>
      <main className="HomeContainer ">
        <FirstPage />
        <Home />
        <SecondPage />
      </main>
    </>
  );
};

export default Homepage;
