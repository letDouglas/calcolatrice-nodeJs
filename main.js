const somma = (a, b) => {
  if (typeof a === "string" || typeof b === "string") {
    console.error("Errore: uno dei valori è una stringa.");
    return 0;
  }
  return a + b;
};

const moltiplica = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    console.error("Errore: entrambi i valori devono essere numeri.");
    return 0;
  }
  return a * b;
};

console.log(somma(5, 3)); 

console.log(moltiplica(2, 3)); 