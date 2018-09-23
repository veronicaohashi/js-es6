class Bind {
  // ... - Rest operator - a partir do terceiro parâmetro passado será considerado um array
  constructor(model, view, ...props){
    let proxy = ProxyFactory.create(model, props, model => {view.update(model)});
    
    view.update(model);

    // No js um construtor pode ter retorno
    return proxy;
  }
}