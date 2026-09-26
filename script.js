function responder(mensagem) {
    mensagem = mensagem.toLowerCase();

    if (mensagem.includes("preço") || mensagem.includes("preco")) {
        return "Nossos serviços possuem preços personalizados. 😊";
    }

    if (mensagem.includes("serviço") || mensagem.includes("servicos")) {
        return "Oferecemos criação de sites, landing pages e automações.";
    }

    if (mensagem.includes("horário") || mensagem.includes("horario")) {
        return "Nosso atendimento funciona de segunda a sexta, das 8h às 18h.";
    }

    if (mensagem.includes("atendente")) {
        return "Claro! Você pode falar com um atendente pelo WhatsApp.";
    }

    if (
        mensagem.includes("oi") ||
        mensagem.includes("olá") ||
        mensagem.includes("ola")
    ) {
        return "Olá! 👋 Como posso ajudar?";
    }

    return "Desculpe, ainda não entendi. Tente perguntar sobre preços, serviços ou horário.";
}


function enviarMensagem() {

    const campo = document.getElementById("mensagem");

    const texto = campo.value.trim();

    if (texto === "") {
        return;
    }

    adicionarMensagem(texto, "usuario");

    const resposta = responder(texto);

    setTimeout(function () {
        adicionarMensagem(resposta, "bot");
    }, 500);

    campo.value = "";
}


function adicionarMensagem(texto, tipo) {

    const chat = document.getElementById("chat");

    const mensagem = document.createElement("div");

    mensagem.classList.add("mensagem", tipo);

    mensagem.textContent = texto;

    chat.appendChild(mensagem);

    chat.scrollTop = chat.scrollHeight;
}


function perguntaRapida(pergunta) {

    adicionarMensagem(pergunta, "usuario");

    const chat = document.getElementById("chat");

    const digitando = document.createElement("div");

    digitando.classList.add("mensagem", "bot");

    digitando.textContent = "🤖 Digitando...";

    chat.appendChild(digitando);

    chat.scrollTop = chat.scrollHeight;

    setTimeout(function () {

        digitando.textContent = responder(pergunta);

    }, 1000);
}


function limparConversa() {

    const chat = document.getElementById("chat");

    chat.innerHTML = `
        <div class="mensagem bot">
            Olá! 👋 Como posso ajudar você?
        </div>
    `;
}
