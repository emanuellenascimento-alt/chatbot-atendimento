function responder(mensagem) {

    mensagem = mensagem.toLowerCase();

    if (mensagem.includes("preço") || mensagem.includes("preco")) {
        return "Nossos serviços possuem preços personalizados. 😊";
    }

    if (mensagem.includes("serviço") || mensagem.includes("servico")) {
        return "Oferecemos criação de sites, landing pages e automações.";
    }

    if (mensagem.includes("horário") || mensagem.includes("horario")) {
        return "Nosso atendimento funciona de segunda a sexta, das 8h às 18h.";
    }

    if (mensagem.includes("atendente")) {
        return "Claro! Você pode falar com um atendente pelo WhatsApp.";
    }

    if (mensagem.includes("oi") || mensagem.includes("olá") || mensagem.includes("ola")) {
        return "Olá! 👋 Como posso ajudar?";
    }

    return "Desculpe, ainda não entendi. Tente perguntar sobre preços, serviços ou horário.";
}
