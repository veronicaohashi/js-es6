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
    let self = this;
    this._listaNegociacoes = new Proxy(new ListaNegociacoes(), {
      // Método (armadilha) chamado toda vez que for realizado uma operação de leitura do objeto
      // target - referencia ao objeto original que está sendo encapsulado pelo proxy
      // prop - propriedade que está sendo acessada
      // receiver - referencia para o proxy
      get(target, prop, receiver){
        if (['adiciona', 'esvazia'].includes(prop) && typeof(target[prop]) === typeof(Function)){
          // Deve ser function para ter o this dinâmico.
          // Não pode ser arrow function que possui um escopo léxico.
          // Vou substituir esse método proxy por outro
          return function(){
            console.log(`interceptando ${prop}`);
            // A função passa a receber os parâmetros dela
            // Argument - variável implícita que me da acesso a todos os parametros da função quando é chamada
            Reflect.apply(target[prop], target, arguments);
            self._negociacoesView.update(target);
          }
        }
        // console.log(`a propriedade "${prop}" foi interceptada`);
        // Informo o valor retornado após ter interceptado a propriedade de leitura
        return Reflect.get(target, prop, receiver);
      },

      // set: function(target, prop, value, receiver){
      //   // target[prop] - passo o nome da propriedade que quero acessar desse objeto
      //   console.log(`valor anterior ${target[prop]} e valor atual ${value}`);
      //   return Reflect.set(target, prop, value, receiver);
      // }
    });

    // O escopo do this de uma arrow function é lexico, e não dinâmico. Sendo assim, ele não muda de 
    // acordo com o contexto
    // this._listaNegociacoes = new ListaNegociacoes(model =>      
    //   // Atualiza a view para exibir a tabela mesmo com dados vazios
    //   // Model - instâcia de lista negociações que vai ser passada para a função quando for chamada
    //   this._negociacoesView.update(model)
    // );

    // Passa o elemento do DOM para o constructor
    this._negociacoesView  = new NegociacoesView($('#negociacoesView'));
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

    this._limpaFormulario();

  }

  apaga(){
    this._listaNegociacoes.esvazia();

    this._mensagem.texto = 'Negociações apagadas com sucesso';
    this._mensagemView.update(this._mensagem);
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