import React from 'react';
import TypewriterText from './TypewriterText';

const CarouselSlide = ({ slide, isActive }) => {
  return (
    <div className={`carousel-item ${isActive ? 'active' : ''}`}>
      <img src={slide.background} className="d-block w-100" alt="Slide Background" />
      <div className="carousel-caption container">
        <div className="row align-items-center">
          <div className="col-md-6 caption-text animate__animated animate__fadeInLeft">
            <div className="typewriter-container">
              <TypewriterText html={slide.title} />
            </div>
            <div className="typewriter-container">
              <TypewriterText html={slide.description} speed={50} />
            </div>
            <button className="btn btn-primary">Learn More</button>
          </div>
          <div className="col-md-6 caption-image">
            <img src={slide.image} alt="Product" className="img-fluid product-img float-animation" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselSlide;
