function FilterCheckbox() {
  return (
    <>
      <div className="checkbox__box">
          <label className="search-form__checkbox-label" for="checkbox">
            <input id="checkbox" className="search-form__invisible-checkbox" type="checkbox"></input>
            <span class="search-form__visible-checkbox"></span>
            <span className="search-form__checkbox-text">Короткометражка</span>
          </label>
        </div>
    </>
  )
}

export default FilterCheckbox;