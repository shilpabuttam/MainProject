import React, { useState, useEffect } from "react";
import {
  Container,
  Navbar,
  Nav,
  Card,
  Row,
  Col,
  Carousel,
} from "react-bootstrap";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const companyInfo = {
  name: "OsTechServices Ltd.",
  ceo: "xxxxxx",
  managingDirector: "xxxxxxxxx",
  services: [
    {
      title: "Web Development",
      description: "Creating scalable web applications.",
    },
    {
      title: "AI & Machine Learning",
      description: "Building intelligent AI solutions.",
    },
    {
      title: "Cybersecurity",
      description: "Protecting digital assets with security solutions.",
    },
    {
      title: "Cybersecurity",
      description: "Protecting digital assets with security solutions.",
    },
    {
      title: "Cybersecurity",
      description: "Protecting digital assets with security solutions.",
    },
    {
      title: "Cybersecurity",
      description: "Protecting digital assets with security solutions.",
    },
    {
      title: "Cybersecurity",
      description: "Protecting digital assets with security solutions.",
    },
  ],
  projects: [
    {
      name: "E-Commerce Platform",
      year: 2023,
      client: "ABC Retail",
      image: "https://via.placeholder.com/300",
    },
    {
      name: "AI Chatbot",
      year: 2022,
      client: "XYZ Corp",
      image: "https://via.placeholder.com/300",
    },
    {
      name: "ERP System",
      year: 2021,
      client: "Global Enterprises",
      image: "https://via.placeholder.com/300",
    },
    {
      name: "ERP System",
      year: 2021,
      client: "Global Enterprises",
      image: "https://via.placeholder.com/300",
    },
    {
      name: "ERP System",
      year: 2021,
      client: "Global Enterprises",
      image: "https://via.placeholder.com/300",
    },
    {
      name: "ERP System",
      year: 2021,
      client: "Global Enterprises",
      image: "https://via.placeholder.com/300",
    },
    {
      name: "ERP System",
      year: 2021,
      client: "Global Enterprises",
      image: "https://via.placeholder.com/300",
    },
  ],
  locations: ["London, UK", "New York, USA", "Bangalore, India"],
};

const Section = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="my-5"
  >
    <h2 className="text-center mb-4">{title}</h2>
    {children}
  </motion.div>
);

const Home = () => {
  const [navbarSize, setNavbarSize] = useState("large");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarSize("small");
      } else {
        setNavbarSize("large");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1200x400"
            alt="Slide 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1200x400"
            alt="Slide 2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1200x400"
            alt="Slide 3"
          />
        </Carousel.Item>
      </Carousel>

      <Container className="mt-5 pt-5">
        <Section title="About Us">
          <p className="text-center">
            {companyInfo.name} was founded in November 2000. Led by CEO{" "}
            {companyInfo.ceo} and Managing Director{" "}
            {companyInfo.managingDirector}, we specialize in delivering
            cutting-edge technology solutions globally.
          </p>
        </Section>

        <Section title="Services">
          <Row>
            {companyInfo.services.map((service, index) => (
              <Col md={4} key={index}>
                <Card
                  className="shadow-lg p-3"
                  style={{
                    background: "linear-gradient(135deg, #A1D6E2, #1995AD)",
                  }}
                >
                  <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Section>

        {/* <Section title="Projects">
          <Row>
            {companyInfo.projects.map((project, index) => (
              <Col md={4} key={index}>
                <Card className="shadow-lg p-3">
                  <Card.Img variant="top" src={project.image} />
                  <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Text>
                      Year: {project.year} <br /> Client: {project.client}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Section> */}

        <Section title="Locations">
          <ul className="text-center list-unstyled">
            {companyInfo.locations.map((location, index) => (
              <li key={index} className="my-2">
                {location}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Contact Us">
          <p className="text-center">
            Reach out to us at contact@techvision.com
          </p>
        </Section>
      </Container>

      <footer
        style={{ backgroundColor: "#1995AD" }}
        className="text-white text-center py-3"
      >
        <p>
          &copy; {new Date().getFullYear()} {companyInfo.name}. All rights
          reserved.
        </p>
      </footer>
    </>
  );
};

export default Home;
