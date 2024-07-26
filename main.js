//FIXME: va in errore con undefined e date o altri tipi di oggetti.
const somma = (a, b) => {
  // Deve dare errore in caso di:
  // stringhe, date, undefined, oggetti, null
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
  //FIXME: estrarre la funzione di accumulazione per averla non inline anonima
  return args.reduce((acc, curr) => acc * curr, 1);
};

console.log(somma(5, 11));

//FIXME: gestire il throw dell'errore
console.log(moltiplica(2));
