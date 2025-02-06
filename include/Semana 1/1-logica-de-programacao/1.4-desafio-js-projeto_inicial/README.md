## Desafios

1. Crie um contador que comece em 1 e vá até 10 usando um loop `while`. Mostre cada número.

2. Crie um contador que começa em 10 e vá até 0 usando um loop `while`. Mostre cada número.

3. Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop `while` no console do navegador.

4. Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop `while` no console do navegador.
```javascript
// Desafio 1
let contador1 = 1;
while (contador1 <= 10) {
    console.log(contador1);
    contador1++;
}

// Desafio 2
let contador2 = 10;
while (contador2 >= 0) {
    console.log(contador2);
    contador2--;
}

// Desafio 3
let numero3 = prompt("Digite um número para a contagem regressiva:");
numero3 = parseInt(numero3);
while (numero3 >= 0) {
    console.log(numero3);
    numero3--;
}

// Desafio 4
let numero4 = prompt("Digite um número para a contagem progressiva:");
numero4 = parseInt(numero4);
let contador4 = 0;
while (contador4 <= numero4) {
    console.log(contador4);
    contador4++;
}
```