import React from "react";
import RecipeImg from "../assets/images/family-recipes.png";
import MtgImg from "../assets/images/landing.png";
import GithubImg from "../assets/images/github-friends.png";
import ImImg from "../assets/images/im-tracker.png";
import styled from "styled-components";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const Projects = () => {
  return (
    <Container>
      <Row>
        <Col xl="6" md="6" xs="12">
          <Card>
            <CardImg src={RecipeImg} />
            <CardBody>
              <Button>Github</Button>
              <Button>Project</Button>
            </CardBody>
          </Card>
        </Col>
        <Col xl="6" md="6" xs="12">
          <Card>
            <CardImg src={MtgImg} />
            <CardBody></CardBody>
          </Card>
        </Col>
        <Col xl="6" md="6" xs="12">
          <Card>
            <CardImg src={GithubImg} />
            <CardBody></CardBody>
          </Card>
        </Col>
        <Col xl="6" md="6" xs="12">
          <Card>
            <CardImg src={ImImg} />
            <CardBody></CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
