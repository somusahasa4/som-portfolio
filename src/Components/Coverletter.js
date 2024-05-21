import React from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import ScrollAnimation from 'react-animate-on-scroll';

const Coverletter = () => (
  <Container>
     <Container fluid>
        <div id="coverletter" className="coverletter">
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
            <h1>Summary</h1>
            <ul className="list-group">
            <li className="list-group-item">10+ years of IT experience in Web Technologies and Digital Marketing Technologies</li>
            <li className="list-group-item">
            Adobe Campaign Implementation and Campaign Management across different channels
            </li>
                            <li className="list-group-item">
            Integrating Adobe Campaign tool with other tools like Adobe Analytics, AEM and custom
            connectors for custom channels
            </li>
                                    <li className="list-group-item">
            Automating webpages using Static Site Generators, HTML5, CSS3, Jade/pug, SASS, JavaScript,
            SEO concepts and UI/UX design.
            </li>
            <li className="list-group-item">Ability to improvise, troubleshoots, take ownership, and learn new skills on the job. </li>
            <li className="list-group-item">I hope to share my skills, expertise and experience with your team and valuable clients.</li>
            </ul>
            </ScrollAnimation>
        </div>

        </Container>
    </Container>

);

export default Coverletter;
