import React from "react";
import { FaRocket } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center flex-column">
        <h1>
          Organize your work and life... <FaRocket />
        </h1>
        <br />
        <br />
        <p>
          Experience enhanced productivity with our Todo Web App! Effortlessly
          manage tasks, prioritize with a user-friendly interface, set
          deadlines, and track progress. Enjoy collaborative tools, customizable
          categories, and cross-platform accessibility. Sign up now to
          streamline your task management and conquer your to-do list!
        </p>
        <br />
        <button className="home-btn">Make ToDo List</button>
      </div>
    </div>
  );
};

export default Home;
