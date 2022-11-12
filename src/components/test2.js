function getPendingInvoices(charges) {
  // escribe tu solución aquí
  // Recuerda que en esta prueba debes "retornar" el resultado;

  // 1.- iterate over the Array
  // 2.- verify if its status is failed
  // 3.- if it'sfalse return as an array
  let result = [];
  for (let i = 0; i < charges.length; i++) {
    let valueI = charges[i].invoice_id;
    for (let j = 0; j < charges.length; j++) {
      if (charges[j].invoice_id === valueI && charges[j].status === "failed") {
        result.push(charges[j].invoice_id);
      }
    }
  }
  return result;
}

console.log(
  getPendingInvoices([
    {
      amount: "50USD",
      invoice_id: 1,
      status: "failed",
    },
    {
      amount: "50USD",
      invoice_id: 1,
      status: "success",
    },
    {
      amount: "25USD",
      invoice_id: 2,
      status: "success",
    },
    {
      amount: "50USD",
      invoice_id: 3,
      status: "failed",
    },
    {
      amount: "75USD",
      invoice_id: 3,
      status: "failed",
    },
  ])
);
