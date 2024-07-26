const somma = (a, b) => {
  if (typeof a === "string" || typeof b === "string") {
    console.error("Errore: uno dei valori è una stringa.");
    return 0;
  }
  return a + b;
};

const moltiplica = (...args) => {
  if (args.length < 2) {
    throw new Error("La funzione moltiplica richiede almeno due argomenti");
  }
  return args.reduce((acc, curr) => acc * curr, 1);
};

console.log(somma(5, 3));

console.log(moltiplica(2, 3));
