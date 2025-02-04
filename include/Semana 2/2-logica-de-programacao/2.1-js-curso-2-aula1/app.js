// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Jogo do Número Secreto";

// let paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "Escolha um número entre 1 e 10";

let tentativas = 1;

function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * 10 + 1);
}

let numeroSecreto = gerarNumeroAleatorio();

function limparCampo() {
  document.querySelector("input").value = "";
}

function exibirTextoInicial() {
  exibirTextoNaTela("h1", "Jogo do Número Secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  tentativas = 1;
  limparCampo();
  exibirTextoInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

function exibirTextoNaTela(tag, texto) {
  let paragrafo = document.querySelector(tag);
  paragrafo.innerHTML = texto;
}

exibirTextoNaTela("h1", "Jogo do Número Secreto");

exibirTextoNaTela("p", "Escolha um número entre 1 e 10");

function verificarChute() {
  let chute = document.querySelector("input").value;
  if (numeroSecreto == chute) {
    exibirTextoNaTela("h1", "Parabéns! Você acertou!");
    let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Você acertou o número secreto! com ${tentativas} ${palavraTentativas}`;
    exibirTextoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O número secreto é menor");
    } else {
      exibirTextoNaTela("p", "O número secreto é maior");
    }
    tentativas++;
    limparCampo();
  }
}
