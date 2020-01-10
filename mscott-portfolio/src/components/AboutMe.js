import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import ChartImg from "../assets/images/Chart.png";

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
`;

const NewImg = styled.p`
  width: 80%;
`;

const AboutMe = () => {
  return (
    <ColorDiv>
      <Row>
        <NewH1>About Me</NewH1>
      </Row>
      <Row>
        <Col>
          <p>
            <img src={ChartImg} alt="chart" />
          </p>
        </Col>
      </Row>
    </ColorDiv>
  );
};

export default AboutMe;
