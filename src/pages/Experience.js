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
          date="Sept 2022 - Dec 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Conestoga College</h3>
          <h5 className="vertical-timeline-element-subtitle my-2">Post Graduate Diploma</h5>
          <p> Web Development</p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Mar 2022 - Sep 2022"
          iconStyle={{ background: "#fd7938", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Mid-Senior Software Engineer</h3>
          <h5 className="vertical-timeline-element-subtitle">MLPCare</h5>
          <p>
            Skills: C#, .NET Core, MVC, EF, MSSQL, JavaScript, CSS.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Nov 2020 - Jan 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Mid-Level Software Engineer</h3>
          <h5 className="vertical-timeline-element-subtitle">Koc University</h5>
          <p>
            Skills: C#, .NET, MVC, HTML, CSS, Bootstrap, Mendix.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2020 - Oct 2020"
          iconStyle={{ background: "#fd7938", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Mid-Level Software Engineer</h3>
          <h5 className="vertical-timeline-element-subtitle">BIS Solutions</h5>
          <p>
            Skills: C#, .NET, MVC, HTML, CSS, Bootstrap, JavaScript. 
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Nov 2017 - Dec 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Jr. Software Engineer</h3>
          <h5 className="vertical-timeline-element-subtitle">Vecsoft</h5>
          <p>
            Skills: C#, .NET, MVC, EF, ADO.NET, Angular, ASP.NET Web Form, MSSQL.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Sep 2012 - Jul 2017"
          iconStyle={{ background: "#fd7938", color: "#fff" }}
          //   icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Yildiz Technical University</h3>
          <h5 className="vertical-timeline-element-subtitle">Bachelor's Degree</h5>

          <p> Mathematical Engineering</p>
        </VerticalTimelineElement>
        
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
