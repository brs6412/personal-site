import React from "react";
import Card from "./Card";
import Blurb from "./Blurb";
import { Container, Row } from "react-bootstrap";

export default function Sidebar() {
  return (
    <Container>
      <Row>
        <Card />
      </Row>
      <Row>
        <Blurb />
      </Row>
    </Container>
  );
}
