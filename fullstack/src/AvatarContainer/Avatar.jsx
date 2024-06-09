import { useEffect,React } from 'react'
import img from './image.png'
import './Avatar.css'
const Avatar = () => {
    useEffect(() => {
        const pTags = document.querySelectorAll('.AvatarText p');
        let options = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
        };
    
        const callback = (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.focus();
            }
          });
        };
    
        let observer = new IntersectionObserver(callback, options);
        pTags.forEach(p => observer.observe(p));
    
        return () => {
          pTags.forEach(p => observer.unobserve(p));
        };
      }, []);
  return (
    <div>
        <div className="Avatar">
            <div className='AvatarImg'>
                <img src ={img} alt="girlImg" />
            </div>
            <div className='AvatarText'>
            <p tabIndex="0">How It Works</p>
            <p tabIndex="0">Select an Avatar</p>
            <p tabIndex="0">Create or Generate Script</p>
            <p tabIndex="0">Select AI Voices</p>
            <p tabIndex="0">Publish</p>
            </div>
        </div>
    </div>
  )
}

export default Avatar