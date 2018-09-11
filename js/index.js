var campos = [
  // document.QuerySelector - API do DOM que permite buscar um elemento do DOM usando o seletor CSS
  document.querySelector('#data'),
  document.querySelector('#quantidade'),
  document.querySelector('#valor')
];

console.log(campos);
var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {
  // Vamos percorrer cada item do formulário para criar a tabela dinamicamente

  // Para não submeter o formulário
  event.preventDefault();

  var tr = document.createElement('tr');
  campos.forEach(function(campo){
    var td = document.createElement('td');
    td.textContent = campo.value;
    tr.appendChild(td);
  });

  var tdVolume = document.createElement('td');
  tdVolume.textContent = campos[1].value * campos[2].value;

  tr.appendChild(tdVolume);
  tbody.appendChild(tr);

  campos[0].value = '';
  campos[1].value = '1';
  campos[2].value = '0';

  campos[0].focus();


});