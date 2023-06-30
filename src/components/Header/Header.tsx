import { Nav } from '../Nav';
import { ReactComponent as IconLogo } from '../../assets/icons/logo.svg';

import './Header.scss';

export const Header: React.FC = () => {
  return (
    <header className="Header container-xxl">
      <div className="Header__nav">
        <a href="/" className="Header__logo icon">
          <IconLogo />
        </a>
        <Nav />
      </div>

      <div className="Header__block">
        <h1 className="Header__title">
          Portfolio, and how to make exiting things
        </h1>

        <a href="/" className="Header__button button">
          Explore works
        </a>
      </div>
    </header>
  );
}