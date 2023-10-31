import React from 'react';
import Frizzenti from '../Images/frizzenti.svg';
import Manyone from '../Images/manyone.svg';
import Beam from '../Images/beam.svg';
import Vemy from '../Images/vemy.svg';
import Olio from '../Images/olio.svg';
import Fuel from '../Images/fuel.svg';
import Feel from '../Images/feel.svg';
import Buffer from '../Images/buffer.svg';
import Chaser from '../Images/chaser.svg';



const Companies = () => {
  return (
    <div className='companies small-container'>
        <p className="companies-text">
        Join 200+ amazing companies
        </p>
        <div className="companies-logo-wrapper">
            <a href="#!"><img src={ Frizzenti } alt="" /></a>
            <a href="#!"><img src={ Vemy } alt="" /></a>
            <a href="#!"><img src={ Feel } alt="" /></a>
            <a href="#!"><img src={ Manyone } alt="" /></a>
            <a href="#!"><img src={ Olio } alt="" /></a>
            <a href="#!"><img src={ Buffer } alt="" /></a>
            <a href="#!"><img src={ Beam } alt="" /></a>
            <a href="#!"><img src={ Fuel } alt="" /></a>
            <a href="#!"><img src={ Chaser } alt="" /></a>  
        </div>
    </div>
  )
}

export default Companies
