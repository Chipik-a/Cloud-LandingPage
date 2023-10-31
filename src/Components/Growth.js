import React from 'react';
import RoketSmall from '../Images/roket-1.svg';
import RoketMedium from '../Images/roket-2.svg';
import RoketBig from '../Images/roket-3.svg';


const Growth = () => {
  return (
    <div className="growth">
        <div className="small-container">
            <h2 className="light-heading">
            Plans built for growth
            </h2>

            <div className="items-wrapper">
        <div className="item">

          <img src= { RoketSmall } alt="" />
          <h4 className="subtitle">
          Early stage startup
          </h4>
          <p className="text-item">
          Need your accounting system set up? Learn financial best practice and prime your business for the next stage of growth. We get you moving quickly with an accounting solution that does what you need.
          </p>

        </div>
        
        <div className="item">

          <img src={ RoketMedium } alt="" />
            <h4 className="subtitle">
            Scale up
            </h4>
            <p className="text-item">
            Spend less time worrying about your finances and more time shaping your company’s future. Get your bookkeeping, R&D credits and CFO problems, solved.
            </p>

          </div>

          <div className="item">

            <img src={ RoketBig } alt="" />
            <h4 className="subtitle">
            High growth
            </h4>
            <p className="text-item">
            Gain the financial accuracy, visibility, and real-time analysis you need to make smarter decisions, drive efficiency, and achieve total organizational alignment.
            </p>

          </div>
      </div>
        </div>
    </div>
  )
}

export default Growth
