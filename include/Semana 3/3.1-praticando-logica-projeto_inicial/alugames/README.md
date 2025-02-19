## Desafios

1. No projeto Alugames, adicione uma confirmação ao devolver um jogo, solicitando ao usuário que confirme a devolução antes que ela seja concluída. Isso pode ajudar a evitar devoluções acidentais.

```javascript
function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector(".dashboard__item__img");
    let botao = gameClicado.querySelector(".dashboard__item__button");

    if (imagem.classList.contains("dashboard__item__img--rented")) {
        if (confirm("Você tem certeza que deseja devolver este jogo?")) {
            imagem.classList.remove("dashboard__item__img--rented");
            botao.classList.remove("dashboard__item__button--return");
            botao.textContent = "Alugar";
        }
    } else {
        imagem.classList.add("dashboard__item__img--rented");
        botao.textContent = "Devolver";
        botao.classList.add("dashboard__item__button--return");
    }
}
```

2. No projeto Alugames, crie uma função para imprimir no console a informação sobre quantos jogos foram alugados.

```javascript
function contarJogosAlugados() {
    let jogosAlugados = document.querySelectorAll(".dashboard__item__img--rented").length;
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}
```

3. Crie um programa que verifica se uma palavra ou frase é um palíndromo.

```javascript
function isPalindromo(texto) {
    let textoLimpo = texto.replace(/[\W_]/g, "").toLowerCase();
    let textoReverso = textoLimpo.split("").reverse().join("");
    return textoLimpo === textoReverso;
}

console.log(isPalindromo("A man a plan a canal Panama")); // true
console.log(isPalindromo("hello")); // false
```

4. Crie um programa com uma função que receba três números como argumentos e os retorne em ordem crescente. Exiba os números ordenados.

```javascript
function ordenarNumeros(a, b, c) {
    let numeros = [a, b, c];
    numeros.sort((x, y) => x - y);
    return numeros;
}

console.log(ordenarNumeros(3, 1, 2)); // [1, 2, 3]
console.log(ordenarNumeros(10, 5, 8)); // [5, 8, 10]
```