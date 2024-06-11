// import React from 'react'
// import './NavStyle.css'
// const Nav = () => {
//   return (
//     <div>
//         <nav id='nav'>
//             <div>

//                 <div className='navfirst'>
//                     <text>AI.GEN</text>
//                     <div>
//                         <p>Features</p>
//                         <p>Roadmap</p>
//                         <p>Tokenomics</p>
//                     </div>
//                 </div>
//                 <div className='second'>
//                     <button>
//                         Whitepaper
//                     </button>
//                     <button>
//                         Get Started
//                     </button>
//                 </div>
//             </div>
//         </nav>
//     </div>
//   )
// }

// export default Nav

import React from 'react';
import './NavStyle.css';

const Nav = () => {
  return (
    <div>
      <nav id='nav'>
        <div className='nav-container'>
          <div className='navfirst'>
            <text>AI.GEN</text>
            <div>
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
        </div>
        {/* <div className='nav-mobile'>
          <text>AI.GEN</text>
          <div className='hamburger-menu'>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div> */}
      </nav>
    </div>
  )
}

export default Nav;
