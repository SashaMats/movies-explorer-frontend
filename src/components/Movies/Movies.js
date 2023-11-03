import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import { useCallback, useEffect, useState } from 'react';
import apiMovies from '../../utils/MoviesApi';
import { ShortDuration } from '../../utils/constants';

function Movies({setIsError, savedMovies, addMovie, deleteMovie}) {
  const [allMovies, setAllMovies] = useState([])
  const [filteredMovies, setFilteredMovies] = useState([])
  const [searchedMouvie, setSearchedMovie] = useState('')
  const [isCheck, setIsCheck] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [serverError, setServerError] = useState(false)
  const [firstEntrance, setFirstEntrance] = useState(true)
  // console.log(searchedMouvie)
  const filter = useCallback((search, isCheck, movies) => {
    setSearchedMovie(search)
    localStorage.setItem('movie', JSON.stringify(search))
    localStorage.setItem('shorts', JSON.stringify(isCheck))
    localStorage.setItem('allmovies', JSON.stringify(movies))
    setFilteredMovies(movies.filter((movie) => {
      const searchName = movie.nameRU.toLowerCase().includes(search.toLowerCase())
      return isCheck ? (searchName && movie.duration <= ShortDuration) : searchName
    }))
  }, [])

  function searchMovies(search) {
    if (allMovies.length === 0) {
      setIsLoading(true)
      apiMovies.getMovies()
        .then((res) => {
          setAllMovies(res)
          setIsCheck(false)
          setServerError(false)
          setFirstEntrance(false)
          filter(search, isCheck, res)
        })
        .catch(err => {
          setServerError(true)
          console.error(`Ошибкак при поске фильмов ${err}`)
        })
        .finally(() => setIsLoading(false))
    } else {
      filter(search, isCheck, allMovies)
    }
  }
  
  useEffect(() => {
    // console.log(localStorage)
    if (localStorage.allmovies && localStorage.shorts && localStorage.movie) {
      const movies = JSON.parse(localStorage.allmovies)
      const search = JSON.parse(localStorage.movie)
      const isCheck = JSON.parse(localStorage.shorts)
      setServerError(false)
      setFirstEntrance(false)
      setSearchedMovie(search)
      setIsCheck(isCheck)
      setAllMovies(movies)
      filter(search, isCheck, movies)
    }
  }, [filter])

  function changeShort(val) {
    if (isCheck) {
      setIsCheck(false)
      filter(val, false, allMovies)
      localStorage.setItem('shorts', JSON.stringify(false))
    } else {
      setIsCheck(true)
      filter(val, true, allMovies)
      localStorage.setItem('shorts', JSON.stringify(true))
    }
  }

  return (
    
    <>
      <SearchForm
          isCheck={isCheck}
          searchMovies={searchMovies}
          searchedMovie={searchedMouvie}
          changeShort={changeShort}
          setIsError={setIsError}
          firstEntrance={firstEntrance}>
        </SearchForm>
      <MoviesCardList 
          name="movies-list"
          movies={filteredMovies}
          addMovie={addMovie}
          deleteMovie={deleteMovie}
          savedMovies={savedMovies}
          isLoading={isLoading}
          serverError={serverError}
          firstEntrance={firstEntrance}
      ></MoviesCardList>
    </>
  )
}

export default Movies;