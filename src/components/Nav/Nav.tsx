import './Nav.scss';

export const Nav: React.FC = () => {
  return (
    <nav className="Nav">
      <ul className="Nav__list">
        <li className="Nav__item">
          <a href="#top" className="Nav__link navigation__link tab">
            Home
          </a>
        </li>
        <li className="Nav__item">
          <a href="#about" className="Nav__link tab">
            About me
          </a>
        </li>
        <li className="Nav__item">
          <a href="#projects" className="Nav__link tab">
            My works
          </a>
        </li>
        <li className="Nav__item">
          <a href="#contacts" className="Nav__link tab">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}