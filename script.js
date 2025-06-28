let botao = document.querySelector("#botao");
botao.style.background="orange"


botao.addEventListener("click", function() {
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = "Saudações! Bem vindo(a) ao site!";
});