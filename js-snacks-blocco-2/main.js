//JSnack2

let userNumber = parseInt (prompt('inserisci un numero'));

for (let i = 0; i < 1; i++) {
    if (userNumber % 2 == 0) {
        console.log(userNumber);
    } else if (userNumber % 2 == 1) {
        console.log(userNumber+1);
    }
}

//JSnack3

const names = ['Lewis', 'Max', 'Charles'];
const surnames = ['Hamilton', 'Verstappen', 'Leclerc'];

const randomName = Math.floor(Math.random() * (names.length));
console.log(randomName);

//JSnacks4
/*
const numInteri [8, 4, 9, 3, 82, 15, 56, 7];
let somma = 0;
*/



//JSnacks5
const array_one = [1, 2, 3, 4, 5, 6, 7];
const array_two =[1, 2, 3, 4];

while(array_one.length != array_two.length) {
    if(array_one.length < array_two.length) {
        array_one.push(1);
    }
}

console.log(array_one);
console.log(array_two);