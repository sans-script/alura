let diaDaSemana = prompt("Qual é o dia da semana?");

if (
  diaDaSemana == "Domingo" ||
  diaDaSemana == "Sábado" ||
  diaDaSemana == "Sexta"
) {
  alert("Bom fim de semana!");
} else {
  alert("Boa semana!");
}

let numero = prompt("Digite um número");

if (numero < 0) {
  alert("O número é negativo");
}
if (numero > 0) {
  alert("O número é positivo");
}
if (numero == 0) {
  alert("O número é zero");
}

let score = 0;
let resposta = prompt("Qual é a capital do Brasil?");
{
  if (resposta == "Brasília") {
    score += 1;
    alert("Parabéns! Você acertou! Score: " + score);
  } else {
    alert("Que pena, você errou!");
  }
}

let saldo = 0;
let deposito = prompt("Digite o valor do depósito:");
{
  saldo += parseInt(deposito);
  alert(`Depósito realizado! Seu saldo é de R$ ${saldo}`);
}

let nome = prompt("Qual é o seu nome?");
alert(`Olá, ${nome}!`);
