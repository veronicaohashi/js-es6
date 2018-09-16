class Mensagem{
  
  // Atribui um valor padrão 
  constructor(texto = ''){
    this.texto = texto;
  }

  get mensagem(){
    return this.texto;
  }

  set mensagem(texto){
    this.texto = texto;
  }
}