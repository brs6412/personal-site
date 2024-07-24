import React, { useState, useEffect } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
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
      <Row>
        <h4>Rochester Institute of Technology</h4>
      </Row>
      <Row>
        <Col>
          <h6>Bachelor of Science in Computer Science</h6>
        </Col>
        <Col className="text-end">
          <small>Expected May 2025</small>
        </Col>
      </Row>
      <Row>
        <p>GPA: 3.75/4.00</p>
      </Row>
      <Row>
        <p>Minor in Economics</p>
      </Row>
      <Row className="mb-3">
        <p>Relevant Coursework:</p>
        <ListGroup>
          {coursework.map(
            (course) =>
              !course.dual && (
                <ListGroup.Item>
                  {course.title + " "}
                  {course.dual && <Intersect />}
                </ListGroup.Item>
              )
          )}
        </ListGroup>
      </Row>
      <Row>
        <Col>
          <h6>Master of Science in Cybersecurity</h6>
        </Col>
        <Col className="text-end">
          <small>Expected May 2026</small>
        </Col>
      </Row>
      <Row>
        <p>GPA: 4.00/4.00</p>
      </Row>
      <Row className="mb-3">
        <p>Relevant Coursework:</p>
        <ListGroup>
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
      </Row>
      <Row className="mb-3">
        <small>
          <Intersect /> denotes a double counted course between BS and MS
          degrees
        </small>
      </Row>
    </Container>
  );
}
