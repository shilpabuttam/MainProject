import React from 'react'
import About from './AdminContent/About'
import Services from "./AdminContent/Services";  
import Projects from "./AdminContent/Projects"; 
import Locations from "./AdminContent/Locations";  
import ContactUs from "./ContactUs";
import Navbar1 from '../components/NavBar/Navbar'; 

function Home1() {
  return (
    <div>
        <Navbar1 />
        <About />
        <Services />
        {/* <Projects /> */}
        <Locations />
        <ContactUs />  
        
    </div>
  )
}

export default Home1
