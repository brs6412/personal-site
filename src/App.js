import {
  HashRouter as Router, // Changed from BrowserRouter to HashRouter
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
import "./main.scss";

export default function App() {
  return (
    <Router>
      <Navbar expand="lg" className="navbar-custom">
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
          <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
            <Container className="mt-4">
              <Sidebar />
            </Container>
          </Col>
          <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
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
