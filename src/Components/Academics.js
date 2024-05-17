import React from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

const Academic = () => (

    <Container>


      <div className="sticky-scroll">
          <h1>Academics</h1>
           <section className="section-a top-section full-screen-section">
             <div className="left">
                    <h2>Post Graduation</h2>
             </div>

              <div className="right">
                   <h3><span className="course">Master of Computer Applications</span></h3>
                   <h4><span className="score">8.21 CGPA</span></h4>
                   <h4>Sri Ramakrishna Institute of Technology</h4>
                   <h4>Coimbatore</h4>
              </div>

             <div data-content-to-show="#img-1"></div>
           </section>

         <section className="section-b top-section full-screen-section">
            <div className="left">
              <h2>Graduation</h2>
            </div>
             <div className="right">
                  <h3><span className="course">Bachelor of Science in Computer Science</span></h3>
                  <h4><span className="score">73.13%</span> marks</h4>
                  <h4>Sri Ramakrishna Mission Vidyalaya college of Arts and Science</h4>
                  <h4>Coimbatore</h4>
             </div>

            <div data-content-to-show="#img-1"></div>
          </section>


          <section className="section-a top-section full-screen-section">
            <div className="left">
              <h2>Higher Secondary School</h2>
            </div>

             <div className="right">
                  <h3><span className="course">Higher Secondary</span> School</h3>
                  <h4><span className="score">80.83%</span> marks</h4>
                  <h4>St.Antony's Hr.Sec School, Coonoor</h4>
                  <h4>The Nilgiris</h4>
                  <br/><br/><br/>
             </div>

            <div data-content-to-show="#img-1"></div>
          </section>

          <section className="section-b top-section full-screen-section">
              <div className="left">
                <h2>Secondary School</h2>
              </div>

               <div className="right">
                    <h3><span className="course">High School</span></h3>
                    <h4><span className="score">90%</span> marks</h4>
                    <h4>Government High School</h4>
                    <h4>Kattabettu, The Nilgiris</h4>
                    <br/><br/><br/>
               </div>

              <div data-content-to-show="#img-1"></div>
            </section>


      </div>




      <div id="academic" className="academic">
      <h1>Academic</h1>
        <div className="table-responsive-md">
          <table className="table table-hover table-light">
            <thead>
              <tr className="table-primary">
                <th scope="col">Post Graduation</th>
              </tr>
            </thead>
            <tbody>
             <tr>
                <td><span className="course">Master of Computer Applications</span> with <span className="score">8.21 CGPA</span></td>
                </tr>

                  <tr>
                    <td>College: Sri Ramakrishna Institute of Technology, Coimbatore</td>
                  </tr>
            </tbody>
          </table>
          <table className="table table-hover table-light">
              <thead>
                <tr className="table-primary">
                  <th scope="col">Graduation</th>
                </tr>
              </thead>
              <tbody>
               <tr>
                  <td><span className="course">Bachelor of Science in Computer Science</span> with <span className="score">73.13%</span> marks</td>
                  </tr>

                    <tr>
                      <td>College: Sri Ramakrishna Mission Vidyalaya college of Arts and Science, Coimbatore</td>
                    </tr>
              </tbody>
            </table>
            <table className="table table-hover table-light">
                <thead>
                  <tr className="table-primary">
                    <th scope="col">Higher Secondary School</th>
                  </tr>
                </thead>
                <tbody>
                 <tr>
                    <td><span className="course">Higher Secondary</span> School with <span className="score">80.83%</span> marks</td>
                    </tr>

                      <tr>
                        <td>School: St.Antony's Hr.Sec School, Coonoor, The Nilgiris</td>
                      </tr>
                </tbody>
              </table>
              <table className="table table-hover table-light">
                  <thead>
                    <tr className="table-primary">
                      <th scope="col">High School</th>
                    </tr>
                  </thead>
                  <tbody>
                   <tr>
                      <td><span className="course">High School</span> with <span className="score">90%</span> marks</td>
                      </tr>

                        <tr>
                          <td>School: Government High School, Kattabettu, The Nilgiris</td>
                        </tr>
                  </tbody>
                </table>
        </div>
      </div>
    </Container>

);

export default Academic;
