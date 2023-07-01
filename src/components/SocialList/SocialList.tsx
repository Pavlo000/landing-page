import { ReactComponent as GithubIcon } from '../../assets/icons/github.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/icons/linkedin.svg';
import { ReactComponent as WhatsupIcon } from '../../assets/icons/whatsapp.svg';

import './SocialList.scss';

export const SocialList: React.FC = () => {
  return (
    <ul className="SocialList">
      <li className="SocialList__item">
        <a
          href="https://github.com/Pavlo000"
          target="_blank"
          rel="noreferrer"
          className="SocialList__icon icon"
        >
          <GithubIcon />
        </a>
      </li>
      <li className="SocialList__item">
        <a
          href="https://www.linkedin.com/in/pavlo-moroz-78560b244/"
          target="_blank"
          rel="noreferrer"
          className="SocialList__icon icon"
        >
          <LinkedinIcon />
        </a>
      </li>
      <li className="SocialList__item">
        <a
          href="https://wa.me/qr/PPQOJS24E7PNI1"
          target="_blank"
          rel="noreferrer"
          className="SocialList__icon icon"
        >
          <WhatsupIcon />
        </a>
      </li>
    </ul>
  );
}