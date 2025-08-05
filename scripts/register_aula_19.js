// Código para o cadasstro de usuário - Aula 19 do Curso Full Stack 2025
// Este script é responsável por gerenciar o registro de novos usuários

var register = document.getElementById("register");

register.addEventListener("click", function() {

    var name = document.getElementById("name").value;
    var user = document.getElementById("userRegister").value;
    var password = document.getElementById("passwordRegister").value;

    sessionStorage.setItem("name", name);
    sessionStorage.setItem("user", user);
    sessionStorage.setItem("password", password);

    // Verifica se os campos de entrada estão vazios
    if (name === '' || user === '' || password === '') {
        alert("Todos os campos devem ser preenchidos.");
        return;
    }

    // Verifica se o usuário já está registrado
    //if (sessionStorage.getItem("user") !== null) {
    //    alert("Usuário já cadastrado.");
    //    return;
    // }

    // verifica se a senha tem pelo menos 6 caracteres
    if (password.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return;
    }

    // Exibe uma mensagem de sucesso
    alert("Cadastro realizado com sucesso!");
    
    // Redireciona para a página de login após o cadastro
    window.location.href = "../pages/login_aula_19.html";
});

    // Função para sair do sistema
function sairDoSistema() {
  window.location.href = "../index_aula_19.html"; // Retorna ao menu principal
  alert("Você saiu do System Logger.");
}