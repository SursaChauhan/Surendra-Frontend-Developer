import React from 'react';
import shoe from './Images/shoe.png';
import rectangle from './Images/rectangle.png'
import avatar from './Images/avatar.png'
import script from './Images/keyboard.png'
import AI from './Images/ai.png'
import './Products.css'
const Products = () => {
  return (
    <div>
        <div className="products">
        <div className="first">
            <div className="outfit" >
                <div className="text1" >
                    AI Outfits
                </div>
                <div className="shoe" >
                    <img src={shoe} alt="shoe" />
                    <img src={rectangle} alt="rectangle" />
                </div>
            </div>
            <div className="avatar">
                <div className="text">Realistic AI Avatar</div>
                <div className="Realimg">
                    <img src={avatar} alt="avatar" />
                </div>
            </div>
        </div>
<div className="two">
    <div className="script">
        <div className="text">Generate or Write your Script</div>
        <div className="Scriptimg">
            <img src={script} alt="script" />
        </div>
    </div>
    <div className="AI">
        <div className="text">AI-Powered Voice Genrator</div>
        <div className="AIimg">
            <img src={AI} alt="AIimg" />
        </div>
    </div>
</div>
</div>
    </div>
  )
}

export default Products