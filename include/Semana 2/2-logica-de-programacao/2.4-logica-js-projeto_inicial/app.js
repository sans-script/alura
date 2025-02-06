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