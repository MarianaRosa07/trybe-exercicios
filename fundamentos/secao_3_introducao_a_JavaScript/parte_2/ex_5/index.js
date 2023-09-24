// NOSSO JOGO
const marianaGame = [3, 6, 20, 10, 22, 36];

// JOGO SORTEADO
const megaSenaNumeros = [];

for (let index = 0; index < 6; index++) {
  let number = Math.floor(Math.random() * 60) + 1;

  if (megaSenaNumeros.includes(number)) {
    index -= 1;
  } else {
    megaSenaNumeros.push(number);
  }
}

// CONFERIR O JOGO
let numberOffHits = 0;
let hits = [];

for (let value of megaSenaNumeros) {
  for (let index = 0; index < marianaGame.length; index++) {
    let studentNumber = marianaGame[index];

    if (studentNumber === value) {
      hits.push(studentNumber);
      numberOffHits++;
    }
  }
}

console.log("Jogo da Mariana: ", marianaGame);
console.log("Jogo Sorteado: ", megaSenaNumeros);
console.log("Quatidade de acertos: ", numberOffHits);
console.log("Números iguais: ", hits);
