
import useFormValidation from '../../utils/useFormValidation';
import Form from '../Form/Form';
function Register() {
  const {values, errors, isValid, isInputValid, handleChange } = useFormValidation()
  return (
    <Form
      name={'signinForm'}
      title={'Добро пожаловать'}
      submitButton={'Зарегистрироваться'}
      link={'/signup'}
      linkButton={'Войти'}
      question={'Уже зарегистрированы?'}
      isValid={isValid}
    >
        <label for="name" className="form__label">Имя</label>
        <input name="name"
          placeholder='Name'
          className={`form__input ${isInputValid.name === undefined || isInputValid.name ? '' : 'form__input_error '}`}
          value={values.name ? values.name : ''}
          onChange={handleChange}
          minLength={2} 
          maxLength={30}
          required
        />
        <span className="form__error-text">{errors.name}</span>
        <label for="email" className="form__label">E-mail</label>


      <input name="email"
      placeholder='E-mail'
      className={`form__input ${isInputValid.email === undefined || isInputValid.email ? '' : 'form__input_error '}`}
      value={values.email ? values.email : ''}
      onChange={handleChange}
      minLength={2} 
      maxLength={30}
      required
      />


      <span className="form__error-text">{errors.email}</span>
      <label for="password" className="form__label">Пароль</label>


      <input name="password"
      placeholder='Password'
      className={`form__input ${isInputValid.password === undefined || isInputValid.password ? '' : 'form__input_error '}`}
      type="password"
      value={values.password ? values.password : ''}
      onChange={handleChange}
      minLength={5} 
      maxLength={30}
      required
      />


      <span className="form__error-text">{errors.password}</span>
    </Form>
  )
}

export default Register;