import React from 'react';
import './Gallery1.css'

const images = [
  { src: './Images/birthday.jpg', alt: 'Event 1' },
   { src: './Images/birthday.jpg', alt: 'Event 2' },

  
]
function Gallery1 () {
  return (
    <div className='main'>
<div className="card"></div>
<div className="card"></div>
<div className="card"></div>
<div className="card"></div>
</div>
  );
};

export default Gallery1;
