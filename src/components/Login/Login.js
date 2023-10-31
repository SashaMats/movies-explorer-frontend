import { EmailRegular } from '../../utils/constants';
import useFormValidation from '../../utils/useFormValidation';
import Form from '../Form/Form';
function Login({ handleLogin, setIsError, errorMessage, setErrorMessage}) {
  const {values, errors, isValid, isInputValid, handleChange } = useFormValidation()
  function onSubmit(evt) {
    evt.preventDefault()
    handleLogin(values.email, values.password)
  }

  return (
    <Form
      id={'loginForm'} 
      name={'signupForm'}
      title={'Рады видеть!'} 
      submitButton={'Войти'}
      link={'/signin'}
      linkButton={'Регистрация'}
      question={'Еще не зарегистрированы?'}
      isValid={isValid}
      onSubmit={ onSubmit }
      setIsError={setIsError}
      errorMessage={errorMessage}
      setErrorMessage={setErrorMessage}
    >
      <label htmlFor="email" className="form__label">E-mail</label>


      <input id="email"
      name={'email'}
      placeholder='E-mail'
      className={`form__input ${isInputValid.email === undefined || isInputValid.email ? '' : 'form__input_error '}`}
      value={values.email ? values.email : ''}
      onChange={handleChange}
      pattern={EmailRegular}
      required
      />


      <span className="form__error-text">{errors.email}</span>
      <label htmlFor="password" className="form__label">Пароль</label>


      <input id="password"
      name={'password'}
      placeholder='Password'
      className={`form__input ${isInputValid.password === undefined || isInputValid.password ? '' : 'form__input_error '}`}
      type="password"
      value={values.password ? values.password : ''}
      onChange={handleChange}
      autoComplete='on'
      minLength={3} 
      maxLength={30}
      required
      />


      <span className="form__error-text">{errors.password}</span>
    </Form>
  )
}

export default Login;