import React from 'react';
import LogoSmall from '../Images/lofo-small.svg';
import LogoMedium from '../Images/logo-sq.svg';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer-head">
                <div className="footer-logo">
                    <img src={LogoSmall} alt="" />
                </div>
                <h2 className="footer-title">Your new finance team</h2>
            </div>

            <div className="footer-list-links">
                <div className="list-block">
                    <div className="list-title">How it works</div>
                    <a href="#!" className="list-link">Hassle Free Switching</a>
                </div>
                <div className="list-block">
                    <div className="list-title">What we do</div>
                    <a href="#!" className="list-link">Finance Teams</a>
                    <a href="#!" className="list-link">Tax</a>
                    <a href="#!" className="list-link">R&D Tax Credits</a>
                    <a href="#!" className="list-link">A platform for success</a>
                    <a href="#!" className="list-link">Software Integrations</a>
                </div>
                <div className="list-block">
                    <div className="list-title">Who we help</div>
                    <a href="#!" className="list-link">Startups</a>
                    <a href="#!" className="list-link">Small Business</a>
                    <a href="#!" className="list-link">Medium Business</a>
                    <a href="#!" className="list-link">CFO & Head of Finance</a>
                </div>
                <div className="list-block">
                    <div className="list-title">Resources</div>
                    <a href="#!" className="list-link">Case Studies</a>
                    <a href="#!" className="list-link">Blogs</a>
                    <a href="#!" className="list-link">Guides</a>
                    <a href="#!" className="list-link">Podcasts</a>
                </div>
                <div className="list-block">
                    <div className="list-title">Company</div>
                    <a href="#!" className="list-link">About Us</a>
                    <a href="#!" className="list-link">Careers</a>
                    <a href="#!" className="list-link">Contact Us</a>
                </div>
                <div className="list-block">
                    <div className="list-title">Speak to us</div>
                    <a href="tel:+802045308432" className="list-link">Call 020 4530 8432</a>
                    <a href="#!" className="list-link">Refer a friend for £175</a>
                    <a href="#!" className="list-link">Partner with us</a>
                </div>
            </div>
            
            <div className="footer-privacy">
                <div className="privacy-links">
                    <a href="#!" className="privacy list-link">© Accountancy Cloud 2021</a>
                    <a href="#!" className="privacy list-link">Privacy Policy & Cookies</a>
                    <a href="#!" className="privacy list-link">Terms of Service</a>
                </div>
                <div className="footer-logo-end">
                    <img src={ LogoMedium } alt="" className="logo-medium" />
                </div>
            </div>

        </div>
    </footer>
  )
}

export default Footer
