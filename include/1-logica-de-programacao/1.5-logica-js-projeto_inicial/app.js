console.log("Boas vindas!");

let nome = "Alex";
alert(`Olá, ${nome}!`);

let linguagemFavorita = prompt(
  "Qual é a sua linguagem de programação favorita?"
);
alert(`Sua linguagem favorita é ${linguagemFavorita}`);

let valor1 = 12;
let valor2 = 12;
let soma = parseInt(valor1) + parseInt(valor2);
let resultado1 = soma;
console.log(`O soma de ${valor1} e ${valor2} é igua à ${resultado1}`);

let valor3 = 24;
let valor4 = 12;
let subtracao = parseInt(valor3) - parseInt(valor4);
let resultado2 = subtracao;
console.log(`A diferença entre ${valor3} e ${valor4} é igua à ${resultado2}`);

let idade = prompt("Qual é a sua idade?");
if (idade < 18) {
  alert("Você é menor de idade");
} else {
  alert("Você é maior de idade");
}

let numero = prompt("Digite um número");
if (numero < 0) {
  alert("O número é negativo");
} else if (numero > 0) {
  alert("O número é positivo");
}

let n = 1;
while (n < 11) {
  console.log(n);
  n++;
}

let nota = 0;
if (nota >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

let numeroAleatorio0 = Math.random();
console.log(numeroAleatorio0);

let numeroAleatorio1 = parseInt(Math.random() * 10 + 1);
console.log(numeroAleatorio1);

let numeroAleatorio2 = parseInt(Math.random() * 1000 + 1);
console.log(numeroAleatorio2);
