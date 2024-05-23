import React, { Component } from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import ScrollAnimation from 'react-animate-on-scroll';

class Coverletter extends Component {
  render() {
      let data = this.props.data;
      return(
      <Container>
         <Container fluid>
            <div id="coverletter" className="coverletter">
                <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
                <h1>Summary</h1>
                <ul className="list-group">
                    {
                      data.coverletter && data.coverletter.map((item)=> {
                      return(
                        <li className="list-group-item">{item.summaryItem}</li>
                      )
                      })
                    }
                </ul>
                </ScrollAnimation>
            </div>

         </Container>
      </Container>
    )
  }
}

export default Coverletter;
