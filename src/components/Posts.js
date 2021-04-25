import { Component } from "../core/Component";
import {api} from '../services/Api';
import { TransformData } from './../services/TransformData';

export class Posts extends Component{
  constructor(id){
    super(id);
  }

  _onShow(){
    api.getPosts()
    .then(res => TransformData.transformData(res))
    .then(data => console.log(data))
  }
  
}