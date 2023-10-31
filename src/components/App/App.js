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
  const [errorMessage, setErrorMessage] = useState()

  useEffect(() => {
    if (localStorage.jwt) {
      mainApi.getUserData(localStorage.jwt) 
        .then((userData) => {
          setCurrentUser(userData)
          setLoggedIn(true)
          setIsCheckToken(false)
        })
        .catch((err) => {
          setErrorMessage('При авторизации произошла ошибка. Переданный токен некорректен.')
          console.error(`Ошибка при проверке токена ${err}`)
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
        if (res.message) {
          setIsError(true)
          setErrorMessage(res.message)
        } else {
         localStorage.setItem('jwt', res.token)
          navigate('/movies')
          window.scrollTo(0, 0)
          setLoggedIn(true)
        }
      })
      .catch((err) => {
        setIsError(true)
        setErrorMessage('При авторизации произошла ошибка. Токен не передан или передан не в том формате.')
        console.error(`При авторизации произошла ошибка. Токен не передан или передан не в том формате. ${err}`)
      })
      .finally(() => {setIsSend(false)})
  }

  function handleRegister(name, email, password) {
    setIsSend(true)
    mainApi.registration(name, email, password)
      .then((res) => {
        if (res.message) {
          setErrorMessage(res.message)
        } else
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
              setErrorMessage('При авторизации произошла ошибка. Токен не передан или передан не в том формате.')
              console.error(`При авторизации произошла ошибка. Токен не передан или передан не в том формате. ${err}`)
            })
            .finally(() => setIsSend(false))
        }
      })
      .catch((err) => {
        setIsError(true)
        setErrorMessage('При регистрации пользователя произошла ошибка.')
        console.error(`При регистрации пользователя произошла ошибка ${err}`)
      })
      .finally(() => setIsSend(false))
  }
  function editUserData(username, email) {
    setIsSend(true)
    mainApi.setUserInfo(username, email, localStorage.jwt)
      .then(res => {
        if (res.message) {
          setIsError(true)
          setErrorMessage(res.message)
        } else {
          setCurrentUser(res)
          setIsSuccess(true)
          setIsEdit(false)
        }
      })
      .catch((err) => {
        setIsError(true)
        setErrorMessage('При обновлении профиля произошла ошибка')
        console.error(`При обновлении профиля произошла ошибка ${err}`)
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
                  errorMessage={errorMessage}
                  setErrorMessage={setErrorMessage}
                />
              }/>
            <Route path="/signin" element={
              <Register 
                handleRegister={handleRegister}
                setIsError={setIsError}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
            />}>
            </Route>
            <Route path="/signup" 
              element={<Login 
              handleLogin={handleLogin} 
              setIsError={setIsError} 
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}/>}>
            </Route>
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
