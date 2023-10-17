import FilterCheckbox from "../FilterCheckbox/FilterCeckbox";

function SearchForm() {
  return (
    <>
      <form className="search-form">
        <div className="search-form__inputs-row">
          <input className="search-form__input-text" type="text" placeholder="Фильмы"></input>
          <button className="search-form__input-submit" type="submit"></button>
        </div>
        <FilterCheckbox />
        <div className="search-form__line"></div>
      </form>
    </>
  )
}

export default SearchForm;