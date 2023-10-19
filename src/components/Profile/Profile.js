import { useState } from "react";

function Profile() {
  const [isReducting, setIsReducting] = useState(false);
  const [isRedactingFalse, setIsReductingFalse] = useState(false);

  return (
    <section className="profile">
      <div className="profile__header-section">
        <p className="profile__title">Привет, Виталий!</p>
        <div className="profile__field">
          <p className="profile__field-name">Имя</p>
          <p className="profile__field-content">Виталий</p>
        </div>
        <div className="profile__line"></div>
        <div className="profile__field">
          <p className="profile__field-name">E-mail</p>
          <p className="profile__field-content">poch@ya.ru</p>
        </div>
      </div>
        {
          !isReducting ? 
          <div className="profile__bottom-section">
            <button onClick={() => setIsReducting(!isReducting)} className="profile__edit">Редактировать</button>
            <button className="profile__exit">Выйти из аккаунта</button>
          </div> : !isRedactingFalse ?
          <div className="profile__bottom-section">
            <button onClick={() => setIsReductingFalse(!isRedactingFalse)} className="profile__button-save">Сохранить</button>
          </div>
            : 
          <div className="profile__bottom-section">
            <span className="profile__error">При обновлении профиля произошла ошибка.</span>
            <button onClick={() => setIsReductingFalse(!isRedactingFalse)} className="profile__button-save" disabled>Сохранить</button>
          </div>
        }
        
    </section>
  )
}

export default Profile;