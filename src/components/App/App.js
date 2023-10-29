import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import mainApi from '../../utils/MainApi';
import { useCallback, useEffect, useState } from 'react';
import ProtectedProfile from '../protectedComponents/ProtectedProfile';
import ProtectedSavedMovies from '../protectedComponents/ProtectedSavedMovies';
import ProtectedMovies from '../protectedComponents/ProtectedMovies';
import ProtectedRoute from '../../utils/ProtectedRoute';
import CurrentUserContext from '../../utils/CurrentUserContext';
import ErrorContext from '../../utils/ErrorContext';
import SendContext from '../../utils/SendContext';
import Preloader from '../Movies/Preloader/Preloader';

function App() {
  const navigate = useNavigate()
  const [loggedIn, setLoggedIn] = useState(false)
  const [isSend, setIsSend] = useState(false)
  const [savedMovies, setSavedMovies] = useState([])
  const [isCheckToken, setIsCheckToken] = useState(true)
  const [currentUser, setCurrentUser] = useState({})
  const [isError, setIsError] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isEdit, setIsEdit] = useState(false)

  useEffect(() => {
    if (localStorage.jwt) {
      mainApi.getUserData(localStorage.jwt) 
        .then((userData) => {
          setCurrentUser(userData)
          setLoggedIn(true)
          setIsCheckToken(false)
        })
        .catch((err) => {
          console.error(`Ошибка при загрузке начальных данных ${err}`)
          setIsCheckToken(false)
          setLoggedIn(true)
        })
      mainApi.getMovies(localStorage.jwt) 
        .then((dataMovies) => {
          setSavedMovies(dataMovies.reverse())
        })
        .catch((err) => {
          console.error(`Нет сохраненных фильмов ${err}`)
        })
    } 
    else {
      setLoggedIn(false)
      setIsCheckToken(false)
      localStorage.clear()
    }
  }, [loggedIn])
  

  function handleTogglMovie(data) {
    const isAdd = savedMovies.some(element => data.id === element.movieId)
    console.log(savedMovies)
    console.log(isAdd)
    const searchClickMovie = savedMovies.filter((movie) => {
      return movie.movieId === data.id
    })
    if (isAdd) {
      handleDeleteMovie(searchClickMovie[0]._id)
    } else {
      mainApi.addMovie(data, localStorage.jwt)
        .then(res => {
          setSavedMovies([res, ...savedMovies])
        })
        .catch((err) => console.error(`Ошибка при добавлении фильма ${err}`))
    }
  }


  
  const setSuccess = useCallback(() => {
    setIsSuccess(false)
  }, [])

  function logOut() {
    localStorage.clear()
    setLoggedIn(false)
    navigate('/')
  }

  function handleDeleteMovie(deletemovieId) {
    mainApi.deleteMovie(deletemovieId, localStorage.jwt)
      .then(() => {
        setSavedMovies(savedMovies.filter(movie => { return movie._id !== deletemovieId }))
      })
      .catch((err) => console.error(`Ошибка при удалении фильма ${err}`))
  }


  function handleLogin(email, password) {
    setIsSend(true)
    mainApi.authorization(email, password)
      .then(res => {
        localStorage.setItem('jwt', res.token)
        
        navigate('/movies')
        window.scrollTo(0, 0)
        setLoggedIn(true)
      })
      .catch((err) => {
        setIsError(true)
        console.error(`Ошибкак при авторизации ${err}`)
      })
      .finally(() => {setIsSend(false)})
  }

  function handleRegister(name, email, password) {
    setIsSend(true)
    mainApi.registration(name, email, password)
      .then((res) => {
        if (res) {
          setLoggedIn(false)
          mainApi.authorization(email, password)
            .then(res => {
              localStorage.setItem('jwt', res.token)
              setLoggedIn(true)
              navigate('/movies')
              window.scrollTo(0, 0)
            })
            .catch((err) => {
              setIsError(true)
              console.error(`Ошибкак при авторизации после регистрации ${err}`)
            })
            .finally(() => setIsSend(false))
        }
      })
      .catch((err) => {
        setIsError(true)
        console.error(`Ошибкак при регистрации ${err}`)
      })
      .finally(() => setIsSend(false))
  }
  function editUserData(username, email) {
    setIsSend(true)
    mainApi.setUserInfo(username, email, localStorage.jwt)
      .then(res => {
        if (res === undefined) {
          setIsError(true)
        } else {
          setCurrentUser(res)
          setIsSuccess(true)
          setIsEdit(false)
        }
      })
      .catch((err) => {
        setIsError(true)
        console.error(`Ошибкак при редактировании данных пользователя ${err}`)
      })
      .finally(() => setIsSend(false))
  }

  return (
    <div className='page__container'>
    {isCheckToken ? <Preloader></Preloader> :
      <CurrentUserContext.Provider value={currentUser}>
        <SendContext.Provider value={isSend}>
        <ErrorContext.Provider value={isError}>
          <Routes>
            <Route path="/" element={
                  <>
                    <Header loggenIn={loggedIn} isSend={isSend}></Header>
                    <Main className='main'></Main>
                    <Footer></Footer>
                  </>
            }>
            </Route>

            <Route path="/movies"
              element={
                <ProtectedRoute 
                  element={ProtectedMovies}
                  savedMovies={savedMovies}
                  addMovie={handleTogglMovie}
                  loggedIn={loggedIn}
                  setIsError={setIsError}
                />
              }/>

            <Route path="/saved-movies"
                  element={
                    <ProtectedRoute
                      element={ProtectedSavedMovies}
                      savedMovies={savedMovies}
                      addMovie={handleTogglMovie}
                      loggedIn={loggedIn}
                      setIsError={setIsError}
                      onDelete={handleDeleteMovie}
                    />
                  }>
            </Route>

            <Route path="/profile"
              element={
                <ProtectedRoute
                  element={ProtectedProfile}
                  loggedIn={loggedIn}
                  logOut={logOut}
                  editUserData={editUserData}
                  setIsError={setIsError}
                  isError={isError}
                  isSuccess={isSuccess}
                  setSuccess={setSuccess}
                  setIsEdit={setIsEdit}
                  isEdit={isEdit}
                  isSend={isSend}
                />
              }/>
            <Route path="/signin" element={
              <Register 
                handleRegister={handleRegister}
                setIsError={setIsError}
            />}>
            </Route>
            <Route path="/signup" element={<Login handleLogin={handleLogin} setIsError={setIsError}/>}></Route>
            <Route path="*" element={<NotFound />}/>
          </Routes>
          </ErrorContext.Provider>
        </SendContext.Provider>
      </CurrentUserContext.Provider>
      }
    </div>
  );
}

export default App;
