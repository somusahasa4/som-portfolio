import React from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';


const Workexp = () => (

  <Container>
    <div id="workexp" className="workexp">
      <h1>Work Experience</h1>
      <h2>Overall of 10+ Years of Experience</h2>
        <div className="workexp-org">

            <h2>Infosys Limited, India<span>~2+Years</span></h2>
            <span className="workexp-duration">December 2021 to Present</span>
            <div className="exp-role">
                <h3>Technology Architect</h3>
                <p>Understand the Digital experience requirement from the client and recommending & implementing Adobe products(Adobe Campaign Classic, Adobe Campaign Standard and Adobe Campaign v8). Ability to understand and work on the new proposal. Worked on multiple RFPs including demo to illustrate the capabilities of Adobe Campaign management to clients.</p>
            </div>
            <div className="exp-role">
                <h3>Senior Consultant</h3>
                <p>Work closely with Architects to understand the requirements and solution. Provide the plan for implementation, work on the implementation and mentoring team to complete the implementation</p>
            </div>
        </div>
        <div className="workexp-org">
            <h2>Verticurl Marketing Private Limited<span>3Years 5 Months</span></h2>
            <span className="workexp-duration">July 2018 to December 2021</span>
            <div className="exp-role">
                <h3>Senior Technical Consultant</h3>
                <p>Work on different marketing automation tools as a developer to send out campaign communication. Explore the requirement and work for different clients on Marketing automation tools. Explore the possible integration with custom connectors with marketing automation tools(eg: Wechat/Kakao talk/Line)</p>
            </div>
            <div className="exp-role">
                <h3>Marketing Technology Specialist</h3>
                <p>Ability to work on any RFPs with demo for front end development. Also learning and supporting team for the marketing automation tools like Adobe Campaign and SFDC.</p>
            </div>
        </div>
        <div className="workexp-org">
            <h2>Dot Com Solutions India Private Limited<span>4Years 10 Months</span></h2>
            <span className="workexp-duration">August 2013 to June 2018</span>
            <div className="exp-role">
                <h3>Front End Engineer</h3>
                <p>Use innovative ideas to improvise design and code, usage of bootstrap framework, javascript libraries, responsive web designs. Handling multiple web application front end development at same time.</p>
            </div>
            <div className="exp-role">
                <h3>Junior Front End Engineer</h3>
                <p>Converting PSD files in to html markups for Web pages. Front end development including hand coded html markups, css and automation using jade and sass.</p>
            </div>
        </div>
      </div>
    </Container>
);

export default Workexp;
