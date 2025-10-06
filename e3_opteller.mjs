// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

// let getal1 = parseFloat(await userInput.question("Wat is je getal1 ?"));
// let getal2 = parseFloat(await userInput.question("Wat is je getal2 ?"));
// let getal1 = 5;
// let getal2 = "3";

// let som = getal1 + getal2;
// let verschil = getal1 - getal2;
// let product = getal1 * getal2;
// let deling = getal1 / getal2;

// console.log("de som is "+ product);

// M2:leeftijdberekenaar

// let geboorteJaar = parseFloat(await userInput.question("What is je geboorte jaar ? "));
// let toekomstJaar = parseFloat(await userInput.question("What is het toekomstige jaar ? "));

// console.log("in " + toekomstJaar + " zal ik " + (toekomstJaar - geboorteJaar) + " of " + (toekomstJaar - geboorteJaar +1) + " jaar oud zijn." );


// H1: aantal seconden

let aantaldagen = parseFloat(await userInput.question("Geef het aantal dagen : "));
let aantalUren = parseFloat(await userInput.question("Geef het aantal uren : "));
let aantalMinuten = parseFloat(await userInput.question("Geef het aantal minuten : "));
let aantalSeconden = parseFloat(await userInput.question("Geef het aantal seconden : "));

console.log("Aantal seconden : " + ((aantaldagen*24*60*60) + (aantalUren*60*60) + (aantalMinuten*60) + (aantalSeconden)));

process.exit();
