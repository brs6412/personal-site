import React from "react";
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";
import skillData from "../assets/skill-data";

const SkillList = () => {
  return (
    <Container>
      <Row className="mb-4">
        <h3>Programming Languages</h3>
        <Row>
          {skillData.languages.map((skill) => (
            <Col md={4} key={skill.name} className="my-2">
              <Card>
                <Card.Body>
                  <Card.Title>{skill.name}</Card.Title>
                  <ProgressBar
                    now={skill.level}
                    label={`${skill.level}%`}
                    visuallyHidden
                  />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Row>
      <Row className="mb-4">
        <h3>Operating Systems</h3>
        <Row>
          {skillData.systems.map((os) => (
            <Col md={6} key={os} className="my-2">
              <Card>
                <Card.Body>
                  <Card.Title>{os}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Row>
      <Row className="mb-4">
        <h3>Specialized Topics</h3>
        <Row>
          {skillData.topics.map((topic) => (
            <Col md={4} key={topic} className="my-2">
              <Card>
                <Card.Body>
                  <Card.Title>{topic}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Row>
    </Container>
  );
};

export default SkillList;
