import { Component } from "../core/Component";
import {Form} from '../core/Form';
import {Validator} from '../core/Validator';

export class CreatePost extends Component{
  constructor(id){
    super(id);
  }

  _submitHandler(event){
    event.preventDefault();
    if(this._form.isValid()){
      const formData = {type: this._form._form['type'].value, ...this._form.getData()}
      console.log(formData)
      this._form._form.reset();
    }else{
      console.log('form invalid');
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