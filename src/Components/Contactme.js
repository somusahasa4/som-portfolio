import React, { Component } from 'react';
import { Container } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.css';

class  Contactme extends Component  {

render() {
   let data = this.props.data;
   return(

  <Container fluid>
    <div id="contactme" className="contactme">
      <h1>{data.contactMeHeading}</h1>
      <div className="social-links">

        <div>
            <a target="_blank" href="https://www.linkedin.com/in/somasundaram-haldurai-b11875193/"><i className="bi bi-linkedin"></i></a>
            <a target="_blank" href="https://github.com/somusahasa4/"><i className="bi bi-github"></i></a>
            <a target="_blank" href="mailto:somusahasa4@gmail.com"><i className="bi bi-envelope"></i></a>
            <a target="_blank" href="https://x.com/somusahasa4"><i className="bi bi-twitter-x"></i></a>
            <br /><br />
        </div>
      </div>
    </div>
  </Container>
    );
  }
}

export default Contactme;
