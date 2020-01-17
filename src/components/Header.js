import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Typist from "react-typist";
import MainImg from "../assets/images/Michelle2-Portfolio.png";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaEnvelope
} from "react-icons/fa";
import styled from "styled-components";

const NewContainer = styled(Container)`
  background: #ffffffc9;
  padding-bottom: 13%;
  padding-right: 97px;
  padding-left: 46px;
`;

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
    <NewContainer fluid>
      <Row>
        <Col xl="6" md="6" xs="12">
          <NewImg src={MainImg} />
        </Col>
        <Col xl="6" md="6" xs="12">
          <NewDiv>
            <Typist>Full-Stack Web Developer 41</Typist>
          </NewDiv>
          <IconDiv>
            <a
              className="hvr-grow"
              href="https://github.com/scottmm374"
              target="blank"
            >
              <FaGithub />
            </a>
            <a
              className="hvr-grow"
              href="https://twitter.com/Michell55256712"
              target="blank"
            >
              <FaTwitter />
            </a>
            <a
              className="hvr-grow"
              href="https://www.linkedin.com/in/michelle-scott-920b05188/"
              target="blank"
            >
              <FaLinkedin />
            </a>
            <a
              className="hvr-grow"
              href="https://www.facebook.com/scottmichelle74"
              target="blank"
            >
              <FaFacebook />
            </a>
            <a
              className="hvr-grow"
              href="https://github.com/scottmm374"
              target="blank"
            >
              <FaEnvelope />
            </a>
          </IconDiv>
        </Col>
      </Row>
    </NewContainer>
  );
};

export default Header;
