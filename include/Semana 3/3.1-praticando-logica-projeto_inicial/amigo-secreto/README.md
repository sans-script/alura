# Desafios

1. **Remoção de Amigo na Lista**  
   Implemente uma funcionalidade no Projeto Amigo Secreto que permita ao usuário clicar em um amigo na lista para removê-lo. Após a remoção, a lista deve ser atualizada visualmente.

2. **Combinação de Listas**  
   Crie uma variável chamada `minhaLista` contendo os números 1, 2 e 3. Armazene os números 4, 5 e 6 em outra variável separada. Utilize o método `concat()` para unir essas sequências em uma nova lista chamada `novaLista`. Exiba `novaLista` no console.

3. **Remoção de Elemento**  
   Remova o último elemento de `novaLista`. Exiba `novaLista` após a remoção.

4. **Embaralhamento de Lista**  
   Aplique o algoritmo de Fisher-Yates (também conhecido como Knuth Shuffle) para embaralhar os elementos de `novaLista`. Pesquise e adapte o código necessário para realizar o embaralhamento.

5. **Remoção de Duplicatas**  
   Desenvolva uma função chamada `removerDuplicatas` que aceita um array como parâmetro e retorna um novo array sem elementos duplicados. Teste essa função com `novaLista` e exiba o array resultante.

### Solução

1. **Remoção de Amigo na Lista**  
   A funcionalidade já está implementada no arquivo `app.js` com a função `removerAmigo(index)`. Ao clicar em um amigo na lista, ele é removido e a lista é atualizada visualmente.

2. **Combinação de Listas**

   ```javascript
   let minhaLista = [1, 2, 3];
   let outraLista = [4, 5, 6];
   let novaLista = minhaLista.concat(outraLista);
   console.log(novaLista);
   ```

3. **Remoção de Elemento**

   ```javascript
   novaLista.pop();
   console.log(novaLista);
   ```

4. **Embaralhamento de Lista**

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
   ```javascript
   function removerDuplicatas(array) {
     return [...new Set(array)];
   }
   let listaSemDuplicatas = removerDuplicatas(novaLista);
   console.log(listaSemDuplicatas);
   ```
