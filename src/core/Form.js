export class Form{
  constructor(form, validators){
    this._form = form;
    this._validators = validators;
  }

  getData(){
    const data = {};
    Array.from(this._form.elements).forEach(element => {
      if(element.nodeName != 'BUTTON' && element.nodeName != 'SELECT'){
        data[element.name] = element.value;
      }
    })
    return data;
  }

  isValid(){
    const formData = this.getData();
    let formIsValid = true;

    Object.keys(formData).forEach(key => {
      let inputIsValid = true;
      const validators = this._validators[key];

      validators.forEach(validator => {
        inputIsValid = validator(formData[key]) && inputIsValid;
      })

      if(!inputIsValid){
        this._setError(this._form[key]);
      }else{
        this._removeError(this._form[key]);
      }

      formIsValid = formIsValid && inputIsValid;
    })

    return formIsValid;
  }

  _setError(input){
    this._removeError(input);
    const errorText = '<p class="validation-error" >Введите корректные данные</p>';
    input.classList.add('invalid');
    input.insertAdjacentHTML('afterend', errorText);
  }

  _removeError(input){
    input.classList.remove('invalid');
    if(input.nextElementSibling){
      input.nextElementSibling.remove();
    }
  }

}