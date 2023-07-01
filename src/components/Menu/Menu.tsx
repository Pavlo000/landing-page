/* eslint-disable jsx-a11y/anchor-is-valid */
import { SocialList } from '../SocialList';
import './Menu.scss';

export const Menu: React.FC = () => {
  return (
    <menu className="Menu" id="menu">
      <div className="Menu__top-content">
        <h2 className="Menu__title">
          Menu
        </h2>

        <ul className="Menu__list">
          <li className="Menu__item">
            <a href="#" className="Menu__link tab">
              Home
            </a>
          </li>
          <li className="Menu__item">
            <a href="#about" className="Menu__link tab">
              About me
            </a>
          </li>
          <li className="Menu__item">
            <a href="#projects" className="Menu__link tab">
              My works
            </a>
          </li>
          <li className="Menu__item">
            <a href="#contacts" className="Menu__link tab">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="Menu__social">
        <SocialList />
      </div>
    </menu>
  );
}