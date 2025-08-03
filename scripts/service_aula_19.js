function inserirLog() {
  const usuario = document.getElementById('usuario').value.trim();
  const acao = document.getElementById('acao').value.trim();
  const data = document.getElementById('data').value;

  if (!usuario || !acao || !data) {
    alert("Preencha todos os campos!");
    return;
  }

  const log = { usuario, acao, data };
  const logs = JSON.parse(localStorage.getItem('logs') || '[]');
  logs.push(log);
  localStorage.setItem('logs', JSON.stringify(logs));

  alert("Log inserido com sucesso!");
  document.getElementById('usuario').value = '';
  document.getElementById('acao').value = '';
  document.getElementById('data').value = '';
  listarLogs();
}

function listarLogs() {
  const logs = JSON.parse(localStorage.getItem('logs') || '[]');
  const ul = document.getElementById('todosLogs');
  ul.innerHTML = '';
  logs.forEach(log => {
    const li = document.createElement('li');
    li.textContent = `${log.usuario} - ${log.acao} - ${new Date(log.data).toLocaleString()}`;
    ul.appendChild(li);
  });
}

function buscarLog() {
  const termo = document.getElementById('busca').value.toLowerCase();
  const logs = JSON.parse(localStorage.getItem('logs') || '[]');
  const resultados = logs.filter(log =>
    log.usuario.toLowerCase().includes(termo) ||
    log.acao.toLowerCase().includes(termo)
  );

  const ul = document.getElementById('resultadoLogs');
  ul.innerHTML = '';

  if (resultados.length === 0) {
    ul.innerHTML = '<li>Nenhum log encontrado.</li>';
    return;
  }

  resultados.forEach(log => {
    const li = document.createElement('li');
    li.textContent = `${log.usuario} - ${log.acao} - ${new Date(log.data).toLocaleString()}`;
    ul.appendChild(li);
  });
}

// Inicializa com a lista carregada
window.onload = listarLogs;
