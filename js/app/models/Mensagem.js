class Mensagem{
  
  // Atribui um valor padrão 
  constructor(texto = ''){
    this._mensagem = texto;
  }

  get mensagem(){
    return this._mensagem;
  }

  set mensagem(texto){
    this._mensagem = texto;
  }
}