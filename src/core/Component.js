export class Component{
  constructor(id){
    this._element = document.getElementById(id);
    this.init();
  }

  _hide(){
    this._element.classList.add('hide');
  }

  _show(){
    this._element.classList.remove('hide');
  }

  init(){

  }

}