export class Component{
  constructor(id){
    this._element = document.getElementById(id);
    this.init();
  }

  _onHide(){

  }

  _onShow(){

  }

  _hide(){
    this._element.classList.add('hide');
    this._onHide();
  }

  _show(){
    this._element.classList.remove('hide');
    this._onShow();
  }

  init(){

  }

}