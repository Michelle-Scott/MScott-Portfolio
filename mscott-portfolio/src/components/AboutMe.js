import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import ChartImg from "../assets/images/Chart.png";
import Typist from "react-typist";

const ColorDiv = styled.div`
  // background: #407c7f;
  color: white;
  padding: 5%;
  margin-top: 5%;
  margin-bottom: 5%;
  width: 100%;

  //   box-shadow: 6px 9px 31px #252424;
`;

const NewH1 = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 5%;
  margin-left: 40%;
  text-shadow: 1px 1px 9px black;
`;

const NewLi = styled.li`
  font-size: 2.5rem;
  text-shadow: 1px 1px 9px black;
`;

const NewButton = styled.button`
  border-radius: 50px 20pc;
  background: #407c7f;
  color: white;
  margin-left: 600px;
  height: 51px;
  width: 200px;
  border: none;
  box-shadow: 3px 3px 18px black;
  margin-bottom: 5%;
  &:hover {
    background: white;
    color: #407c7f;
  }
`;
const AboutMe = () => {
  return (
    <ColorDiv>
      <Row>
        <NewH1>About Me</NewH1>

        <NewButton>Learn More</NewButton>
      </Row>
      <Row>
        <Col>
          <Typist>
            <ul>
              <NewLi>Mom</NewLi>
              <NewLi>Developer</NewLi>
              <NewLi>Artist</NewLi>
              <NewLi>Creator</NewLi>
              <NewLi>Problem Solver</NewLi>
            </ul>
          </Typist>
        </Col>
      </Row>
    </ColorDiv>
  );
};

export default AboutMe;
