let amigos = [];

function adicionar() {
  let amigo = document.getElementById("nome-amigo");
  let lista = document.getElementById("lista-amigos");
  amigos.push(amigo.value);
  atualizarListaVisual();
  amigo.value = "";
}

function atualizarListaVisual() {
  let lista = document.getElementById("lista-amigos");
  lista.innerHTML = ""; 

  amigos.forEach((amigo, index) => {
    let amigoElement = document.createElement("span");
    amigoElement.textContent = amigo;
    amigoElement.style.cursor = "pointer";
    amigoElement.title = "Remover Amigo";
    amigoElement.onclick = () => removerAmigo(index);
    lista.appendChild(amigoElement);

    if (index < amigos.length - 1) {
      lista.innerHTML += ", ";
    }
  });
}

function removerAmigo(index) {
  amigos.splice(index, 1);
  atualizarListaVisual();
}

function sortear() {
  embaralha(amigos);
  let sorteio = document.getElementById("lista-sorteio");
  sorteio.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    if (i == amigos.length - 1) {
      sorteio.innerHTML += amigos[i] + " --> " + amigos[0] + "<br>";
    } else {
      sorteio.innerHTML += amigos[i] + " --> " + amigos[i + 1] + "<br>";
    }
  }
}

function embaralha(lista) {
  for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);

    // Atribuição via destrucuring
    [lista[indice - 1], lista[indiceAleatorio]] = [
      lista[indiceAleatorio],
      lista[indice - 1],
    ];
  }
}

function reiniciar() {
  amigos = [];
  document.getElementById("lista-amigos").innerHTML = "";
  document.getElementById("lista-sorteio").innerHTML = "";
}
