import React, { useState, useEffect } from "react";

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
    const dateString = "2009-08-03";
    const result = calculateYearsAndDaysSince(dateString);
    setTimeSwam(result);
  }, []);

  return (
    <div>
      <h2>About Me</h2>
      <p>
        I'm pursuing a BS in Computer Science and an MS in Cybersecurity,
        expected by May 2026. My academic interests revolve around cybersecurity
        news and networking security. Outside of academics, I enjoy swimming,
        lifting, reading, cooking, and recently started playing golf.
      </p>
      <h4>Academic highlights</h4>
      <ul>
        <li>
          <b>Courses:</b> Analysis of Algorithms, Intro to Software Engineering,
          Principles of Data Management, Foundations of Cryptography, Concepts
          of Parallel and Distributed Systems.
        </li>
        <li>
          <b>Projects:</b> Developed a messenger command line application that
          utilizes public key cryptography, dynamic web application with RESTful
          APIs. First place winner in Brickhack (hack-a-thon).
        </li>
        <li>
          <b>Achievements:</b> Four time Dean's List student with 3.75/4.00 GPA.
        </li>
      </ul>
      <h4>Career Aspirations</h4>
      <p>
        I'm passionate about security engineering and application security. I
        have internship experience as a software developer and security
        engineer, and hold certifications in ISC<sup>2</sup> CC and CompTIA
        Security+.
      </p>
      <h4>Personal Philosophy</h4>
      <p>
        I firmly believe in pushing beyond my comfort zone and embracing
        continuous improvement in all aspects of life. Whether it's implementing
        a new programming concept, delving deeper into cybersecurity principles,
        or pushing myself physically during a workout, I thrive on the
        opportunity to grow. This mindset not only propels my academic and
        professional endeavors but also enhances my personal life by cultivating
        a lifelong learning mentality and a sense of accomplishment.
      </p>
      <h4>Fun Facts</h4>
      <ul>
        <li>Can bench 225 (I have proof).</li>
        <li>
          Has swam competetively for roughly {timeSwam.years} years and{" "}
          {timeSwam.days} days.
        </li>
        <li>
          Breaststroke primary stroke, sprint free enthusiast (mandatory IM
          swimmer).
        </li>
        <li></li>
      </ul>
      <iframe
        id="preview-frame"
        src="https://www.swimcloud.com/swimmer/606904/iframe/?splashes_type=latest"
        width="100%"
        height="500px"
        frameborder="0"
        title="Ben Sippel Swimming"
      ></iframe>
    </div>
  );
}
