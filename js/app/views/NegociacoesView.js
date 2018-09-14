class NegociacoesView {

  // el - elemento do DOM que vai receber o template
  constructor(el){
    this._el = el;
  }

  // Método template que irá retornar um template string
  _template(){
    return `    
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
            <th>VOLUME</th>
          </tr>
        </thead>

        <tbody>
        </tbody>

        <tfoot>
        </tfoot>
      </table>
    `;
  }

  // Método que irá exibir o template
  update(){
    // innerHTML - converte a string em elementos do DOM 
    this._el.innerHTML = this._template();
  }

}