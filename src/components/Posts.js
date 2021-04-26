import { Component } from "../core/Component";
import {api} from '../services/Api';
import { TransformData } from './../services/TransformData';
import {PostCard} from './PostCard';

export class Posts extends Component{
  constructor(id, template, loader){
    super(id);
    this._cardTemplate = template;
    this._loader = loader;
  }

  createCard(data){
    const card = new PostCard('.posts__template', data, true).createCard()
    const button = card.querySelector('button');
    this._checkFavoriteCard(data.id)? this._setRemoveButton(button): this._setAddButton(button);
    this._setEventListener(card, data.title);
    return card;
  }

  _setEventListener(card, name){
    const button = card.querySelector('button');
    button.addEventListener('click', () => {
      const id = button.dataset.id;
      const data = {id, name}
      if(localStorage.getItem('favorites')){
        let favorites = JSON.parse(localStorage.getItem('favorites'));
        if(favorites.find(item => item.id == id)){
          favorites = favorites.filter(item => item.id != id);
          this._setAddButton(button);
        }else{
          favorites.push(data);
          this._setRemoveButton(button);
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
      }else{
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites.push(data);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        this._setRemoveButton(button);
      }
    })
  }

  _checkFavoriteCard(id){
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    if(favorites && favorites.find(item => item.id == id)){
      return true;
    }
    return false;
  }

  _setAddButton(button){
    button.classList.add('button-primary');
    button.classList.remove('button-danger');
    button.textContent = 'сохранить'
  }

  _setRemoveButton(button){
    button.classList.remove('button-primary');
    button.classList.add('button-danger');
    button.textContent = 'удалить из избранного'
  }

  _adCards(container, data){
    data.forEach(element => {
      document.querySelector(container).prepend(this.createCard(element));
    });
  }

  _onShow(){
    this._loader._show();
    api.getPosts()
    .then(res => TransformData.transformData(res))
    .then(data => {
      this._adCards('#posts', data);
      this._loader._hide();
    })    
  }

  _onHide(){
    document.querySelectorAll('.panel').forEach(item => {
      item.remove();
    })
  }
  
}