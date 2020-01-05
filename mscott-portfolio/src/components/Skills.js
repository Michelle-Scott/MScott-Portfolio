import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";

const NewH3 = styled.h3`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 5%;
  color: #d696a0;
`;

const NewDiv = styled.div`
  margin-bottom: 10%;
`;

const Skills = props => {
  return (
    <NewDiv className="skills">
      <Container>
        <Row>
          <Col>
            <NewH3>UI</NewH3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
              <li></li>
              <li> </li>
              <li> </li>
              <li> </li>
            </ul>
          </Col>
          <Col>
            <NewH3>Front-End</NewH3>
            <ul>
              <li>REACT</li>
              <li>JAVASCRIPT</li>
              <li>REDUX</li>
              <li>AXIOS</li>
              <li> </li>
              <li> </li>
              <li> </li>
            </ul>
          </Col>
          <Col>
            <NewH3>Back-End</NewH3>
            <ul>
              <li>NODE.js</li>
              <li>Express</li>
              <li>SQL</li>
              <li>Knex</li>
              <li> </li>
              <li> </li>
              <li> </li>
            </ul>
          </Col>

          <Col>
            <NewH3>Other</NewH3>
            <ul>
              <li>GITHUB</li>
              <li>JEST</li>
              <li>REACT-TESTING-LIBRARY</li>
              <li>GIT</li>
              <li> </li>
              <li> </li>
              <li> </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </NewDiv>
  );
};

export default Skills;
