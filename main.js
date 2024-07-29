// main.js
import { add, subtract, multiply, divide, power, printResult } from './js/calcolatrice.js';
import {numberToString, numberToFloat } from './js/formatta_numeri.js';
import {compare } from './js/confronta_numeri.js';


const testOperations = () => {
  try {
    printResult(`Addition of 5 and 3: ${add(5, 3)}`);
    printResult(`Subtraction of 10 from 15: ${subtract(15, 10)}`);
    printResult(`Multiplication of 4 and 7: ${multiply(4, 7)}`);
    printResult(`Division of 20 by 4: ${divide(20, 4)}`);
    printResult(`Power of 2 to the exponent 3: ${power(2, 3)}`);

    try {
      printResult(`Division of 10 by 0: ${divide(10, 0)}`);
    } catch (error) {
      printResult(`Error: ${error.message}`);
    }

    try {
      printResult(`Power of 0 to the exponent -2: ${power(0, -2)}`);
    } catch (error) {
      printResult(`Error: ${error.message}`);
    }

    try {
      printResult(`Addition of "five" and 3: ${add("five", 3)}`);
    } catch (error) {
      printResult(`Error: ${error.message}`);
    }

    try {
      printResult(`Multiplication of 5 and Infinity: ${multiply(5, Infinity)}`);
    } catch (error) {
      printResult(`Error: ${error.message}`);
    }

    try {
      printResult(`Power of NaN to the exponent 2: ${power(NaN, 2)}`);
    } catch (error) {
      printResult(`Error: ${error.message}`);
    }

    // Esempi con date e oggetti
    try {
      printResult(`Addition of a date and 10: ${add(new Date(), 10)}`);
    } catch (error) {
      printResult(`Error: ${error.message}`);
    }

    try {
      printResult(`Multiplication of an object and 5: ${multiply({ value: 5 }, 5)}`);
    } catch (error) {
      printResult(`Error: ${error.message}`);
    }

    try {
      printResult(`Power of a date and 2: ${power(new Date(), 2)}`);
    } catch (error) {
      printResult(`Error: ${error.message}`);
    }

    try {
      printResult(`Subtraction of an object from 20: ${subtract(20, { value: 10 })}`);
    } catch (error) {
      printResult(`Error: ${error.message}`);
    }

  } catch (error) {
    printResult(`Unexpected Error: ${error.message}`);
  }
};

testOperations();



const testComparison = () => {
  console.log(`Comparing 10 and 5: ${compare(10, 5)}`);
  console.log(`Comparing 7 and 7: ${compare(7, 7)}`);
  console.log(`Comparing 3 and 8: ${compare(3, 8)}`);
};

const testNumberConversion = () => {
  console.log(`Number 123 as string: ${numberToString(123)}`);
  console.log(`Number 123.456 to two decimal places: ${numberToFloat(123.456)}`);
  console.log(`Number 789 to two decimal places: ${numberToFloat(789)}`);
};

testComparison();
testNumberConversion();