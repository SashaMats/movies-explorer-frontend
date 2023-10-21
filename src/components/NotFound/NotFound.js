function NotFound() {
  function goBack() {
    window.history.back();
  }
  return (
    <section className="not-found">
      <div className="not-found__texts">
        <h2 className="not-found__title">404</h2>
        <p className="not-found__subtitle">Страница не найдена</p>
      </div>
      <button onClick={() => goBack()} className="not-found__button">Назад</button>
    </section>
  )
}

export default NotFound;