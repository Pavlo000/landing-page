import { Nav } from '../Nav';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <header className="Header">
      <h4>
        header
      </h4>
      <Nav />
    </header>
  );
}