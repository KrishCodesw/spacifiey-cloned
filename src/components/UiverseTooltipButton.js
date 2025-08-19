import React from 'react';
import './UiverseTooltipButton.css';

const UiverseTooltipButton = () => {
  return (
    <div className="tooltip-wrapper">
      {/* tooltip bubble */}
      <div className="tooltip-popup">
        <div className="tooltip-bubble">
          <svg viewBox="0 0 24 24" className="globe">
            <circle r="9" cx="12" cy="12" />
            <path d="M12 3C12 3 8.5 6 8.5 12C8.5 18 12 21 12 21" />
            <path d="M12 3C12 3 15.5 6 15.5 12C15.5 18 12 21 12 21" />
            <path d="M3 12H21" />
            <path d="M19.5 7.5H4.5" />
            <path d="M19.5 16.5H4.5" />
          </svg>
          <span>Aethereon.AI</span>
        </div>
        <div className="tooltip-tail shadow" />
        <div className="tooltip-cover" />
      </div>

      {/* main button */}
      <div className="visit-btn">
        <svg viewBox="0 0 24 24" className="arrow">
          <path d="M15.43 7.7C7.55 8 3.44 15.23 2.17 19.4c-.09.3.15.6.46.6.2 0 .38-.12.46-.29 2.96-6.29 9.63-7.39 12.44-7.14.25.03.44.24.44.49v2.08c0 .44.53.67.84.36l3.9-3.8a.47.47 0 0 0 0-.64l-3.92-5.7c-.27-.4-.9-.2-.9.28v1.58c0 .28-.23.5-.5.5z" />
        </svg>
        {/* <span className="visit-text"><a href="athereon.ai">Check Our Website</a></span> */}
        <span className="visit-text"><a href="https://www.aetheronai.online/" target="_blank" rel="noopener noreferrer">Check Our Website</a></span>
      </div>
    </div>
  );
};

export default UiverseTooltipButton;