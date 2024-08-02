import React, { useState, useEffect } from "react";
import {
  Card,
  Container,
  Carousel,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import theres from "../assets/been-theres";

function calculateYearsAndDaysSince(dateString) {
  const inputDate = new Date(dateString);
  const currentDate = new Date();
  const timeDiff = currentDate.getTime() - inputDate.getTime();
  const minutesInDay = 1000 * 60 * 60 * 24;
  const days = Math.floor(timeDiff / minutesInDay);
  const years = Math.floor(days / 365.25);
  const remainingDays = days % 365;
  return {
    years: years,
    days: remainingDays,
  };
}

export default function About() {
  const [timeSwam, setTimeSwam] = useState({ years: 0, days: 0 });
  useEffect(() => {
    const dateString = "2011-08-03";
    const result = calculateYearsAndDaysSince(dateString);
    setTimeSwam(result);
  }, []);

  return (
    <Container>
      <Row className="mb-4">
        <Card>
          <Card.Body>
            <Card.Title>About Me</Card.Title>
            <Card.Text>
              I'm pursuing a BS in Computer Science and an MS in Cybersecurity,
              expected by May 2026. My academic interests revolve around
              cybersecurity news and networking security. Outside of academics,
              I enjoy swimming, lifting, reading, cooking, and I also recently
              started playing golf.
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
      <Row className="mb-4">
        <Card>
          <Card.Body>
            <Card.Title>Career Aspirations</Card.Title>
            <Card.Text>
              I'm passionate about security engineering and application
              security. I have internship experience as a software developer and
              security engineer and hold the CompTIA Security+ (SY0-701)
              certification.
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
      <Row className="mb-4">
        <Card>
          <Card.Body>
            <Card.Title>Personal Philosophy</Card.Title>
            <Card.Text>
              I firmly believe in pushing beyond my comfort zone and embracing
              continuous improvement in all aspects of life. Whether it's
              implementing a new programming concept, delving deeper into
              cybersecurity principles, or pushing myself physically during a
              workout, I thrive on the opportunity to grow. This mindset not
              only propels my academic and professional endeavors but also
              enhances my personal life by cultivating a lifelong learning
              mentality and a sense of accomplishment.
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
      <Row className="mb-4">
        <Card>
          <Card.Body>
            <Card.Title>Fun Facts</Card.Title>
            <ListGroup variant="flush">
              <ListGroup.Item>
                Has swam competitively for roughly {timeSwam.years} years and{" "}
                {timeSwam.days} days.
              </ListGroup.Item>
              <ListGroup.Item>
                Primarily a breaststroker but also a sprint free enthusiast (and
                mandatory IM swimmer).
              </ListGroup.Item>
              <ListGroup.Item>
                Favorite hike: Blue Lakes Trail in Colorado
              </ListGroup.Item>
              <ListGroup.Item>National parks visited: Zion</ListGroup.Item>
              <ListGroup.Item>Countries visited: Costa Rica</ListGroup.Item>
              <ListGroup.Item>Can bench 235</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Row>
      <Row className="mb-4">
        <Carousel>
          {theres.map((there) => (
            <Carousel.Item>
              <Image src={there.img} fluid alt={there.title} />
              <Carousel.Caption>
                <h5>{there.title}</h5>
                <p>{there.caption}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Row>
      <Row className="mb-4">
        <h4>Swimcloud is the new LinkedIn.</h4>
        <iframe
          id="preview-frame"
          src="https://www.swimcloud.com/swimmer/606904/iframe/?splashes_type=latest"
          width="100%"
          height="500px"
          frameborder="0"
          title="Ben Sippel Swimming"
        ></iframe>
      </Row>
    </Container>
  );
}
