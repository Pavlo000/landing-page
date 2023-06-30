import { ReactComponent as IconLogo } from '../../assets/icons/logo.svg';
import { ReactComponent as GithubIcon } from '../../assets/icons/github.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/icons/linkedin.svg';
import { ReactComponent as WhatsupIcon } from '../../assets/icons/whatsapp.svg';
import './Footer.scss';

export const Footer: React.FC = () => {
  return (
    <footer className='Footer'>
      <div className="container">
        <div className="Footer__section">
          <h4 className="Footer__title">
            Get in Touch With Me
          </h4>

          <a href="mailto:pavlmorz@gmail.com" className="Footer__mail link">
            <h2>
              pavlmarz@gmail.com
            </h2>
          </a>
        </div>

        <div className="Footer__section Footer__section--grid">
          <div className="footer__block">
            <a href="/" className="icon">
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
            <div className="Footer__list">
              <a
                href="https://github.com/Pavlo000"
                target="_blank"
                rel="noreferrer"
                className="Footer__icon icon"
              >
                <GithubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/pavlo-moroz-78560b244/"
                target="_blank"
                rel="noreferrer"
                className="Footer__icon icon"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://wa.me/qr/PPQOJS24E7PNI1"
                target="_blank"
                rel="noreferrer"
                className="Footer__icon icon"
              >
                <WhatsupIcon />
              </a>
            </div>
          </div>
        </div>

        <hr className="Footer__line" />

        <div className="Footer__section">
          <p className="Footer__signature">
            © 2023. Ideapeel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}