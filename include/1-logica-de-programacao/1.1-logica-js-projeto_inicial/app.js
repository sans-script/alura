// Jogo do Número Secreto

// Regras de Negócio:
// 1. Geração do Número Secreto: O número secreto é gerado aleatoriamente entre 0 e 10.
// 2. Interação com o Usuário: O usuário é solicitado a adivinhar o número secreto através de um prompt.
// 3. Feedback ao Usuário: O usuário recebe feedback se o chute foi maior ou menor que o número secreto.
// 4. Contagem de Tentativas: O número de tentativas é contado e exibido ao final do jogo.
// 5. Finalização do Jogo: O jogo termina quando o usuário acerta o número secreto, e uma mensagem final é exibida com o número de tentativas usadas.

// Gera um número aleatório entre 0 e 10 e converte para inteiro
let numeroSecreto = parseInt(Math.random() * 11);

// Inicializa o contador de tentativas
let tentativas = 1;

// Exibe uma mensagem de boas-vindas ao usuário
alert("Boas vindas ao jogo do número secreto");

// Inicia um loop que continuará até que o usuário acerte o número secreto
while (chute != numeroSecreto) {
  // Solicita ao usuário que escolha um número entre 1 e 10
  let chute = prompt("Escolha um número entre 1 e 10");

  // Verifica se o chute do usuário é igual ao número secreto
  if (chute == numeroSecreto) {
    // Se o usuário acertar, sai do loop
    break;
  } else {
    // Se o chute for maior que o número secreto, informa ao usuário
    if (chute > numeroSecreto) {
      alert("O número secreto é menor");
    } else {
      // Se o chute for menor que o número secreto, informa ao usuário
      alert("O número secreto é maior");
    }
  }
  // Incrementa o contador de tentativas
  tentativas++;
}

// Determina a palavra correta para "tentativa" no plural ou singular
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

// Exibe uma mensagem final informando o número secreto e o número de tentativas
alert(
  `O número secreto era ${numeroSecreto} e você acertou com apenas ${tentativas} ${palavraTentativa}`
);
