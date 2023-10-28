import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader'
import {
  BigScreen,
  MediumScreen,
  MiniScreen,
  InitMoreBigScreen,
  InitLessBigScreen,
  InitMediumScreen,
  InitMiniScreen,
  StepBigScreen,
  StepMediumScreen,
  StepMiniScreen
} from "../../../utils/constants";

function MoviesCardList({name, movies, onDelete, addMovie, savedMovies, isLoading, serverError, firstEntrance}) {
  const { pathname } = useLocation()
  const [count, setCount] = useState('')
  const fact = movies.slice(0, count)
  function printCards() {
    const counter = { init: InitMoreBigScreen, step: StepBigScreen }
    if (window.innerWidth < BigScreen) {
      counter.init = InitLessBigScreen
      counter.step = StepMediumScreen
    }
    if (window.innerWidth < MediumScreen) {
      counter.init = InitMediumScreen
      counter.step = StepMiniScreen
    }
    if (window.innerWidth < MiniScreen) {
      counter.init = InitMiniScreen
      counter.step = StepMiniScreen
    }
    return counter
  }
  useEffect(() => {
    if (pathname === '/movies') {
      setCount(printCards().init)
      function printCardsForResize() {
        if (window.innerWidth >= StepBigScreen) {
          setCount(printCards().init)
        }
        if (window.innerWidth < StepBigScreen) {
          setCount(printCards().init)
        }
        if (window.innerWidth < MediumScreen) {
          setCount(printCards().init)
        }
        if (window.innerWidth < MiniScreen) {
          setCount(printCards().init)
        }
      }
      window.addEventListener('resize', printCardsForResize)
      return () => window.removeEventListener('resize', printCardsForResize)
    }
  }, [pathname, movies])

  function clickMore() {
    setCount(count + printCards().step)
  }

  return (
    <>
      <section className="card-list">
        <div className="card-list__wrapper">
          {
            isLoading ? <Preloader /> : (pathname === '/movies' && fact.length !== 0) ?
            <ul className="card-list__list">
              {
                fact.map(data => {
                  return (
                    
                      <MoviesCard
                        key={data.id}
                        savedMovies={savedMovies}
                        addMovie={addMovie}
                        data={data}
                      />
                    
                  )
                })
              }
            </ul> : movies.length !== 0 ? 
            <ul className="card-list__list">
              {
                movies.map(data => {
                  return (
                      <MoviesCard
                        key={data._id}
                        onDelete={onDelete}
                        data={data}
                      />
                  )
                })
              }
            </ul> :
              serverError ?
              <span className='card-list__serch-error'>«Во время запроса произошла ошибка.
                Возможно, проблема с соединением или сервер недоступен.
                Подождите немного и попробуйте ещё раз»
              </span>
              : !firstEntrance ?
              <span className='card-list__serch-error'>«Ничего не найдено»</span>
              : pathname === '/movies' ?
              <span className='card-list__serch-error'>«Чтобы увидеть список фильмоа выполните поиск»</span>
              :
              <span className='card-list__serch-error'>«Нет сохранённых фильмов»</span>
          }
        </div>
      </section>
      {pathname === '/movies' && <button type='button' className={`card-list__button-more ${count >= movies.length && 'card-list__button-more_hidden'}`} onClick={clickMore}>Ёще</button>}
    </>
  )
}

export default MoviesCardList;