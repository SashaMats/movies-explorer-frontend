import NavTab from '../NavTab/NavTab';

function Promo({ handleClick, refs }) {
  return(
    <div className="promo">
      <div className="banner-promo">
        <div className='banner-promo__container'>
          <h1 className="banner-promo__title">Учебный проект студента факультета Веб-разработки.</h1>
          <NavTab handleClick={handleClick} refs={refs}></NavTab>
        </div>
      </div>
    </div>
  )
}

export default Promo;