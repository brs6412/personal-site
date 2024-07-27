import React, { useState, useEffect } from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import courses from "../assets/courses";
import Intersect from "../assets/intersect";

export default function Education() {
  const [coursework, setCourseWork] = useState([]);
  useEffect(() => {
    const sortedList = courses.sort((c1, c2) => {
      if (c1.dual === c2.dual) {
        return 0;
      }
      return c1.dual ? 1 : -1;
    });
    setCourseWork(sortedList);
  }, []);
  return (
    <Container>
      <h2 className="my-4">Rochester Institute of Technology</h2>
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>B.S. Computer Science</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Expected May 2025
              </Card.Subtitle>
              <Card.Text>GPA: 3.75/4.00</Card.Text>
              <Card.Text>Minor in Economics</Card.Text>
              <Card.Text>Relevant courses:</Card.Text>
              <ListGroup>
                {coursework.map(
                  (course) =>
                    course.degree === "bs" && (
                      <ListGroup.Item>{course.title}</ListGroup.Item>
                    )
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>M.S. Cybersecurity</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Expected May 2026
              </Card.Subtitle>
              <Card.Text>GPA: 4.00/4.00</Card.Text>
              <Card.Text>Relevant courses:</Card.Text>
              <ListGroup className="mb-4">
                {coursework.map(
                  (course) =>
                    (course.degree === "ms" || course.dual) && (
                      <ListGroup.Item>
                        {course.title + " "}
                        {course.dual && <Intersect />}
                      </ListGroup.Item>
                    )
                )}
              </ListGroup>
              <Card.Text>
                <small>
                  <Intersect /> denotes a double counted course between BS and
                  MS degrees
                </small>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
