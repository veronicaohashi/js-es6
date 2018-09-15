class NegociacoesView {

  // el - elemento do DOM que vai receber o template
  constructor(el){
    this._el = el;
  }

  // Método template que irá retornar um template string
  _template(model){
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
          ${model.negociacoes.map(n => 
            // Vai retornar um array e eu adiciono o join para retornar uma string para ser adicionada no template. (concateno)
            `<tr>
              <td>${DateHelper.dateToText(n.data)}</td>
              <td>${n.quantidade}</td>
              <td>${n.valor}</td>
              <td>${n.volume}</td>
            </tr>`
          ).join('')}
        </tbody>
        <tfoot>
        </tfoot>
      </table>
    `;
  }

  // Método que irá exibir o template
  update(model){
    // innerHTML - converte a string em elementos do DOM 
    this._el.innerHTML = this._template(model);
  }

}