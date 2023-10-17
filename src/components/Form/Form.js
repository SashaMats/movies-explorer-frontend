import logo from '../../images/logo.svg';
function Form() {
  return (
    <div className="form__section">
      <div className="form__logo-wrapper">
        <img 
          alt="Логотип-звездочка"
          src={logo} 
          className="form__logo">
        </img>
      </div>
      <p className="form__title">Добро пожаловать!</p>
      <form className="form">
        <label for="name" className="form__label">Имя</label>
        <input name="name" className="form__input"></input>
        <span className="form__error-text"></span>
        <label for="email" className="form__label">Email</label>
        <input name="email" className="form__input"></input>
        <span className="form__error-text"></span>
        <label for="password" className="form__label">Password</label>
        <input name="password" className="form__input form__input_last" type="password"></input>
        <span className="form__error-text">Что-то пошло не так...</span>
        <button className="form__button">Зарегистрироваться</button>
        <div className="form__dialog">
          <span className="form__dialog-text">Уже зарегистрированы?</span>
          <button className="form__dialog-button">Войти</button>
        </div>
      </form>
    </div>
  )
}

export default Form;