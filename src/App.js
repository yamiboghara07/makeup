import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Carousel } from 'react-bootstrap';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Heading from "./Heading";
import Gallery from "./Gallery";
import Shop from "./Shop";


function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/heading" element={<Heading/>} />
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="/shop" element={<Shop/>} />

    </Routes>
    // heading
    // gallery 3 column
    // shop 3 column
    // our services
  )
}
export default App