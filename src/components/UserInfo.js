export default class UserInfo {
  constructor({nameHero, profHero, avatar}) {
    this._name = document.querySelector(nameHero);
    this._about = document.querySelector(profHero);
    this._avatar = document.querySelector(avatar)
    //console.log(this._names)
  }
  //который возвращает объект с данными пользователя. 
  getUserInfo() {    
   return {
      name: this._name.textContent,
      about: this._about.textContent,   
      avatar: this._avatar.src,  
    }   
  }
  //который принимает 
  //новые данные пользователя и добавляет их на страницу.
  setUserInfo(data) {
    this._myId = data._id;
    this._name.textContent = data.name;
    this._about.textContent = data.about;
    this._avatar.src = data.avatar;
  }
  returnMyId() {
    return this._myId;
  }
}