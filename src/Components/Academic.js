import React from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

const Academic = () => (

    <Container>
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
                    <td><span className="course">Higher Secondary Education Examination Board</span> School with <span className="score">80.83%</span> marks</td>
                    </tr>

                      <tr>
                        <td>School: St.Antony's Hr.Sec School, Coonoor, The Nilgiris</td>
                      </tr>
                </tbody>
              </table>
              <table className="table table-hover table-light">
                  <thead>
                    <tr className="table-primary">
                      <th scope="col">Secondary School Leaving Certificate</th>
                    </tr>
                  </thead>
                  <tbody>
                   <tr>
                      <td><span className="course">Secondary School Leaving Certificate</span> with <span className="score">90%</span> marks</td>
                      </tr>

                        <tr>
                          <td>School: Government High School, Secondary Education Examination Board Kattabettu, The Nilgiris</td>
                        </tr>
                  </tbody>
                </table>
        </div>
      </div>
    </Container>

);

export default Academic;
