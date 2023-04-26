const { inserirRegistro, getRegistros } = require('./database');
inserirRegistro(data, rota, recusados, quebrados, danificados, vencidos);


const db = openDatabase('registros', '1.0', 'Registros de Entrega', 2 * 1024 * 1024);
// Seleciona o container dos registros
const registrosContainer = document.getElementById('registros-container');

// Adiciona um registro ao container
function adicionarRegistro(registro) {
  const registroDiv = document.createElement('div');
  registroDiv.classList.add('registro');
  registroDiv.innerHTML = `
    <div class="registro-data">${registro.data}</div>
    <div class="registro-rota">${registro.rota}</div>
    <div class="registro-recusados">${registro.recusados}</div>
    <div class="registro-quebrados">${registro.quebrados}</div>
    <div class="registro-danificados">${registro.danificados}</div>
    <div class="registro-vencidos">${registro.vencidos}</div>
  `;
  registrosContainer.appendChild(registroDiv);
}

// Adiciona evento de submit no formulário de registro
document.getElementById('form-registro').addEventListener('submit', function(event) {
  event.preventDefault();
  const data = document.getElementById('input-data').value;
  const rota = document.getElementById('input-rota').value;
  const recusados = document.getElementById('input-recusados').value;
  const quebrados = document.getElementById('input-quebrados').value;
  const danificados = document.getElementById('input-danificados').value;
  const vencidos = document.getElementById('input-vencidos').value;
  const registro = {
    data: data,
    rota: rota,
    recusados: recusados,
    quebrados: quebrados,
    danificados: danificados,
    vencidos: vencidos
  };
  adicionarRegistro(registro);
  document.getElementById('form-registro').reset();
});

// Mostra ou esconde os registros
document.getElementById('show-registros').addEventListener('click', function() {
  registrosContainer.classList.toggle('hidden');
});

// Redireciona para a página de registros
function visualizarRegistros() {
  window.location.href = "registros.html";
}

// Adiciona evento de clique no botão de visualizar registros
document.getElementById('btn-registros').addEventListener('click', visualizarRegistros);


