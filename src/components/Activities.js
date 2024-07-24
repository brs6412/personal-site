import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import honorsActivities from "../assets/honors-activities";

export default function HonorsActivities() {
  return (
    <Container>
      <Row>
        <Col md={6} className="my-2">
          <h3>Honors</h3>
          {honorsActivities.honors.map((honor, index) => (
            <Card key={index} className="my-2">
              <Card.Body>
                <Card.Title>{honor.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {honor.date}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          ))}
        </Col>

        <Col md={6} className="my-2">
          <h3>Activities</h3>
          {honorsActivities.actives.map((activity, index) => (
            <Card key={index} className="my-2">
              <Card.Body>
                <Card.Title>{activity.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {activity.date}
                </Card.Subtitle>
                {activity.desc ? (
                  <Card.Text>{activity.desc}</Card.Text>
                ) : (
                  <ListGroup variant="flush">
                    {activity.stats.map((stat, i) => (
                      <ListGroup.Item key={i}>{stat}</ListGroup.Item>
                    ))}
                  </ListGroup>
                )}
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
}
