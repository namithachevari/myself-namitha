import React from "react";
import { Card } from "antd";
import "../styles/Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <Card title="My Technical Skills" bordered={false} style={{ width: "60%" }}>
        <div className="list">
       
          <li className="item my-3 pb-3 border-bottom">
            <h3>Back-End</h3>
            <span>C#, NodeJS, ExpressJS, PHP</span>
          </li>
          <li className="item  my-3 pb-3 border-bottom">
            <h3> Front-End</h3>
            <span>ReactJS, JavaScript, HTML5, CSS3, BootStrap, JQuery</span>
          </li>
          <li className="item  my-3 pb-3 border-bottom">
            <h3>Databases</h3>
            <span>MSSQL, MySQL, MongoDB</span>
          </li>
          <li className="item  my-3  pb-3 border-bottom">
            <h3>Content Management Systems</h3>
            <span></span>
            <p>Drupal , WordPress</p>
          </li>
          <li className="item  my-3">
            <h3>Tools and Frameworks</h3>
            <span>.NET/.NET Core, MVC, Entity Framework, Angular, React, Node.js, Express.js, GraphQL, </span>
            <p> Mendix, Bootstrap, JQuery, Postman, Git, AODA for web compliance, WCAG, SEO</p>
          </li>
        </div>
      </Card>
    </div>
  );
};

export default Skills;