import React, { Component } from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import ScrollAnimation from 'react-animate-on-scroll';

class Techknowledge extends Component {
    render() {
    let data = this.props.data;
        return(
          <Container>
            <div id="techknowledge" className="techknowledge">
              <h1>Technologies</h1>
              <Container fluid>
                  <div className="flex-row bd-highlight mb-3 flex-wrap">
                  <div className="row">
                  <div className="col-md-6 col-lg-3 align-items-stretch mb-lg-0">
                  <div className="icon-box">
                  <div className="icon acc-icon"></div>
                  <h4 className="title">Adobe Campaign Classic</h4>

                  </div>
                  </div>
                  <div className="col-md-6 col-lg-3 align-items-stretch mb-lg-0">
                  <div className="icon-box">
                  <div className="icon acs-icon"></div>
                  <h4 className="title">Adobe Campaign Standard</h4>

                  </div>
                  </div>
                  <div className="col-md-6 col-lg-3 align-items-stretch mb-lg-0">
                  <div className="icon-box">
                  <div className="icon aep-icon"></div>
                  <h4 className="title">Adobe Experience Platform</h4>

                  </div>
                  </div>
                  <div className="col-md-6 col-lg-3 align-items-stretch mb-lg-0">
                  <div className="icon-box">
                  <div className="icon aa-icon"></div>
                  <h4 className="title">Adobe Analytics</h4>

                  </div>
                  </div>
                  </div>
                  </div>
              </Container>
              <Container fluid>
                  <div className="flex-row bd-highlight mb-3 flex-wrap">
                  <div className="row">
                  <div className="col-md-6 col-lg-3 align-items-stretch mb-lg-0">
                  <div className="icon-box">
                  <div className="icon html-icon"></div>
                  <h4 className="title">HTML</h4>

                  </div>
                  </div>
                  <div className="col-md-6 col-lg-3 align-items-stretch mb-lg-0">
                  <div className="icon-box">
                  <div className="icon css-icon"></div>
                  <h4 className="title">CSS</h4>

                  </div>
                  </div>
                  <div className="col-md-6 col-lg-3 align-items-stretch mb-lg-0">
                  <div className="icon-box">
                  <div className="icon js-icon"></div>
                  <h4 className="title">Javascript</h4>

                  </div>
                  </div>
                  <div className="col-md-6 col-lg-3 align-items-stretch mb-lg-0">
                  <div className="icon-box">
                  <div className="icon react-icon"></div>
                  <h4 className="title">ReactJs</h4>

                  </div>
                  </div>
                  </div>
                  </div>
              </Container>
              <Container fluid>
                  <div className="flex-row bd-highlight flex-wrap">
                  <div className="row">
                  <div className="col-md-6 col-lg-3 align-items-stretch mb-lg-0">
                  <div className="icon-box">
                  <div className="icon bs-icon"></div>
                  <h4 className="title">Bootstrap</h4>

                  </div>
                  </div>
                  <div className="col-md-6 col-lg-3 align-items-stretch mb-lg-0">
                  <div className="icon-box">
                  <div className="icon jq-icon"></div>
                  <h4 className="title">Jquery</h4>

                  </div>
                  </div>
                  <div className="col-md-6 col-lg-3 align-items-stretch mb-lg-0">
                  <div className="icon-box">
                  <div className="icon soap-icon"></div>
                  <h4 className="title">Soap API</h4>

                  </div>
                  </div>
                  <div className="col-md-6 col-lg-3 align-items-stretch mb-lg-0">
                  <div className="icon-box">
                  <div className="icon rest-icon"></div>
                  <h4 className="title">Rest API</h4>

                  </div>
                  </div>
                  </div>
                  </div>
                  <div>
                  </div>
              </Container>

            </div>
            <div className="tags">

                {
                  data.techknowledge && data.techknowledge.map((item)=>{
                    return(
                      <ScrollAnimation animateIn='flipInY' animateOut='flipOutY'>
                      <span>
                        {item.techname}
                      </span>
                     </ScrollAnimation>
                    )
                  })
                }
                <br/><br/><br/>
            </div>
          </Container>
          );
    }
}
export default Techknowledge;
