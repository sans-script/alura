## Desafios

1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

2. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

3. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

4. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

5. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

6. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

```javascript
// Função para calcular o IMC
function calcularIMC(altura, peso) {
    return peso / (altura * altura);
}
console.log(calcularIMC(1.60, 51));

// Função para calcular o fatorial
function calcularFatorial(numero) {
    if (numero === 0) return 1;
    return numero * calcularFatorial(numero - 1);
}
console.log(calcularFatorial(5));

// Função para converter dólar em reais
function converterDolarParaReal(dolar) {
    const cotacao = 5.76;
    return dolar * cotacao;
}
console.log(converterDolarParaReal(10));

// Função para calcular área e perímetro de uma sala retangular
function calcularSalaRetangular(altura, largura) {
    const area = altura * largura;
    const perimetro = 2 * (altura + largura);
    return { area, perimetro };
}
console.log(calcularSalaRetangular(5, 10));

// Função para calcular área e perímetro de uma sala circular
function calcularSalaCircular(raio) {
    const pi = 3.14;
    const area = pi * raio * raio;
    const perimetro = 2 * pi * raio;
    return { area, perimetro };
}
console.log(calcularSalaCircular(7));

// Função para mostrar a tabuada de um número
function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
mostrarTabuada(6);
```