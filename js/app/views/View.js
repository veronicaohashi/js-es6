class View {
  
  // el - elemento do DOM que vai receber o template
  constructor(el){
    this._el = el;
  }
  
  // Método que irá exibir o template
  update(model){
    // innerHTML - converte a string em elementos do DOM 
    this._el.innerHTML = this._template(model);
  }
}