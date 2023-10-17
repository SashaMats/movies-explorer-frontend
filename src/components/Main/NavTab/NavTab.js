function NavTab({ handleClick, refs }) {
  return(
    <>
      <ul className="navtab">
            <li><button onClick={() => handleClick(refs.aboutProjectRef)} className="navtab__button" aria-label="О проекте">О проекте</button></li>
            <li><button onClick={() => handleClick(refs.techRef)} className="navtab__button" aria-label="Технологии">Технологии</button></li>
            <li><button onClick={() => handleClick(refs.aboutMeRef)} className="navtab__button" aria-label="Студент">Студент</button></li>
        </ul>
    </>
  )
}

export default NavTab;