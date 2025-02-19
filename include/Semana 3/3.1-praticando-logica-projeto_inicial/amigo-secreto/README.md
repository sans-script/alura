# Desafios

1. **Remoção de Amigo na Lista**  
   Implemente uma funcionalidade no Projeto Amigo Secreto que permita ao usuário clicar em um amigo na lista para removê-lo. Após a remoção, a lista deve ser atualizada visualmente.

   A funcionalidade já está implementada no arquivo `app.js` com a função `removerAmigo(index)`. Ao clicar em um amigo na lista, ele é removido e a lista é atualizada visualmente.

2. **Combinação de Listas**  
   Crie uma variável chamada `minhaLista` contendo os números 1, 2 e 3. Armazene os números 4, 5 e 6 em outra variável separada. Utilize o método `concat()` para unir essas sequências em uma nova lista chamada `novaLista`. Exiba `novaLista` no console.

   ```javascript
   let minhaLista = [1, 2, 3];
   let outraLista = [4, 5, 6];
   let novaLista = minhaLista.concat(outraLista);
   console.log(novaLista);
   ```

3. **Remoção de Elemento**  
   Remova o último elemento de `novaLista`. Exiba `novaLista` após a remoção.

   ```javascript
   novaLista.pop();
   console.log(novaLista);
   ```

4. **Embaralhamento de Lista**  
   Aplique o algoritmo de Fisher-Yates (também conhecido como Knuth Shuffle) para embaralhar os elementos de `novaLista`. Pesquise e adapte o código necessário para realizar o embaralhamento.

   ```javascript
   function embaralha(lista) {
     for (let indice = lista.length; indice; indice--) {
       const indiceAleatorio = Math.floor(Math.random() * indice);
       [lista[indice - 1], lista[indiceAleatorio]] = [
         lista[indiceAleatorio],
         lista[indice - 1],
       ];
     }
   }
   embaralha(novaLista);
   console.log(novaLista);
   ```

5. **Remoção de Duplicatas**  
   Desenvolva uma função chamada `removerDuplicatas` que aceita um array como parâmetro e retorna um novo array sem elementos duplicados. Teste essa função com `novaLista` e exiba o array resultante.

   ```javascript
   function removerDuplicatas(array) {
     return [...new Set(array)];
   }
   let listaSemDuplicatas = removerDuplicatas(novaLista);
   console.log(listaSemDuplicatas);
   ```

## Mais Desafios

1. **Validação de Número**

   ```javascript
   function validarNumero(numero) {
     if (numero > 0) return "positivo";
     if (numero < 0) return "negativo";
     return "zero";
   }
   ```

2. **Verificação de Maioridade**

   ```javascript
   function verificarMaioridade(idade) {
     if (idade >= 18) {
       return "É maior de idade";
     } else {
       return "É menor de idade";
     }
   }
   ```

3. **Validação de String Vazia**

   ```javascript
   function validarStringVazia(str) {
     const isEmpty = str.length === 0;
     console.log(`String vazia: ${isEmpty}`);
     return isEmpty;
   }
   ```

4. **Determinação de Ano Bissexto**

   ```javascript
   function anoBissexto(ano) {
     const isBissexto = (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
     const mensagem = isBissexto ? "Ano bissexto" : "Ano não é bissexto";
     console.log(mensagem);
     return mensagem;
   }
   ```

5. **Cálculo de Média**

   ```javascript
   function calcularMedia(num1, num2) {
     if (typeof num1 !== "number" || typeof num2 !== "number") {
       console.log("Número inválido");
       return "Número inválido";
     }
     const media = (num1 + num2) / 2;
     console.log(`Média: ${media}`);
     return media;
   }
   ```

6. **Tamanho de Array**

   ```javascript
   function tamanhoArray(array) {
     const tamanho = array.length;
     console.log(`Tamanho do array: ${tamanho}`);
     return tamanho;
   }
   ```

7. **Verificação de Elemento em Array**

   ```javascript
   let array = [1, 2, 3, 4, 5];
   const contemElemento = array.includes(3);
   console.log(`Contém o elemento 3: ${contemElemento}`); // true
   ```

8. **Presença de Elemento em Array**

   ```javascript
   function elementoPresente(array, elemento) {
     const presente = array.includes(elemento);
     console.log(`Elemento presente: ${presente}`);
     return presente;
   }
   ```

9. **Verificação de String em Array de Strings**

   ```javascript
   let arrayStrings = ["apple", "banana", "cherry"];
   const contemString = arrayStrings.includes("banana");
   console.log(`Contém a string 'banana': ${contemString}`); // true
   ```

10. **Presença de Objeto em Array de Objetos**

    ```javascript
    function objetoPresente(array, objeto) {
      const presente = array.some(
        (item) => JSON.stringify(item) === JSON.stringify(objeto)
      );
      console.log(`Objeto presente: ${presente}`);
      return presente;
    }
    ```

11. **Soma e Produto de Elementos de Array**
    ```javascript
    function somaEProduto(array) {
      let somaPares = 0;
      let produtoImpares = 1;
      array.forEach((num) => {
        if (num % 2 === 0) {
          somaPares += num;
        } else {
          produtoImpares *= num;
        }
      });
      console.log(
        `Soma dos pares: ${somaPares}, Produto dos ímpares: ${produtoImpares}`
      );
      return { somaPares, produtoImpares };
    }
    ```

## Mais Desafios

1. **Validação de Número**  
   Crie uma função que valide se um número é positivo, negativo ou zero.

   ```javascript
   function validarNumero(num) {
     if (num > 0) {
       return "positivo";
     } else if (num < 0) {
       return "negativo";
     } else {
       return "zero";
     }
   }
   ```

2. **Verificação de Maioridade**  
   Implemente uma função que verifique se uma pessoa é maior de idade.

   ```javascript
   function verificarMaioridade(idade) {
     return idade >= 18;
   }
   ```

3. **Validação de String Vazia**  
   Desenvolva uma função que valide se uma string é vazia ou não.

   ```javascript
   function validarStringVazia(str) {
     return str.length === 0;
   }
   ```

4. **Determinação de Ano Bissexto**  
   Crie uma função que determine se um ano é bissexto.

   ```javascript
   function anoBissexto(ano) {
     return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
   }
   ```

5. **Cálculo de Média com Validação**  
   Implemente uma função que calcule a média de dois números, interrompendo a execução se algum dos números não for válido.

   ```javascript
   function calcularMedia(num1, num2) {
     if (typeof num1 !== "number" || typeof num2 !== "number") {
       return "Números inválidos";
     }
     return (num1 + num2) / 2;
   }
   ```

6. **Tamanho de Array**  
   Desenvolva uma função que receba um array como parâmetro e retorne o seu tamanho.

   ```javascript
   function tamanhoArray(array) {
     return array.length;
   }
   ```

7. **Verificação de Elemento em Array**  
   Crie um array e utilize a função `includes` para verificar se um elemento específico está presente.

   ```javascript
   let array = [1, 2, 3, 4, 5];
   const contemElemento = array.includes(3);
   console.log(`Contém o elemento 3: ${contemElemento}`); // true
   ```

8. **Presença de Elemento em Array**  
   Implemente uma função que receba um array e um elemento, e retorne se o elemento está presente no array.

   ```javascript
   function elementoPresente(array, elemento) {
     return array.includes(elemento);
   }
   ```

9. **Verificação de String em Array de Strings**  
   Crie um array de strings e utilize `includes` para verificar se uma determinada string está presente.

   ```javascript
   let arrayStrings = ["apple", "banana", "cherry"];
   const contemString = arrayStrings.includes("banana");
   console.log(`Contém a string 'banana': ${contemString}`); // true
   ```

10. **Presença de Objeto em Array de Objetos**  
    Desenvolva uma função que receba um array de objetos representando estudantes de um curso e um objeto que representa um estudante procurado. Depois retorne se o objeto está presente no array.

    ```javascript
    function objetoPresente(array, objeto) {
      return array.some(
        (item) => JSON.stringify(item) === JSON.stringify(objeto)
      );
    }
    ```

11. **Soma e Produto de Elementos de Array**  
    Crie uma função que receba um array de números e retorne a soma dos elementos pares e o produto dos elementos ímpares.
    ```javascript
    function somaEProduto(array) {
      let somaPares = 0;
      let produtoImpares = 1;
      array.forEach((num) => {
        if (num % 2 === 0) {
          somaPares += num;
        } else {
          produtoImpares *= num;
        }
      });
      return { somaPares, produtoImpares };
    }
    ```
