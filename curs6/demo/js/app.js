import {add} from './main.js';
import {inm,} from './main.js';
import salutAAAA from './main.js';

let x = 10;
let y = 15;

let suma = add(x,y);
let produs = inm( x,y);

function salut(){
    console.log('Salut');
}

console.log(`Suma numerelor ${x} si ${y} este`, suma);
console.log(`Produsul numerelor ${x} si ${y} este`, produs);
salut();
let sal = salutAAAA('Vasile');
console.log(sal)