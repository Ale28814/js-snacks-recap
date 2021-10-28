// JSnack2

const word1 = prompt('insert word');
const word2 = prompt('insert another word');

if (word1.length > word2.length) {
    document.body.innerHTML = `<h1>${word1}</h1>`;
} else if (word1.length < word2.length) {
    document.body.innerHTML = `<h1>${word2}</h1>`;
} else {
    document.body.innerHTML = `<h1>${word1} e ${word2} are the same</h1>`;
}

// JSnack3

let tot = 0;
for (let i = 1; i <= 5; i++) {
    let num = parseInt(prompt('insert number'));
    tot += num;
}
document.body.innerHTML = `<h1>${tot}</h1>`;

let count = 1;
let tot = 0; 
while (count < 6) {
    let num = parseInt(prompt('insert number'));
    tot += num;
    count++;
}
document.body.innerHTML = `<h1>${tot}</h1>`;

//JSnack4

const go = [];

for (let i = 1; i < 7; i++) {
    let num = parseInt(prompt('insert number'));

    if (num % 2 !== 0) {
        go.push(num);
    }

    document.body.innerHTML = `<h1>${go}</h1>`;
    console.log(num, go);
}