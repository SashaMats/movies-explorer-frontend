import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ErrorContext from '../../utils/ErrorContext';
import SendContext from '../../utils/SendContext';
import Preloader from '../Movies/Preloader/Preloader';
function Form({title, children, submitButton, question, linkButton, link, isValid, onSubmit, name, setIsError, errorMessage, setErrorMessage}) {
  const isError = useContext(ErrorContext)
  const isSend = useContext(SendContext)

  useEffect(() => {
    setIsError(false)
    return function cleanup() {
      setErrorMessage('')
    }
  }, [setIsError, setErrorMessage])

  return (
    <section className='form' name={name}>
        <form className="form__form" onSubmit={onSubmit}>
          <div className='form__header-section'>
            <div className="form__logo-wrapper">
              <Link to='/' className="form__logo">

              </Link>
            </div>
            <h2 className="form__title">{title}</h2>
            {children}
          </div>
          <div className='form__buttom-section'>
          {(name === 'signupForm' && isError) ? <span className={`form__error`}>{errorMessage}</span> : 
            (name === 'signinForm' && isError) ? <span className={`form__error`}>{errorMessage}</span> : ''
          } 
          {
            isSend ? <Preloader name='button' /> :
            <button
              className={'form__button'}
              disabled={!isValid ? true : false}
            >{submitButton}
            </button>
          }

          
            <div className="form__dialog">
              <span className="form__dialog-text">{question}</span>
              <Link to={`${link}`} className="form__dialog-button">{linkButton}</Link>
            </div>
          </div>
        </form>
    </section>
    
  )
}

export default Form;