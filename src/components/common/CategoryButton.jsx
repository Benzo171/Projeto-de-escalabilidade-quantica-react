// src/components/common/CategoryButton.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryButton = ({ image, title, linkTo = '#' }) => {
  return (
    <Link 
      to={linkTo} 
      className="flex flex-col items-center gap-6 text-decoration-none group"
    >
      
      <div 
        className="transition-transform duration-300 group-hover:scale-105 w-[350px]"
      >
        <img 
          src={image} 
          alt={title} 
          className="w-full h-auto"
        />
      </div>
      
      <h3 className="text-3xl font-bold text-white transition-colors duration-300 group-hover:text-purple-400">
        {title}
      </h3>
    </Link>
  );
};

export default CategoryButton;