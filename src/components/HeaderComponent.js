import {Component} from '../core/Component';

export class HeaderComponent extends Component{
  constructor(id){
    super(id);
  }

  init(){
    if(localStorage.getItem('visited')){
      this._hide();
      return;
    }
    this._element.querySelector('button').addEventListener('click', buttonHandler.bind(this));
  }

}

function buttonHandler(){
  localStorage.setItem('visited', true);
  this._hide();
}