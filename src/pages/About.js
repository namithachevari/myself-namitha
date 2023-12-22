import React from "react";
import EdaImg from "../assets/eda.jpg";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-me">
      <div className="about-me-img">
        <img src={EdaImg} alt="Eda Ekeyilmaz" />
      </div>
      <div className="about-me-details">
        <p>
          Hello, I'm Eda, originating from the lively city of Istanbul, Turkey. My journey led me from the bustling streets of Istanbul to the exciting landscapes of Canada, bringing a rich and diverse background to my career in software development.
        </p>
        <p>
          I hold a bachelor's degree in Mathematical Engineering from Yildiz Technical University. I also completed Web Development at Conestoga College with high distinction! And for over five years, I've been deeply immersed in the dynamic realm of software development. While my primary focus lies in projects utilizing C# and .NET, my toolkit extends to encompass a variety of languages, including React, NodeJs, PHP, Mendix, and more.
        </p>
        <p>
          Throughout my professional journey, I've played a pivotal role in numerous projects, showcasing my versatility as both a backend and frontend developer. Whether it's crafting intricate unit tests, preparing detailed technical documentation, or engaging with clients as a business analyst, I've consistently demonstrated adaptability and a multifaceted skill set.
        </p>
        <p>
          Outside the realm of code, I find joy in singing, indulge in series-watching, and harbor a deep passion for exploring the world. Beyond my technical endeavors, these personal interests contribute to a well-rounded perspective that fuels my creativity and problem-solving skills.
        </p>
        <p>
          In essence, I'm not just a software developer; I'm a storyteller, a problem solver, and an avid explorer, weaving together experiences from Istanbul to Canada into the fabric of my professional journey.
        </p>
      </div>
    </div>
  );
};

export default About;
