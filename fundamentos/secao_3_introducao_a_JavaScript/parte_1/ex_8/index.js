let money = 0;
const championship = 'Jogos Olímpicos';

const win = true;
const howWin = '3 sets a zero';


if (win === true) {
    if (howWin === '3 sets a 1' || howWin === '3 sets a 2') {
        money += 2000;
    } else if (howWin === '3 sets a zero'){
        money += 4000;
    }

    switch (championship) {
        case 'Jogos Olímpicos':
            money += 7000;            
            break;
        case 'Campeonato Mundial':
            money += 1000;
            break;
        case 'Copa do Mundo':
            money += 11000;
            break;
        default:
        console.log('Campeonato não encontrado.');
        break;
    }
  
}

console.log('money: $' + money);
