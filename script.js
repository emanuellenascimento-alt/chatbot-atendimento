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
    return "Claro! Clique no botão abaixo para falar com um atendente.";
}
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

    if (
        tipo === "bot" &&
        texto.includes("Clique no botão abaixo")
    ) {

        const botao = document.createElement("button");

        botao.textContent = "💬 Falar com atendente";

        botao.style.marginTop = "8px";
        botao.style.padding = "10px 15px";
        botao.style.border = "none";
        botao.style.borderRadius = "8px";
        botao.style.background = "#25D366";
        botao.style.color = "white";
        botao.style.cursor = "pointer";

        botao.onclick = function () {

            window.open(
                "https://wa.me/5500000000000",
                "_blank"
            );

        };

        chat.appendChild(botao);
    }

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
