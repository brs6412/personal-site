import React from "react";
import { Container, Image, Row } from "react-bootstrap";
import Me from "../assets/me.jpg";

export default function Card() {
  return (
    <Container>
      <Row>
        <Image
          src={Me}
          roundedCircle
          style={{ width: "180px", height: "190px" }}
        />
      </Row>
      <Row>
        <h2>Ben Sippel</h2>
      </Row>
      <Row>
        <h3>
          <a href="mailto:brs6412@rit.edu">brs6412@rit.edu</a>
        </h3>
      </Row>
    </Container>
  );
}
