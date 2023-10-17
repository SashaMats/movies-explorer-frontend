import logo from '../../images/logo.svg';
function Login() {
  return (
    <div className="form__section">
      <div className="form__logo-wrapper">
        <img 
          alt="Логотип-звездочка"
          src={logo} 
          className="form__logo">
        </img>
      </div>
      <p className="form__title">Рады видеть!</p>
      <form className="form">
        <label for="email" className="form__label">Email</label>
        <input name="email" className="form__input"></input>
        <span className="form__error-text"></span>
        <label for="password" className="form__label">Password</label>
        <input name="password" className="form__input form__input_last" type="password"></input>
        <span className="form__error-text">Что-то пошло не так...</span>
        <button className="form__button">Войти</button>
        <div className="form__dialog">
          <span className="form__dialog-text">Еще не зарегистрированы?</span>
          <button className="form__dialog-button">Регистрация</button>
        </div>
      </form>
    </div>
  )
}

export default Login;