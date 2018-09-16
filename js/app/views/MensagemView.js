class MensagemView extends View{
  
  constructor(el){
    super(el);
  }
  
  // Método template que irá retornar um template string
  template(model){
    return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : `<p></p>`;
  }

}