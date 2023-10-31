import React from 'react';
import Hubimg from '../Images/hub.svg';

const Hub = () => {
  return (
    <div className="hub container">
        <div className="hub-wrapper">
            <h2 className="primary-heading">
                The AC Hub
            </h2>
            <p className="primary-text hub-text">
            Explore our dedicated online resources. We've got the tips, tricks and online accounting know-how for business success.
            </p>
            <button className="button primary-button-switch">
            View Hub
            </button>
        </div>
        <div className="hub-images">
            <img src={ Hubimg } alt="" />
        </div>

    </div>
  )
}

export default Hub
