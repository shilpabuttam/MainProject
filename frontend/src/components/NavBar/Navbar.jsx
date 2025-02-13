import React, { useState } from "react";
import { Navbar, Nav, Container, Button, Modal } from "react-bootstrap";
import { motion } from "framer-motion";
import Login1 from "../../pages/Login2step";
import logo from "../../assets/logo.jpg";

const Navbar1 = ({ scrollToSection }) => {
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
        className="navcontainer shadow-sm p-2"
      >
        <Container>
<<<<<<< HEAD
          <Navbar.Brand href="/" className="fw-bold text-black">
            <div style={{display:"flex",alignItems:"center",}}>
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
=======
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
>>>>>>> 0b954b09af5be63610950acfda7c31a41bbcc617
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto text-white">
              <Nav.Link
                onClick={() => scrollToSection("about")}
                className="mx-2"
                style={{ color: "black", fontWeight: "bold", cursor: "pointer" }}
              >
                About
              </Nav.Link>
              <Nav.Link
                onClick={() => scrollToSection("services")}
                className="mx-2"
                style={{ color: "black", fontWeight: "bold", cursor: "pointer" }}
              >
                Services
              </Nav.Link>
              {/* <Nav.Link
                onClick={() => scrollToSection("projects")}
                className="mx-2"
                style={{ color: "black", fontWeight: "bold", cursor: "pointer" }}
              >
                Projects
              </Nav.Link> */}
              <Nav.Link
                onClick={() => scrollToSection("locations")}
                className="mx-2"
                style={{ color: "black", fontWeight: "bold", cursor: "pointer" }}
              >
                Locations
              </Nav.Link>
              <Nav.Link
                onClick={() => scrollToSection("contact")}
                className="mx-2"
                style={{ color: "black", fontWeight: "bold", cursor: "pointer" }}
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

      <Modal show={loginVisible} onHide={displayLogin} centered>
        <Modal.Body>
          <Login1 />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Navbar1;
