export class PostCard{
  constructor(template, data, addButton = false){
    this._template = template;
    this._data = data;
    this._addButton = addButton;
  }

  _getTemplate(){
    return document.querySelector(this._template).content
    .querySelector('.panel')
    .cloneNode(true);
  }

  createCard(){
    const card = this._getTemplate();
    const button = card.querySelector('button');
    let tag = '';
    tag = this._data.type == 'news'?  'новость': 'заметка';
    card.querySelector('.tag').textContent = tag;
    if(tag == 'заметка'){card.querySelector('.tag').classList.remove('tag-blue')};
    card.querySelector('.panel-title').textContent = this._data.title;
    card.querySelector('.multi-line').textContent = this._data.fulltext;
    card.querySelector('.panel-footer small').textContent = this._data.date;
    if(this._addButton){
      button.dataset.id = this._data.id
    }else{
      button.remove();
    }
    return card;
  }

}