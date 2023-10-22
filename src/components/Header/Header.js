import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header({loggenIn}) {
  return(
    <header className={'header'}>
      <div className='header__wrapper'>
      <div className='header__logo-wrapper'>
        <Link
          to="/"
          className="header__logo">
        </Link>
      </div>
      {
        loggenIn === false ? 
        <ul className="header__buttons">
          <li><Link to={'/signin'} className="header__register">{'Регистрация'}</Link></li>
          <li><Link to={'/signup'} className="header__login">{'Войти'}</Link></li>
        </ul>
        : 
        <>
          <Navigation></Navigation>
        </>
      }
      </div>
    </header>
  )
}

export default Header;