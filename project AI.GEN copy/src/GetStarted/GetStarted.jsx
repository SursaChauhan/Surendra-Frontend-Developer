import React, { useRef, useEffect } from 'react';
import './GetStarted.css';
import img1 from './Images/image.png'
import img2 from './Images/img1.png'
import vector from './Images/vector.png'

const GetStarted = () => {
  const firstColumnRef = useRef(null);
  const secondChildRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const firstColumnHeight = firstColumnRef.current.offsetHeight;
//       const scrollTop = window.scrollY;

//       if (scrollTop > firstColumnHeight) {
//         secondChildRef.current.style.position = 'relative';
//         secondChildRef.current.style.top = `${scrollTop - firstColumnHeight}px`;
//       } else {
//         secondChildRef.current.style.position = 'static';
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

  return (
    <div>
    <div className="main-container">
      <div className="first-child" ref={firstColumnRef}>
      <div className="column Clodd">
          <img src={img2} alt="Image 1" />
          <img src={img2} alt="Image 2" />
          <img src={img2} alt="Image 3" />
        </div>
        <div className="column Cleven">
          <img src={img1} alt="Image 1" />
          <img src={img1} alt="Image 2" />
          <img src={img1} alt="Image 3" />
        </div>
        <div className="column Clodd">
          <img src={img2} alt="Image 1" />
          <img src={img2} alt="Image 2" />
          <img src={img2} alt="Image 3" />
        </div>
        <div className="column Cleven">
          <img src={img1} alt="Image 1" />
          <img src={img1} alt="Image 2" />
          <img src={img1} alt="Image 3" />
        </div>
        <div className="column Clodd">
          <img src={img2} alt="Image 1" />
          <img src={img2} alt="Image 2" />
          <img src={img2} alt="Image 3" />
        </div>
        <div className="column Cleven">
          <img src={img1} alt="Image 1" />
          <img src={img1} alt="Image 2" />
          <img src={img1} alt="Image 3" />
        </div>
        <div className="column Clodd">
          <img src={img2} alt="Image 1" />
          <img src={img2} alt="Image 2" />
          <img src={img2} alt="Image 3" />
        </div>
      </div>
      <div className="second-child" ref={secondChildRef}>
        <div className="content">
          <button className="get-started-button">
            Get Started
          </button>
          <img src={vector} alt="Arrow" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default GetStarted;
