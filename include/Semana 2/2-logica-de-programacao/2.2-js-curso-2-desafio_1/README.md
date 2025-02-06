# Desafios

1. Altere o conteúdo da tag `h1` com `document.querySelector` e atribua o seguinte texto: **Hora do Desafio**.

2. Crie uma função que exiba no console a mensagem **O botão foi clicado** sempre que o botão **Console** for pressionado.

3. Crie uma função que exiba um alerta com a mensagem: **Eu amo JS**, sempre que o botão **Alerta** for pressionado.

4. Crie uma função que é executada quando o botão **Prompt** é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: **Estive em {cidade} e lembrei de você**.

5. Ao clicar no botão **Soma**, peça 2 números inteiros e exiba o resultado da soma em um alerta.
```javascript
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
```