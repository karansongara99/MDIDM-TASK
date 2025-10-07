import React from 'react';

import cat1 from "../../assets/Images/Home/Hero/1.webp"
import cat2 from "../../assets/Images/Home/Hero/2.webp"
import cat3 from "../../assets/Images/Home/Hero/3.webp"
import cat4 from "../../assets/Images/Home/Hero/4.webp"
import cat5 from "../../assets/Images/Home/Hero/5.webp"

import { useNavigate } from "react-router-dom"
import { CONSTANTS } from "../../constants/constant"

  
const categories = [
  { name: 'Batch Coding Machines', icon: cat1 },
  { name: 'Labelling Machines', icon: cat2 },
  { name: 'Sealing Machines', icon: cat3 },
  { name: 'Auto Pouch Filling Machines', icon: cat4 },
  { name: 'All Collections', icon: cat5, link: CONSTANTS.ROUTES.ALL_COLLECTIONS },
];

const CategorySidebar = () => (
  <div className="card shadow-sm p-3">
    {categories.map((category, idx) => (
      <div key={idx} className="category-item p-3 d-flex align-items-center">
        <img src={category.icon} className="me-3" alt={category.name} />
        {category.link ? (
          <a href={category.link} style={{ textDecoration: 'none', color: 'black' }}>
            <span className="fw-bold">{category.name}</span>
          </a>
        ) : (
          <span className="fw-bold">{category.name}</span>
        )}
      </div>
    ))}
  </div>
);

export default CategorySidebar;
