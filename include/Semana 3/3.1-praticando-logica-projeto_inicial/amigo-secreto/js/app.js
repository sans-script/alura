function adicionar() {
  let amigo = document.getElementById("nome-amigo");
  let lista = document.getElementById("lista-amigos");

  if (lista.textContent == "") {
    lista.textContent = amigo.value;
  } else {
    lista.textContent += ", " + amigo.value;
  }
}

function sortear() {
  embaralhar(listaAmigos);
}

function embaralhar(lista) {
  for (let indice = lista.length - 1; indice > 0; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * (indice + 1));

    // Atribuição via destrucuring
    [lista[indice - 1], lista[indiceAleatorio]] = [
      lista[indiceAleatorio],
      lista[indice - 1],
    ];
  }
}
