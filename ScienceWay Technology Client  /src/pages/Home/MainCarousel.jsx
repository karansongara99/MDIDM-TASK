import React, { useEffect } from 'react';
import CarouselSlide from './CarouselSlide';
import slides from './slidesData'; // Contains slide images and text data
import '../../assets/Styles/Home/HeroSection.css';

const MainCarousel = () => {
  useEffect(() => {
    const carousel = document.querySelector('#mainCarousel');
    const prevControl = document.querySelector('.carousel-control-prev');
    const nextControl = document.querySelector('.carousel-control-next');
    const prevPreview = prevControl?.querySelector('.preview-slide img');
    const nextPreview = nextControl?.querySelector('.preview-slide img');
    const items = carousel?.querySelectorAll('.carousel-item') ?? [];

    const updatePreviewImages = () => {
      const activeIndex = Array.from(items).findIndex(item => item.classList.contains('active'));
      const prevIndex = (activeIndex - 1 + items.length) % items.length;
      const nextIndex = (activeIndex + 1) % items.length;

      const prevProductImg = items[prevIndex]?.querySelector('.product-img')?.src;
      const nextProductImg = items[nextIndex]?.querySelector('.product-img')?.src;

      if (prevProductImg && nextProductImg) {
        prevPreview.src = prevProductImg;
        nextPreview.src = nextProductImg;
      }
    };

    const onSlide = () => {
      updatePreviewImages();
    };

    carousel?.addEventListener('slid.bs.carousel', onSlide);
    updatePreviewImages();

    return () => {
      carousel?.removeEventListener('slid.bs.carousel', onSlide);
    };
  }, []);

  return (
    <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <CarouselSlide key={index} slide={slide} isActive={index === 0} />
        ))}
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
        <div className="preview-slide d-none d-md-block">
          <img alt="Previous slide preview" />
        </div>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
        <div className="preview-slide d-none d-md-block">
          <img alt="Next slide preview" />
        </div>
      </button>
    </div>
  );
};

export default MainCarousel;
