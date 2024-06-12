// import React from 'react';
// import './NavStyle.css';

// const Nav = () => {
//   return (
//     <div>
//       <nav id='nav'>
//         <div className='nav-container'>
//           <div className='navfirst'>
//             <text>AI.GEN</text>
//             <div>
//               <p>Features</p>
//               <p>Roadmap</p>
//               <p>Tokenomics</p>
//             </div>
//           </div>
//           <div className='second'>
//             <button>
//               Whitepaper
//             </button>
//             <button>
//               Get Started
//             </button>
//           </div>
//         </div>
        
//       </nav>
//     </div>
//   )
// }

// export default Nav;


import React, { useState } from 'react';
import './NavStyle.css';
import img from './Images/image.png'

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav id='nav'>
        <div className='nav-container'>
          <div className='navfirst'>
            <text>AI.GEN</text>
            <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
              <p>Features</p>
              <p>Roadmap</p>
              <p>Tokenomics</p>
            </div>
          </div>
          <div className='second'>
            <button>
              Whitepaper
            </button>
            <button>
              Get Started
            </button>
          </div>
          <div className='menu-icon' onClick={toggleMenu}>
           <img src={img} alt="menu" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
