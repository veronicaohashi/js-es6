class NegociacaoController {

  constructor(){
    // O document.querySelector é muito versátil pois aceita um seletor css
    // Quando pego o querySelector e jogo para o $, eu o executo fora do contexto de document e isso não
    // funciona, assim preciso executar como um função que mantém a associação com o document
    let $ = document.querySelector.bind(document);

    this._inputData       = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor      = $('#valor');
    this._listaNegociacoes = new ListaNegociacoes();

  }

  adiciona(event){
    // Cancelo o comportamento padrão do submit para não recarregar o formulário
    event.preventDefault();

    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._limpaFormulario();

    console.log(this._listaNegociacoes.negociacoes);
  }

  _criaNegociacao(){
    return new Negociacao(
      DateHelper.textToDate(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    );
  }


  // Método para limpar o formulário
  // Este método só pode ser chamado pela própria classe
  _limpaFormulario(){
    this._inputData.value = '';
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;

    this._inputData.focus();
  }
}