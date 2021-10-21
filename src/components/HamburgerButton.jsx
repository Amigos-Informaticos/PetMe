import React from 'react';
import '../css/hamburger.css';
import PropTypes from 'prop-types';

const HamburgerButton = ({hamburgerButton, panel, panelOption}) => {

    
    const handleHamburger = ({target}) => {       
        if (
          target.matches(hamburgerButton) ||
          target.matches(`${hamburgerButton} *`)
        ) {
          togglePanel(panel);
          toggleHamburger(hamburgerButton);
        }
    
        if (target.matches(panelOption)) {
          removePanel(panel, hamburgerButton);
        }
      };    
    
    const togglePanel = (panelSelector) => {
      document.querySelector(panelSelector).classList.toggle('is-active');
    };
    
    const toggleHamburger = (hamburgerButton) => {
      document.querySelector(hamburgerButton).classList.toggle('is-active');
    };
    
    const removePanel = (panel, hamburgerButton) => {
      document.querySelector(panel).classList.remove('is-active');
      document.querySelector(hamburgerButton).classList.remove('is-active');
    };

    return (
        <button className="hamburger-button hamburger hamburger--arrowturn" type="button" onClick={handleHamburger}>
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button> 
    );
}

HamburgerButton.propTypes = {
    hamburgerButton: PropTypes.string,
    panel: PropTypes.string,
    panelOption: PropTypes.string
};

export default HamburgerButton;
