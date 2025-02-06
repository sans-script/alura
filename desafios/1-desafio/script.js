// Desafio 1

// 1. Crie uma variável chamada `nome` e atribua seu nome a ela. Em seguida, exiba o valor dessa variável.
let nome = "Alexandre";
console.log(nome);

// 2. Crie duas variáveis: uma chamada `idade` e outra chamada `altura`. Atribua à `idade` o valor 25 e à `altura` o valor 1.75. Exiba ambos os valores.
let idade = 25;
let altura = 1.75;
console.log(idade, altura);

// 3. Crie uma variável chamada `preco` com o valor 50 e uma variável `desconto` com o valor 0.2 (20%). Calcule o preço com desconto e exiba o valor final.
let preco = 50;
let desconto = 0.2;
let precoComDesconto = preco * (1 - desconto);
console.log(precoComDesconto);

// 4. Crie uma variável chamada `temperatura` e atribua o valor 30. Se a temperatura for maior que 25, exiba a mensagem "Está calor!". Caso contrário, exiba "Está fresco!".
let temperatura = 30;
if (temperatura > 25) {
  console.log("Está calor!");
} else {
  console.log("Está fresco!");
}

// 5. Crie uma variável `idade` e atribua um valor. Se a pessoa for maior de idade (18 ou mais), exiba "Você é maior de idade". Caso contrário, exiba "Você é menor de idade".
idade = 20;
if (idade >= 18) {
  console.log("Você é maior de idade");
} else {
  console.log("Você é menor de idade");
}

// 6. Crie uma variável chamada `nota` e atribua um valor entre 0 e 10. Se a nota for maior ou igual a 7, exiba "Aprovado". Se for entre 5 e 6, exiba "Recuperação". Caso contrário, exiba "Reprovado".
let nota = 8;
if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}

// 7. Crie duas variáveis, `numero1` e `numero2`, e atribua valores a elas. Verifique se os dois números são iguais e, caso sejam, exiba "Os números são iguais". Caso contrário, exiba "Os números são diferentes".
let numero1 = 10;
let numero2 = 20;
if (numero1 === numero2) {
  console.log("Os números são iguais");
} else {
  console.log("Os números são diferentes");
}

// 8. Crie uma variável chamada `nome` e uma variável chamada `idade`. Exiba a mensagem "Olá, meu nome é [nome] e eu tenho [idade] anos", utilizando concatenação.
nome = "Alexandre";
idade = 18;
console.log("Olá, meu nome é " + nome + " e eu tenho " + idade + " anos");

// 9. Crie um loop que imprima os números de 1 a 10 na tela.
let n = 1;
while (n <= 10) {
  console.log(n);
  n++;
}

// 10. Crie um loop que peça ao usuário para digitar um número até que ele digite o número 5.
let numero = 0;
while (numero != 5) {
  numero = prompt("Digite um número: "); // Nota: Executar no Navegador
}

// 11. Crie um loop que imprima a tabuada do número 7, de 1 a 10.
let fator = 1;
while (fator <= 10) {
  console.log(`7 x ${fator} = ${7 * fator}`);
  fator++;
}

// 12. Crie um loop que exiba todos os números pares de 0 a 20.
let numeroPar = 0;
while (numeroPar <= 20) {
  if (numeroPar % 2 === 0) {
    console.log(numeroPar);
  }
  numeroPar++;
}

// 13. Escreva um código que calcule a área de um círculo. Utilize uma função para realizar o cálculo. A função deve receber o raio como parâmetro e retornar a área.
function calcularAreaCirculo(raio) {
  return Math.PI * raio * raio;
}
console.log(calcularAreaCirculo(5));

// 14. Comente seu código explicando o que cada parte faz. Crie um programa simples que calcule a soma de dois números e imprima o resultado.
// Declaração das variáveis que armazenam os números a serem somados
let numeroA = 10;
let numeroB = 20;

// Cálculo da soma dos dois números e armazenamento do resultado na variável soma
let soma = numeroA + numeroB;

// Impressão do resultado no console
console.log(soma);

// 15. Refatore o código abaixo para que seja mais legível, usando boas práticas de nomenclatura e separando o código em funções:
function somarNumeros(a, b) {
  return a + b;
}
let resultado = somarNumeros(10, 20);
console.log(resultado);
