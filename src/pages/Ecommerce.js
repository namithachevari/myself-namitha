import React from "react";
import "../styles/ECommerceProject.css"; // Import CSS file for styling
import "../styles/About.css";
import WebsiteImg from "../assets/Home.png";

const ECommerceProject = () => {
  return (
    <div className="ecommerce-project">
      <h2>E-Commerce Project</h2>
      <div className="project-images">
        <div className="image-container">
          <img src={WebsiteImg} alt="Screenshot of e-commerce website" />
          <p>Description of the first image...</p>
        </div>
        </div>
      <div className="project-description">
        <p>
          This is a brief description of the e-commerce project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium risus sit amet justo ultricies, nec posuere nisi sodales. Duis vel erat ac ipsum commodo ullamcorper.
        </p>
        <h1>Other Plugins Used</h1>
            <ul>
            <li>WooCommerce</li>
            <li>WPIDE - File Manager, Code Editor</li>
            <li>UpdraftPlus - Backup/Restore (For site backup)</li>
            <li>LiteSpeed Cache (To clear cache)</li>
            <li>Contact Form 7 (To create a contact form on the Contact Us page)</li>
            <li>Elementor (Text Editor /Builder)</li>
            </ul>
      </div>
    </div>
  );
};