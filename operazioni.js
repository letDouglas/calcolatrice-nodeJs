export const somma = (a, b) => a + b;

export const sottrazione = (a, b) => a - b;

export const moltiplicazione = (a, b) => a * b;

export const divisione = (a, b) => {
  if (b === 0) {
    throw new Error("Impossibile dividere per 0");
  }
  return a / b;
};
