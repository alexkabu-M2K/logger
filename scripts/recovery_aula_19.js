// Código para a recuperação de Login - Aula 19 do Curso Full Stack 2025
// Este script é responsável por gerenciar a recuperação de senha do usuário

function confirmarSenha() {
  const novaSenha = document.getElementById('novaSenha').value;
  const confirmaSenha = document.getElementById('confirmaSenha').value;
  const mensagemErro = document.getElementById('mensagemErro');

  sessionStorage.setItem("novaSenha", novaSenha);
  sessionStorage.setItem("confirmaSenha", confirmaSenha);

  if (novaSenha !== confirmaSenha) {
    alert("As senhas não coincidem!");
    return;

  } else {
    mensagemErro.textContent = "";
    alert("Senha alterada com sucesso!");

    sessionStorage.setItem("password", novaSenha);

    // Redireciona para a página de Login
    window.location.href = "../pages/login_aula_19.html";

    // Limpa os dados de sessão relacionados à senha
    sessionStorage.removeItem("novaSenha");
    sessionStorage.removeItem("confirmaSenha");

    document.getElementById("formSenha").reset();

    return;
  }
}

function cancelarOperacao() {
  window.location.href = "../index_aula_19.html"; // Redireciona para a página inicial
}
document.getElementById('login').addEventListener('click', confirmarSenha);
document.getElementById('cancel').addEventListener('click', cancelarOperacao);