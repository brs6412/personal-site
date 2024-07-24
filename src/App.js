import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Ben Sippel
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/resume">
                Resume
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact Me
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Container className="mt-4">
              <Sidebar />
            </Container>
          </Col>
          <Col xs={12} md={8}>
            <Container className="mt-4">
              <Routes>
                <Route path="/" element={<Outlet />}>
                  <Route index element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
              </Routes>
            </Container>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}
