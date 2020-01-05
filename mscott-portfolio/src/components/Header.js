import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import MainImg from "../assets/images/Michelle2-Portfolio.png";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaEnvelope
} from "react-icons/fa";
import styled from "styled-components";

const NewDiv = styled.div`
  text-align: center;
  margin-top: 40%;
  font-size: 2rem;
  color: #1d7b7e;
  border-bottom: solid 2px #1d7b7e;
  padding: 5%;
`;

const NewImg = styled.img`
  max-width: 70%;
  margin-top: 20%;
`;
const IconDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 10%;
`;

const Header = () => {
  return (
    <Container fluid>
      <Row>
        <Col xl="6" sm="12">
          <NewImg src={MainImg} />
        </Col>
        <Col xl="6" sm="12">
          <NewDiv>Full-Stack Web Developer</NewDiv>
          <IconDiv>
            <a href="https://github.com/scottmm374" target="blank">
              <FaGithub />
            </a>
            <a href="https://twitter.com/Michell55256712" target="blank">
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/michelle-scott-920b05188/"
              target="blank"
            >
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/scottmichelle74" target="blank">
              <FaFacebook />
            </a>
            <a href="https://github.com/scottmm374" target="blank">
              <FaEnvelope />
            </a>
          </IconDiv>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
