import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header({loggenIn}) {
  return(
    <header className={'header'}>
      <div className='header__wrapper'>
      <div className='header__logo-wrapper'>
        <Link
          to="/"
          src={logo} 
          className="header__logo">
        </Link>
      </div>
      {
        loggenIn === false ? 
        <div className="header__buttons">
          <Link to={'/signin'} className="header__register">{'Регистрация'}</Link>
          <Link to={'/signup'} className="header__login">{'Войти'}</Link>s
        </div>
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