import { Component } from "../core/Component";
import {Form} from '../core/Form';
import {Validator} from '../core/Validator';
import {api} from '../services/Api';

export class CreatePost extends Component{
  constructor(id){
    super(id);
  }

  _submitHandler(event){
    event.preventDefault();
    if(this._form.isValid()){
      const formData = {
        type: this._form._form['type'].value,
        date: (new Date).toLocaleDateString(),
        ...this._form.getData()}
      api.createPost(formData)
      .then(res => alert('Пост был создан.'))
      .catch(err => console.log(err))
      this._form._form.reset();
    }else{
      console.error('Form invalid');
    }
  }

  init(){
    this._form = new Form(this._element, {
      title: [Validator.required],
      fulltext: [Validator.required, Validator.minLength(5)]
    });
    this._element.addEventListener('submit', (event) =>{
      this._submitHandler(event);
    })
  }
  
}