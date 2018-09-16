class NegociacoesView extends View{
 
  // constructor(el){
  //   super(el);
  // }
  
  // Método template que irá retornar um template string
  template(model){
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
          <tr>
            <td colspan='3'></td>
            <td>
              ${
                // Immediately-invoked function expression (IIFE) ou a função imediata. 
                // Trata-se de um recurso usado na criação de escopo em JavaScript, sem isso o retorno do $ seria a função e não o retorno da função
                // (function() {
                //   let total = 0;
                //   model.negociacoes.forEach(n => total += n.volume);
                //   return total;
                // })()

                // Reduce - processa um array e retorna apenas um resultado
                // Executa a função para cada item da lista
                model.negociacoes.reduce((total, n) => total + n.volume, 0.0)
              }
            </td>
          </tr>
        </tfoot>
      </table>
    `;
  }


}