class View {
  
  // el - elemento do DOM que vai receber o template
  constructor(el){
    this._el = el;
  }

  template(){
    throw new Error('O método template deve ser implementado');
  }

  // Método que irá exibir o template
  update(model){
    // innerHTML - converte a string em elementos do DOM 
    this._el.innerHTML = this.template(model);
  }
}