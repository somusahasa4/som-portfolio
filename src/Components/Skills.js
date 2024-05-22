import React from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import '../style/style.scss';

const Skills = () => (
    <Container>
        <div className="skills">

            <h1>Skills</h1>
            <h2>Digital Marketing:</h2>
            <Container className="items">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="icon-box">
                        <span className="badge badge-primary badge-pill">✓</span>
                        Campaign Management
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="icon-box">
                        <span className="badge badge-primary badge-pill">✓</span>
                        Adobe Campaign Classic
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="icon-box">
                        <span className="badge badge-primary badge-pill">✓</span>
                        Adobe Campaign Standard
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="icon-box">
                        <span className="badge badge-primary badge-pill">✓</span>
                        Adobe Experience Platform
                        </div>
                    </div>
                </div>
            </Container>
            <h2>Web Technologies:</h2>
            <Container className="tech-items">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="icon-box">
                        <span className="badge badge-primary badge-pill">✓</span>Template engines: JADE/PUG,Css Preprocessors: SASS/SCSS
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="icon-box">
                        <span className="badge badge-primary badge-pill">✓</span>Front end framework: Bootstrap3 html/ css/ sass/ JavaScript components
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="icon-box">
                        <span className="badge badge-primary badge-pill">✓</span>Blog/Article: WordPress - maintenance and creating/updating new themes
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="icon-box">
                        <span className="badge badge-primary badge-pill">✓</span>Customised icon font creation, Glyphicons, Font awesome
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="icon-box">
                        <span className="badge badge-primary badge-pill">✓</span>SEO, Responsive Web Designing
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="icon-box">
                        <span className="badge badge-primary badge-pill">✓</span>Web Standards and Accessibility
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="icon-box">
                        <span className="badge badge-primary badge-pill">✓</span>Cross-Browser Compatibility
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="icon-box">
                        <span className="badge badge-primary badge-pill">✓</span>Google Analytics and Google Adwords/Adsense
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    </Container>
);

export default Skills;
