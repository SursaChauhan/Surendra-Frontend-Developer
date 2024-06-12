import React from 'react'
import './Contain.css'
import img1 from './Images/img1.png';
import img2 from './Images/img2.png';
import img3 from './Images/img3.png';
import img4 from './Images/img4.png';
import img5 from './Images/img5.png';
import img6 from './Images/img6.png';
import img7 from './Images/img7.png';
import img8 from './Images/img8.png';
import img9 from './Images/img9.png';


const Contain = () => {
  return (
    <>
    <div className="ImgContainer">
      <div className="createtext">
        <p>Create, customize, and publish <span>your digital persona to life effortlessly.</span> </p>
      </div>
      <div className="img">
        <div className="oddColumn">
      <img src={img1} alt="img3" />
      <img src={img2} alt="img3" />
      <img src={img3} alt="img3" />
        </div>
        <div className="evenColumn">
      <img src={img4} alt="img3" />
      <img src={img5} alt="img3" />
      <img src={img6} alt="img3" />
        </div>
        <div className="oddColumn">
      <img src={img7} alt="img3" />
      <img src={img8} alt="img3" />
      <img src={img9} alt="img3" />
        </div>
        <div className="evenColumn">
      <img src={img1} alt="img3" />
      <img src={img2} alt="img3" />
      <img src={img3} alt="img3" />
        </div>
        <div className="oddColumn">
      <img src={img4} alt="img3" />
      <img src={img5} alt="img3" />
      <img src={img6} alt="img3" />
        </div>
        <div className="evenColumn">
      <img src={img7} alt="img3" />
      <img src={img8} alt="img3" />
      <img src={img9} alt="img3" />
        </div>
        <div className="oddColumn">
      <img src={img1} alt="img3" />
      <img src={img5} alt="img3" />
      <img src={img3} alt="img3" />
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Contain