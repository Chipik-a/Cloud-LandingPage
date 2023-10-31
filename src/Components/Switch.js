import React from 'react';
import Software from '../Images/software.svg';
import Track from '../Images/track.svg';
import Support from '../Images/support.svg';


const Switch = () => {
  return (
    <div className='switch small-container'>
      <h2 className="primary-heading">
        Why Switch?
      </h2>
      <div className="items-wrapper">
        <div className="item">

          <img src= { Software } alt="" />
          <h4 className="subtitle">
            Powerful software
          </h4>
          <p className="text-item">
            Included in our service, each customer gets in-house software to access live <a href="#!" class="text-links">financial dashboards</a> and real-time management reports.
          </p>

        </div>
        
        <div className="item">

          <img src={ Track } alt="" />
            <h4 className="subtitle">
            Track cashflow
            </h4>
            <p className="text-item">
            Stay on top of your working capital, <a href="#!" class="text-links">taxes</a>, and cashflow, to ensure your business is performing at its best.
            </p>

          </div>

          <div className="item">

            <img src={ Support } alt="" />
            <h4 className="subtitle">
            Award winning support
            </h4>
            <p className="text-item">
            Expect the best from us. Get a dedicated finance team that will handle all your accounting, R&D credits and CFO needs.
            </p>

          </div>
      </div>

        <button className="button primary-button-switch">
          Discover what we do
        </button>
    </div>
  )
}

export default Switch
