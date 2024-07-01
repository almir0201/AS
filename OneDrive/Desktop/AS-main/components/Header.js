import Link from 'next/link';
import Button from './Button';
import Image from 'next/image';

export default function MyComponent() {
  return (
    <header className="Header">
      <div className="container">
        <div className="Header-left">
          <div className="Header-left-logo">
            <Link href='/'>
              <Image src="/as-logo.jpg" alt='logo' priority width={195} height={51} />
            </Link>
          </div>
        </div>
        <div className="icon Header-switch">
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
            <Button/>
          </div>
        </div>
      </div>
    </header>
  );
};
