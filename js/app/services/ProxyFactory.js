class ProxyFactory {
  //
  static create(obj, props, action){
    return new Proxy(obj, {
      // Método (armadilha) chamado toda vez que for realizado uma operação de leitura do objeto
      // target - referencia ao objeto original que está sendo encapsulado pelo proxy
      // prop - propriedade que está sendo acessada
      // receiver - referencia para o proxy
      get(target, prop, receiver){
        if (props.includes(prop) && ProxyFactory._isFunction(target[prop])){
          // Deve ser function para ter o this dinâmico.
          // Não pode ser arrow function que possui um escopo léxico.
          // Vou substituir esse método proxy por outro
          return function(){
            // console.log(`interceptando ${prop}`);
            // A função passa a receber os parâmetros dela
            // Argument - variável implícita que me da acesso a todos os parametros da função quando é chamada
            Reflect.apply(target[prop], target, arguments);
            return action(target);
          }
        }
        // console.log(`a propriedade "${prop}" foi interceptada`);
        // Informo o valor retornado após ter interceptado a propriedade de leitura
        return Reflect.get(target, prop, receiver);
      },

      set(target, prop, value, receiver){
        // target[prop] - passo o nome da propriedade que quero acessar desse objeto
        // console.log(`valor anterior ${target[prop]} e valor atual ${value}`);
        if (props.includes(prop)){
          // Chamo o action para garantir que depois que alterar a propriedade será executado o intercepatador
          target[prop] = value;
          action(target);         
        }
        return Reflect.set(target, prop, value, receiver);
      }
    });
  }

  static _isFunction(func){
    return typeof(func) === typeof(Function)
  }
}