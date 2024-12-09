"use client"



import React from 'react';
import Nav from './Nav';
import MubNav from './MubNav';
import Headd from './Headd';


const Navbar = () => {
  return (
    <header>
    <Headd/>
      <Nav />
     <MubNav/>
    </header>
  );
};

export default Navbar;