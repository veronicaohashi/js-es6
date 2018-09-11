class Negociacao {
  // Definição de atributos
  // Utilização do _ : as propriedades de uma classe que só podem ser alteradas pela própria classe (Prefixar)
  constructor(data, quantidade, valor){
    this._data = new Date(data.getTime());
    this._quantidade = quantidade;
    this._valor = valor;
    // Object.freeze é raso, fica na superfície e não faz um deep freeze
    Object.freeze(this);
  }

  get volume(){
    return this._quantidade * this._valor;
  }

  get data() {
    // Crio uma nova data baseado na data da negociação
    return new Date(this._data.getTime());
  }

  get quantidade(){
    return this._quantidade;
  }

  get valor(){
    return this._valor;
  }
}