export default class UserInfo {
    constructor({nameSelector, aboutSelector, avatarSelector}) {
        this._nameSelector = nameSelector;
        this._aboutSelector = aboutSelector;
        this._avatarSelector = avatarSelector;
        this._name = document.querySelector(this._nameSelector);
        this._about = document.querySelector(this._aboutSelector);
        this._avatar = document.querySelector(this._avatarSelector);
        this._userId = 0;
    }

    getUserInfo() {
        this._dataObject = {
            name: this._name.textContent,
            about: this._about.textContent
        }

        return this._dataObject;
    }

    setUserInfo(data) {
        this._name.textContent = data.name;
        this._about.textContent = data.about;
        this._userId = data._id;
    }

    setUserAvatar(data) {
        this._avatar.firstElementChild.src = data.avatar;
    }

    getUserId() {
        return this._userId;
    }

}