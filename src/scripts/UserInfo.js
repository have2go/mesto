export default class UserInfo {
    constructor({nameSelector, aboutSelector}) {
        this._nameSelector = nameSelector;
        this._aboutSelector = aboutSelector;
        this._name = document.querySelector(this._nameSelector);
        this._about = document.querySelector(this._aboutSelector);
    }

    getUserInfo() {
        this._dataObject = {
            name: this._name.textContent,
            about: this._about.textContent
        }

        return this._dataObject;
    }

    setUserInfo() {
        this._name.textContent = data.name;
        this._about.textContent = data.about;
    }
}