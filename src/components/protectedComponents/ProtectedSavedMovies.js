import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SavedMovies from "../Movies/SavedMovies/SavedMovies";

function ProtectedSavedMovies({ ...props }) {
  return (
    <>
      <Header loggenIn={props}></Header>
      <main>
        <SavedMovies setIsError={props.setIsError} savedMovie={props.savedMovies} onDelete={props.onDelete}/>
      </main>
      <Footer></Footer>
    </>
  )
}

export default ProtectedSavedMovies;