import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";

const ColorDiv = styled.div`
  background: #5f7a82;
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

const NewH4 = styled.h4`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 5%;
  //   margin-left: 40%;
`;

const AboutMe = () => {
  return (
    <ColorDiv>
      <Row>
        <NewH1>About Me</NewH1>
      </Row>
      <Row>
        <Col xl="6" sm="6">
          <NewH4>Creative</NewH4>
          <p>
            Officia sunt est anim laboris nostrud cupidatat ad amet nisi
            laborum. Velit irure dolor elit qui adipisicing ipsum laborum id.
            Quis magna non aliquip cupidatat officia quis labore laboris enim
            dolor laboris.
          </p>
        </Col>
        <Col xl="6" sm="6">
          <NewH4>Logical</NewH4>
          <p>
            Officia sunt est anim laboris nostrud cupidatat ad amet nisi
            laborum. Velit irure dolor elit qui adipisicing ipsum laborum id.
            Quis magna non aliquip cupidatat officia quis labore laboris enim
            dolor laboris.
          </p>
        </Col>
      </Row>
    </ColorDiv>
  );
};

export default AboutMe;
