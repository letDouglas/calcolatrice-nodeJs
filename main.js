import promptSync from "prompt-sync";
import calcolatrice from "./calcolatrice.js";

const prompt = promptSync();
const numbers = [];

const controller = () => {
  welcome();

  askForNumbers();

  while (true) {
    printaOperazioni();

    const risposta = prompt(
      "Per favore, emetti il numero della operazione da eseguire per favore: "
    );
    const operazione = parseInt(risposta);
    if (operazione === 0) {
      console.log("Uscita dal programma.");
      break;
    }

    try {
      const risultato = calcolatrice(operazione, numbers[0], numbers[1]);
      stampaRisultato(risultato);
      break;
    } catch (error) {
      console.log(error.message);
    }
  }
};

const stampaRisultato = (risultato) => {
  console.log(`Ciao, il risultato è il seguente: ${risultato}`);
};

const askForNumbers = () => {
  do {
    const risposta = prompt("Inserire un numero: ");
    const numero = Number(risposta);
    if (!isNaN(numero)) {
      numbers.push(numero);
    } else {
      console.log("Inserire un valore di tipo numero");
    }
  } while (numbers.length < 2);
};

const printaOperazioni = () => {
  console.log("1 - Somma ");
  console.log("2 - Sottrazione ");
  console.log("3 - Moltiplicazione");
  console.log("4 - Divisione");
  console.log("0 - Esci");
};

const welcome = () => {
  console.log("Ciao, mi chiamo Felix e sono una semplice calcolatrice");
};

controller();
