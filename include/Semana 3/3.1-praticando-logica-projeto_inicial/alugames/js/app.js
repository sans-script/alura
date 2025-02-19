function alterarStatus(id) {
  let gameClicado = document.getElementById(`game-${id}`);
  let imagem = gameClicado.querySelector(".dashboard__item__img");
  let botao = gameClicado.querySelector(".dashboard__item__button");
  //   let nomeJogo = gameClicado.querySelector(".dashboard__item__name");

  //   alert(nomeJogo.textContent);

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

function isPalindromo(texto) {
  let textoLimpo = texto.replace(/[\W_]/g, "").toLowerCase();
  let textoReverso = textoLimpo.split("").reverse().join("");
  return textoLimpo === textoReverso;
}

console.log(isPalindromo("A man a plan a canal Panama")); // true
console.log(isPalindromo("hello")); // false

function ordenarNumeros(a, b, c) {
  let numeros = [a, b, c];
  numeros.sort((x, y) => x - y);
  return numeros;
}

console.log(ordenarNumeros(3, 1, 2)); // [1, 2, 3]
console.log(ordenarNumeros(10, 5, 8)); // [5, 8, 10]
