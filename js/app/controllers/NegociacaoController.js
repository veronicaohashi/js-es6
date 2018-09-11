class NegociacaoController {

  constructor(){
    // O document.querySelector é muito versátil pois aceita um seletor css
    // Quando pego o querySelector e jogo para o $, eu o executo fora do contexto de document e isso não
    // funciona, assim preciso executar como um função que mantém a associação com o document
    let $ = document.querySelector.bind(document);

    this._inputData       = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor      = $('#valor');

  }

  adiciona(event){
    // Cancelo o comportamento padrão do submit para não recarregar o formulário
    event.preventDefault();

    // Transformo a string em um array
    // Spread operator - 
    // let data = new Date(...
    //   this._inputData.value
    //     .split('-')
    //     .map((item, indice) => item - indice % 2 )
    // );

    let data = new DateHelper().textToDate(this._inputData.value);


    // let $ = document.querySelector; - Não funciona porque estou executando o querySelector fora do 
    // contexto de document
    console.log(typeof(this._inputData.value));
    let negociacao = new Negociacao(
      data,
      this._inputQuantidade.value,
      this._inputValor.value
    );
    console.log(negociacao);
  }
}