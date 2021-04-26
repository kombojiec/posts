import { Component } from "../core/Component";
import { api } from "../services/Api";
import { PostCard } from "./PostCard";


export class FavoritePosts extends Component{
  constructor(id, loader){
    super(id);
    this._loader = loader;
  }

  _createList(data){
    const list = `<ul>
      ${data.map(element => `
        <li><a href='#' data-id='${element.id}' class='favorites__link'>${element.name}</a></li><div class="favorites__post"></div>
        <hr style="margin-bottom: 20px">`
      ).join('')}
    </ul>`
    return list;
  }

  async _addListener(link){
    link.addEventListener('click', event => {
      event.preventDefault();
      this._loader._show();
      const container = event.target.parentNode.nextSibling;
      const id = event.target.dataset.id;
      this._getPost(id)  
      .then(data => {
        data.id = id;
        const card = this._createPostCard(data);
        return card
      })
      .then(card => {
        container.append(card);
        event.target.parentNode.remove();
      })
      .finally(this._loader._hide())
    })
  }

  _getPost(id){
    return api.getPostById(id)
    .then(card =>card)
    .catch(err => console.log(err))
  }

  _createPostCard(data){
    return new PostCard('.posts__template', data).createCard();
  }

  _renderPostsName(){
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    if(favorites){
      this._element.insertAdjacentHTML('beforeend', this._createList(favorites));
      this._element.querySelectorAll('[data-id]').forEach(element => {
        this._addListener(element);
      })
    }else{
      this._element.insertAdjacentHTML('beforeend', `<h2 class='center'>Вы пока ничего не добавили.</h2>`);
    }

  }
  // `<h2 class='center'>Вы пока ничего не добавили.</h2>`
  _onShow(){
    this._renderPostsName();
  }

  _onHide(){
    this._element.innerHTML = '';
  }

  
}