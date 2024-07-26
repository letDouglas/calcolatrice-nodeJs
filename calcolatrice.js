const stampaResultato = (message) => {
  console.log(message);
};

const somma = (a, b) => {
  return a + b;
};

const resta = (a, b) => {
  return a - b;
};

const moltiplicazione = (a, b) => {
  return a * b;
};

const divisione = (a, b) => {
  if (b <= 0) {
    throw new Error("Impossibile dividere per numeri minori o uguali a 0"); // Sarà da gestire!
  } else {
    return a / b;
  }
};
