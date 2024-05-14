import React from "react";
import { Container, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './style.scss';
import "./App.css";
import Academic from './Academic';
import Coverletter from './Coverletter';
import Projects from './Projects';
import Skills from './Skills';
import Techknowledge from './Techknowledge';
import Workexp from './Workexp';
import Sitenav from './Sitenav';
import Hero from './Hero';




const HomePage = () => (

  <Container id="home" fluid>
      <Hero />
      <Sitenav/>
      <Coverletter/>
      <Workexp/>
      <Projects/>
      <Skills/>
      <Academic/>
      <Techknowledge/>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
  </Container>
);
export default HomePage;
