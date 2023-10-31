import React from 'react';
import Percent from '../Images/percent.png';

const Stack = () => {
  return (
   <div className="stack container">
        
        <div className="stack-images">
            <img src={ Percent } alt="" />
        </div>

        <div className="stack-content">
            <h2 className="primary-heading">
                Why Switch?
            </h2>
            <p className="primary-text">
            70% of companies switch to us from their DIY or legacy system. Now, get your bookkeeping, tax prep and CFO problems, solved. Complete our <a href="#!" class="text-links">contact form</a>, and find out why 9 out of 10 customers recommend us.
            </p>
        </div>
    </div>
   
  )
}

export default Stack
