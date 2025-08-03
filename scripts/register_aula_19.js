
var register = document.getElementById("register");

register.addEventListener("click", function() {

    var name = document.getElementById("name").value;
    var user = document.getElementById("userRegister").value;
    var password = document.getElementById("passwordRegister").value;

    sessionStorage.setItem("name", name);
    sessionStorage.setItem("user", user);
    sessionStorage.setItem("password", password);

    // Exibe uma mensagem de sucesso
    alert("Cadastro realizado com sucesso!");
    
    // Redireciona para a página de login após o cadastro

    window.location.href = "../pages/login_aula_19.html";
});