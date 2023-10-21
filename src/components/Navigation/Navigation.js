
import { useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  return (
    <>
      <div className='navigation'>
        <nav className={`navigation__nav ${isSideBarOpen ? 'navigation__nav_active' : ''}`}>
          <div className="navigation__logo-place"></div>
          <div className="navigation__links">
            <div className="navigation__link-wrapper">
              <Link to="/" className="navigation__link">{'Главная'}</Link>
            </div>
            <div className="navigation__link-wrapper">
              <Link to="/movies" className="navigation__link">{'Фильмы'}</Link>
            </div>
            <div className="navigation__link-wrapper">
              <Link to="/saved-movies" className="navigation__link">{'Сохраненные фильмы'}</Link>
            </div>
          </div>

          
          <div className="navigation__buttons">
            <Link to="/profile" className="navigation__button">{'Аккаунт'}</Link>
          </div>
          <button onClick={() => setIsSideBarOpen(!isSideBarOpen)} className="navigation__close"></button>
        </nav>
        
        <button onClick={() => setIsSideBarOpen(!isSideBarOpen)} className='navigation__burger-button'></button>
      </div>
      
    </>
  )
}

export default Navigation;