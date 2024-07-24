import React, { useState } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import Education from "./Education";
import Skills from "./Skills";

export default function Resume() {
  const [key, setKey] = useState("education");

  return (
    <Container>
      <h2>My Resume</h2>
      <Tabs
        id="resume-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="education" title="Education">
          <Education />
        </Tab>
        <Tab eventKey="skills" title="Skills">
          <Skills />
        </Tab>
        <Tab eventKey="experience" title="Experience">
          Experience content
        </Tab>
        <Tab eventKey="honors-activities" title="Honors and Activities">
          All my honors here
        </Tab>
      </Tabs>
    </Container>
  );
}
