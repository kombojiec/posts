class Api{
  constructor(url){
    this._url = url;
  }

  _checkResponse(res){
    if(res.ok){
      return res.json();
    }else{
      return Promise.reject(res.status);
    }
  }

  createPost(data){
    return fetch(this._url + '/posts.json', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => this._checkResponse(res))
  }

  getPosts(){
    return fetch(this._url + '/posts.json')
    .then(res => this._checkResponse(res))
  }

  getPostById(id){
    return fetch(this._url + `/posts/${id}.json`)
    .then(res => this._checkResponse(res))
  }

}

export const api = new Api('https://posts-23845-default-rtdb.firebaseio.com');