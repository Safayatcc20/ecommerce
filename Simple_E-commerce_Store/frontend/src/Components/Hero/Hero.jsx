import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/product_19.png'

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-left">
            <h2 className='hero-collection-text'>New arrivals only</h2>
            <div className="hero-text-container">
                <div className="hero-hand-icon">
                    <p className='hero-collection-text' >new</p>
                    <img src={hand_icon} alt="Hand" />
                </div>
                <div>
                  <p className='hero-collection-text'>collections</p>
                  <p className='hero-collection-text'>for everyone</p>
                </div>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collections</div>
                <img src={arrow_icon} alt="Arrow" />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
