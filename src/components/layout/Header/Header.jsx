import './Header.css';
import { APP_NAME } from '../../../constants';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">{APP_NAME}</h1>
      <p className="header__subtitle">Study smarter with flashcards</p>
    </header>
  );
}

export default Header;
