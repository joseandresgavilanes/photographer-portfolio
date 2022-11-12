function countWords(text) {
  // escribe tu solución aquí
  // Recuerda que en esta prueba debes "retornar" el resultado
  // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable counter
  // return counter;
  let counter = {};
  //1.- separate the words
  //2.- count if a word is repeated by iterating the whole phrase
  //3.- store the values in a obj
  //4.- return the var where we stored the obj
  let array = text.split(" ");
  for (let i = 0; i < array.length; i++) {
    let valueI = array[i];
    counter[valueI] = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[j] === array[i]) {
        counter[valueI]++;
      }
    }
  }
  console.log(counter);
}

countWords("hola que tal tal tal");
