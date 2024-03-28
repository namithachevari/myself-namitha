import React from "react";
import NamithaImg from "../assets/namitha.jpg";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-me">
      <div className="about-me-img">
        <img src={NamithaImg} alt="Namitha Chevari smiling while holding a Bachelor of Science degree at her graduation ceremony from Conestoga College." />
      </div>
      <div className="about-me-details">
        <p>
        Hello, I am Namitha Chevari. As a seasoned software developer with six years of hands-on experience, I bring expertise in crafting and supporting complex web technologies, specializing in Drupal and WordPress CMS platforms. Originating from the vibrant tech hub of Bengaluru, India, I've honed my skills through diverse projects and challenges, navigating the ever-evolving landscape of web development.
        </p>
        <p>
        My journey led me to the picturesque city of Waterloo, Ontario, where I pursued a Post Graduate Diploma in Web Development, graduating with distinction from Conestoga College. Throughout my academic journey, I've excelled in harnessing a plethora of technologies and methodologies, setting a solid foundation for my professional endeavors.
        </p>
        <p>
        Throughout my professional journey, I've played a pivotal role in numerous projects, showcasing my versatility as Web Developer and SEO Specialist. Whether it's crafting intricate unit tests, preparing detailed technical documentation, or engaging with clients as a business analyst, I've consistently demonstrated adaptability and a multifaceted skill set.
        </p>
        <p>
          Outside the realm of code, I find joy in singing, photography, hiking and exploring neighborhood. Beyond my technical endeavors, these personal interests contribute to a well-rounded perspective that fuels my creativity and problem-solving skills.
        </p>
        <p>
          In essence, I'm not just a software developer; I'm a storyteller, a problem solver, and an avid explorer, weaving together experiences from India to Canada into the fabric of my professional journey.
        </p>
      </div>
    </div>
  );
};

export default About;
