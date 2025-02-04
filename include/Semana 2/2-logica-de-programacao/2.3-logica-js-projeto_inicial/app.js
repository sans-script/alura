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