## Desafios

1. Adicione validações no código para garantir que o usuário só consiga adicionar produtos ao carrinho se tiver selecionado um produto válido e inserido uma quantidade válida. Se a entrada não for válida, exiba uma mensagem de erro apropriada.

```javascript
function adicionar() {
  let produto = document.getElementById("produto").value;
  let quantidade = document.getElementById("quantidade").value;

  if (!produto || quantidade <= 0) {
    alert(
      "Por favor, selecione um produto válido e insira uma quantidade válida."
    );
    return;
  }
}
```

2. Crie um formulário simples com campos de entrada e utilize JavaScript para recuperar os valores digitados nos campos usando a propriedade `value`. Exiba os valores no console e na tela.

```html
<form id="simpleForm">
  <input type="text" id="input1" placeholder="Digite algo" />
  <input type="text" id="input2" placeholder="Digite algo" />
  <button type="button" onclick="exibirValores()">Exibir Valores</button>
</form>
<p id="output"></p>

<script>
  function exibirValores() {
    let valor1 = document.getElementById("input1").value;
    let valor2 = document.getElementById("input2").value;
    console.log(valor1, valor2);
    document.getElementById(
      "output"
    ).textContent = `Valores: ${valor1}, ${valor2}`;
  }
</script>
```

3. Tenha um elemento HTML na página (por exemplo, um parágrafo) e utilize JavaScript para modificar seu conteúdo usando a propriedade `textContent`.

```html
<p id="paragrafo">Texto original</p>
<button type="button" onclick="modificarTexto()">Modificar Texto</button>

<script>
  function modificarTexto() {
    document.getElementById("paragrafo").textContent = "Texto modificado";
  }
</script>
```

4. Faça a soma de duas variáveis numéricas e apresente no console com uma mensagem amigável em Template String.

```javascript
let numero1 = 10;
let numero2 = 20;
let soma = numero1 + numero2;
console.log(`A soma de ${numero1} e ${numero2} é ${soma}`);
```

5. Receba, no mínimo, duas sentenças como uma string e utilize `split()` para quebrá-la em frases menores com base em um ponto e vírgula como delimitador.

```javascript
let sentencas = "Esta é a primeira sentença;Esta é a segunda sentença";
let frases = sentencas.split(";");
console.log(frases);
```

6. Receba uma string contendo números separados por vírgulas. Utilize `split()` para separar os números e exibi-los no console.

```javascript
let numeros = "1,2,3,4,5";
let listaNumeros = numeros.split(",");
console.log(listaNumeros);
```
