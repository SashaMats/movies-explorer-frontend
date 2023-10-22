import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import SavedMovies from '../Movies/SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import { Route, Routes } from 'react-router-dom';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';

function App() {
  const loggedIn = true;


  return (
    <>
      <Routes>
        <Route path="/" element={
              <>
                <Header loggenIn={loggedIn}></Header>
                <Main className='main'></Main>
                <Footer></Footer>
              </>
        }>
        </Route>
        <Route path="/movies" 
          element={
            <>
              <Header loggenIn={loggedIn}></Header>
              <main>
                <Movies></Movies>
              </main>
              <Footer></Footer>
            </>
          }>
        </Route>
        <Route path="/saved-movies"
              element={
                <>
                  <Header loggenIn={loggedIn}></Header>
                  <main>
                    <SavedMovies></SavedMovies>
                  </main>
                  <Footer></Footer>
                </>
                }>
        </Route>
        <Route path="/profile"
          element={
            <>
              <Header loggenIn={loggedIn}></Header>
              <main>
                <Profile />
              </main>
            </>
          }></Route>
        <Route path="/signin" element={<Register />}></Route>
        <Route path="/signup" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
