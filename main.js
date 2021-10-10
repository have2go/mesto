(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e,r,o,i){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_getCard",(function(){return a._template=document.querySelector(a._cardSelector).content.cloneNode(!0).children[0],a._likeButton=a._template.querySelector(".elements__like"),a._cardImage=a._template.querySelector(".elements__image"),a._cardTitle=a._template.querySelector(".elements__title"),a._trashButton=a._template.querySelector(".elements__trash"),a._likeCounter=a._template.querySelector(".elements__like-counter"),a._template})),t(this,"_deleteHandler",(function(){a._card.remove()})),t(this,"_likeHandler",(function(){a._likeButton.classList.toggle("elements__like_active"),a._likeButton.classList.contains("elements__like_active")?a._likeCounter.textContent=parseInt(a._likeCounter.textContent,10)+1:a._likeCounter.textContent=parseInt(a._likeCounter.textContent,10)-1})),t(this,"_setIventListeners",(function(){a._trashButton.addEventListener("click",a._deleteHandler),a._likeButton.addEventListener("click",a._likeHandler),a._cardImage.addEventListener("click",(function(){a._handleCardClick(a._name,a._link)}))})),this._name=e,this._link=r,this._cardSelector=o,this._handleCardClick=i}var r,o;return r=n,(o=[{key:"render",value:function(){return this._card=this._getCard(),this._setIventListeners(),this._cardTitle.textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name,this._card}}])&&e(r.prototype,o),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?this.disableSubmitButton():this.enableSubmitButton()}},{key:"_setIventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._toggleButtonState(),e._checkInputValidity(t)}))}))}},{key:"removeValidationErrors",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"disableSubmitButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"enableSubmitButton",value:function(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1}},{key:"enableValidation",value:function(){this._setIventListeners()}}])&&r(t.prototype,n),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"createCards",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"addNewCard",value:function(e){this._container.prepend(e)}}])&&i(t.prototype,n),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._handleMouseClose=this._handleMouseClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleMouseClose",value:function(e){(e.target.classList.contains("popup")||e.target.classList.contains("popup__close-btn"))&&this.close()}},{key:"_removeEventListeners",value:function(){document.removeEventListener("keydown",this._handleEscClose),document.removeEventListener("mousedown",this._handleMouseClose)}},{key:"setEventListeners",value:function(){document.addEventListener("keydown",this._handleEscClose),document.addEventListener("mousedown",this._handleMouseClose)}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),this.setEventListeners()}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),this._removeEventListeners()}}])&&u(t.prototype,n),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},f(e,t,n||e)}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function _(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popup.querySelector(".img-popup__element"),t._text=t._popup.querySelector(".img-popup__text"),t}return t=a,(n=[{key:"open",value:function(e,t){this._image.src=t,this._text.textContent=e,f(h(a.prototype),"open",this).call(this)}}])&&l(t.prototype,n),a}(s);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},m(e,t,n||e)}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function k(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return S(e)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function a(e,t){var n,r,o,u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),u=function(e){e.preventDefault(),n._submitCallback(n._getInputValues())},(o="_submitHandler")in(r=S(n=i.call(this,e)))?Object.defineProperty(r,o,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[o]=u,n._submitCallback=t,n._inputList=Array.from(n._popup.querySelectorAll(".popup__input")),n._form=n._popup.querySelector(".popup__form"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){m(C(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._submitHandler)}},{key:"_removeEventListeners",value:function(){m(C(a.prototype),"_removeEventListeners",this).call(this),this._form.removeEventListener("submit",this._submitHandler)}},{key:"close",value:function(){m(C(a.prototype),"close",this).call(this),this._form.reset()}}])&&y(t.prototype,n),a}(s);function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t){var n=t.nameSelector,r=t.aboutSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameSelector=n,this._aboutSelector=r,this._avatarSelector=o,this._name=document.querySelector(this._nameSelector),this._about=document.querySelector(this._aboutSelector),this._avatar=document.querySelector(this._avatarSelector)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._dataObject={name:this._name.textContent,about:this._about.textContent},this._dataObject}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._about.textContent=e.about}},{key:"setUserAvatar",value:function(e){this._avatar.src=e.avatar}}])&&E(t.prototype,n),e}();function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._token=t.headers.authorization}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return fetch(this._baseUrl+"/users/me",{headers:{authorization:this._token}})}},{key:"getInitialCards",value:function(){return fetch(this._baseUrl+"/cards",{headers:{authorization:this._token}})}},{key:"setProfileInfo",value:function(e){return fetch(this._baseUrl+"/users/me",{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about,avatar:e.avatar})})}},{key:"postNewCard",value:function(e,t){return fetch(this._baseUrl+"/cards",{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,link:t})})}},{key:"likeCounter",value:function(){console.log(this._cardTemplate)}},{key:"deleteCard",value:function(){}},{key:"patchUserAvatar",value:function(){}}])&&O(t.prototype,n),e}(),j=document.querySelector(".profile__add-button"),I=document.querySelector(".profile__edit-button"),P=document.querySelector("#newcard-form"),B=document.querySelector("#profile-form"),q=document.querySelector(".popup__input_type_name"),T=document.querySelector(".popup__input_type_about"),x={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-btn",inactiveButtonClass:"popup__save-btn_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active",popups:".popup"},R=new w({nameSelector:".profile__name",aboutSelector:".profile__description",avatarSelector:".profile__photo"}),U=new a({renderer:function(e){var t=J(e.name,e.link);U.addItem(t)}},".elements"),V=new L({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-28",headers:{authorization:"fbabf2a1-b60d-4ec5-acf1-d3bcd274680a","Content-Type":"application/json"}});V.getUserInfo().then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){R.setUserInfo(e),R.setUserAvatar(e)})).catch((function(e){console.log(e)})),V.getInitialCards().then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){U.createCards(e)})).catch((function(e){console.log(e)}));var A=new o(x,P);A.enableValidation();var H=new o(x,B);H.enableValidation();var N=new g(".popup_profile",(function(e){R.setUserInfo(e),V.setProfileInfo(R.getUserInfo()),N.close()})),z=new g(".popup_newcard",(function(e){U.addNewCard(J(e.title,e.link)),A.disableSubmitButton(),z.close()})),M=new d(".img-popup");function D(e,t){M.open(e,t)}function J(e,t){var r=new n(e,t,"#cards-template",D).render();return V.postNewCard(e,t),r}I.addEventListener("click",(function(){var e=R.getUserInfo();q.value=e.name,T.value=e.about,H.enableSubmitButton(),H.removeValidationErrors(),N.open()})),j.addEventListener("click",(function(){A.removeValidationErrors(),A.disableSubmitButton(),z.open()}))})();