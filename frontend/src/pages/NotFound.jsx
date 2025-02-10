import React from 'react';
import Navbar1 from '../components/NavBar/Navbar';

export default function NotFound() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar1 />
      <div className="flex flex-grow justify-center items-center">
        <h1 className="text-3xl font-bold">Not Found</h1>
      </div>
    </div>
  );
}
