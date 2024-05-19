import React,{ useEffect } from "react";
import { Container } from "react-bootstrap";
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
import ScrollToTop from './ScrollToTop';
import Contactme from './Contactme';
import data from './contentJson';

function HomePage () {
return (
  <Container id="home" fluid>
    <div  data-aos="flip-right">
      <Hero />
    </div>
    <div  data-aos="flip-left">
      <Sitenav/>
    </div>
      <Coverletter/>
      <Workexp/>
      <Projects/>
      <Skills/>
      <Academic/>
      <Techknowledge/>
      <Contactme data={data} />
      <ScrollToTop />
      <script>
          AOS.init();
      </script>
  </Container>
  )
}



export default HomePage;
