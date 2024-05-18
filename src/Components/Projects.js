import React from "react";
import {Accordion, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/js/src/collapse.js";


const Projects = () => (

  <Container>

     <div id="projects" className="projects">
      <h1>Projects</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item id="project1" eventKey="0">
          <Accordion.Header><h2>Adobe Campaign Classic implementation for Banking sector </h2>
          </Accordion.Header>
            <Accordion.Body>

              <h2>Client: One of the leading Singapore Bank</h2>
              <p>Duration: From Dec 2021 to Present</p>
              <p>
              Description: Client wants to build Campaign management activities using Adobe Campaign Classic to
              send out offers in multiple channels. Implemented Technical workflows, automated deployment process
              from lower environment to higher environments, Disaster recovery process etc.
              Role and Responsibilities : To build Technical workflows and Campaign templates and other templates.
              Giving business users an option to make use of the templates to build their own customized campaigns to
              target recipients in multiple channels
              </p>
              
              

            

            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item id="project2"  eventKey="1">
                <Accordion.Header><h2>Implementation of Adobe Campaign Standard for Cosmetic products </h2>
                </Accordion.Header>
                <Accordion.Body>

                  <h2>Client: One of the leading cosmetic product seller across different regions</h2>
                  <p>Duration: From Jan 2021 to Dec 2021</p>
                  <p>
                  Description: Providing technical solutioning and strategy for companies to conduct their digital
                  transformation. User Interaction & Business Process Study, Functional Specification Development,
                  Workflow/Process Flow & Interface Design to suit business requirement, Proof of Concept Presentation
                  </p>
                  Implementation of ACS project which includes creating data schema based on the data
                  model, creating technical workflows for import/export data jobs and other technical
                  activities
                  <br/>✓ Creating complex campaigns – Personalization via multiple inheritance of data
                  <br/>✓ Setting up platform for Real-time event communications
                  <br/>✓ Mentoring team to work on Campaigns
                  <br/>✓ Automated campaign & Adhoc campaigns
                  <br/>✓ Integrating ACS with custom connectors with custom channels
                  <br/>✓ Customized solution as per Client’s request
                  <br/>✓ Managing data from different source in both import and export
                  <br/>✓ Data and Campaign management across different regions using same instance
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item id="project3" eventKey="2">
                <Accordion.Header><h2>Developing web pages for top Immigration web-based application</h2>
                </Accordion.Header>
                <Accordion.Body>
                    <h2>Client: One of the leading Immigration web-based application</h2>
                    <h2>Duration: From Dec 2013 to June 2018</h2>
                    <p>
                    Description: Creating and maintaining top Immigration websites for countries such as United States of
                    America, Australia, Canada and United Kingdom Role as Front End Developer
                    </p>
                    <br/>✓ Automating web pages using static site generators such as Metalsmith, Middleman and
                    <br/>✓ Task runners such as Grunt.js and using ES6 configuration
                    <br/><br/>✓ Template engines such as Jade/Pug and Pre-processors such as SCSS/SASS
                    <br/>✓ AMP projects - improving the web page load time across all devices
                    <br/>✓ Creating and maintaining websites using Bootstrap3 framework, hand coded html, React
                    js JavaScript library, jQuery JavaScript library
                    <br/>✓ Knowledge of using JSP pages
                    <br/>✓ Automating email campaign and newsletter markups
                    <br/>✓ Developing mobile responsive web pages and UI/UX design for desktop and mobile
                    devices
                    <br/>✓ Creating mobile responsive Email Markups, Newsletter creation with more than 32 client
                    support
                    <br/>✓ Creating and maintaining Immigration blogs, articles using WordPress
                    <br/>✓ Creating websites that are Cross-Browser Compatible
                    <br/>✓ Hand coded HTML, CSS and JavaScript for the launch of top immigration sites
                    <br/>✓ Creating different themes using different CSS for same HTML code and create multiple
                    websites
                </Accordion.Body>
          </Accordion.Item>
      </Accordion>
    </div>
  </Container>

);

export default Projects;
