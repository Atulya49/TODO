import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center flex-column">
        <h1 className="text-center">
          Organize Your <br />
          Work and Life, finally.
        </h1>
        <p className="text-center">
          Simplify tasks, boost productivity, organize
          <br />
          your life with effortless efficiency.
        </p>
        <button className="home-btn p-2">Make Todo List</button>
      </div>
    </div>
  );
};

export default Home;
