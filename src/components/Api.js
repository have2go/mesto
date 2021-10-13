export default class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._token = options.headers.authorization;
    }

    _resolveCheck() {
        return (res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }


    getUserInfo() {
        return fetch(this._baseUrl + '/users/me', {
            headers: {
                authorization: this._token
            }
        }).then(this._resolveCheck())
    }

    getInitialCards() {
        return fetch(this._baseUrl + '/cards', {
            headers: {
                authorization: this._token
            }
        }).then(this._resolveCheck())
    }

    setProfileInfo(data) {
        return fetch(this._baseUrl + '/users/me', {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                about: data.about,
                avatar: data.avatar
            })
        }).then(this._resolveCheck())
    }

    postNewCard(name, link) {
        return fetch(this._baseUrl + '/cards', {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                link: link,
            })
        }).then(this._resolveCheck())
    }

    deleteCard(id) {
        return fetch(this._baseUrl + `/cards/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        }).then(this._resolveCheck())
    }

    addLike(data) {
        return fetch(this._baseUrl + `/cards/likes/${data._id}`, {
            method: 'PUT',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        }).then(this._resolveCheck())
    }

    deleteLike(data) {
        return fetch(this._baseUrl + `/cards/likes/${data._id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        }).then(this._resolveCheck())
    }

    setAvatar(link) {
        return fetch(this._baseUrl + '/users/me/avatar', {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: link
            })
        }).then(this._resolveCheck())
    }
}