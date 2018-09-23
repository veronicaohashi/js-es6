class NegociacaoController {

  constructor(){
    // O document.querySelector é muito versátil pois aceita um seletor css
    // Quando pego o querySelector e jogo para o $, eu o executo fora do contexto de document e isso não
    // funciona, assim preciso executar como um função que mantém a associação com o document
    let $ = document.querySelector.bind(document);

    this._inputData        = $('#data');
    this._inputQuantidade  = $('#quantidade');
    this._inputValor       = $('#valor');

    // Quando a função é executada no contexto de listaNegociacoes, a função tem um contexto dinâmico
    // O this dentro de uma função depende do contexto no qual é executada.
    // Essa função quando é chamada é executada no contexto de listaNegociacoes, então esse this é a lista
    // negociações e não o controller
    // this._listaNegociacoes = new ListaNegociacoes(function(model){      
    //   // Atualiza a view para exibir a tabela mesmo com dados vazios
    //   // Model - instâcia de lista negociações que vai ser passada para a função quando for chamada
    //   this._negociacoesView.update(model);
    // });

    // Passa o elemento do DOM para o constructor
    this._negociacoesView  = new NegociacoesView($('#negociacoesView'));

    this._listaNegociacoes = new Bind (
      new ListaNegociacoes(),
      this._negociacoesView,
      ['adiciona', 'esvazia']);

    // O escopo do this de uma arrow function é lexico, e não dinâmico. Sendo assim, ele não muda de 
    // acordo com o contexto
    // this._listaNegociacoes = new ListaNegociacoes(model =>      
    //   // Atualiza a view para exibir a tabela mesmo com dados vazios
    //   // Model - instâcia de lista negociações que vai ser passada para a função quando for chamada
    //   this._negociacoesView.update(model)
    // );

    this._mensagemView = new MensagemView($('#mensagemView'));
    
    // Instancio a classe mensagem
    this._mensagem = new Bind(
      new Mensagem(),
      this._mensagemView, 
      ['texto']);
      
  }

  adiciona(event){
    // Cancelo o comportamento padrão do submit para não recarregar o formulário
    event.preventDefault();
    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._mensagem.texto = 'Negociação adicionada com sucesso';
    this._limpaFormulario();
  }

  apaga(){
    this._listaNegociacoes.esvazia();
    this._mensagem.texto = 'Negociações apagadas com sucesso';
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