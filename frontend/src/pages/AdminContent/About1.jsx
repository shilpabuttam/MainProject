import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "./About.css";


function DarkVariantExample() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cards = [
    {
      title: "Vision",
      text: "Our vision is to create a seamless digital platform where users can experience efficiency, innovation, and ease in every interaction.",
    },
    {
      title: "Mission",
      text: "Our mission is to empower individuals and businesses with cutting-edge technology solutions that simplify everyday tasks.",
    },
    {
      title: "Goals",
      text: "Our goal is to continuously innovate and improve, ensuring we provide top-tier services and user experiences.",
    },
  ];

  return (
    <>
    

        
      <Carousel data-bs-theme="dark" className="carousel">
        <Carousel.Item interval={3000}>
          <img
            className="image"
            src="https://static.vecteezy.com/system/resources/previews/008/065/679/non_2x/double-exposure-business-hand-shake-between-two-colleagues-greeting-dealing-merger-and-acquisition-concept-abstract-city-and-forex-chart-background-with-copy-space-photo.jpg"
            alt="First slide"
          />

          <Carousel.Caption>
            <h2>
              Empowering Business, transfroming Futures-our journey of
              Excellence
            </h2>
            <br />
            <p>
              Founded in 2000, <b>OSTECHSERVICE</b> started with a simple
              mission to help businesses scale efficiently through strategic
              outsourcing solutions. Over the years, we've grown into a trusted
              partner for global enterprises, delivering excellence across list
              key services, e.g., IT services, customer support, back-office
              solutions,etc
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="image"
            src="https://media.istockphoto.com/id/1279904483/photo/ladder-career-path-for-business-growth-success-process-concept-wood-block-stacking-as-step.jpg?s=612x612&w=0&k=20&c=QQ5xpFhoPYXptJv0uqn8mc_wnWtOg-do-dQvLC9OCv4="
            alt="Second slide"
          />
          <Carousel.Caption>
            {/* <h5>Second slide label</h5> */}
            <p>
              Our commitment to quality, innovation, and client success has
              fueled our journey, earning us{" "}
              <b>
                [mention awards, milestones, or industry recognition if
                applicable]
              </b>
              . With a team of skilled professionals and cutting-edge
              technology, we continue to drive efficiency and success for
              businesses worldwide. Join us as we shape the future of
              outsourcing
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


      <div className="d-flex gap-3 justify-content-center align-items-center vh-100">
      {cards.map((card, index) => (
        <Card
          key={index}
          className="vision-card text-center me-2"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{ transition: "all 0.01s ease-in-out" }}
        >
          <Card.Body className={`vision-body `} style={{ transition: "opacity 0.5s ease-in-out" }}>
            <h2 className="vision-title" style={{ transition: "color 0.5s ease-in-out" }}>{card.title}</h2>
            {hoveredIndex === index && <p className="vision-text" style={{ transition: "opacity 0.5s ease-in-out" }}>{card.text}</p>}
          </Card.Body>
        </Card>
      ))}
    </div>

    </>
  );
}

export default DarkVariantExample;
