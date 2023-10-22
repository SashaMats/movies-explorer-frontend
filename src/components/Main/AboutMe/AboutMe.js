import { forwardRef } from "react";
import avatar from "../../../images/avatar.JPG"
import Portfolio from "../Portfolio/Portfolio";
function AboutMe({id}, ref) {
  return(
    <>
      <section className="about-me" id={id} ref={ref}>
        <div className="about-me__wrapper">
          <h2 className="about-me__title">Студент</h2>
          <div className="about-me__line"></div>
          <div className="about-me__info-block">
            <div className="about-me__info-block-texts">
              <h3 className="about-me__name">Александр</h3>
              <p className="about-me__job">Фронтенд-разработчик, 35 лет</p>
              <p className="about-me__info">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
  и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
              <a href="https://github.com/SashaMats" className="about-me__link" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
            <img src={avatar} alt="Аватарка" className="about-me__image"></img>
          </div>
        <Portfolio></Portfolio>
        </div>
      </section>
    </>
  )
}

export default forwardRef(AboutMe);