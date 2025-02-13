import React from 'react'

export default function Herosection() {

    
  const data = {
    banner: "Welcome to Our Company",
  };

  return (
    <div>
         <section className="hero">
        <h1>{data.banner}</h1>
        <p>Innovate. Create. Transform.</p>
        <button className="cta-button">Get Started</button>
      </section>
    </div>
  )
}
