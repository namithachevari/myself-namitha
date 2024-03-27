import React from "react";
import "../styles/ECommerce.css"; // Import CSS file for styling
import "../styles/About.css";
import HomeImg from "../assets/Home.png";
import shopImg from "../assets/Shop.jpg";
import SampleVideo from "../assets/video-recording.mp4"; // Import your video file



const ECommerce = () => {
  return (
    <div className="ecommerce-project">
      <h2>E-Commerce Project - Stylespree</h2>
      <div className="project-images">
        <div className="image-container">
          <img src={HomeImg} alt="Screenshot of e-commerce website" />
        </div>
        <div className="image-container">
          <img src={shopImg} alt="Screenshot of e-commerce website" />
        </div>
        </div>
        <div className="project-video">
        <video controls className="video-container">
            <source src={SampleVideo} type="video/mp4" />
            Play the video
            </video>
      </div>
      <div className="project-description">
        <p>In this video, I explain about the StyleSpree project, the google analytics, Page speed, the site architecture etc</p>
        <h1>Plugins Used</h1>
        <p>WooCommerce</p>
        <p>WPIDE - File Manager, Code Editor</p>
        <p>UpdraftPlus - Backup/Restore (For site backup)</p>
        <p>LiteSpeed Cache (To clear cache)</p>
        <p>Contact Form 7 (To create a contact form on the Contact Us page)</p>
        <p>Elementor (Text Editor /Builder)</p>
      </div>
    </div>
  );
};
export default ECommerce;