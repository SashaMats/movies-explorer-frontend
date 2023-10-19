import useFormValidation from '../../utils/useFormValidation';
import Form from '../Form/Form';
function Login() {
  const {values, errors, isValid, isInputValid, handleChange } = useFormValidation()
  return (
    <Form 
      name={'signupForm'}
      title={'Рады видеть!'} 
      submitButton={'Войти'}
      link={'/signin'}
      linkButton={'Регистрация'}
      question={'Еще не зарегистрированы?'}
      isValid={isValid}
      
    >
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

export default Login;