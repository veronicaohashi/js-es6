class Mensagem{
  
  // Atribui um valir padrão 
  constructor(texto = ''){
    this._text = texto;
  }

  get text(){
    return this._text;
  }

  set text(texto){
    this._text = texto;
  }
}