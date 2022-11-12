function par_checker(symbol_string) {
  //separate the string
  //1.- count the (
  //2.- count the )
  //3.- compare if it's equal

  let array = symbol_string.split("");

  let open = 0;
  let close = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[0] === "(" && array[-1] === ")") {
      if (array[i] === "(") {
        open++;
      }
      if (array[i] === ")") {
        close++;
      }
    } else {
      return false;
    }
  }

  if (open === close) {
    return true;
  } else {
    return false;
  }

  //
  // escribe tu solución aquí
  // Recuerda que en esta prueba debes "retornar" el resultado;
}

console.log(par_checker("(()(()))"));
