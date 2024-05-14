import React from "react";
import { Container, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './style.scss';
const Skills = () => (
<div className="skills">
    <Container>
        <h1>Skills</h1>
        <div>
            <Container fluid>
                <div className="flex-row bd-highlight mb-3 flex-wrap">
                <div className="row">
                <div className="col-md-6 col-lg-3 align-items-stretch mb-lg-0">
                <div className="iconbox">
                <div className="icon acc-icon"></div>
                <h4 className="title">Adobe Campaign Classic</h4>
                <p className="description">Lorem ipsum</p>
                </div>
                </div>
                <div className="col-md-6 col-lg-3 align-items-stretch mb-lg-0">
                <div className="iconbox">
                <div className="icon acs-icon"></div>
                <h4 className="title">Adobe Campaign Standard</h4>
                <p className="description">Lorem ipsum</p>
                </div>
                </div>
                <div className="col-md-6 col-lg-3 align-items-stretch mb-lg-0">
                <div className="iconbox">
                <div className="icon aep-icon"></div>
                <h4 className="title">Adobe Experience Platform</h4>
                <p className="description">Lorem ipsum</p>
                </div>
                </div>
                <div className="col-md-6 col-lg-3 align-items-stretch mb-lg-0">
                <div className="iconbox">
                <div className="icon aa-icon"></div>
                <h4 className="title">Adobe Analytics</h4>
                <p className="description">Lorem ipsum</p>
                </div>
                </div>
                </div>
                </div>
            </Container>
            <Container fluid>
                <div className="flex-row bd-highlight mb-3 flex-wrap skills">
                <div className="row">
                <div className="col-md-6 col-lg-3 align-items-stretch mb-lg-0">
                <div className="iconbox">
                <div className="icon html-icon"></div>
                <h4 className="title">HTML</h4>
                <p className="description">Lorem ipsum</p>
                </div>
                </div>
                <div className="col-md-6 col-lg-3 align-items-stretch mb-lg-0">
                <div className="iconbox">
                <div className="icon css-icon"></div>
                <h4 className="title">CSS</h4>
                <p className="description">Lorem ipsum</p>
                </div>
                </div>
                <div className="col-md-6 col-lg-3 align-items-stretch mb-lg-0">
                <div className="iconbox">
                <div className="icon js-icon"></div>
                <h4 className="title">Javascript</h4>
                <p className="description">Lorem ipsum</p>
                </div>
                </div>
                <div className="col-md-6 col-lg-3 align-items-stretch mb-lg-0">
                <div className="iconbox">
                <div className="icon react-icon"></div>
                <h4 className="title">ReactJs</h4>
                <p className="description">Lorem ipsum</p>
                </div>
                </div>
                </div>
                </div>
            </Container>
            <Container fluid>
                <div className="flex-row bd-highlight flex-wrap skills">
                <div className="row">
                <div className="col-md-6 col-lg-3 align-items-stretch mb-lg-0">
                <div className="iconbox">
                <div className="icon bs-icon"></div>
                <h4 className="title">Bootstrap</h4>
                <p className="description">Lorem ipsum</p>
                </div>
                </div>
                <div className="col-md-6 col-lg-3 align-items-stretch mb-lg-0">
                <div className="iconbox">
                <div className="icon jq-icon"></div>
                <h4 className="title">Jquery</h4>
                <p className="description">Lorem ipsum</p>
                </div>
                </div>
                <div className="col-md-6 col-lg-3 align-items-stretch mb-lg-0">
                <div className="iconbox">
                <div className="icon soap-icon"></div>
                <h4 className="title">Soap API</h4>
                <p className="description">Lorem ipsum</p>
                </div>
                </div>
                <div className="col-md-6 col-lg-3 align-items-stretch mb-lg-0">
                <div className="iconbox">
                <div className="icon rest-icon"></div>
                <h4 className="title">Rest API</h4>
                <p className="description">Lorem ipsum</p>
                </div>
                </div>
                </div>
                </div>
                <div>
                </div>
            </Container>

            </div>
        <Button className="btn-primary">Next</Button>
        <br/>
        <br/>
        <br/>
        <br/>
    </Container>
</div>
);

export default Skills;
