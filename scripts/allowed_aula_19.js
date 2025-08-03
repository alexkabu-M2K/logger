
var greeting = document.getElementById("greeting");

var name = sessionStorage.getItem("name");

greeting.innerText = "Olá, " + sessionStorage.getItem("name") + "!";

// Exibe uma mensagem de saudação ao usuário após o login

