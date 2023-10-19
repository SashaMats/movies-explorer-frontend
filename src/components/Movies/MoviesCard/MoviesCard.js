import { useState } from 'react';
import savedIcon from '../../../images/saved-icon.svg';

function MoviesCard({name, filmName, filmDuration, imgUrl, check}) {
const [isSaveButtonVisible, setIsSaveButtonVisible] = useState('card__save-button_invisible')
const [isDelButtonVisible, setIsDelButtonVisible] = useState('card__delete-button_invisible')

  return (
    <>
      <div className="card">
        <div className="image__wrapper" 
              onMouseEnter={
                () => {
                  if (check === 'false' && name === 'movies-list') {
                    setIsSaveButtonVisible('card__save-button_visible')
                  }
                    if (name === 'saved-movies-list') {
                      setIsDelButtonVisible('card__delete-button_visible')
                    }
                }
              }
              onMouseLeave={
                () => {
                  setIsSaveButtonVisible('card__save-button_invisible'); 
                  setIsDelButtonVisible('card__del-button_invisible');
                }
              }>
          <img alt="Фильм" src={imgUrl} className="card__image"></img>
          <button className={`card__save-button ${isSaveButtonVisible}`}>Сохранить</button>
          <button className={`card__delete-button ${isDelButtonVisible}`}></button>
        </div>
        {
          check === "true" &&  name === 'movies-list' ?
          <>
           <img src={savedIcon} alt="Готово" className="card__complete-icon"></img>
          </> : <></>
        }
       
        <div className="card__info">
            <p className="card__movie-name">{filmName}</p>
          <div className="card__info-duration-container">
            <p className="card__movie-duration">{filmDuration}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MoviesCard;