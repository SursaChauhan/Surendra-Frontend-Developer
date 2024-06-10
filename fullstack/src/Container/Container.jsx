import React from 'react';
import './Container.css';
 import img1 from'./images/image1.png'
import img2 from'./images/image2.png'
import img3 from './images/image3.png'
import img4 from'./images/image4.png'
import img5 from'./images/image5.png'
import img6 from'./images/image6.png'
import img7 from'./images/image7.png'
import img8 from'./images/image8.png'
import img9 from'./images/image9.png'
function Container() {
  return (
    <div>
        <div className='container'>
      <div className="left">
        <div className='new'>🎉 New in AI.GEN: Real Time Interaction</div>
        <div className="text1">IOTA polygon serum ipsum</div>
        <div className="text1">WAX terraUSD gala THETA.</div>
        <div className="text2">Chiliz serum TRON dash aave cardano crypto celo. Golem ankr bancor horizen ethereum quant bitcoin.</div>
        <button className="btn">Get Started</button>
      </div>
      <div className="right">
        <div className="image-column column1">
          <img src={img5} alt="Image 1" />
          <img src={img1} alt="Image 2" />
          <img src={img2} alt="Image 3" />
        </div>
        <div className="image-column column2">
          <img src={img7} alt="Image 4" />
          <img src={img8} alt="Image 5" />
          <img src={img6} alt="Image 6" />
        </div>
        <div className="image-column column1">
          <img src={img3} alt="Image 7" />
          <img src={img4} alt="Image 8" />
          <img src={img9} alt="Image 9" />
        </div>
      </div>
     </div>
    </div>
  );
}

export default Container;
