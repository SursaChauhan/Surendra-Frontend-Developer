import React, { useState, useEffect, useRef } from 'react';
import './RoadMap.css';
import img1 from './Images/image1.png';
import img2 from './Images/image2.png';
import img3 from './Images/image3.png';

const Roadmap = () => {

    const [scrollDirection, setScrollDirection] = useState(null);
    const rightSectionRef = useRef(null);
    const lastScrollY = useRef(0); // Initialize useRef at the top level
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
  
        if (currentScrollY > 0) {
          if (currentScrollY > lastScrollY.current) {
            // Scrolling down
            setScrollDirection('down');
          } else {
            // Scrolling up
            setScrollDirection('up');
          }
        }
  
        lastScrollY.current = currentScrollY;
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []); // Empty dependency array to run effect only once
  
    useEffect(() => {
        if (scrollDirection === 'down') {
          if (rightSectionRef.current) {
            rightSectionRef.current.classList.remove('slide-in');
          }
        } else if (scrollDirection === 'up') {
          if (rightSectionRef.current) {
            rightSectionRef.current.classList.add('slide-in');
          }
        }
      }, [scrollDirection]);
      

  return (
    <div className="roadmap-container">
      <div className="roadmap-heading">
        <h1>Roadmap</h1>
      </div>
      <div className="roadmap-section">
        <div className="left-section">
          <h2>PHASE 1</h2>
          <ul>
            <li>Horizen dai dai harmony dogecoin waves nexo.</li>
            <li>Flow horizen waves dash tether zcash waves dash terraUSD.</li>
            <li>Quant harmony amp cosmos PancakeSwap decentraland decred.</li>
            <li>Serum TRON solana tether holo crypto. Flow eCash amp EOS digibyte stellar.</li>
          </ul>
        </div>
        <div className="right-section">
          <img src={img1} alt="Dashboard" />
        </div>
      </div>
      <div className="roadmap-section">
        <div className="left-section">
          <h2>PHASE 2</h2>
          <ul>
            <li>BitTorrent dai dogecoin crypto neo nexo cosmos tezos ox PancakeSwap.</li>
            <li>Tether ethereum helium eCash IOTA. Litecoin enjin shiba-inu dash audius monero.</li>
            <li>Aave PancakeSwap loopring horizen neo uniswap avalanche litecoin celsius TRON.</li>
            <li>Hive stellar velas flow cardano.</li>
          </ul>
        </div>
        <div className="right-section">
          <img src={img2} alt="AI Optimizer" />
        </div>
      </div>
      <div className="roadmap-section">
        <div className="left-section">
          <h2>PHASE 3</h2>
          <ul>
            <li>Revain audius bitcoin revain PancakeSwap elrond ipsum ethereum.</li>
            <li>Waves TRON dogecoin bancor eCash quant secret.</li>
            <li>Celsius crypto bancor nexo litecoin decentraland crypto.</li>
          </ul>
        </div>
        <div className="right-section">
          <img src={img3} alt="Select Network" />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
