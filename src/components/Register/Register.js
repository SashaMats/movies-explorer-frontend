
import { EmailRegular } from '../../utils/constants';
import useFormValidation from '../../utils/useFormValidation';
import Form from '../Form/Form';
function Register({ handleRegister, setIsError, errorMessage, setErrorMessage}) {
  const {values, errors, isValid, isInputValid, handleChange } = useFormValidation()

  function onSubmit(evt) {
    evt.preventDefault()
    handleRegister(values.name, values.email, values.password)
  }


  return (
    <Form
      is={'registerForm'}
      name={'signinForm'}
      title={'Добро пожаловать!'}
      submitButton={'Зарегистрироваться'}
      link={'/signup'}
      linkButton={'Войти'}
      question={'Уже зарегистрированы?'}
      isValid={isValid}
      onSubmit={onSubmit}
      setIsError={setIsError}
      errorMessage={errorMessage}
      setErrorMessage={setErrorMessage}
      
    >
        <label htmlFor="name" className="form__label">Имя</label>
        <input id="name"
          name={'name'}
          placeholder='Name'
          className={`form__input ${isInputValid.name === undefined || isInputValid.name ? '' : 'form__input_error '}`}
          value={values.name ? values.name : ''}
          onChange={handleChange}
          minLength={2} 
          maxLength={30}
          autoComplete='on'
          required
        />
        <span className="form__error-text">{errors.name}</span>
        <label htmlFor="email" className="form__label">E-mail</label>


      <input id="email"
      name={'email'}
      placeholder='E-mail'
      className={`form__input ${isInputValid.email === undefined || isInputValid.email ? '' : 'form__input_error '}`}
      value={values.email ? values.email : ''}
      onChange={handleChange}
      autoComplete='on'
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
      minLength={3} 
      maxLength={30}
      autoComplete='on'
      required
      />


      <span className="form__error-text">{errors.password}</span>
    </Form>
  )
}

export default Register;