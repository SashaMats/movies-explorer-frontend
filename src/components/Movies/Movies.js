import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

function Movies() {
  return (
    <>
      <SearchForm></SearchForm>
      <MoviesCardList name="movies-list"></MoviesCardList>
    </>
  )
}

export default Movies;