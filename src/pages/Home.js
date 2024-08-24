import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2 className="mb-5"> Hi, My Name is Namitha Chevari.</h2>
        <div className="prompt">
          <p className="mb-5">
            Welcome to my personal website! I am a passionate Web developer with the ability to build robust, SEO and user-friendly applications.
          </p>
          <Link to="/about" role="button">
            <button className="btn btn-lg p-3 about-btn mt-3">Learn more about me</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
