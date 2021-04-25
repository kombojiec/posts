import { Component } from "../core/Component";

export class NavigationComponent extends Component{
  constructor(id, tabs){
    super(id);
    this._tabs = tabs;
  }

  init(){
    this._element.addEventListener('click', tabClickHandler.bind(this))
  }

}

function tabClickHandler(event){
  event.preventDefault();
  const target = event.target;
  const tabName = target.getAttribute('data-name');

  if(target.classList.contains('tab')){
    this._element.querySelectorAll('.tab').forEach(tab => {
      const tabName = tab.getAttribute('data-name');
      this._tabs[tabName]._hide();
      if(tab.classList.contains('active')){
        tab.classList.remove('active');
      }
    });
    target.classList.add('active');
    this._tabs[tabName]._show();
  }
    
}
