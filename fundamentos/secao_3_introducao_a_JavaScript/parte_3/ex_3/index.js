let animal = {
    nome: 'Jade',
    idade: 10,
    comida: 'petisco',
}

// Array com as chaves
let keys = Object.keys(animal);
console.log(keys);
console.log(keys[1]);

// Array com os valores
let value = Object.values(animal);
console.log(value);

// Array com as entradas
let entries = Object.entries(animal);
console.log(entries);
console.log(entries[2][0]);