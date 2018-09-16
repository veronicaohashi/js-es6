class MensagemView extends View{
  
  constructor(el){
    super(el);
  }
  
  // Método template que irá retornar um template string
  _template(model){
    return `<p class="alert alert-info">${model}</p>`;
  }

}