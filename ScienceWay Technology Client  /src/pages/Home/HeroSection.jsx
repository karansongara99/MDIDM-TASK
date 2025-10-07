import React, { useEffect } from 'react';
import MainCarousel from './MainCarousel';
import CategorySidebar from './CategorySidebar';
import '../../assets/Styles/Home/HeroSection.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const HeroSection = () => {
  return (
    <div className="container-fluid p-4">
      <div className="row g-4">
        <div className="col-lg-9 col-md-8 carousel-col">
          <MainCarousel />
        </div>
        <div className="col-md-3">
          <CategorySidebar />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
