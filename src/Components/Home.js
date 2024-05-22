import React from "react";
import { Container } from "react-bootstrap";
import Academic from './Academic';
import Coverletter from './Coverletter';
import Projects from './Projects';
import Skills from './Skills';
import Techknowledge from './Techknowledge';
import Workexp from './Workexp';
import Sitenav from './Sitenav';
import Hero from './Hero';
import ScrollToTop from './ScrollToTop';
import Contactme from './Contactme';

import 'bootstrap/dist/css/bootstrap.css';
import '../style/style.scss';
import "../style/App.css";

import data from './contentJson';

function HomePage () {
return (
  <Container id="home" fluid>
      <Hero />
      <Sitenav/>
      <Coverletter/>
      <Workexp/>
      <Projects/>
      <Skills/>
      <Academic/>
      <Techknowledge data={data}/>
      <Contactme data={data} />
      <ScrollToTop />
  </Container>
  )
}



export default HomePage;
