class ListaNegociacoes {
  // Armadilha - função passada como parâmetro no construtor
  constructor( armadilha){
    this._negociacoes = [];
  }

  adiciona(negociacao){
    this._negociacoes.push(negociacao);
    // Vai receber a própria instancia que está sendo chamada
    // this._armadilha(this);
    // Método estático da classe Reflect
    // Reflect.apply(this._armadilha, this._contexto, [this]);
  }

  get negociacoes(){
    return [].concat(this._negociacoes);
  }

  esvazia(){
    this._negociacoes = [];
    // Reflect.apply(this._armadilha, this._contexto, [this]);
  }

}