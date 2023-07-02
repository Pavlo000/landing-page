/* eslint-disable jsx-a11y/anchor-is-valid */
import { ReactComponent as IconLogo } from '../../assets/icons/logo.svg';
import './Footer.scss';
import { SocialList } from '../SocialList';

export const Footer: React.FC = () => {
  return (
    <footer className='Footer' id="contacts">
      <div className="container">
        <div className="Footer__section">
          <h4 className="Footer__title">
            Get in Touch With Me
          </h4>

          <a href="mailto:pavlmorz@gmail.com" className="Footer__mail link">
            <h2>
              pavlmorz@gmail.com
            </h2>
          </a>
        </div>

        <div className="Footer__section Footer__section--grid">
          <div className="footer__block">
            <a href="#" className="icon">
              <IconLogo />
            </a>
          </div>

          <div className="Footer__block">
            <a
              href="https://www.google.com/maps/search/Edmonton, Alberta, Canada/"
              target="_blank"
              rel="noreferrer"
              className="contacts-text link"
            >
              Edmonton, Alberta, Canada
            </a>
            <a
              href="tel:+15879859338"
              className="contacts-text link"
            >
              +1 (587) 985 9338
            </a>
          </div>

          <div className="Footer__block">
            <a
              href="https://t.me/pavmor4"
              target="_blank"
              rel="noreferrer"
              className="contacts-text link"
            >
              +380 (098) 957 99 30
            </a>
            <div className="Footer__social">
              <SocialList />
            </div>
          </div>
        </div>

        <hr className="Footer__line" />

        <div className="Footer__section">
          <p className="Footer__signature">
            © 2023. Pavlo Moroz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}