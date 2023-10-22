import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList name="saved-movies-list" />
    </>
  )
}

export default SavedMovies;