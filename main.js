const somma = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b)) {
    console.log("Errore: entrambi i valori devono essere numeri.");
    return 0;
  }
  return a + b;
};

const moltiplica = (...args) => {
  if (args.length < 2) {
    throw new Error("La funzione moltiplica richiede almeno due argomenti");
  }
  return operatoreDiAccumolo(args);
};

const operatoreDiAccumolo = (numeri) => {
  return numeri.reduce((acc, curr) => {
    return acc * curr;
  }, 1);
};

console.log("Test di somma:");
console.log(somma(5, 11));
console.log(somma(0, 0));
console.log(somma(10, "abc"));

console.log("\nTest di moltiplica:");
console.log(moltiplica(2, 3));
console.log(moltiplica(2, 3, 4));

console.log("Testando errore di moltiplicazione");
try {
  console.log(moltiplica(2));
} catch (error) {
  console.error(error.message);
}
