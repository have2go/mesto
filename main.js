(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e,r,o,i,a,u,s){var c=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_getCard",(function(){return c._template=document.querySelector(c._cardSelector).content.cloneNode(!0).children[0],c._likeButton=c._template.querySelector(".elements__like"),c._cardImage=c._template.querySelector(".elements__image"),c._cardTitle=c._template.querySelector(".elements__title"),c._trashButton=c._template.querySelector(".elements__trash"),c._likeCounter=c._template.querySelector(".elements__like-counter"),c._template})),t(this,"_deleteHandler",(function(e){c._deleteFunc(e)})),t(this,"_likeHandler",(function(e){c._likeButton.classList.contains("elements__like_active")?(c._likeButton.classList.remove("elements__like_active"),c._deleteLike(e,c._obj)):(c._likeButton.classList.add("elements__like_active"),c._setLike(e,c._obj))})),t(this,"_setIventListeners",(function(){c._trashButton.addEventListener("click",c._deleteHandler),c._likeButton.addEventListener("click",c._likeHandler),c._cardImage.addEventListener("click",(function(){c._handleCardClick(c._name,c._link)}))})),t(this,"_checkIfLiked",(function(){c._obj.likes.filter((function(e){return e._id===c._userId})).length>0&&c._likeButton.classList.add("elements__like_active")})),this._obj=e,this._name=e.name,this._link=e.link,this._userId=i,this._id=e.owner._id,this._cardSelector=r,this._handleCardClick=o,this._deleteFunc=a,this._setLike=u,this._deleteLike=s}var r,o;return r=n,(o=[{key:"_removeTrashButtons",value:function(){this._id!=this._userId&&this._trashButton.remove()}},{key:"render",value:function(){return this._card=this._getCard(),this._setIventListeners(),this._removeTrashButtons(),this._checkIfLiked(),this._cardTitle.textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name,this._likeCounter.textContent=this._obj.likes.length,this._card}}])&&e(r.prototype,o),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?this.disableSubmitButton():this.enableSubmitButton()}},{key:"_setIventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._toggleButtonState(),e._checkInputValidity(t)}))}))}},{key:"removeValidationErrors",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"disableSubmitButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"enableSubmitButton",value:function(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1}},{key:"enableValidation",value:function(){this._setIventListeners()}}])&&r(t.prototype,n),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"createCards",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"addNewCard",value:function(e){this._container.prepend(e)}}])&&i(t.prototype,n),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._handleMouseClose=this._handleMouseClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleMouseClose",value:function(e){(e.target.classList.contains("popup")||e.target.classList.contains("popup__close-btn"))&&this.close()}},{key:"_removeEventListeners",value:function(){document.removeEventListener("keydown",this._handleEscClose),document.removeEventListener("mousedown",this._handleMouseClose)}},{key:"setEventListeners",value:function(){document.addEventListener("keydown",this._handleEscClose),document.addEventListener("mousedown",this._handleMouseClose)}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),this.setEventListeners()}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),this._removeEventListeners()}}])&&u(t.prototype,n),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},f(e,t,n||e)}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function h(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popup.querySelector(".img-popup__element"),t._text=t._popup.querySelector(".img-popup__text"),t}return t=a,(n=[{key:"open",value:function(e,t){this._image.src=t,this._text.textContent=e,f(_(a.prototype),"open",this).call(this)}}])&&l(t.prototype,n),a}(s);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},m(e,t,n||e)}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function k(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return g(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function a(e,t){var n,r,o,u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),u=function(e){e.preventDefault(),n._submitCallback(n._getInputValues())},(o="_submitHandler")in(r=g(n=i.call(this,e)))?Object.defineProperty(r,o,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[o]=u,n._submitCallback=t,n._inputList=Array.from(n._popup.querySelectorAll(".popup__input")),n._form=n._popup.querySelector(".popup__form"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){m(C(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._submitHandler)}},{key:"_removeEventListeners",value:function(){m(C(a.prototype),"_removeEventListeners",this).call(this),this._form.removeEventListener("submit",this._submitHandler)}},{key:"close",value:function(){m(C(a.prototype),"close",this).call(this),this._form.reset()}}])&&v(t.prototype,n),a}(s);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e,t,n){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},L(e,t,n||e)}function O(e,t){return O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},O(e,t)}function j(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return I(e)}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(o){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function a(e,t){var n,r,o,u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),u=function(e){e.preventDefault(),n._submitCallback(n._card)},(o="_submitHandler")in(r=I(n=i.call(this,e)))?Object.defineProperty(r,o,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[o]=u,n._submitCallback=t,n._form=document.querySelector(".confirm-popup__content"),n._card=null,n}return t=a,(n=[{key:"getCardToDelete",value:function(e){this._card=e}},{key:"setEventListeners",value:function(){L(P(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._submitHandler)}},{key:"_removeEventListeners",value:function(){L(P(a.prototype),"_removeEventListeners",this).call(this),this._form.removeEventListener("submit",this._submitHandler)}}])&&w(t.prototype,n),a}(s);function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t){var n=t.nameSelector,r=t.aboutSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameSelector=n,this._aboutSelector=r,this._avatarSelector=o,this._name=document.querySelector(this._nameSelector),this._about=document.querySelector(this._aboutSelector),this._avatar=document.querySelector(this._avatarSelector),this._userId=0}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._dataObject={name:this._name.textContent,about:this._about.textContent},this._dataObject}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._about.textContent=e.about,this._userId=e._id}},{key:"setUserAvatar",value:function(e){this._avatar.firstElementChild.src=e.avatar}},{key:"getUserId",value:function(){return this._userId}}])&&T(t.prototype,n),e}();function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var U=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._token=t.headers.authorization}var t,n;return t=e,(n=[{key:"_resolveCheck",value:function(){return function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}}},{key:"getUserInfo",value:function(){return fetch(this._baseUrl+"/users/me",{headers:{authorization:this._token}}).then(this._resolveCheck())}},{key:"getInitialCards",value:function(){return fetch(this._baseUrl+"/cards",{headers:{authorization:this._token}}).then(this._resolveCheck())}},{key:"setProfileInfo",value:function(e){return fetch(this._baseUrl+"/users/me",{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about,avatar:e.avatar})}).then(this._resolveCheck())}},{key:"postNewCard",value:function(e,t){return fetch(this._baseUrl+"/cards",{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,link:t})}).then(this._resolveCheck())}},{key:"deleteCard",value:function(e){return fetch(this._baseUrl+"/cards/".concat(e._id),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._resolveCheck())}},{key:"addLike",value:function(e){return fetch(this._baseUrl+"/cards/likes/".concat(e._id),{method:"PUT",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._resolveCheck())}},{key:"deleteLike",value:function(e){return fetch(this._baseUrl+"/cards/likes/".concat(e._id),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._resolveCheck())}},{key:"setAvatar",value:function(e){return fetch(this._baseUrl+"/users/me/avatar",{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then(this._resolveCheck())}}])&&R(t.prototype,n),e}(),x=document.querySelector(".profile__add-button"),V=document.querySelector(".profile__edit-button"),D=document.querySelector(".profile__shadow"),H=document.querySelector("#newcard-form"),A=document.querySelector("#profile-form"),z=document.querySelector("#avatar-form"),N=document.querySelector(".popup__input_type_name"),M=document.querySelector(".popup__input_type_about"),J={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-btn",inactiveButtonClass:"popup__save-btn_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active",popups:".popup"},F=new q({nameSelector:".profile__name",aboutSelector:".profile__description",avatarSelector:".profile__photo"}),G=new o(J,H);G.enableValidation();var K=new o(J,A);K.enableValidation();var Q=new o(J,z);Q.enableValidation();var W=new E(".popup_profile",(function(e){F.setUserInfo(e),te.setProfileInfo(F.getUserInfo()),W.close()})),X=new E(".popup_newcard",(function(e){te.postNewCard(e.name,e.link).then((function(e){ee.addNewCard(ae(e)),console.log(e)})).catch((function(e){console.log(e)})),G.disableSubmitButton(),X.close()})),Y=new d(".img-popup"),Z=new B(".confirm-popup",(function(e){e.remove(),Z.close(),te.deleteCard(e).catch((function(e){console.log(e)}))})),$=new E(".popup-avatar",(function(e){te.setAvatar(e.link).then((function(e){F.setUserAvatar(e)})).catch((function(e){console.log(e)})),$.close()})),ee=new a({renderer:function(e){var t=ae(e);ee.addItem(t)}},".elements"),te=new U({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-28",headers:{authorization:"fbabf2a1-b60d-4ec5-acf1-d3bcd274680a","Content-Type":"application/json"}});function ne(e){Z.open(),Z.getCardToDelete(e.target.parentNode)}function re(e,t){te.addLike(t).then((function(t){e.target.nextElementSibling.textContent=t.likes.length})).catch((function(e){console.log(e)}))}function oe(e,t){te.deleteLike(t).then((function(t){e.target.nextElementSibling.textContent=t.likes.length})).catch((function(e){console.log(e)}))}function ie(e,t){Y.open(e,t)}function ae(e){return new n(e,"#cards-template",ie,F.getUserId(),ne,re,oe).render()}te.getUserInfo().then((function(e){F.setUserInfo(e),F.setUserAvatar(e)})).catch((function(e){console.log(e)})),te.getInitialCards().then((function(e){ee.createCards(e)})).catch((function(e){console.log(e)})),V.addEventListener("click",(function(){var e=F.getUserInfo();N.value=e.name,M.value=e.about,K.enableSubmitButton(),K.removeValidationErrors(),W.open()})),x.addEventListener("click",(function(){G.removeValidationErrors(),G.disableSubmitButton(),X.open()})),D.addEventListener("click",(function(){Q.removeValidationErrors(),Q.disableSubmitButton(),$.open()}))})();