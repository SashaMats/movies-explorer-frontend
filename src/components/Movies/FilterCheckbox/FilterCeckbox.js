function FilterCheckbox() {
  return (
    <>
      <div className="checkbox">



          <label className="checkbox__label" for="checkbox">



                <input id="checkbox" className="checkbox__invisible" type="checkbox"></input>




                      <span className="checkbox__visible-handler"></span>



                <span className="checkbox__text">Короткометражка</span>



          </label>


          
      </div>
    </>
  )
}

export default FilterCheckbox;