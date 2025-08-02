// Código para o script de Login - Aula 19 do Curso Full Stack 2025
// Este script é responsável por gerenciar o login do usuário
var login = document.getElementById("login");

login.addEventListener("click", function() {

    // Obtém os valores dos campos de entrada de usuário e senha
    var user = document.getElementById("userLogin").value;
    var password = document.getElementById("passwordLogin").value;

    // Obtém os dados do usuário e senha registrados no sessionStorage
    var userRegister = sessionStorage.getItem("user");
    var passwordRegister = sessionStorage.getItem("password");

    // Verifica se o usuário e a senha correspondem aos dados registrados
    if (user === userRegister && password === passwordRegister) {
        alert("Login realizado com sucesso!");
        // Redireciona para a página principal após o login
        window.location.href = "../pages/allowed_aula_19.html";
    } else {
        alert("Usuário ou senha incorretos.");
    }
});