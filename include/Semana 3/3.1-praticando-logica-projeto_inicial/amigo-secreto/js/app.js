let amigos = [];

function adicionar() {
  let amigo = document.getElementById("nome-amigo");

  if (amigo.value == "") {
    alert("Digite o nome do amigo!");
    return;
  }

  if (amigos.includes(amigo.value)) {
    alert("Nome já adicionado!");
    return;
  }

  amigos.push(amigo.value);
  atualizarLista();
  amigo.value = "";
}

function atualizarLista() {
  let lista = document.getElementById("lista-amigos");
  lista.innerHTML = "";

  // Itera sobre cada amigo na lista de amigos
  amigos.forEach((amigo, index) => {
    // Cria um elemento span para cada amigo
    let amigoElement = document.createElement("span");
    // Define o texto do elemento span como o nome do amigo
    amigoElement.textContent = amigo;
    // Define o cursor como pointer para indicar que o elemento é clicável
    amigoElement.style.cursor = "pointer";
    // Define o título do elemento span como "Remover Amigo"
    amigoElement.title = "Remover Amigo";
    // Adiciona um evento de clique ao elemento span que chama a função removerAmigo com o índice do amigo
    amigoElement.onclick = () => removerAmigo(index);
    // Adiciona o elemento span à lista de amigos no DOM
    lista.appendChild(amigoElement);

    // Se não for o último amigo na lista, adiciona uma vírgula e um espaço após o nome do amigo
    if (index < amigos.length - 1) {
      lista.innerHTML += ", ";
    }
  });
}

function removerAmigo(index) {
  amigos.splice(index, 1);
  atualizarLista();
}

function sortear() {
  if (amigos.length < 4) {
    alert("Adicione pelo menos quatro amigos!");
    return;
  }

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