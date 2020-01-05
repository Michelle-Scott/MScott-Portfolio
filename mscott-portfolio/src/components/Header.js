import React from "react";
import { Container, Row, Col } from "reactstrap";
import MainImg from "../assets/images/Michelle2-Portfolio.png";
import styled from "styled-components";

const NewDiv = styled.div`
  text-align: center;
  margin-top: 40%;
  font-size: 2rem;
  color: #1d7b7e;
  border-bottom: solid 2px #1d7b7e;
`;

const NewImg = styled.img`
  max-width: 70%;
  margin-top: 20%;
`;

const Header = () => {
  return (
    <Container>
      <Row>
        <Col xl="6" sm="12">
          <NewImg src={MainImg} />
        </Col>
        <Col xl="6" sm="12">
          <NewDiv>Full-Stack Web Developer</NewDiv>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
