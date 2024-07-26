import { somma, sottrazione, moltiplicazione, divisione } from "./operazioni.js";

const calcolatrice = (operazione, a, b) => {
  switch (operazione) {
    case 1:
      return somma(a, b);
    case 2:
      return sottrazione(a, b);
    case 3:
      return moltiplicazione(a, b);
    case 4:
      return divisione(a, b);
    default:
      throw new Error("Operazione non valida riprovare");
  }
};

export default calcolatrice;
