import './Nav.scss';

export const Nav: React.FC = () => {
  return (
    <nav className="Nav">
      <ul className="Nav__list">
        <li className="Nav__item">
          <a href="/" className="Nav__link">
            Home
          </a>
        </li>
        <li className="Nav__item">
          <a href="/" className="Nav__link">
            About me
          </a>
        </li>
        <li className="Nav__item">
          <a href="/" className="Nav__link">
            My works
          </a>
        </li>
        <li className="Nav__item">
          <a href="/" className="Nav__link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}