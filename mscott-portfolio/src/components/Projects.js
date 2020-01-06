import React from "react";
import RecipeImg from "../assets/images/family-recipes.png";
import ToDoImg from "../assets/images/todo.png";
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
        <Col xl="4" md="6" xs="12">
          <Card>
            <CardImg src={RecipeImg} />
            <CardBody></CardBody>
          </Card>
        </Col>
        <Col xl="4" md="6" xs="12">
          <Card>
            <CardImg src={ToDoImg} />
            <CardBody></CardBody>
          </Card>
        </Col>
        <Col xl="4" md="6" xs="12">
          <Card>
            <CardImg src={GithubImg} />
            <CardBody></CardBody>
          </Card>
        </Col>
        <Col xl="4" md="6" xs="12">
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
