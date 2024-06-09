import React from 'react';
import './Container.css';
import img1 from'./images/image1.png'
import img2 from'./images/image.png'

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
        <div className="image-column">
          <img src={img1} alt="Image 1" />
          <img src={img2} alt="Image 2" />
          <img src={img1} alt="Image 3" />
        </div>
        <div className="image-column">
          <img src={img1} alt="Image 4" />
          <img src={img2} alt="Image 5" />
          <img src={img1} alt="Image 6" />
        </div>
        <div className="image-column">
          <img src={img1} alt="Image 7" />
          <img src={img1} alt="Image 8" />
          <img src={img1} alt="Image 9" />
        </div>
      </div>
     <p>hi</p>
     </div>
    </div>
  );
}

export default Container;
