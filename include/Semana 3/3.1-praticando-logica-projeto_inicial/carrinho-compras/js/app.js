let totalGeral;
limpar();

function adicionar() {
  // Recuperar o valor do produto, quantidade e valor
  let produto = document.getElementById("produto").value;
  let nomeProduto = produto.split("-")[0];
  let valorUnitario = produto.split("R$")[1];
  let quantidade = document.getElementById("quantidade").value;

  // alert(nomeProduto);
  // alert(quantidade.value);
  // alert(valorUnitario);

  if (!produto || quantidade <= 0) {
    alert(
      "Por favor, selecione um produto válido e insira uma quantidade válida."
    );
    return;
  }

  // Calcular o preço, o nosso subtotal
  let preco = quantidade * valorUnitario;
  let carrinho = document.getElementById("lista-produtos");

  // Adicionar o produto no carrinho
  carrinho.innerHTML =
    carrinho.innerHTML +
    `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`;

  //alert(preco);

  // Atualizar o valor total
  totalGeral = totalGeral + preco;
  let campoTotal = document.getElementById("valor-total");
  campoTotal.textContent = `R$${totalGeral}`;
  document.getElementById("quantidade").value = 0;
}

function limpar() {
  document.getElementById("lista-produtos").innerHTML = "";
  document.getElementById("valor-total").textContent = `R$ 0`;
  totalGeral = 0;
  document.getElementById("quantidade").value = 0;
}
