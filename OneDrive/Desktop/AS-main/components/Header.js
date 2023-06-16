"use client";

import Button from './Button';

export default function MyComponent() {
  return (
    <header className="Header">
      <div className="container">
        <div className="Header-left">
          <div className="Header-left-logo">
            <a href="">
            <img src="/as-logo.jpg"></img>
            </a>
          </div>
        </div>
        <div className="icon Header-switch" onClick={clickThat}>
          <div className="button-icon Header-switch-icon"></div>
        </div>
        <div className="Header-right">
          <div className="Header-right-section">
            <img className="icon" src="/time.svg" alt="" />
            <div className="text">
              RADNO VRIJEME
              <br />
              Pon - Sub: 8:00 - 17:00
            </div>
          </div>
          <div className="Header-right-section">
            <img className="icon" src="/phone.svg" alt="" />
            <div className="text">
              POZOVITE NAS
              <br />
              062/173-440
            </div>
          </div>
          <div className="Header-right-button">
            <Button text="LOGIN" />
          </div>
        </div>
      </div>
    </header>
  );
};

function clickThat() {
  var e = document.getElementById('switch');
  e.classList.toggle('switch');
}
