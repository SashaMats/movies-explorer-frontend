function NotFound() {
  function goBack() {
    window.history.back();
  }
  return (
    <section className="not-found">
      <div className="not-found__texts">
        <span className="not-found__title">404</span>
        <span className="not-found__subtitle">Страница не найдена</span>
      </div>
      <button onClick={() => goBack()} className="not-found__button">Назад</button>
    </section>
  )
}

export default NotFound;