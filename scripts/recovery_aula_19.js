// Código para a recuperação de Login - Aula 19 do Curso Full Stack 2025
// Este script é responsável por gerenciar a recuperação de senha do usuário

function confirmarSenha() {
  const usuario = document.getElementById('usuario').value;
  const novaSenha = document.getElementById('novaSenha').value;
  const confirmaSenha = document.getElementById('confirmaSenha').value;
  const mensagemErro = document.getElementById('mensagemErro');

  sessionStorage.setItem("usuario", usuario);
  sessionStorage.setItem("novaSenha", novaSenha);
  sessionStorage.setItem("confirmaSenha", confirmaSenha);


// Verifica se os campos de entrada estão vazios
  if (usuario === '' || novaSenha === '' || confirmaSenha === '') {
        mensagemErro.textContent = 'Todos os campos devem ser preenchidos.';
        return;
  }
  // Verifica se a senha tem pelo menos 6 caracteres
  if (novaSenha.length < 6) {
      mensagemErro.textContent = 'A nova senha deve ter pelo menos 6 caracteres.';
      return;
  }
  
  // Verifica se as senhas são iguais
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

// Função para mostrar senha
var show = document.getElementById("show");
show.addEventListener("change", function() {

  var passwordLogin = document.getElementById("novaSenha");

  var type = passwordLogin.getAttribute("type");

  if(type === "password") {
    passwordLogin.setAttribute("type", "text");
  } else {
    passwordLogin.setAttribute("type", "password");
  }
  show.classList.toggle("active");

    var passwordLogin = document.getElementById("confirmaSenha");

  var type = passwordLogin.getAttribute("type");

  if(type === "password") {
    passwordLogin.setAttribute("type", "text");
  } else {
    passwordLogin.setAttribute("type", "password");
  }
  show.classList.toggle("active");

});

// Função para cancelar a operação de recuperação de senha
function cancelarOperacao() {
  window.location.href = "../index_aula_19.html"; 
  // Redireciona para a página inicial
}
document.getElementById('login').addEventListener('click', confirmarSenha);
document.getElementById('cancel').addEventListener('click', cancelarOperacao);