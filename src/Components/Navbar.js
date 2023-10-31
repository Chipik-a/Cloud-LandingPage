import React from 'react';
import Logo from '../Images/logo.svg';
// import HomeIcon from '@mui/icons-material/Home';

const Navbar = () => {

    // const menuOptions = [
    //     {
    //         text: 'Home',
    //         icon: <HomeIcon />
    //     }
    // ]

  return (
        <nav className='container'>
        
            <div className="nav-logo-container">
                <img src={Logo} alt="logo" />
            </div>

            <div className="navbar-links-container">
                <a href="#!">Home</a>
                <a href="#!">How it works</a>
                <a href="#!">What we do</a>
                <a href="#!">Who we help</a>
                <a href="#!">Resources</a>

                <button className="button primary-button">
                    Login
                </button>

                <button className="button primary-button-black">
                    Talk to an Expert
                </button>
            </div>

        </nav>    
  )
}

export default Navbar
