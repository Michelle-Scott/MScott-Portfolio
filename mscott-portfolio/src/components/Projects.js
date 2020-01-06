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

const NewImg = styled(CardImg)`
  width: 100%;
  height: 50%;
`;

const Projects = () => {
  return (
    <Container>
      <Row>
        <Col xl="6" md="6" xs="12">
          <Card>
            <NewImg src={RecipeImg} />
          </Card>
        </Col>
        <Col xl="6" md="6" xs="12">
          <Card>
            <NewImg src={ToDoImg} />
          </Card>
        </Col>
        <Col xl="6" md="6" xs="12">
          <Card>
            <NewImg src={GithubImg} />
          </Card>
        </Col>
        <Col xl="6" md="6" xs="12">
          <Card>
            <NewImg src={ImImg} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
