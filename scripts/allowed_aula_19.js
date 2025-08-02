
var greeting = document.getElementById("greeting");

greeting.innerText = `Olá, ${sessionStorage.getItem("name")}!`;

