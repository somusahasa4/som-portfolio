import React from "react";
import { Container, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

const Techknowledge = () => (
  <div className="techknowledge">
  <Container>
    <h1>Technical Knowledge</h1>
    <h2>Digital Marketing:</h2>
    <Container className="tech-items">
        <div className="row">
            <div className="col-lg-3 col-md-6 icon-box">
                <span className="badge badge-primary badge-pill">✓</span>
                Campaign Management
            </div>
            <div className="col-lg-3 col-md-6 icon-box">
                <span className="badge badge-primary badge-pill">✓</span>
                Adobe Campaign Classic
            </div>
            <div className="col-lg-3 col-md-6 icon-box">
                <span className="badge badge-primary badge-pill">✓</span>
                Adobe Campaign Standard
            </div>
            <div className="col-lg-3 col-md-6 icon-box">
                <span className="badge badge-primary badge-pill">✓</span>
                Adobe Experience Platform
            </div>
        </div>
    </Container>
    <h2>Web Technologies:</h2>
    <Container className="tech-items">
        <div className="row">
            <div className="col-lg-3 col-md-6 icon-box">
                <span className="badge badge-primary badge-pill">✓</span>Template engines: JADE/PUG,Css Preprocessors: SASS/SCSS
            </div>
            <div className="col-lg-3 col-md-6 icon-box">
                <span className="badge badge-primary badge-pill">✓</span>Front end framework: Bootstrap3 html/ css/ sass/ JavaScript components
            </div>
            <div className="col-lg-3 col-md-6 icon-box">
                <span className="badge badge-primary badge-pill">✓</span>Blog/Article: WordPress - maintenance and creating/updating new themes
            </div>
            <div className="col-lg-3 col-md-6 icon-box">
                <span className="badge badge-primary badge-pill">✓</span>Customised icon font creation, Glyphicons, Font awesome
            </div>
        </div>
        <div className="row">
            <div className="col-lg-3 col-md-6 icon-box">
                <span className="badge badge-primary badge-pill">✓</span>SEO, Responsive Web Designing
            </div>
            <div className="col-lg-3 col-md-6 icon-box">
                <span className="badge badge-primary badge-pill">✓</span>Web Standards and Accessibility
            </div>
            <div className="col-lg-3 col-md-6 icon-box">
                <span className="badge badge-primary badge-pill">✓</span>Cross-Browser Compatibility
            </div>
            <div className="col-lg-3 col-md-6 icon-box">
                <span className="badge badge-primary badge-pill">✓</span>Google Analytics and Google Adwords/Adsense
            </div>
        </div>
    </Container>


    <Button className="btn-primary">Next</Button>
    </Container>
  </div>
);

export default Techknowledge;
