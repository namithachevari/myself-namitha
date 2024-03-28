import React from "react";
import "../styles/ECommerce.css"; // Import CSS file for styling
import "../styles/About.css";
import HomeImg from "../assets/Home.png";
import shopImg from "../assets/Shop.jpg";
import SampleVideo from "../assets/video-recording.mp4"; // Import  video file
import SampleVideoCaptions from "../assets/video-caption.vtt"; // Import captions file
import SampleVideoTranscript from "../assets/video-transcript.txt"; // Import transcript file
import WebsiteDetailsPDF from "../assets/Website-documentation.pdf"; // Import PDF file


const ECommerce = () => {
  return (
    <div className="ecommerce-project">
      <h2>E-Commerce Project - Stylespree</h2>
      <div className="project-images">
        <div className="image-container">
          <img src={HomeImg} alt="Screenshot of the home page of the e-commerce website Style Spree" />
        </div>
        <div className="image-container">
          <img src={shopImg} alt="Screenshot of the shop page of the e-commerce website Style Spree" />
        </div>
        </div>
        <div className="project-video">
        <video controls className="video-container">
            <source src={SampleVideo} type="video/mp4" />
            <track src={SampleVideoCaptions} kind="captions" srcLang="en" label="English captions" />
            Play the video
            </video>
            <p><a href={SampleVideoTranscript} target="_blank" rel="noopener noreferrer">View video transcript</a></p>
      </div>
      <div className="project-pdf">
        <p><a href={WebsiteDetailsPDF} target="_blank" rel="noopener noreferrer">View Style Spree website documentation PDF</a></p>
      </div>
      <div className="project-description">
        <p>In this video, I provide an overview of the StyleSpree project, covering topics such as Google Analytics, page speed optimization, and site architecture. Additionally, I discuss the various plugins utilized in the project, including WooCommerce for e-commerce functionality, WPIDE for file management and code editing, UpdraftPlus for backup and restoration purposes, LiteSpeed Cache for caching optimization, Contact Form 7 for creating contact forms, and Elementor for text editing and building capabilities</p>
      </div>
    </div>
  );
};
export default ECommerce;