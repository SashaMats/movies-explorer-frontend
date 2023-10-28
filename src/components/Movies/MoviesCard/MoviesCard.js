import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// function MoviesCard({name, filmName, filmDuration, imgUrl, check}) {
// const [isSaveButtonVisible, setIsSaveButtonVisible] = useState('card__save-button_invisible')
// const [isDelButtonVisible, setIsDelButtonVisible] = useState('card__delete-button_invisible')

//   return (
//     <>
//       <div className="card">
//         <div className="card__image__wrapper" 
//               onMouseEnter={
//                 () => {
//                   if (check === 'false' && name === 'movies-list') {
//                     setIsSaveButtonVisible('card__save-button_visible')
//                   }
//                     if (name === 'saved-movies-list') {
//                       setIsDelButtonVisible('card__delete-button_visible')
//                     }
//                 }
//               }
//               onMouseLeave={
//                 () => {
//                   setIsSaveButtonVisible('card__save-button_invisible'); 
//                   setIsDelButtonVisible('card__del-button_invisible');
//                 }
//               }>
//           <img alt="Фильм" src={imgUrl} className="card__image"></img>
//           <button className={`card__save-button ${isSaveButtonVisible}`}>Сохранить</button>
//           <button className={`card__delete-button ${isDelButtonVisible}`}></button>
//         </div>
//         {
//           check === "true" &&  name === 'movies-list' ?
//           <>
//            <img src={savedIcon} alt="Готово" className="card__complete-icon"></img>
//           </> : <></>
//         }
       
//         <div className="card__info">
//             <p className="card__movie-name">{filmName}</p>
//           <div className="card__info-duration-container">
//             <p className="card__movie-duration">{filmDuration}</p>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }
function MoviesCard({ onDelete, addMovie, data, savedMovies }) {

  const [isSaveButtonVisible, setIsSaveButtonVisible] = useState('card__save-button_invisible')
  const [isDelButtonVisible, setIsDelButtonVisible] = useState('card__delete-button_invisible')

  const { pathname } = useLocation()
  const [click, setClick] = useState(false)
  useEffect(() => {
    if (pathname === '/movies')
      setClick(savedMovies.some(element => data.id === element.movieId))
  }, [savedMovies, data.id, setClick, pathname])

  function onClick() {
    if (savedMovies.some(element => data.id === element.movieId)) {
      setClick(true)
      addMovie(data)
    } else {
      setClick(false)
      addMovie(data)
    }
  }
  
  function convertTime(duration) {
    const minutes = duration % 60;
    const hours = Math.floor(duration / 60);
    return (hours === 0 ? `${minutes}м` : minutes === 0 ? `${hours}ч` : `${hours}ч${minutes}м`)
  }


  return (
        <>
          <div className="card">
            <div className="card__image__wrapper" 
                    onMouseEnter={
                      () => {
                        setIsSaveButtonVisible('card__save-button_visible');
                        setIsDelButtonVisible('card__delete-button_visible');
                      }
                    }
                  onMouseLeave={
                    () => {
                      setIsSaveButtonVisible('card__save-button_invisible'); 
                      setIsDelButtonVisible('card__card__delete-button_invisible');
                    }
                  }
                  >
              <a href={data.trailerLink} target='_blank' rel="noopener noreferrer">
                <img src={pathname === '/movies' ? `https://api.nomoreparties.co${data.image.url}` : data.image} alt={data.name} className="card__image"></img>
              </a>
              {
                pathname === '/movies' ? <button className={`card__save-button ${!click ? isSaveButtonVisible : ''}`} onClick={onClick}>Сохранить</button>
                : <button className={`card__delete-button ${isDelButtonVisible}`} onClick={() => onDelete(data._id)}></button>
              }
              
              
            </div>
            <button className={`card__complete-icon ${click ? 'card__complete-icon_visible' : ''}`} onClick={onClick}></button>

           
            <div className="card__info">
              {
                pathname === '/movies' ? <p className="card__movie-name">{data.nameRU}</p>
                : <p className="card__movie-name">{data.nameRu}</p>
              }
              <div className="card__info-duration-container">
                <p className="card__movie-duration">{convertTime(data.duration)}</p>
              </div>
            </div>
          </div>
        </>
      )
}

export default MoviesCard;