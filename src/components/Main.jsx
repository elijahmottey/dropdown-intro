
import React from 'react'
import './Main.css'
import Hero from '../assets/images/image-hero-desktop.png'
import Databiz from '../assets/images/client-databiz.svg'
import Audiophile from '../assets/images/client-audiophile.svg'
import Meet from '../assets/images/client-meet.svg'
import Maker from '../assets/images/client-maker.svg'


function Main() {
  return (
    <div className='Main'>
        <div className='Main-1'>
            <h1> Make <br /> remote work</h1>
            <p className='paragraph'>  Get your team in sync, no matter your location. <br /> Streamline processes, 
  create team rituals, and <br /> watch productivity soar.</p>
  <button className='b-learn'>Learn more</button>
      <figure className='symbols'>
        <img src={Databiz} alt="Databiz" />
        <img src={Audiophile} alt="Databiz" />
        <img src={Meet} alt="Databiz" />
        <img src={Maker} alt="Databiz" />
      </figure>


        </div>

        <figure>
            <img src={Hero} alt="Hero" />

        </figure>
    </div>
  )
}

export default Main