import promptSync from 'prompt-sync';

const prompt = promptSync();

let number = prompt('Input Number : ')
let unit = prompt('Unit : ')

let stringToNumber = parseInt(number)

let Celsius = stringToNumber;
let Fahrenheit = stringToNumber;
let Kelvin = stringToNumber;

const CtoF = Celsius * 9 / 5 + 32
const CtoK = Celsius + 273.15
const FtoC = (Fahrenheit - 32) * 5 / 9
const FtoK = (Fahrenheit + 459.67) * 5 / 9
const KtoC = Kelvin - 273.15
const KtoF = Kelvin * 9 / 5 - 459.67

if (unit === "Celsius" || unit === "Celsius") {

  console.log(`${number} ${unit} is equal to ${parseFloat(CtoF.toFixed(2))} Fahrenheit and ${parseFloat(CtoK.toFixed(2))} Kelvin`);

} else if (unit === "Fahrenheit" || unit === "fahrenheit") {

  console.log(`${number} ${unit} is equal to ${parseFloat(FtoC.toFixed(2))} Celcius and ${parseFloat(FtoK.toFixed(2))} Kelvin`);

} else if (unit === "Kelvin" || unit === "kelvin") {

  console.log(`${number} ${unit} is equal to ${parseFloat(KtoC.toFixed(2))} Celcius and ${parseFloat(KtoF.toFixed(2))} Fahrenheit`);

} else {

  console.log('Nama unit tidak sesuai atau salah ketik');

}