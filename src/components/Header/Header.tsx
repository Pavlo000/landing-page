/* eslint-disable jsx-a11y/anchor-is-valid */
import { Nav } from '../Nav';

import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';

import './Header.scss';

export const Header: React.FC = () => {
  return (
    <header className="Header">
      <div className="Header__top-content">
        <a href="#" className="Header__logo icon">
          <LogoIcon />
        </a>
        <div className="Header__nav">
          <Nav />
        </div>
        <a href="#menu" className="Header__icon">
          <MenuIcon />
        </a>
      </div>

      <div className="Header__block">
        <h1 className="Header__title">
          Portfolio, and little bit about my works
        </h1>

        <a href="#projects" className="Header__button button">
          Explore works
        </a>
      </div>
    </header>
  );
}