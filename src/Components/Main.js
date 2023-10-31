import React from 'react';
import Laptop from '../Images/laptop.svg';

const Main = () => {
  return (
    <div className='main-preview container'>
        <div className="main-content">

            <h1 className="primary-heading">
                Get your finances right
            </h1>
            <p className="primary-text">
                Get your finances right with Accountancy Cloud. We offer the best accounting, R&D credits and CFO services for ambitious businesses who want to grow.
            </p>
            <p className="primary-subheading">Switching to us is simple</p>
            <button className="button primary-button-main">
                Talk to us
            </button>

        </div>

        <div className="main-images">
            <img src={ Laptop } alt="" />
        </div>
       
    </div>
  )
}

export default Main
