// Código para o script de Login - Aula 19 do Curso Full Stack 2025
// Este script é responsável por gerenciar o login do usuário

// Sequencia de login

var login = document.getElementById("login");

login.addEventListener("click", function() {

    // Obtém os valores dos campos de entrada de usuário e senha
    var user = document.getElementById("userLogin").value;
    var password = document.getElementById("passwordLogin").value;

    // Obtém os dados do usuário e senha registrados no sessionStorage
    var userRegister = sessionStorage.getItem("user");
    var passwordRegister = sessionStorage.getItem("password");

    // Verifica se os campos de entrada estão vazios
    if (user === '' || password === '') {
        alert("Todos os campos devem ser preenchidos.");
        return;
    }

    // Verifica se o usuário e a senha estão registrados
    if (userRegister === null || passwordRegister === null) {
        alert("Usuário ou senha não registrados.");
        return;
    }

    
    // Verifica se o usuário e a senha correspondem aos dados registrados
    if (user === userRegister && password === passwordRegister) {
        // Exibe uma mensagem de sucesso
        alert("Login realizado com sucesso!");
        // Redireciona para a página principal após o login
        window.location.href = "../pages/allowed_aula_19.html";

        return;
    } 
    alert("Usuário ou senha incorretos.");

});

// Exibir a Senha

var show = document.getElementById("show");
show.addEventListener("change", function() {

  var passwordLogin = document.getElementById("passwordLogin");

  var type = passwordLogin.getAttribute("type");

  if(type === "password") {
    passwordLogin.setAttribute("type", "text");
  } else {
    passwordLogin.setAttribute("type", "password");
  }
  show.classList.toggle("active");

});

// Função para cancelar a operação de login
function cancelarOperacao() {
  window.location.href = "../index_aula_19.html"; 
  // Retorna ao menu principal
  alert("Você saiu do System Logger.");
}

