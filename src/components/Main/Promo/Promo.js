import NavTab from '../NavTab/NavTab';

function Promo({ handleClick, refs }) {
  return(
    <section className="promo">
      <div className="promo__banner">
        <div className='promo__banner-container'>
          <h1 className="promo__banner-title">Учебный проект студента факультета Веб-разработки.</h1>
          <NavTab handleClick={handleClick} refs={refs}></NavTab>
        </div>
      </div>
    </section>
  )
}

export default Promo;