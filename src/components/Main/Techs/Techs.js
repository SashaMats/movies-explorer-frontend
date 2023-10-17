import { forwardRef } from "react";

function Techs({name}, refRef) {
  return(
    <>
      <div name={name} ref={refRef} className="techs">
        <div className="techs__wrapper">
          <p className="teschs__title">Технологии</p>
          <div className="techs__line"></div>
          <div className="techs__info-block">
            <p className="techs__subtitle">7 технологий</p>
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
      </div>
    </>
  )
}

export default forwardRef(Techs);