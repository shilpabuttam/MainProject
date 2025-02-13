import React, { useRef } from 'react'

export default function Navbar() {

     const aboutRef = useRef(null);
      const servicesRef = useRef(null);
      const projectsRef = useRef(null);
      const locationsRef = useRef(null);
      const contactRef = useRef(null);
      
      
    
      const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
      };
  return (
    <div>
          <nav className="navbar">
        <ul>
          <li onClick={() => scrollToSection(aboutRef)}>About</li>
          <li onClick={() => scrollToSection(servicesRef)}>Services</li>
          <li onClick={() => scrollToSection(projectsRef)}>Projects</li>
          <li onClick={() => scrollToSection(locationsRef)}>Locations</li>
          <li onClick={() => scrollToSection(contactRef)}>Contact</li>
        </ul>
      </nav>
    </div>
  )
}
