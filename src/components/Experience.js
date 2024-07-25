import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import workExperience from "../assets/experience";

export default function Experience() {
  return (
    <Container>
      <h2 className="my-4">Work Experience</h2>
      {workExperience.map((job, index) => (
        <Row key={index} className="mb-4">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>{job.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {job.company}
                </Card.Subtitle>
                <Card.Text>{job.dates}</Card.Text>
                <Card.Text>{job.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
}
