## Desafios

1. Criar uma função que exibe "Olá, mundo!" no console.

2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

4. Criar uma função que recebe três números como parâmetros e retorna a média deles.

5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.

```javascript
// Desafio 1
function exibirOlaMundo() {
  console.log("Olá, mundo!");
}

// Desafio 2
function exibirOlaNome(nome) {
  console.log(`Olá, ${nome}!`);
}

// Desafio 3
function dobrarNumero(numero) {
  return numero * 2;
}

// Desafio 4
function calcularMedia(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

// Desafio 5
function maiorNumero(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

// Desafio 6
function multiplicarPorEleMesmo(numero) {
  return numero * numero;
}

// Chamando as funções
exibirOlaMundo();
exibirOlaNome("Sans");
console.log(dobrarNumero(5));
console.log(calcularMedia(4, 8, 6));
console.log(maiorNumero(10, 20));
console.log(multiplicarPorEleMesmo(7));
```
