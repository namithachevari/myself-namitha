import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../styles/Experience.css";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="September 2022 - December 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Conestoga College</h3>
          <h5 className="vertical-timeline-element-subtitle my-2">Post Graduate Diploma</h5>
          <p> Web Development</p>
        </VerticalTimelineElement>
  
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="August 2016 - July 2022"
          iconStyle={{ background: "#fd7938", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Web Developer</h3>
          <h5 className="vertical-timeline-element-subtitle">Position2</h5>
          <p>
            Skills: HTML,JavaScript, CSS, PHP, .NET/.NET Core, MVC, Drupal, WordPress, SEO, Pantheon, Aquia, Google Cloud , UI/UX (XD), SEO, Adobe Photoshop, Illustrator, GraphQL, Unit Tests, BugHerd, Postman, Jira, GitHub, MacOS, Windows, Pingdom, Google Search Console.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="September 2012 - April 2016"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          //   icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Kannur University</h3>
          <h5 className="vertical-timeline-element-subtitle">Bachelor's Degree</h5>

          <p> Electronics and Communication Engineering</p>
        </VerticalTimelineElement>
        
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
