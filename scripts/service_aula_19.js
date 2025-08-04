let logs = [];

function inserirLog() {
  const nome = document.getElementById("inputNome").value.trim();
  const acao = document.getElementById("inputAcao").value.trim();
  const dataHora = document.getElementById("inputDataHora").value.trim();

  if (!nome || !acao || !dataHora) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  logs.push({ nome, acao, dataHora });
  alert("Log inserido com sucesso!");
  limparCampos();
  atualizarLista();
}

function limparCampos() {
  document.getElementById("inputNome").value = '';
  document.getElementById("inputAcao").value = '';
  document.getElementById("inputDataHora").value = '';
}

function buscarLog() {
  const termo = document.getElementById("inputBusca").value.toLowerCase();
  const resultados = logs.filter(log => 
    log.nome.toLowerCase().includes(termo) || 
    log.email.toLowerCase().includes(termo)
  );

  exibirResultados(resultados);
}

function exibirResultados(lista) {
  const divResultados = document.getElementById("listaLogs");
  divResultados.innerHTML = "";

  if (lista.length === 0) {
    divResultados.innerHTML = "<p>Nenhum log encontrado.</p>";
    return;
  }

  lista.forEach((log, index) => {
    const div = document.createElement("div");
    div.className = "log-item";
    div.innerHTML = `
      <span>${log.nome} - ${log.acao} - ${log.dataHora}</span>
      <button class="excluir" onclick="excluirLog(${index})">Excluir</button>
    `;
    divResultados.appendChild(div);
  });
}

function excluirLog(index) {
  const confirmar = confirm("Tem certeza que deseja excluir este log?");
  if (confirmar) {
    logs.splice(index, 1);
    atualizarLista();
  }
}

function limparResultados() {
  document.getElementById("inputBusca").value = '';
  document.getElementById("listaLogs").innerHTML = '';
}

function atualizarLista() {
  exibirResultados(logs);
}

function sairDoSistema() {
  window.location.href = "../index_aula_19.html"; // Retorna ao menu principal
  alert("Você saiu do System Logger.");
}
