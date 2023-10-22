import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import React, { useRef } from "react";

function Main() {
  const techRef  = useRef();
  const aboutMeRef = useRef();
  const aboutProjectRef = useRef();
  const refs = { techRef, aboutMeRef, aboutProjectRef };
const handleClick = (ref) => {
  ref.current?.scrollIntoView({ behavior: 'smooth' })
 };
  return(
    <>
      <main>
        <Promo handleClick={handleClick} refs={refs}></Promo>
        <AboutProject id={'aboutProject'} ref={aboutProjectRef}></AboutProject>
        <Techs id={'tech'} ref={techRef} ></Techs>
        <AboutMe id={'aboutMe'} ref={aboutMeRef}></AboutMe>
      </main>
    </>

  )
}

export default Main;