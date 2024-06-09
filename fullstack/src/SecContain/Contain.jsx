import React from 'react'
import './Contain.css'
import img1 from './Images/img3.png'
import img2 from './Images/img3.png'
import img3 from './Images/img3.png'
// import img3 from './Images/img3.png'
// import img3 from './Images/img3.png'
// import img3 from './Images/img3.png'

const Contain = () => {
  return (
    <>
    <div className="ImgContainer">
      <div className="text">
        <p>Create, customize, and publish <span>your digital persona to life effortlessly.</span> </p>
      </div>
      <div className="img">
        <div className="oddColumn">
      <img src={img3} alt="img3" />
      <img src={img3} alt="img3" />
      <img src={img3} alt="img3" />
        </div>
        <div className="evenColumn">
      <img src={img3} alt="img3" />
      <img src={img3} alt="img3" />
      <img src={img3} alt="img3" />
        </div>
        <div className="oddColumn">
      <img src={img3} alt="img3" />
      <img src={img3} alt="img3" />
      <img src={img3} alt="img3" />
        </div>
        <div className="evenColumn">
      <img src={img3} alt="img3" />
      <img src={img3} alt="img3" />
      <img src={img3} alt="img3" />
        </div>
        <div className="oddColumn">
      <img src={img3} alt="img3" />
      <img src={img3} alt="img3" />
      <img src={img3} alt="img3" />
        </div>
        <div className="evenColumn">
      <img src={img3} alt="img3" />
      <img src={img3} alt="img3" />
      <img src={img3} alt="img3" />
        </div>
        <div className="oddColumn">
      <img src={img3} alt="img3" />
      <img src={img3} alt="img3" />
      <img src={img3} alt="img3" />
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Contain