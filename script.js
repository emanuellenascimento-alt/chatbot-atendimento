function perguntaRapida(pergunta) {

    adicionarMensagem(pergunta, "usuario");

    const chat = document.getElementById("chat");

    const digitando = document.createElement("div");

    digitando.classList.add("mensagem", "bot");

    digitando.textContent = "🤖 Digitando...";

    chat.appendChild(digitando);

    chat.scrollTop = chat.scrollHeight;

    setTimeout(function() {

        digitando.textContent = responder(pergunta);

    }, 1000);
}
