## Desafios

1. Adicione uma verificação para garantir que a quantidade inserida pelo usuário seja um número positivo. Se o valor não for válido, exiba uma mensagem de erro adequada.

```javascript
function verificarQuantidade() {
  const quantidade = document.getElementById("qtd").value;
  if (quantidade <= 0) {
    alert("Por favor, insira um número positivo.");
  } else {
    // Código para prosseguir com a compra
  }
}

verificarQuantidade();
```

2. Crie uma função que aceite uma string como parâmetro, utilize a função `parseInt` para converter essa string em um número inteiro e retorne o resultado.

```javascript
function converterParaInteiro(str) {
  return parseInt(str, 10);
}

console.log(converterParaInteiro("123"));
```

3. Escreva um programa de calculadora simples com funções separadas para adição, subtração, multiplicação e divisão. Utilize um bloco condicional para determinar qual função executar com base em uma variável que representa a operação desejada.

```javascript
function adicionar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "Erro: Divisão por zero";
  }
  return a / b;
}

function calculadora(a, b, operacao) {
  switch (operacao) {
    case "adicao":
      return adicionar(a, b);
    case "subtracao":
      return subtrair(a, b);
    case "multiplicacao":
      return multiplicar(a, b);
    case "divisao":
      return dividir(a, b);
    default:
      return "Operação inválida";
  }
}

console.log(calculadora(10, 5, "adicao"));
```

4. Implemente uma função que aceite um número como parâmetro e utilize um bloco condicional para determinar se o número é par ou ímpar.

```javascript
function verificarParidade(numero) {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

console.log(verificarParidade(4));
```

5. Crie uma função que converta a temperatura de Celsius para Fahrenheit e vice-versa. Utilize uma variável para indicar a escala desejada e um bloco condicional para determinar qual conversão realizar.

```javascript
function converterTemperatura(temperatura, escala) {
  if (escala === "Celsius") {
    return (temperatura * 9) / 5 + 32 + "°F"; // Celsius para Fahrenheit
  } else if (escala === "Fahrenheit") {
    return ((temperatura - 32) * 5) / 9 + "°C"; // Fahrenheit para Celsius
  } else {
    return "Escala inválida";
  }
}

console.log(converterTemperatura(0, "Fahrenheit"));
```
