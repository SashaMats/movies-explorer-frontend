function FilterCheckbox({ isCheck, changeShort }) {
  return (
    <>
      <div className="checkbox">



          <label className="checkbox__label" htmlFor="checkbox">



                <input checked={isCheck} id="checkbox" className="checkbox__invisible" type="checkbox" onChange={() => changeShort()}></input>




                      <span className="checkbox__visible-handler"></span>



                <span className="checkbox__text">Короткометражка</span>



          </label>


          
      </div>
    </>
  )
}

export default FilterCheckbox;