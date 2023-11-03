import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Movies from "../Movies/Movies";

function ProtectedMovies({ ...props }) {
  return (
    <>
    <Header loggenIn={props}></Header>
      <main>
        <Movies 
          setIsError={props.setIsError} 
          savedMovies={props.savedMovies} 
          addMovie={props.addMovie} 
          deleteMovie={props.deleteMovie}> 
        </Movies>
      </main>
    <Footer></Footer>
  </>
  )
}

export default ProtectedMovies;