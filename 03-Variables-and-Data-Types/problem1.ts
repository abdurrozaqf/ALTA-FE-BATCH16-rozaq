import promptSync from 'prompt-sync'

const prompt = promptSync();

let firstName = prompt('Enter your first name: ');
let lastName = prompt('Enter your last name: ');
let born = prompt('Enter your born year: ');

let bornYear = parseInt(born);
let age = 2023 - bornYear;
let namaLengkap = firstName + " " + lastName

console.log(`Hello, ${namaLengkap}! You are ${age} years old.`)
