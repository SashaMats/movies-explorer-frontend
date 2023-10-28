class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json()
      } else {
        Promise.reject(`Ошибка: ${res.status}`)
      }
    }
  registration(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      })
    })
    .then(res => this._checkResponse(res))
  }
  authorization(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })
    .then(res => this._checkResponse(res))
  }

  getUserData(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        "Authorization" : `Bearer ${token}`
      }
    })
    .then(res => this._checkResponse(res));
  }

  getMovies(token) {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        "Authorization" : `Bearer ${token}`
      }
    })
    .then(res => this._checkResponse(res))
  }
  
  addMovie(data, token) {
    console.log(token)
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization" : `Bearer ${token}`
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        description: data.description,
        year: data.year,
        image: `https://api.nomoreparties.co${data.image.url}`,
        trailer: data.trailerLink,
        thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
        movieId: data.id,
        nameRu: data.nameRU,
        nameEn: data.nameEN
      })
    })
    .then(res => this._checkResponse(res))
  }

  deleteMovie(cardId, token) {
    return fetch(`${this._baseUrl}/movies/${cardId}`, {
      method: 'DELETE',
      headers: {
        "Authorization" : `Bearer ${token}`
      }
    })
    .then(res => this._checkResponse(res))

  }

  setUserInfo(username, email, token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        "Authorization" : `Bearer ${token}`
      },
      body: JSON.stringify({
        name: username,
        email: email,
      })
    })
    .then(res => this._checkResponse(res));
  }

}

const mainApi = new MainApi({
  // baseUrl: 'http://localhost:3000',
  baseUrl: 'https://api.mats-study-project.nomoredomainsrocks.ru',
});

export default mainApi;
