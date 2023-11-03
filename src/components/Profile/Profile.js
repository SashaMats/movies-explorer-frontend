import { useContext, useEffect } from "react";
import CurrentUserContext from "../../utils/CurrentUserContext";
import useFormValidation from "../../utils/useFormValidation";
import { EmailRegular } from "../../utils/constants";
import { Link } from "react-router-dom";
import Preloader from "../Movies/Preloader/Preloader";
import ErrorContext from "../../utils/ErrorContext";


function Profile({ logOut, editUserData, setIsError, isSuccess, setSuccess, setIsEdit, isEdit, isSend, errorMessage, setErrorMessage}) {
  const {values, isValid, isInputValid, handleChange} = useFormValidation()
  const currentUser = useContext(CurrentUserContext)
  const isError = useContext(ErrorContext)
  useEffect(() => {
    setIsError(false)
  }, [setIsError, values])

  useEffect(() => {
      setSuccess(false)
      setIsEdit(false)
      return function cleanup() {
        setErrorMessage('')
      }
  }, [setSuccess, setIsEdit, setErrorMessage])

  function onSubmit(evt) {
    evt.preventDefault()
    editUserData(values.name, values.email)
  }

  return (
    <section className="profile">
      { !isEdit ?
        <div className="profile__header-section">
          <h2 className="profile__title">Привет, {currentUser.name}!</h2>
          <div className="profile__field">
            <p className="profile__field-name">Имя</p>
            <p className="profile__field-content">{currentUser.name}</p>
          </div>
          <div className="profile__line"></div>
          <div className="profile__field">
            <p className="profile__field-name">E-mail</p>
            <p className="profile__field-content">{currentUser.email}</p>
          </div>
        </div>
        :
        <form onSubmit={onSubmit} className="profile__header-section">
          <h2 className="profile__title">Привет, {currentUser.name}!</h2>
          <div className="profile__field">
            <p className="profile__field-name">Имя</p>
            <input 
              name={'name'}
              placeholder={currentUser.name}
              onChange={handleChange}
              minLength={2} 
              maxLength={30}
              required
              className={`profile__field-content ${isInputValid.name === undefined || isInputValid.name ? '' : 'profile__field-content_error '}`}>
            </input>
          </div>
          <div className="profile__line"></div>
          <div className="profile__field">
            <p className="profile__field-name">E-mail</p>
            <input
              pattern={EmailRegular}
              name={'email'}
              minLength={2} 
              maxLength={30}
              required
              placeholder={currentUser.email} 
              onChange={handleChange}  
              className={`profile__field-content ${isInputValid.email === undefined || isInputValid.email ? '' : 'profile__field-content_error '}`}>
            </input>
          </div>
        </form>
      }
        {
          isSuccess ? 
          <div className="profile__bottom-section">
            <span className="profile__successful">{'Данные изменены успешно!'}</span>
            <button onClick={() => {setIsEdit(true); setSuccess(false)}} className="profile__edit">Редактировать</button>
            <Link to='/' onClick={logOut} className='profile__exit'>Выйти из аккаунта</Link>
          </div>
           :
          !isEdit ? 
          <div className="profile__bottom-section">
            <button onClick={() => {setIsEdit(true); setSuccess(false)}} className="profile__edit">Редактировать</button>
            <Link to='/' onClick={logOut} className='profile__exit'>Выйти из аккаунта</Link>
          </div> :
          <div className="profile__bottom-section">
            {
              isError ? <span className="profile__error">{errorMessage}</span> : ''
            }
            {
              isSend ? <Preloader name='button' /> :
              <button 
                disabled={(values.name === currentUser.name && values.email === currentUser.email) || !isValid || isError ? true : false}
                onClick={onSubmit} 
                className="profile__button-save">Сохранить
              </button>
            }
            
          </div>
        }
        
    </section>
  )
}

export default Profile;