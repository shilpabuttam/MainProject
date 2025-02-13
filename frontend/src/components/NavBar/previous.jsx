import React, { useState } from "react";
import { Navbar, Nav, Container, Button, Modal } from "react-bootstrap";
import { motion } from "framer-motion";
import Login1 from "../../pages/Login2step";
import logo from "../../assets/logo.jpg";

const Navbar1 = () => {
  const [loginVisible, setLoginVisible] = useState(false);

  const displayLogin = () => {
    setLoginVisible(!loginVisible);
  };

  return (
    <div>
      <Navbar
        expand="lg"
        style={{ background: "linear-gradient(135deg, #A1D6E2, #1995AD)" }}
        variant="dark"
        className="shadow-sm p-2"
      >
        <Container>
          <Navbar.Brand href="#" className="fw-bold text-black">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={logo}
                alt="logo"
                style={{
                  width: "40px",
                  height: "40px",
                  marginRight: "10px",
                  borderRadius: "50%",
                }}
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                OSTECHSERVICE
              </motion.div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto text-white">
              <Nav.Link
                href="#about"
                className="mx-2"
                style={{ color: "black", fontWeight: "bold" }}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#services"
                className="mx-2"
                style={{ color: "black", fontWeight: "bold" }}
              >
                Services
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className="mx-2"
                style={{ color: "black", fontWeight: "bold" }}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#locations"
                className="mx-2"
                style={{ color: "black", fontWeight: "bold" }}
              >
                Locations
              </Nav.Link>
              <Nav.Link
                href="#contactus"
                className="mx-2"
                style={{ color: "black", fontWeight: "bold" }}
              >
                Contact Us
              </Nav.Link>
              <Button
                variant="outline-light"
                className="ms-3"
                style={{ borderColor: "#A1D6E2", color: "black" }}
                onClick={displayLogin}
              >
                Login
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Login Popup (Modal) */}
      <Modal show={loginVisible} onHide={displayLogin} centered>
        <Modal.Body>
          <Login1 />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Navbar1;
