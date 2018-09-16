class NegociacaoController {

  constructor(){
    // O document.querySelector é muito versátil pois aceita um seletor css
    // Quando pego o querySelector e jogo para o $, eu o executo fora do contexto de document e isso não
    // funciona, assim preciso executar como um função que mantém a associação com o document
    let $ = document.querySelector.bind(document);

    this._inputData        = $('#data');
    this._inputQuantidade  = $('#quantidade');
    this._inputValor       = $('#valor');
    this._listaNegociacoes = new ListaNegociacoes();
    // Passa o elemento do DOM para o constructor
    this._negociacoesView  = new NegociacoesView($('#negociacoesView'));
    // Atualiza a view para exibir a tabela mesmo com dados vazios
    this._negociacoesView.update(this._listaNegociacoes);
    // Instancio a classe mensagem
    this._mensagem = new Mensagem();
    this._mensagemView = new MensagemView($('#mensagemView'));
    this._mensagemView.update(this._mensagem)
  }

  adiciona(event){
    // Cancelo o comportamento padrão do submit para não recarregar o formulário
    event.preventDefault();

    this._listaNegociacoes.adiciona(this._criaNegociacao());
    
    this._mensagem.texto = 'Negociação adicionada com sucesso';
    this._mensagemView.update(this._mensagem);  
    // Atualiza a view para exibir a tabela mesmo com dados novos
    this._negociacoesView.update(this._listaNegociacoes);
    this._limpaFormulario();

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