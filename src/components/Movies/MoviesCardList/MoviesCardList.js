import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader'

function MoviesCardList({name}) {
  return (
    <>
      <section className="card-list">
        <div className="card-list__wrapper">
          <ul className="card-list__list">
            <li className="card">
              <MoviesCard name={name} imgUrl={"https://ru-static.z-dn.net/files/d68/de66e569ff65889f9e16f82ef9e53823.jpg"}
                  filmName="Название фильма, очень очень длинное название фльма"
                  filmDuration="1ч 37м"
                  check="true" />
            </li>
            <li>
              <MoviesCard name={name} imgUrl={"https://pp.userapi.com/c841033/v841033453/77418/42UaHoL1hSc.jpg"}
                  filmName="Название фильма"
                  filmDuration="1ч 37м" 
                  check="false"/>
            </li>
            <li>
                <MoviesCard name={name} imgUrl={"https://www.neizvestniy-geniy.ru/images/works/photo/2014/06/1191935_1.jpg"}
                  filmName="Название фильма"
                  filmDuration="1ч 37м" 
                  check="true"/>
            </li>
            <li>
              <MoviesCard name={name} imgUrl={"https://avatars.mds.yandex.net/i?id=1c208b086446199140f16c0c7bc39f75_l-5333204-images-thumbs&ref=rim&n=13&w=640&h=640"}
                  filmName="Название фильма"
                  filmDuration="1ч 37м" 
                  check="false"/>
            </li>
            <li>              
              <MoviesCard name={name} imgUrl={"https://g1.sunlight.net/media/customers/avatars-processed/6b/98/0c/6b980cd4d8f18978a47fc02984a0241eaa423b88.jpg"}
                filmName="Название фильма"
                filmDuration="1ч 37м" />
            </li>
            <li>
              <MoviesCard name={name} imgUrl={"https://sc02.alicdn.com/kf/Ha8ee799a423848d2bffe8ee2859a688aX/233017796/Ha8ee799a423848d2bffe8ee2859a688aX.jpg"}
              filmName="Название фильма"
              filmDuration="1ч 37м" />
            </li>
            <li>
              <MoviesCard name={name} imgUrl="https://sc02.alicdn.com/kf/Ha8ee799a423848d2bffe8ee2859a688aX/233017796/Ha8ee799a423848d2bffe8ee2859a688aX.jpg"
              filmName="Название фильма"
              filmDuration="1ч 37м"></MoviesCard>
            </li>
            <li>
              <MoviesCard name={name} imgUrl="https://i.ebayimg.com/images/g/HFAAAOSwbopZQTEf/s-l500.jpg"
              filmName="Название фильма"
              filmDuration="1ч 37м"></MoviesCard>
            </li>
          </ul>
        </div>
      </section>
      <Preloader />
    </>
  )
}

export default MoviesCardList;