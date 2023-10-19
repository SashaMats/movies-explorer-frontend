import { Link } from 'react-router-dom';
function Form({title, children, submitButton, question, linkButton, link, isValid}) {
  console.log(isValid)
  return (
    <section className='form'>
        <form className="form__form">
          <div className='form__header-section'>
            <div className="form__logo-wrapper">
              <Link to='/' className="form__logo">

              </Link>
            </div>
            <p className="form__title">{title}</p>
            {children}
          </div>
          <div className='form__buttom-section'>
            {/* <button className="form__button">{submitButton}</button> */}
            <button
              className={'form__button'}
              disabled={!isValid ? true : false}
            >{submitButton}
              
            </button>
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