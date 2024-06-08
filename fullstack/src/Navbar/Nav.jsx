import React from 'react'

const Nav = () => {
  return (
    <div>
        <nav>
            <div>

                <div className='first'>
                    <text>AI GEN</text>
                    <div>
                        <a href="">Features</a>
                        <a href="">Roadmap</a>
                        <a href="">Tokenomics</a>
                    </div>
                </div>
                <div className='second'>
                    <button>
                        Whitepaper
                    </button>
                    <button>
                        GetStarted
                    </button>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Nav