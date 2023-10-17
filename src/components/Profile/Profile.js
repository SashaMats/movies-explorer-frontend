function Profile() {
  return (
    <div className="profile">
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
      <button className="profile__edit">Редактировать</button>
      <button className="profile__exit">Выйти из аккаунта</button>
    </div>
  )
}

export default Profile;