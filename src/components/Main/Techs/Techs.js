import { forwardRef } from "react";

function Techs({id}, refRef) {
  return(
    <>
      <section id={id} ref={refRef} className="techs">
        <div className="techs__wrapper">
          <h2 className="techs__title">Технологии</h2>
          <div className="techs__line"></div>
          <div className="techs__info-block">
            <h3 className="techs__subtitle">7 технологий</h3>
            <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className="techs__list">
              <li className="techs__list-element"><p className="techs__text-element">HTML</p></li>
              <li className="techs__list-element"><p className="techs__text-element">CSS</p></li>
              <li className="techs__list-element"><p className="techs__text-element">JS</p></li>
              <li className="techs__list-element"><p className="techs__text-element">React</p></li>
              <li className="techs__list-element"><p className="techs__text-element">Git</p></li>
              <li className="techs__list-element"><p className="techs__text-element">Express.js</p></li>
              <li className="techs__list-element"><p className="techs__text-element">mongoDB</p></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default forwardRef(Techs);