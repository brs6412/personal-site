import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import MailIcon from "../assets/mail-icon";
import LinkedinIcon from "../assets/linkedin-icon";
import GithubIcon from "../assets/github-icon";

export default function Contact() {
  return (
    <Container>
      <h2 className="my-4">Contact</h2>
      <Row className="mb-4">
        <Card>
          <Card.Body>
            <Card.Title>
              {"Feel free to get in touch "}
              <MailIcon />
            </Card.Title>
            <Card.Text></Card.Text>

            <Card.Link href="mailto:brs6412@rit.edu">
              {"brs6412@rit.edu"}
            </Card.Link>
          </Card.Body>
        </Card>
      </Row>
      <Row className="mb-4">
        <Card>
          <Card.Body>
            <Card.Title>Socials</Card.Title>
            <a href="https://www.linkedin.com/in/ben-sippel/">
              <LinkedinIcon />
            </a>{" "}
            <a href="https://github.com/brs6412/">
              <GithubIcon />
            </a>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}
