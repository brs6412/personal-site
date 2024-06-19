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
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Container, Nav, Navbar } from "react-bootstrap";
import './App.css';

export default function App() {
  return (
    <Router>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Ben Sippel</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" exact>Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}