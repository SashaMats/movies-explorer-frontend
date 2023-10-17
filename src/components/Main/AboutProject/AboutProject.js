import { forwardRef } from "react";

function AboutProject({name}, ref) {
  return(
    <>
      <div name={name} ref={ref} className="about-project">
        <div className="about-project__info">
          <h2 className="about-project__title">О проекте</h2>
          <div className="about-project__line"></div>
          <p className="about-project__info-title about-project__info-title_left">Дипломный проект включал 5 этапов</p>
          <p className="about-project__info-title about-project__info-title_right">На выполнение диплома ушло 5 недель</p>
          <p className="about-project__info-text about-project__info-text_left">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          <p className="about-project__info-text about-project__info-text_right">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
        <div className="about-project__progress">
          <div className="about-project__progress-bar about-project__progress-bar_backend"><p className="about-project__text">1 неделя</p></div>
          <div className="about-project__progress-bar about-project__progress-bar_frontend"><p className="about-project__text">4 недели</p></div>
          <div className="about-project__progress-bar-description about-project__progress-bar-description_backend"><p className="about-project__text">Back-end</p></div>
          <div className="about-project__progress-bar-description about-project__progress-bar-description_frontend"><p className="about-project__text">Front-end</p></div>
        </div>
      </div>
    </>
  )
}

export default forwardRef(AboutProject);