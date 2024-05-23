import React, { Component } from 'react';
import { Container } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.css';

class Contactme extends Component  {

render() {
   let data = this.props.data;
   return(
      <Container fluid>
        <div id="contactme" className="contactme">
          <h1>{data.contactme.h1}</h1>
          <div className="social-links">
            <div>
                {
                  data.contactme.socialLinks && data.contactme.socialLinks.map((item)=>{
                    return(
                        <a target="_blank" rel="noreferrer" href={item.linkHref}><i className={item.className}></i></a>
                    )
                    })
                }
                <br /><br />
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Contactme;
