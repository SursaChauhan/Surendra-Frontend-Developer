// import React from 'react'

// const Tokenomics = () => {
//   return (
//     <div>
//         <div>
//             <div className="heading">
//                 <p>Tokenomics</p>
//             </div>
//             <div className="lists">
//                 <div className="lists1">

//                 </div>
//             </div>
//             <div className="chart"></div>
//         </div>
//     </div>
//   )
// }

// export default Tokenomics


// src/Tokenomics.js
import React from 'react';
import './Tokenomics.css';
import donut from './Images/newdonut.png'
import image from './Images/image.png'
const Tokenomics = () => {
  return (
    <div className="tokenomics">
      <div className="header">
        <h1>Tokenomics</h1>
      </div>
      <div className="details">
        <div className="left-column">
          <p><strong>Name</strong><span style={{marginLeft:'5.7rem'}}>: AI GEN</span></p>
          <p><strong>Total Supply</strong ><span style={{marginLeft:"1.4rem"}}>: 1B</span></p>
          <p><strong>Contract</strong> <span style={{marginLeft:"3.9rem"}}>: Lorem ipsum dolor sit a...</span></p>
        </div>
        <div className="right-column">
          <p><strong>Token Name</strong> <span style={{marginLeft:'5rem'}}>: $AIGEN </span></p>
          <p><strong>Circulating Supply</strong> <span style={{marginLeft:'1.4rem'}}>: 1B</span></p>
          <p><strong>Chain</strong> <span style={{marginLeft:'9.8rem'}}>: Ethereum</span></p>
        </div>
      </div>
<div className="Chartdetails">
      <div className="chart">
        <img src={image} alt="Token Distribution Chart" />
      </div>

      <div className="legend">
        <div className="legend-item">
          <div className="color-box partnership"></div>
          <p>Partnership <span className='span1'>:</span>15% tokens</p>
        </div>
        <div className="legend-item">
          <div className="color-box lp-pool"></div>
          <p>LP Pool <span className='span'>:</span> 35% tokens</p>
        </div>
        <div className="legend-item">
          <div className="color-box burned"></div>
          <p>Burned <span className='span'>:</span> 30% tokens</p>
        </div>
        <div className="legend-item">
          <div className="color-box bnb-lp-pool"></div>
          <p>BNB LP Pool <span className='spanlast'>:</span> 30% tokens</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Tokenomics;
