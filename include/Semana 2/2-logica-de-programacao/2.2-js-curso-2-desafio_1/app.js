// Desafio 1
document.querySelector('h1').textContent = 'Hora do Desafio';

// Desafio 2
function exibirMensagemConsole() {
    console.log('O botão foi clicado');
}
document.querySelectorAll('.button')[0].onclick = exibirMensagemConsole;

// Desafio 3
function exibirAlerta() {
    alert('Eu amo JS');
}
document.querySelectorAll('.button')[1].onclick = exibirAlerta;

// Desafio 4
function perguntarCidade() {
    const cidade = prompt('Qual é o nome de uma cidade do Brasil?');
    alert(`Estive em ${cidade} e lembrei de você`);
}
document.querySelectorAll('.button')[2].onclick = perguntarCidade;

// Desafio 5
function somarNumeros() {
    const num1 = parseInt(prompt('Digite o primeiro número inteiro:'));
    const num2 = parseInt(prompt('Digite o segundo número inteiro:'));
    alert(`O resultado da soma é: ${num1 + num2}`);
}
document.querySelectorAll('.button')[3].onclick = somarNumeros;