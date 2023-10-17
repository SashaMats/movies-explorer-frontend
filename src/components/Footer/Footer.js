function Footer() {
  return(
    <>
      <footer className="footer">
        <p className="footer__project-name">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__line"></div>
        <div className="footer__copyright">
          <p className="footer__text">© 2023</p>
          <div className="footer-resources">
            <a href="https://practicum.yandex.ru/" className="footer__link">Яндекс.Практикум</a>
            <a href="https://github.com/" className="footer__link">Github</a>
          </div>
        </div>
      </footer>
    </>
    
  )
}

export default Footer;