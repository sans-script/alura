# Lógica de Programação: Mergulhe em Programação com JavaScript

Este projeto faz parte do curso de Lógica de Programação da Alura. O objetivo é aprender os conceitos fundamentais de programação através de exercícios práticos e desafios.

## O que é Lógica de Programação?

Lógica de programação é a técnica de encadear pensamentos para atingir determinado objetivo. Em programação, isso significa criar algoritmos que resolvem problemas de forma eficiente. A lógica de programação é essencial para qualquer desenvolvedor, pois é a base para aprender qualquer linguagem de programação.

## Estrutura do Projeto

O projeto está dividido em várias seções, cada uma com um conjunto de desafios e exercícios para praticar a lógica de programação. Abaixo estão alguns exemplos de código que você encontrará neste projeto:

### Exemplo 1: Jogo do Número Secreto

```javascript
let numeroSecreto = parseInt(Math.random() * 11);
let tentativas = 1;
let chute;

alert("Boas vindas ao jogo do número secreto");

while (chute != numeroSecreto) {
    let chute = prompt("Escolha um número entre 1 e 10");
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert("O número secreto é menor");
        } else {
            alert("O número secreto é maior");
        }
    }
    tentativas++;
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(
    `O número secreto era ${numeroSecreto} e você acertou com apenas ${tentativas} ${palavraTentativa}`
);
```

### Exemplo 2: Desafios de Lógica

```javascript
// Desafio 1
let diaSemana = prompt("Qual é o dia da semana?");
if (diaSemana === "Sábado" || diaSemana === "Domingo") {
        alert("Bom fim de semana!");
} else {
        alert("Boa semana!");
}

// Desafio 2
let numero = prompt("Digite um número:");
if (numero >= 0) {
        alert("O número é positivo.");
} else {
        alert("O número é negativo.");
}

// Desafio 3
let pontuacao = prompt("Digite sua pontuação:");
if (pontuacao >= 100) {
        alert("Parabéns, você venceu!");
} else {
        alert("Tente novamente para ganhar.");
}

// Desafio 4
let saldo = 1500.00; // Exemplo de saldo
alert(`Seu saldo é R$${saldo.toFixed(2)}`);

// Desafio 5
let nome = prompt("Qual é o seu nome?");
alert(`Bem-vindo, ${nome}!`);
```

## Documentação

Para mais informações sobre JavaScript e lógica de programação, consulte os seguintes links:

- [Documentação do JavaScript](https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Scripting/What_is_JavaScript)
- [Guia de JavaScript: o que é e como aprender a linguagem mais popular do mundo?](https://cursos.alura.com.br/course/logica-programacao-mergulhe-programacao-javascript/task/137041)

A leitura da documentação oficial ajuda a compreender melhor a linguagem e suas funcionalidades, facilitando a escrita de códigos mais limpos, claros e seguros.