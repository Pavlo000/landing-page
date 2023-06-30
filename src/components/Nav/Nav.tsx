import './Nav.scss';

export const Nav: React.FC = () => {
  return (
    <nav className="Nav">
      <ul className="Nav__list">
        <li className="Nav__item">
          <a href="/" className="Nav__link link">
            Home
          </a>
        </li>
        <li className="Nav__item">
          <a href="/" className="Nav__link link">
            About me
          </a>
        </li>
        <li className="Nav__item">
          <a href="/" className="Nav__link link">
            My works
          </a>
        </li>
        <li className="Nav__item">
          <a href="/" className="Nav__link link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}