import arrow from "../../../images/strelka.svg"
function Portfolio() {
  return(
    <>
    <section className="portfolio">
        <p className="portfolio__title">Портфолио</p>
        <ul className="portfolio__items">
          <li>
            <a className="portfolio__link" href="https://github.com/SashaMats/how-to-learn" target="_blank" rel="noopener noreferrer">
              <p className="portrolio__link-text">Статичный сайт</p>
              <img src={arrow} alt="Стрелка" className="portfolio__link-img"></img>
            </a>
          </li>
          <li>
            <a href="https://github.com/SashaMats/russian-travel" target="_blank" rel="noopener noreferrer" className="portfolio__link">
              <p className="portrolio__link-text">Адаптивный сайт</p>
              <img src={arrow} alt="Стрелка" className="portfolio__link-img"></img>
            </a>
          </li>
          <li>
            <a href="https://github.com/SashaMats/mesto" className="portfolio__link" target="_blank" rel="noopener noreferrer">
              <p className="portrolio__link-text">Одностраничное приложение</p>
              <img src={arrow} alt="Стрелка" className="portfolio__link-img"></img>
            </a>
          </li>
        </ul>
      </section>
    </>
  )
}

export default Portfolio;