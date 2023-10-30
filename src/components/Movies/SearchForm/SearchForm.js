import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ErrorContext from "../../../utils/ErrorContext";
import useFormValidation from "../../../utils/useFormValidation";
import FilterCheckbox from "../FilterCheckbox/FilterCeckbox";
import Preloader from "../Preloader/Preloader";

function SearchForm({ isCheck, changeShort, searchedMovie, searchMovies, setIsError, firstEntrance, savedMovie }) {
  // console.log(searchedMovie)
  const { pathname } = useLocation()
  const isError = useContext(ErrorContext)
  const { values, handleChange, reset } = useFormValidation()
  const searchInputValue = values.search

  useEffect(() => {
    if ((pathname === '/saved-movies' && savedMovie.length === 0)) {
      reset({ search: '' })
    } else {
      reset({ search: searchedMovie })
    }
    setIsError(false)
  }, [searchedMovie, reset, setIsError, pathname, savedMovie])

  function onSubmit(evt) {
    evt.preventDefault()
      searchMovies(evt.target.search.value)
  }
  
  // function onSubmit(evt) {
  //   evt.preventDefault()
  //   if (evt.target.search.value) {
  //     searchMovies(evt.target.search.value)
  //     setIsError(false)
  //   } else {
  //     setIsError(true)
  //   }
  // }

  return (
    <section>
      <form name={'SearchForm'} className="search-form" onSubmit={onSubmit} noValidate>
        <div className="search-form__inputs-row">
          <input 
            className="search-form__input-text" 
            type="text" 
            placeholder="Фильмы"
            name='search'
            value={values.search || ''}
            onChange={(evt) => {
              handleChange(evt)
              setIsError(false)
            }}
            disabled={savedMovie ? (savedMovie.length === 0 && true) : false}
            required>
          </input>
          <button className="search-form__input-submit" type="submit"></button>
          {/* <button type='submit' className={`search__submit ${savedMovie ? (pathname === '/saved-movies' && savedMovie.length === 0) && 'search__submit_disabled' : ''}`}></button> */}
        </div>
        {isError ? <Preloader/> : ''}
        <FilterCheckbox searchInputValue={searchInputValue} isCheck={isCheck} changeShort={changeShort} firstEntrance={firstEntrance} />
        <div className="search-form__line"></div>
      </form>
    </section>
  )
}

export default SearchForm;