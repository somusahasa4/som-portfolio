import React from "react";
import { Container, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

const Workexp = () => (
  <div id="workexp" className="workexp">
    <Container>
      <h1>Workexp</h1>
        <div className="workexp-org">

            <h2>Infosys Limited, India</h2>
            <span className="workexp-duration">December 2021 to Present</span>
            <div className="exp-role">
                <h3>Technology Architect</h3>
                <p>Provide solution for Adobe Campaign related projects. Ability to understand and work on the proposal to any new clients. Work on the RFPs including demo. Implement the ideas and plan in the project</p>
            </div>
            <div className="exp-role">
                <h3>Senior Consultant</h3>
                <p>Work closely with Architect and get the requirements. Provide the plan for implementation and guide develop the implementation</p>
            </div>
        </div>
        <div className="workexp-org">
            <h2>Verticurl Marketing Private Limited</h2>
            <span className="workexp-duration">July 2018 to December 2021</span>
            <div className="exp-role">
                <h3>Senior Technical Consultant</h3>
                <p>Work closely with Architect and get the requirements. Provide the plan for implementation and guide develop the implementation</p>
            </div>
            <div className="exp-role">
                <h3>Marketing Technology Specialist</h3>
                <p>Provide solution for Adobe Campaign related projects. Ability to understand and work on the proposal to any new clients. Work on the RFPs including demo. Implement the ideas and plan in the project</p>
            </div>
        </div>
        <div className="workexp-org">
            <h2>Dot Com Solutions India Private Limited</h2>
            <span className="workexp-duration">August 2013 to June 2018</span>
            <div className="exp-role">
                <h3>Front End Engineer</h3>
                <p>Work closely with Architect and get the requirements. Provide the plan for implementation and guide develop the implementation</p>
            </div>
            <div className="exp-role">
                <h3>Junion Front End Engineer</h3>
                <p>Provide solution for Adobe Campaign related projects. Ability to understand and work on the proposal to any new clients. Work on the RFPs including demo. Implement the ideas and plan in the project</p>
            </div>
        </div>
        <Button className="btn-primary">Next</Button>
    </Container>
  </div>
);

export default Workexp;
